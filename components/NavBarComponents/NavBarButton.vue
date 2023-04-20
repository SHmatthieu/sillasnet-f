<template>
	<button
		:style="{
			margin: '5px',
			padding: '5px',
			borderRadius: '5px',
			font: 'Inter',
			color: color,
			backgroundColor: backgroundColor,
		}"
		@mouseover="mouseover"
		@mouseleave="mouseleave"
	>
		<NuxtLink :to="url">{{ label }}</NuxtLink>
	</button>
</template>

<script lang="ts">
	const DEFAULT_COLOR = "#373837";
	const MOUSEOVER_COLOR = "black";
	const DEFAULT_BACKGROUNDCOLOR = "white";
	const MOUSEOVER_BACKGROUNDCOLOR = "#fcf0ed";
	export default {
		data() {
			return {
				color: DEFAULT_COLOR,
				backgroundColor: DEFAULT_BACKGROUNDCOLOR,
			};
		},
		props: {
			label: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
		methods: {
			mouseover() {
				this.color = MOUSEOVER_COLOR;
				this.backgroundColor = MOUSEOVER_BACKGROUNDCOLOR;
			},
			mouseleave() {
				this.color = DEFAULT_COLOR;
				this.backgroundColor = DEFAULT_BACKGROUNDCOLOR;
			},
		},
	};
</script>
