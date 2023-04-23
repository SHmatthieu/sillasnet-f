<template>
	<div style="background-color: #fcf0ed; border-radius: 5px; margin: 5px">
		<p>{{ msg }}</p>
	</div>
</template>

<script lang="ts">
	export default {
		props: {
			msg: {
				type: String,
				required: true,
			},
		},
	};
</script>
