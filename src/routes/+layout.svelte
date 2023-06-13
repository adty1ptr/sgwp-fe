<script>
    import Header from '$lib/components/Header.svelte';
import './app.css';
</script>

<svelte:head>
    <title>SGWP Migrant Worker</title>
</svelte:head>
<div class="bg-black h-full">
    <Header />
    <div class="max-w-full overflow-auto m-4">
        <slot />
    </div>
</div>