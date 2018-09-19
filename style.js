function id(id) {
    return document.getElementById(id);
}

id("searchBox").onfocus = function() {
    id("inputPane").classList.add("floating");
}

id("searchBox").onblur = function() {
    id("inputPane").classList.remove("floating");
}