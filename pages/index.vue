<template>
	<Head>
		<Title> Sillas Net </Title>
	</Head>
	<div class="md:mx-auto md:max-w-md" style="margin-top: 20px">
		<h1 class="text-2xl font-bold">Welcome to the Sillas net website</h1>
		<p>
			Learn more about the project in the
			<a href="/about" class="underline">about</a> section !
		</p>
	</div>
</template>
<script lang="js">
	export default {
		mounted() {
			this.$bus.$emit("removeProfile");
		}
	};
</script>
