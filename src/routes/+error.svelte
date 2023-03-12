<script>
	import { goto } from "$app/navigation";
	import { tweened } from "svelte/motion";

	let original = 5;
	let timer = tweened(original, { duration: 1000 });

	setInterval(() => {
		if ($timer > 0) $timer--;
	}, 1000);

	$: if ($timer <= 0) setTimeout(() => goto("/"), 500);
</script>

<svelte:head>
	<title>PF404ools</title>
</svelte:head>

<div class="container text-center">
	The Good ol' <b class="fourofour">404</b> Error, otherwise known as <b class="fourofour">"File Not Found"</b>
	<p />
	You tried looking somewhere, but you only found the void.
	<p />
	So we are sending you back whence you came from. Redirecting you to the homepage in <b>{$timer < 0 ? 0 : $timer < 1 ? $timer.toFixed(2) : $timer < 2 ? $timer.toFixed(1) : Math.floor($timer)}</b>
	seconds.
	<p />
	<progress value={$timer / original} />
</div>

<style>
	.fourofour {
		color: red;
		font-size: 2em;
	}
	progress {
		width: 50%;
		height: 2em;
	}
</style>
