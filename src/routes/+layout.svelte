<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="container">
	<main>
		{@render children()}
	</main>
</div>
