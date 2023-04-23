<template>
	<div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
		<h1 class="text-2xl font-bold mb-5">Login</h1>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="username">
				Name :
			</label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="name"
				v-model="name"
				type="text"
				placeholder="Name"
			/>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 font-bold mb-2" for="password">
				Password :
			</label>
			<input
				class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				v-model="password"
				type="password"
				placeholder="Password"
			/>
		</div>
		<Alert :msg="errorMsg" />
		<div class="flex items-center justify-between">
			<button
				class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
				@click="submitLogin"
			>
				Sign In
			</button>
			<a
				class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
			>
				Forgot Password?
			</a>
		</div>
		<Alert
			msg="If you don't have an account or you struggle to login, please contact me."
		/>
	</div>
</template>

<script lang="js">
	export default {
		data() {
			return {
				name: "",
				password: "",
				errorMsg: "",
				connectionProblem: "",
			};
		},
		methods: {
			async submitLogin() {
				if (
					!this.validName(this.name) ||
					!this.validPassword(this.password)
				) {
					this.errorMsg =
						"your name or your password has the wrong format";
					return;
				}

				const response = await $jsonPlaceholder(
					useAppConfig().serverAddress + "/api/connection",
					{
						method: "POST",
						body: {
							name: this.name,
							HashPassoword: this.password,
						},
					}
				);
				if (response.message != "ok") {
					this.errorMsg = "Wrong password or user name";
				} else {
					const tokenCookie = useCookie("token");
					const nameCookie = useCookie("name");
					tokenCookie.value = response.token;
					nameCookie.value = this.name;
					this.$bus.$emit("addProfile");
					this.$router.push("/profile");
				}
			},

			validName(name) {
				return name != "";
			},
			validPassword(password) {
				return password != "";
			},
		},
	};
</script>
