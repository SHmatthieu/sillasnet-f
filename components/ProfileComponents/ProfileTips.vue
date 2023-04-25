<template>
	<div class="flex flex-row" style="margin-top: 10px">
		<div
			class="basis-1/6 hover:bg-gradient-to-r from-orange-500 to-orange-100 rounded"
			style="margin-right: 5px"
			@click="previous"
		></div>

		<div class="basis-2/3 flex flex-col">
			<div class="basis-3/4">{{ tips[index] }}</div>
			<div class="basis-1/4 text-center font-bold">
				{{ index + 1 }} / {{ tips.length }}
			</div>
		</div>
		<div
			class="basis-1/6 hover:bg-gradient-to-r from-orange-100 to-orange-500 rounded"
			style="margin-left: 5px"
			@click="next"
		></div>
	</div>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				tips: [
					"Try to reduce your threat score to zero ! contact us if you need help.",
				],
				index: 0,
			};
		},
		mounted() {
			this.loadTips();
		},
		methods: {
			next() {
				this.index++;
				if (this.index >= this.tips.length) this.index = 0;
			},
			previous() {
				this.index--;
				if (this.index < 0) this.index = this.tips.length - 1;
			},
			async loadTips() {
				const response = await $jsonPlaceholder(
					useAppConfig().serverAddress + "/api/tips",
					{
						method: "GET",
					}
				);
				response.Tips.forEach((tip: string) => {
					this.tips.push(tip);
				});
			},
		},
	};
</script>
