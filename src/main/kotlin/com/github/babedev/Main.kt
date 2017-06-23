@file:Suppress("UnsafeCastFromDynamic")

package com.github.babedev

import com.github.babedev.model.Message

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
        text(deviceId)

        div("messages") {}

        button("Send", {
            Message(deviceId, "test").apply {
                database.ref("/messages/$date").set(this)
            }
        })
    }
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
            div(width = 10) {
                text(m.detail)
            }
        }
    }

}