/*
var menuWidth = Math.max(200, document.body.clientWidth * 0.2);
var menuExpansion = document.createElement("style");
menuExpansion.type = "text/css";
var keyFrames = "\
@keyframes expand {\
    from {\
        width: 0;\
    }\
    to {\
        width: " + menuWidth + "px;\
    }\
}\
@keyframes shrink {\
    from {\
        width: " + menuWidth + "px;\
    }\
    to {\
        width: 0;\
    }\
}\
"
menuExpansion.innerHTML = keyFrames;
document.getElementsByTagName('head')[0].appendChild(menuExpansion);
console.log(menuWidth);
*/

function id(id) {
    return document.getElementById(id);
}

id("pageTitle").innerHTML = document.getElementsByTagName("title")[0].innerHTML;

id("searchBox").onfocus = function() {
    id("searchBar").classList.remove("resting");
    id("searchBar").classList.add("floating");
}

id("searchBox").onblur = function() {
    id("searchBar").classList.remove("floating");
    id("searchBar").classList.add("resting");
}

var buttons = document.getElementsByTagName("button");
for (var a = 0; a < buttons.length; a++) {
    buttons[a].onmouseenter = function() {
        this.classList.remove("unfilling");
        this.classList.add("filling");
    }
    buttons[a].onmouseleave = function() {
        this.classList.remove("filling");
        this.classList.add("unfilling");
    }
}

var menuItems = document.getElementsByClassName("menuItems");
for (var a = 0; a < menuItems.length; a++) {
    menuItems[a].onmouseenter = function() {
        this.classList.remove("unfilling");
        this.classList.add("filling");
    }
    menuItems[a].onmouseleave = function() {
        this.classList.remove("filling");
        this.classList.add("unfilling");
    }
}

id("openMenuButton").onclick = function() {
    id("menuPanel").classList.remove("shrinking");
    id("menuPanel").classList.add("expanding");
    id("menuPanelContents").style.display = "block";
    id("shade").style.display="block";
    id("shade").classList.remove("unfilling");
    id("shade").classList.add("filling");
}

function hideMenu() {
    id("menuPanel").classList.remove("expanding");
    id("menuPanel").classList.add("shrinking");
    id("menuPanelContents").style.display = "none";
    id("shade").classList.remove("filling");
    id("shade").classList.add("unfilling");
    id("shade").style.display="none";
}

id("closeMenuButton").onclick = hideMenu;
id("shade").onclick = hideMenu;