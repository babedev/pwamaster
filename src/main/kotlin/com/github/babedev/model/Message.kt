package com.github.babedev.model

import kotlin.js.Date

data class Message(val device: String = "",
                   val detail: String = "",
                   val date: Double = Date().getTime())