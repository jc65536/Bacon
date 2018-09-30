<!DOCTYPE html>
<html>

<head>
	<title>Results</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="jquery-3.3.1.min.js"></script>
	<script src="util.js"></script>
</head>

<body>
	<div id="headerPanel">
		<?php readfile("navBar.html") ?>
		<div id="headerContent">
			<h1 id="headerTitle">Kevin Bacon Number Searcher</h1>
			<?php readfile("searchBar.html") ?>
		</div>
	</div>
	<div id="contentWrapper">
	<div id="contentPanel">
		<h2>
			<?php
				$actor = ucwords(htmlspecialchars($_GET["actor"]));
				echo  $actor;
			?>
		</h2>
	</div>
	</div>
	<?php readfile("menu.html") ?>
	<script src="main.js"></script>
</body>


</html>