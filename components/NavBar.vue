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
			<NavBarButton label="Login" url="/login" />
		</div>
		<div class="basis-1/4 flex flex-row">
			<NavBarLink
				icon="/icon/github-mark.png"
				url="https://github.com/SHmatthieu/sillasnet"
			/>
		</div>
	</div>
</template>
