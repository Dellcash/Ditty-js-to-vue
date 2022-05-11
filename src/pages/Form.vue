<script setup>
import { reactive, ref } from "vue";

const form = reactive({
	email: "",
	emailErr: "",
	password: "",
	passwordErr: "",
});
const loading = ref(false);

const validation = () => {
	if (form.email === "" || form.email.indexOf("@") === -1) {
		form.emailErr = "Email is required and must be valid";
	} else {
		form.emailErr = "";
	}
	if (form.password === "" || form.password.length < 6) {
		form.passwordErr = "Password must be at least 6 characters";
	} else {
		form.passwordErr = "";
	}

	if (form.email !== "" && form.password !== "") {
		setTimeout(() => {
			form.email = "";
			form.password = "";
		}, 2000);
		loading.value = true;
	}

	setTimeout(() => {
		loading.value = false;
	}, 2000);
};
</script>

<template>
	<div id="app">
		<div class="form">
			<h1>FORM VALIDATION</h1>
			<form @submit.prevent="validation">
				<label for="email">Email:</label>
				<input v-model="form.email" type="text" id="email" />
				<p>{{ form.emailErr }}</p>
				<label for="password">Password:</label>
				<input v-model="form.password" type="password" id="password" />
				<p>{{ form.passwordErr }}</p>
				<button :disabled="loading">
					<span v-if="loading">LOADING...</span><span v-else>SUBMIT</span>
				</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
#app {
	direction: ltr;
	background-color: tomato;
	width: 100%;
	height: 100vh;
	padding: 5rem 10px;
}

h1 {
	text-align: center;
}
.form {
	background-color: pink;
	max-width: 400px;
	margin: 10px auto;
	padding: 20px;
	text-align: left;
	border-radius: 20px;
}

label {
	font-size: 24px;
	padding-left: 10px;
}

p {
	color: red;
	padding-left: 10px;
}

input {
	width: 100%;
	border: none;
	padding: 5px 20px;
	border-radius: 20px;
	font-size: 18px;
}

input:focus {
	outline: none;
}

button {
	margin-top: 20px;
	width: 100%;
	border: none;
	border-radius: 20px;
	padding: 5px 0;
	font-size: 18px;
	background-color: #0f633c;
	color: white;
	font-weight: 500;
	outline: none;
	cursor: pointer;
}

button:hover {
	opacity: 0.9;
}

button:disabled {
	opacity: 0.5;
	cursor: auto;
}

@media (max-width: 768px) {
	.form {
		width: 90%;
	}
}
</style>
