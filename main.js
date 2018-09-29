if (id("contentWrapper") != null) {
    id("contentWrapper").style.paddingTop = id("headerPanel").clientHeight + 50 + "px";
    id("contentWrapper").style.paddingBottom = "50px";
}

id("pageTitle").innerHTML = document.getElementsByTagName("title")[0].innerHTML;

var buttons = document.getElementsByTagName("button");
for (var a = 0; a < buttons.length; a++) {
    buttons[a].onmouseenter = function () {
        this.classList.remove("unfilling");
        this.classList.add("filling");
    }
    buttons[a].onmouseleave = function () {
        this.classList.remove("filling");
        this.classList.add("unfilling");
    }
}