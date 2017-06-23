package com.github.babedev

import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.appendText

fun app(id: String = "app", child: Child.() -> Unit): Element {
    val app = document.getElementById(id)!!
    Child(app).apply(child)
    return app
}

fun div(id: String, child: Child.() -> Unit): Element {
    val app = document.getElementById(id)!!
    Child(app).apply(child)
    return app
}

fun empty(id: String) {
    val div = document.getElementById(id)!!
    div.innerHTML = ""
}

fun Element.src(value: String = "") {
    setAttribute("src", value)
}

fun Element.width(value: String = "") {
    setAttribute("width", value)
}

fun Element.height(value: String = "") {
    setAttribute("height", value)
}

class Child(val parent: Element) {
    fun div(id: String = "", className: String = "", width: Int = 0, child: Child.() -> Unit): Element {
        val div = element("div")

        if (className.isNotBlank()) div.addClass(className)
        if (id.isNotBlank()) div.id = id
        if (width != 0) div.setAttribute("width", "${width}px")

        parent.appendChild(div)

        Child(div).apply(child)

        return div
    }

    fun strong(child: Child.() -> Unit) {
        val strong = element("strong")
        parent.appendChild(strong)
        Child(strong).apply(child)
    }

    fun a(id: String = "", className: String = "", onclick: () -> Unit, child: Child.() -> Unit) {
        val a = element("a")

        if (id.isNotBlank()) a.id = id
        if (className.isNotBlank()) a.addClass(className)

        a.addEventListener("click", {
            onclick()
        })

        parent.appendChild(a)
        Child(a).apply(child)
    }

    fun img(id: String = "", width: Int = 300, height: Int = 300, block: Element.() -> Unit = {}) {
        val img = element("img").apply {
            this.id = id
            setAttribute("width", "${width}px")
            setAttribute("height", "${height}px")
            block()
        }

        parent.appendChild(img)
    }

    fun span(child: Child.() -> Unit) {
        val span = element("span")

        parent.appendChild(span)
        Child(span).apply(child)
    }

    fun text(text: String = "") {
        parent.appendChild(document.createTextNode(text))
    }

    fun br() {
        parent.appendChild(element("br"))
    }

    fun ul(child: Child.() -> Unit) {
        val ul = element("ul")
        parent.appendChild(ul)
        Child(ul).apply(child)
    }

    fun li(child: Child.() -> Unit): Element {
        val li = element("li")
        parent.appendChild(li)
        Child(li).apply(child)
        return li
    }

    fun editText(id: String = ""): Element {
        val editText = element("input")

        if (id.isNotBlank()) editText.id = id

        editText.addClass("input")
        editText.setAttribute("type", "text")
        parent.appendChild(editText)

        return editText
    }

    fun button(text: String, onclick: () -> Unit) {
        val button = element("button").appendText(text)
        button.className = "button is-info"

        button.addEventListener("click", {
            onclick()
        })

        parent.appendChild(button)
    }

    private fun element(name: String): Element {
        return document.createElement(name)
    }
}