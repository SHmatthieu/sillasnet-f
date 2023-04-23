<template>
	<div class="flex flex-row">
		<div
			class="text-5xl font-bold basis-1/4 text-center rounded-md"
			:style="{ color: 'white', backgroundColor: backGroundColor }"
		>
			{{ threat }}
		</div>
		<div class="basis-3/4 flex flex-col-reverse text-center">
			<div>
				<p>
					<b> Threat score </b> (<u @click="showMsg = !showMsg"
						>learn more about it.</u
					>)
				</p>
			</div>
		</div>
	</div>
	<div style="margin-top: 10px" v-show="showMsg">
		Your threat score is {{ threat }}, it's a score on a scale from 1 to 10
		that indicates the level of cyber threat to which you are exposed.
	</div>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				backGroundColor: "red",
				showMsg: false,
			};
		},
		props: {
			threat: {
				type: Number,
				required: true,
			},
		},
		mounted() {
			if (this.threat < 3) {
				this.backGroundColor = "green";
			} else if (this.threat < 6) {
				this.backGroundColor = "orange";
			}
		},
	};
</script>
