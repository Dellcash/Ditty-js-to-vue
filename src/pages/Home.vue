<script setup>
import { ref } from "vue";

// images
import Background from "../assets/images/دیتی-پس_زمینه.png";
import BMI from "../assets/images/دیتی-بی_ام_آی.png";
import Modal from "../assets/images/دیتی-پنجره-مدال.png";
import Todo from "../assets/images/دیتی-تسک_ها.png";
import Users from "../assets/images/دیتی-کاربران.png";

const projects = ref([
	{
		link: "/change-background",
		img: Background,
	},
	{
		link: "/bmi",
		img: BMI,
	},
	{
		link: "/modal",
		img: Modal,
	},
	{
		link: "/todo",
		img: Todo,
	},
	{
		link: "/users",
		img: Users,
	},
]);
</script>

<template>
	<div>
		<main>
			<div v-for="project in projects" :key="project" class="pic">
				<router-link :to="project.link">
					<img :src="project.img" alt="" />
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
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 576px) {
	main {
		grid-template-columns: 1fr;
	}
}
</style>
