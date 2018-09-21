function id(id) {
    return document.getElementById(id);
}

id("searchBox").onfocus = function() {
    id("searchBar").classList.remove("resting");
    id("searchBar").classList.add("floating");
    id("searchButton").style.backgroundImage = "url('baseline-search-24px_blue.svg')";
}

id("searchBox").onblur = function() {
    id("searchBar").classList.remove("floating");
    id("searchBar").classList.add("resting");
    id("searchButton").style.backgroundImage = "url('baseline-search-24px_black.svg')";
}