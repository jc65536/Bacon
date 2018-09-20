function id(id) {
    return document.getElementById(id);
}

id("searchBox").onfocus = function() {
    id("searchBar").classList.remove("resting");
    id("searchBar").classList.add("floating");
}

id("searchBox").onblur = function() {
    id("searchBar").classList.remove("floating");
    id("searchBar").classList.add("resting");
}

var buttons = document.getElementsByClassName("buttons");
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

id("menuButton").onfocus = function() {
    id("menuPanel").classList.remove("shrinking");
    id("menuPanel").classList.add("expanding");
    id("menuPanelContents").style.display = "block";
}

id("menuButton").onblur = function() {
    id("menuPanel").classList.remove("expanding");
    id("menuPanel").classList.add("shrinking");
    id("menuPanelContents").style.display = "none";
}