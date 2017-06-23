@file:Suppress("UnsafeCastFromDynamic")

package com.github.babedev

import com.github.babedev.model.Message
import jquery.jq
import kotlin.browser.document

var deviceId = ""
val database = js("firebase.database()")!!
val messages = arrayListOf<Message>()

fun main(args: Array<String>) {

    js("new Fingerprint2()").get(fun(result: String, _: Any) {
        deviceId = result
        render()
    })

    listen()
}

fun render() {
    app {
        div("messages", className = "flex: 1 0 auto") {

        }

        div(className = "row") {
            editText("messageInput").setAttribute("style", "flex: 1")

            button("Send", {
                val messageInput = jq("#messageInput").`val`()!!

                Message(deviceId, messageInput).apply {
                    database.ref("/messages/$date").set(this)
                }
            })
        }.setAttribute("style", "padding: 10px; background: #FFF")
    }.setAttribute("style", "padding: 10px; background: #64B5F6")
}

fun listen() {
    database.ref("/messages")
            .on("value", fun(snapshot: dynamic) {
                messages.clear()

                snapshot.forEach(fun(child: dynamic) {
                    messages.add(child.`val()`)
                })

                renderMessages()
            })
}

fun renderMessages() {
    empty("messages")

    div(id = "messages") {
        messages.forEach { m ->
            if (m.device == deviceId) {
                div(className = "level-right") {
                    div(className = "msg") {
                        text(m.detail)
                    }.setAttribute("style", "display: inline-block; margin-right: 10px; margin-bottom: 10px")
                }.setAttribute("align", "right")
            } else {
                div(className = "level-left") {
                    div(className = "msg") {
                        text(m.detail)
                    }.setAttribute("style", "display: inline-block; margin-right: 10px; margin-bottom: 10px")
                }
            }
        }
    }

}