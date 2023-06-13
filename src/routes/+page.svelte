<script lang="ts">
	import type { MigrantWorker } from "$lib/types";

    export let data;
    let { migrants } = data;
</script>

<ul>
    {#each migrants as item, i}
    <li class="my-10">{JSON.stringify(item)}</li>
    {/each}
</ul>