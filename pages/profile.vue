<template>
	<div class="max-w-md mx-auto my-10 bg-white p-5">
		<h1 class="text-2xl font-bold mb-5">
			Welcome on your profile {{ name }}.
		</h1>

		<div class="rounded-md shadow-xl" style="margin-top: 20px">
			<ProfileThreat :threat="1.1" />
		</div>

		<div class="rounded-md shadow-xl" style="margin-top: 20px">
			<h1 class="text-xl font-bold" @click="showTips = !showTips">
				Safty tips for you :
			</h1>
			<ProfileTips v-show="showTips" />
		</div>
		<div class="rounded-md shadow-xl" style="margin-top: 20px">
			<h1 class="text-xl font-bold" @click="showSoftware = !showSoftware">
				Softwares :
			</h1>
			<div v-show="showSoftware">
				<div v-for="(item, index) in softwares" :key="index">
					<ProfileSoftware
						:id="String(index + 1)"
						:name="item.Name"
						:version="item.Version"
					/>
				</div>
			</div>

			<ProfileAdd2 label="software" @refresh="loadSoftwares" />
		</div>

		<div class="rounded-md shadow-xl" style="margin-top: 20px">
			<h1 class="text-xl font-bold" @click="showHardware = !showHardware">
				Hardwares :
			</h1>
			<div v-show="showHardware">
				<div v-for="(item, index) in hardwares" :key="index">
					<ProfileHardware
						:id="String(index + 1)"
						:name="item.Name"
						:version="item.Version"
					/>
				</div>
			</div>
			<ProfileAdd2 label="hardware" @refresh="loadHardwares" />
		</div>

		<div class="rounded-md shadow-xl" style="margin-top: 20px">
			<h1 class="text-xl font-bold" @click="showSupplier = !showSupplier">
				Suppliers :
			</h1>
			<div v-show="showSupplier">
				<div v-for="(item, index) in suppliers" :key="index">
					<ProfileSupplier
						:id="String(index + 1)"
						:name="item.Name"
					/>
				</div>
			</div>
			<ProfileAdd1 label="supplier" @refresh="loadSuppliers" />
		</div>

		<div class="rounded-md shadow-xl" style="margin-top: 20px">
			<h1 class="text-xl font-bold" @click="showReport = !showReport">
				Report a security problem :
			</h1>
			<ProfileReport v-show="showReport" />
		</div>

		<button
			class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			type="button"
			style="margin-top: 10px"
			@click="signOut"
		>
			Sign Out
		</button>
	</div>
</template>

<script lang="ts">
	interface Software {
		ID: number;
		Name: string;
		Version: string;
	}
	interface Hardware {
		ID: number;
		Name: string;
		Version: string;
	}
	interface Supplier {
		ID: number;
		Name: string;
	}
	export default {
		data() {
			return {
				name: "",
				token: "",
				softwares: [] as Software[],
				hardwares: [] as Hardware[],
				suppliers: [] as Supplier[],
				showSoftware: false,
				showHardware: false,
				showSupplier: false,
				showTips: true,
				showReport: true,
			};
		},
		mounted() {
			const tokenCookie = useCookie("token");
			const nameCookie = useCookie("name");
			if (nameCookie.value != null && nameCookie.value != undefined) {
				this.name = nameCookie.value;
			} else {
				this.$router.push("/");
				return;
			}
			if (tokenCookie.value != null && tokenCookie.value != undefined) {
				this.token = tokenCookie.value;
			} else {
				this.$router.push("/");
			}

			this.loadSoftwares();
			this.loadHardwares();
			this.loadSuppliers();
		},
		methods: {
			async loadSoftwares() {
				const response = await $jsonPlaceholder(
					useAppConfig().serverAddress + "/api/software",
					{
						method: "GET",
						headers: {
							name: this.name,
							token: this.token,
						},
					}
				).catch(() => this.$router.push("/"));
				this.softwares = response.software;
			},
			async loadHardwares() {
				const response = await $jsonPlaceholder(
					useAppConfig().serverAddress + "/api/hardware",
					{
						method: "GET",
						headers: {
							name: this.name,
							token: this.token,
						},
					}
				).catch(() => this.$router.push("/"));
				this.hardwares = response.hardware;
			},
			async loadSuppliers() {
				const response = await $jsonPlaceholder(
					useAppConfig().serverAddress + "/api/supplier",
					{
						method: "GET",
						headers: {
							name: this.name,
							token: this.token,
						},
					}
				).catch(() => this.$router.push("/"));
				this.suppliers = response.suppliers;
			},
			signOut() {
				useCookie("token").value = null;
				useCookie("name").value = null;
				this.$router.push("/");
			},
		},
	};
</script>
