<template>
	<a
		:href="url"
		target="_blank"
		style="margin: 10px"
		class="flex justify-center items-center"
	>
		<img :src="icon" alt="link icon" style="width: 25px; height: 25px" />
	</a>
</template>

<script lang="ts">
	export default {
		props: {
			icon: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	};
</script>
