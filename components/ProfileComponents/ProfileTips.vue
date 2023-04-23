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
					"ahaahahdqsddqsqsdqdshaha",
					"bbbbbbbqdqdsqdsqdsqsdqsdbababa",
					"chhchqdqdssqdqdsqdsqdsqdschchc",
				],
				index: 0,
			};
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
		},
	};
</script>
