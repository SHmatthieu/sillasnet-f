<template>
	<p>
		{{ id }} : <b>{{ name }}</b> ({{ version }})
	</p>
</template>

<script lang="ts">
	export default {
		props: {
			id: String,
			name: String,
			version: String,
		},
	};
</script>
