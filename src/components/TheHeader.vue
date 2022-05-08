<script setup>
import { onMounted, ref } from "vue";

const navs = ref([
	{
		title: "صفحه نخست",
		link: "/",
	},
	{
		title: "پس‌زمینه",
		link: "/change-background",
	},
	{
		title: "بی‌ام‌آی",
		link: "/bmi",
	},
	{
		title: "پنجره مدال",
		link: "/modal",
	},
	{
		title: "تسک‌ها",
		link: "/todo",
	},
]);

const open = ref(false);
</script>

<template>
	<nav>
		<button @click="open = !open">
			<span v-if="!open"> ☰ </span>
			<span v-else>&#x2613;</span>
		</button>

		<ul class="desktop">
			<li v-for="nav in navs" :key="nav">
				<router-link :to="nav.link" style="margin-left: 20px">{{
					nav.title
				}}</router-link>
			</li>
		</ul>

		<ul v-if="open" class="mobile">
			<li @click="open = !open" v-for="nav in navs" :key="nav">
				<router-link :to="nav.link" style="margin-left: 20px">{{
					nav.title
				}}</router-link>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
/* style nav */

nav {
	background-color: #f5f5f5;
}

.desktop {
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0;
}

li {
	list-style: none;
}

a {
	color: #000;
	font-weight: bold;
	text-decoration: none;
	padding: 10px;
	cursor: pointer;
}

a:hover {
	opacity: 0.5;
}

button {
	background-color: #f5f5f5;
	border: none;
	cursor: pointer;
	padding: 10px;
	font-size: 20px;
	display: none;
}

/* mobile */
@media (max-width: 768px) {
	button {
		display: block;
	}

	.desktop {
		display: none;
	}

	.mobile {
		flex-direction: column;
		align-items: start;
		background-color: white;
		position: fixed;
		top: 50px;
		right: 0;
		border: 1px solid #eee;
	}

	li {
		margin-bottom: 10px;
	}

	a {
		display: block;
	}
}
</style>
