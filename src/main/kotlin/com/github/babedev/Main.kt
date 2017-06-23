package com.github.babedev

import org.w3c.dom.Element
import kotlin.browser.document

var twitterTab: Element = document.createElement("div")
var facebookTab: Element = document.createElement("div")
var igTab: Element = document.createElement("div")

var content: Element = document.createElement("div")

fun main(args: Array<String>) {

    app {
        div(className = "tabs is-centered is-medium") {
            ul {
                twitterTab = li {
                    a(onclick = { changeTab(Tab.TWTTR) }) { text("Twitter") }
                }

                facebookTab = li {
                    a(onclick = { changeTab(Tab.FB) }) { text("Facebook") }
                }

                igTab = li {
                    a(onclick = { changeTab(Tab.IG) }) { text("Instagram") }
                }
            }
        }

        content = div {

        }
    }
}

fun changeTab(tab: Tab) {
    twitterTab.className = ""
    facebookTab.className = ""
    igTab.className = ""

    when (tab) {
        Tab.TWTTR -> {
            twitterTab.className = "is-active"
            renderTwitter()
        }

        Tab.FB -> {
            facebookTab.className = "is-active"
            renderFB()
        }

        Tab.IG -> {
            igTab.className = "is-active"
            renderIG()
        }
    }
}

fun renderTwitter() {
    content
}

fun renderFB() {

}

fun renderIG() {

}