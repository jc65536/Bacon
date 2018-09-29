<!DOCTYPE html>
<html>

<head>
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="jquery-3.3.1.min.js"></script>
    <script src="util.js"></script>
</head>

<body>
    <div id="splashPanel">
        <?php readfile("navBar.html") ?>
        <div id="splashContent">
            <h1 id="headerTitle">Kevin Bacon Number Searcher</h1>
            <?php readFile("searchBar.html") ?>
        </div>
    </div>
    <?php readfile("menu.html") ?>
    <script src="main.js"></script>
</body>


</html>