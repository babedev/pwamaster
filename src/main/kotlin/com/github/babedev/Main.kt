@file:Suppress("UnsafeCastFromDynamic")

package com.github.babedev

import com.github.babedev.model.Message

var deviceId = ""
val database = js("firebase.database()")

fun main(args: Array<String>) {

    js("new Fingerprint2()").get(fun(result: String, _: Any) {
        deviceId = result
        render()
    })
}

fun render() {
    app {
        text(deviceId)

        button("Send", {
            val message = Message(deviceId, "test")
            database.ref("/messages/${message.date}").set(message)
        })
    }
}