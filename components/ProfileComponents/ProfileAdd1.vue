<template>
	<div style="margin-top: 10px">
		<a
			class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
			@click="show = !show"
		>
			Add {{ label }}
		</a>
		<div
			class="flex flex-col items-center"
			style="margin: 5px"
			v-show="show"
		>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="Name"
				v-model="Name"
				type="text"
				placeholder="Name"
			/>
			<Alert :msg="errorMsg" />

			<button
				class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
				@click="add"
				style="margin-top: 5px; margin-bottom: 5px"
			>
				Add
			</button>
		</div>
	</div>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				Name: "",
				show: false,
				errorMsg: "",
			};
		},
		props: {
			label: String,
		},
		methods: {
			async add() {
				if (!this.validName(this.Name)) {
					console.log("error input");
					return;
				}
				const tokenCookie = useCookie("token");
				const nameCookie = useCookie("name");

				const response = await $jsonPlaceholder(
					useAppConfig().serverAddress + "/api/" + this.label,
					{
						method: "POST",
						headers: {
							name: nameCookie.value ?? "",
							token: tokenCookie.value ?? "",
						},
						body: {
							suppliers: [
								{
									Name: this.Name,
								},
							],
						},
					}
				).catch(() => {
					this.errorMsg = "Error while adding the " + this.label;
				});
				this.Name = "";
				if (response.message != "ok") {
					this.errorMsg = "Error while adding the " + this.label;
				} else {
					this.errorMsg = this.label + " added";
					this.$emit("refresh");
				}
				setTimeout(() => {
					this.errorMsg = "";
				}, 4000);
			},
			validName(name: string) {
				return name != "";
			},
		},
	};
</script>
