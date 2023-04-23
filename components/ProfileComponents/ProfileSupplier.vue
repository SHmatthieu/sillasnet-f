<template>
	<p>
		{{ id }} : <b>{{ name }}</b>
	</p>
</template>

<script lang="ts">
	export default {
		props: {
			id: String,
			name: String,
		},
	};
</script>
