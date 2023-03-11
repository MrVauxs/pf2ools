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
    The Good ol' 404 Error, otherwise known as "Page Not Found"
    <p />
    Redirecting you to the homepage in
    <b>{$timer < 0 ? 0 : $timer < 1 ? $timer.toFixed(2) : Math.floor($timer)}</b> seconds.
    <p />
    <progress value={$timer / original} />
</div>

<style>
    progress {
        width: 50%;
        height: 2em;
    }
</style>
