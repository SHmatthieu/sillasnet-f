<template>
	<div class="flex flex-row shadow">
		<div class="basis-1/4 flex flex-row-reverse">
			<NuxtLink to="/">
				<h1
					style="
						margin: 10px;
						font-size: larger;
						color: #ed5909;
						text-shadow: 1px 1px 0px orange;
					"
				>
					Sillas net
				</h1>
			</NuxtLink>
		</div>

		<div class="basis-1/2 flex flex-row-reverse">
			<NavBarButton label="About" url="/about" />
			<NavBarButton label="Login" url="/login" v-show="!connected" />
			<NavBarButton label="Profile" url="/profile" v-show="connected" />
		</div>
		<div class="basis-1/4 flex flex-row">
			<NavBarLink
				icon="/icon/github-mark.png"
				url="https://github.com/SHmatthieu/sillasnet"
			/>
		</div>
	</div>
</template>
<script lang="js">
	export default {
		data() {
			return {
				connected: false,
			};
		},
		mounted() {
			this.refresh();
			this.$bus.$on("addProfile", () => {
				this.connected = true;
			});
			this.$bus.$on("removeProfile", () => {
				this.refresh();
		});
	},
	methods: {
		refresh() {
				let token = useCookie("token").value;
				let name = useCookie("name").value;
				if (
					token != null &&
					token != undefined &&
					name != null &&
					name != undefined
				) {
					this.connected = true;
				} else {
					this.connected = false;
				}
			}
		}

	};
</script>
