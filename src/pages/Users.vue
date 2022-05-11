<script setup>
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import axios from "axios";

const users = ref([]);
const loading = ref(false);
// getting users from api
const getUsers = () => {
	loading.value = true;
	axios
		.get("https://randomuser.me/api/?inc=name,picture&results=10")
		.then((res) => {
			users.value = res.data.results;
			console.log(res.data.results);
			loading.value = false;
		})
		.catch((err) => {
			console.log(err);
		});
};
getUsers();

// filtering users by 'title first last name'
const search = ref("");
const filterUsers = computed(() => {
	return users.value.filter((user) => {
		let name = `${user.name.title} ${user.name.first} ${user.name.last}`;
		return name.toLowerCase().includes(search.value.toLowerCase());
	});
});
</script>

<template>
	<div id="app">
		<h1>List of users</h1>

		<div v-if="loading" class="loading">LOADING ...</div>

		<div v-else class="container">
			<input
				v-model="search"
				id="filter"
				class="form-control mb-3 form-control-lg"
				placeholder="Type to filer..."
			/>
			<div class="users row">
				<div v-for="user in filterUsers" :key="user.id" class="col-3 user">
					<img :src="user.picture.large" alt="" />
					<h3 class="mb-1 mt-0">
						{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
					</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

#app {
	font-family: "Share Tech Mono", monospace;
	background-color: lightblue;
	color: #0008;
	margin: auto;
	padding: 40px 15px;
	/* height: 100vh; */
	direction: ltr;
}

.loading {
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	height: 100vh;
	margin-top: 10rem;
}

input {
	border-radius: 2rem !important;
}
.container {
	max-width: 600px;
}

.users {
	width: 100%;
	margin: auto;
	background: #fff7;
	padding: 50px;
	border-radius: 2rem;
}

.users:empty {
	display: none;
}

h1 {
	text-align: center;
	font-weight: bolder;
	font-size: 50px;
	margin-bottom: 50px;
}

.user {
	text-align: center;
	margin-bottom: 15px;
}

.user img {
	border-radius: 50%;
	width: 100%;
}

.user h3 {
	margin-top: 15px;
	font-size: clamp(0.5rem, 2.5vw, 1rem);
}

@media (max-width: 768px) {
	.users {
		padding: 25px;
	}
}
</style>
