<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="container">
	<main>
		{@render children()}
	</main>
</div>

<style>
	main {
		min-height: calc(100vh - 4rem);
		padding: 2rem 0;
	}
</style>
