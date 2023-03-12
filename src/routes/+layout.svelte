<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import "bootstrap/dist/css/bootstrap.min.css";
	import "@fortawesome/fontawesome-free/css/all.min.css";
	onMount(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js");
	});

	const header = `
    <h1 class="title">PF<span class="tools">2ools</span>.</h1>
    <p class="subtitle tools">A suite of tools for 2nd Edition Pathfinder players and Game Masters.</p>
  `;

	let search = "";
	let screenWidth = 0;

	let pageID;
	$: pageID = $page.route.id;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<header>
	<div class="container d-none d-md-block">
		{@html header}
	</div>
</header>

<nav class="navbar navbar-expand-md nav-pills">
	<div class="container-md">
		<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
			<span class="navbar-toggler-icon" />
		</button>
		<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
			<div class="offcanvas-header">
				<header>
					{@html header}
				</header>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
			</div>
			<div class="offcanvas-body">
				<ul class="navbar-nav flex-grow-1 pe-3">
					<li class="nav-item">
						<a class="nav-link" id="/" aria-current="page" href="/" class:active={pageID === "/"}>Home</a>
					</li>
					<!-- Rules Tab -->
					<li class="nav-item dropdown">
						<span
							class:active={["/quickreference", "/variantrules", "/tables"].includes(pageID)}
							class="nav-link dropdown-toggle"
							id="reference"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Rules
						</span>
						<ul class="dropdown-menu">
							<li>
								<a class="dropdown-item" class:active={pageID === "/quickreference"} href="/quickreference">Quick Reference</a>
							</li>
							<li>
								<a class="dropdown-item" class:active={pageID === "/variantrules"} href="/variantrules">Variant Rules & Subsystems</a>
							</li>
							<li><a class="dropdown-item" class:active={pageID === "/tables"} href="/tables">Tables</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<a class="dropdown-item" class:active={pageID?.includes("/books")} href="/books">Books &raquo;</a>
								<ul class="dropdown-menu dropdown-submenu" class:left={screenWidth <= 992}>
									<a class="dropdown-item" href="/books">View All/Homebrew</a>
									<li><hr class="dropdown-divider" /></li>
									<li role="presentation" class="xs">Core</li>
									<li><a class="dropdown-item" href="/books/crb">Core Rulebook</a></li>
									<li><hr class="dropdown-divider" /></li>
									<li role="presentation" class="xs">Lost Omens</li>
									<li><a class="dropdown-item" href="/books/lowg">Lost Omens: World Guide</a></li>
									<li><a class="dropdown-item disabled" href="/books/loil">Lost Omens: Impossible Lands</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<!-- Player Tab -->
					<li class="nav-item dropdown">
						<span
							class:active={["/ancestries", "/backgrounds", "/classes", "/feats", "/archetypes", "/companionsfamiliars", "/optionalFeatures"].includes(pageID)}
							class="nav-link dropdown-toggle"
							id="reference"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Player
						</span>
						<ul class="dropdown-menu">
							<li>
								<a class="dropdown-item" class:active={pageID === "/ancestries"} href="/ancestries">Ancestries</a>
							</li>
							<li>
								<a class="dropdown-item" class:active={pageID === "/backgrounds"} href="/backgrounds">Backgrounds</a>
							</li>
							<li><a class="dropdown-item" class:active={pageID === "/classes"} href="/classes">Classes</a></li>
							<li><a class="dropdown-item" class:active={pageID === "/feats"} href="/feats">Feats</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<a class="dropdown-item" class:active={pageID === "/archetypes"} href="/archetypes">Archetypes</a>
							</li>
							<li>
								<a class="dropdown-item" class:active={pageID === "/companionsfamiliars"} href="/companionsfamiliars">Companions & Familiars</a>
							</li>
							<li>
								<a class="dropdown-item" class:active={pageID === "/optionalFeatures"} href="/optionalFeatures">Optional Features</a>
							</li>
						</ul>
					</li>
					<!-- Gamemaster Tab -->
					<li class="nav-item dropdown">
						<span
							class:active={["/gmscreen", "/events", "/hazards", "/relicsgifts", "/adventures"].includes(pageID)}
							class="nav-link dropdown-toggle"
							id="reference"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Gamemaster
						</span>
						<ul class="dropdown-menu">
							<li>
								<a class="dropdown-item" class:active={pageID === "/gmscreen"} href="/gmscreen">GM Screen</a>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<a class="dropdown-item" class:active={pageID?.includes("/adventures")} href="/adventures">Adventures &raquo;</a>
								<ul class="dropdown-menu dropdown-submenu" class:left={screenWidth <= 992}>
									<a class="dropdown-item" href="/books">View All/Homebrew</a>
									<li><hr class="dropdown-divider" /></li>
									<li><a class="dropdown-item disabled" href="/adventures/sotc">Strength of Thousand Contributors</a></li>
								</ul>
							</li>
							<li><a class="dropdown-item" class:active={pageID === "/events"} href="/events">Events</a></li>
							<li><a class="dropdown-item" class:active={pageID === "/hazards"} href="/hazards">Hazards</a></li>
							<li><a class="dropdown-item" class:active={pageID === "/relicsgifts"} href="/relicsgifts">Relic Gifts</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<form role="search">
			<div class="input-group d-flex d-md-flex">
				<input class="form-control" type="search" placeholder="Search everywhere..." aria-label="Search" bind:value={search} />
				<button class="input-group-text" type="submit"><i class="fa-solid fa-magnifying-glass" /></button>
			</div>
		</form>
	</div>
</nav>

<slot />

<!-- On the topic of :global()'s https://stackoverflow.com/a/56611837/12227966 -->
<style>
	header {
		box-shadow: 0 1px 8px rgb(0 0 0 / 48%);
		background-color: #6f1c17;
	}
	header + .navbar {
		padding: 0;
	}
	header :global(.title) {
		margin-right: 0.2em;
		display: inline;
		color: #ededed;
	}
	header :global(.subtitle) {
		display: inline;
		font-style: italic;
	}
	header :global(.tools) {
		color: #dac485;
	}
	.offcanvas-header {
		background-color: #6f1c17;
		padding: 0 0 0 0;
	}
	.offcanvas-header header {
		padding: 1rem 1rem 1rem 1rem;
	}
	.btn-close {
		margin: 0.5em;
		padding: revert;
		color: #dac485;
	}
	.nav-item {
		user-select: none;
	}

	.navbar-nav .nav-link {
		border-radius: 0 0 var(--bs-nav-pills-border-radius) var(--bs-nav-pills-border-radius);
		padding: 8px 16px;
	}

	.dropdown-menu li {
		position: relative;
	}
	.dropdown-menu .dropdown-submenu {
		display: none;
		z-index: 1000;
		position: absolute;
		left: 100%;
		top: -7px;
	}
	.dropdown-menu .dropdown-submenu.left {
		top: 2.5em;
		right: auto;
		left: auto;
	}
	.dropdown-menu > li:hover > .dropdown-submenu {
		display: block;
	}
</style>
