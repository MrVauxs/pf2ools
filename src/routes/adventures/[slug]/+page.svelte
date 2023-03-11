<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<div class="container">
    <h1>{data.title ?? "No data"}</h1>
    <div>{@html data.content ?? "No data"}</div>
</div>
