<script setup>
import { ref } from "vue";

const newTodo = ref("");
const todos = ref(JSON.parse(localStorage.getItem("todos") || "[]"));

const addTodo = () => {
	if (newTodo.value === "") {
		alert("Please enter a todo");
	} else {
		todos.value.push({
			id: new Date().getTime(),
			title: newTodo.value,
		});
		localStorage.setItem("todos", JSON.stringify(todos.value));
		newTodo.value = "";
	}
};

const deleteTodo = (id) => {
	todos.value = todos.value.filter((todo) => todo.id !== id);
	// finde index of todo with id
	// remove todo from todos
	// save todos to localStorage
	localStorage.setItem("todos", JSON.stringify(todos.value));

	todos.value.splice(index, 1);
};
</script>

<template>
	<div id="app">
		<h1>My Todo 🗒️</h1>

		<div class="container">
			<form @submit.prevent="addTodo">
				<h2>Add Item</h2>
				<input
					v-model="newTodo"
					type="text"
					id="title"
					placeholder="Title"
					class="form-control"
					autocomplete="off"
				/>
				<button>Add</button>
			</form>

			<div class="items">
				<h2>My Items</h2>
				<ol>
					<li v-for="todo in todos" :key="todo">
						<h3>{{ todo.title }}</h3>
						<button @click="deleteTodo(todo.id)" class="delete"></button>
					</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

#app {
	margin: auto;
	padding: 60px 15px;
	background-color: pink;
	color: #0008;
	height: 100%;
	direction: ltr;
}

.container {
	max-width: 400px;
	width: 100%;
	margin: auto;
}

.container button {
	appearance: button;
	background-color: #0f633c;
	border: solid transparent;
	border-radius: 16px;
	border-width: 0 0 4px;
	box-sizing: border-box;
	color: #ffffff;
	cursor: pointer;
	display: inline-block;
	font-family: din-round, sans-serif;
	font-size: 15px;
	font-weight: 700;
	letter-spacing: 0.8px;
	line-height: 20px;
	margin: 0;
	outline: none;
	overflow: visible;
	padding: 13px 16px;
	text-align: center;
	text-transform: uppercase;
	touch-action: manipulation;
	transform: translateZ(0);
	transition: filter 0.2s;
	user-select: none;
	-webkit-user-select: none;
	vertical-align: middle;
	white-space: nowrap;
	/* width: 100%; */
	margin-bottom: 15px;
}

.container button:after {
	background-clip: padding-box;
	background-color: #198754;
	border: solid transparent;
	border-radius: 16px;
	border-width: 0 0 4px;
	bottom: -4px;
	content: "";
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	z-index: -1;
}

.container button:main,
.container button:focus {
	user-select: auto;
}

.container button:hover:not(:disabled) {
	filter: brightness(1.1);
}

.container button:disabled {
	cursor: auto;
}

h1 {
	text-align: center;
	font-weight: bolder;
	font-size: 50px;
	margin: 0;
}

div.items,
form {
	box-shadow: 0 0.5rem 1rem #00000026 !important;
	padding: 10px;
	background-color: #fff;
	border-radius: 1rem;
	margin-top: 50px;
}

form input {
	border-radius: 1rem !important;
	height: 50px;
	width: 100%;
	font-size: 25px !important;
	margin-bottom: 15px;
}

form button {
	width: 100%;
}

form input::placeholder {
	color: #ccc !important;
	font-size: 20px !important;
}

h2 {
	text-align: center;
	margin: 10px 0 25px 0;
	font-size: 25px;
}

.items ol {
	padding: 0;
	counter-reset: section;
}

.items li {
	margin-bottom: 15px;
	padding: 15px 20px;
	border-radius: 1rem;
	background-color: #f0f0f0;
	display: flex;
	padding: 15px 10px 5px 20px;
	justify-content: space-between;
}

.items li::before {
	counter-increment: section;
	content: counter(section) ". ";
	position: absolute;
}

.items li h3 {
	/* padding: 0; */
	/* margin: 0; */
	margin-left: 20px;
	font-size: 20px;
}

.items button.delete {
	background-color: rgb(150, 53, 53);
	padding: 13px 15px;
	margin-bottom: 5px;
	margin-top: -3px;
}

.items button.delete:after {
	content: "×";
	line-height: 24px;
	background-color: rgb(197, 57, 57);
}

@media (min-width: 768px) and (min-height: 600px) {
	.container {
		/* position: absolute;
    margin: auto;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
	}
}
</style>
