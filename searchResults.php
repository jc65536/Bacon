<!DOCTYPE html>
<html>

<head>
	<title>Results</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="jquery-3.3.1.min.js"></script>
</head>

<body>
	<div id="headerPanel">
		<div id="navBar">
			<table>
				<tr>
					<td style="padding: 20px">
						<button id="openMenuButton" class="buttons"></button>
					</td>
					<td>
						<h2 id="pageTitle">Title</h2>
					</td>
				</tr>
			</table>
		</div>
		<div id="headerContent">
			<h1 id="headerTitle">Kevin Bacon Number Searcher</h1>
			<form id="form" method="get">
				<table id="searchBar">
					<tr>
						<td style="width: 100%">
							<input name="actor" id="searchBox" placeholder="Type the name of an actor or actress" autocomplete="off" />
						</td>
						<td>
							<button id="searchButton"></button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>
	<div id="contentWrapper">
	<div id="contentPanel">
		<h2><?php $actor = htmlspecialchars($_GET["actor"]); echo  $actor; ?></h2>
	</div>
	</div>
	<div id="shade"></div>
	<div id="menuPanel">
		<div id="menuPanelContents">
			<table>
				<tr>
					<td style="padding: 20px">
						<button id="closeMenuButton" class="buttons"></button>
					</td>
					<td>
						<h2>Menu</h2>
					</td>
				</tr>
			</table>
			<ul id="menuList">
				<a href="index.html">
					<li class="menuItems">
						<table>
							<tr>
								<td class="iconCells">
									<img class="menuIcon" src="baseline-home-24px.svg" />
								</td>
								<td>Home</td>
							</tr>
						</table>
					</li>
				</a>
				<a href="https://en.wikipedia.org/wiki/Kevin_Bacon">
					<li class="menuItems">
						<table>
							<tr>
								<td class="iconCells">
									<img class="menuIcon" src="baseline-open_in_new-24px.svg" />
								</td>
								<td>More on Kevin Bacon</td>
							</tr>
						</table>
					</li>
				</a>
				<a href="about.html">
					<li class="menuItems">
						<table>
							<tr>
								<td class="iconCells">
									<img class="menuIcon" src="baseline-help-24px.svg" />
								</td>
								<td>About</td>
							</tr>
						</table>
					</li>
				</a>
				<a href="https://github.com/jc65536/Bacon">
					<li class="menuItems">
						<table>
							<tr>
								<td class="iconCells">
									<img class="menuIcon" src="baseline-code-24px.svg" />
								</td>
								<td>Source code</td>
							</tr>
						</table>
					</li>
				</a>
			</ul>
		</div>
	</div>
	<script src="style.js"></script>
	<script src="searchBar.js"></script>
</body>


</html>