<template>
	<div class="flex flex-col items-center" style="margin-top: 10px">
		<label for="report"
			>Please help us protect others by reporting your security
			problems:</label
		>

		<textarea
			id="report"
			v-model="report"
			rows="5"
			cols="36"
			class="text-center"
			style="
				margin: 5px;
				line-height: 1.5;
				border-radius: 5px;
				border: 1px solid #ccc;
				box-shadow: 1px 1px 1px #999;
			"
		></textarea>
		<Alert :msg="reportMsg" />

		<button
			class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			type="button"
			@click="submitReport"
			style="margin-bottom: 10px"
		>
			Send
		</button>
	</div>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				report: "",
				reportMsg: "",
			};
		},
		methods: {
			async submitReport() {
				const tokenCookie = useCookie("token");
				const nameCookie = useCookie("name");

				const response = await $jsonPlaceholder(
					useAppConfig().serverAddress + "/api/report",
					{
						method: "POST",
						headers: {
							name: nameCookie.value ?? "",
							token: tokenCookie.value ?? "",
						},
						body: { Text: this.report },
					}
				);
				this.report = "";
				this.reportMsg = "thank you for your report !";

				setTimeout(() => {
					this.reportMsg = "";
				}, 3000);
			},
		},
	};
</script>
