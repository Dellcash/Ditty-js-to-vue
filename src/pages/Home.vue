<script setup></script>

<template>
	<div>
		<main>
			<div class="pic">
				<router-link to="/change-background">
					<img src="../assets/images/دیتی-پس_زمینه.png" alt="" />
				</router-link>
			</div>
			<div class="pic">
				<router-link to="/bmi">
					<img src="../assets/images/دیتی-بی_ام_آی.png" alt="" />
				</router-link>
			</div>
		</main>
	</div>
</template>

<style scoped>
main {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	margin: 20px 0;
}
.pic {
	padding: 10px;
}

img {
	width: 100%;
}

img:hover {
	cursor: pointer;
	opacity: 0.5;
}

/* mobile */
@media (max-width: 768px) {
	main {
		grid-template-columns: 1fr;
	}
}
</style>
