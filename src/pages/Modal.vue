<script setup>
import { ref } from "vue";

const modal = ref(false);

// function to click outside of the modal to close it
const closeModal = () => {
	modal.value = false;
};
</script>

<template>
	<div id="app">
		<h1>Modal</h1>
		<div class="container">
			<button @click="modal = true" id="modal-1">Modal 1</button>
			<button @click="modal = true" id="modal-2">Modal 2</button>
			<button id="modal-3">Modal 3</button>
			<button id="modal-4">Modal 4</button>
			<button id="modal-5">Modal 5</button>
		</div>
	</div>

	<div v-if="modal">
		<div @click="closeModal" class="modal"></div>
		<div class="modal-content">
			<div class="head">
				<h2>Welcome!</h2>
				<button @click="modal = false" class="close">&times;</button>
			</div>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
				deleniti eveniet in odio magnam. Obcaecati, ullam culpa ipsam sequi nisi
				eos, corrupti animi repellat aliquam, deleniti facere quidem itaque
				eligendi?
			</p>
		</div>
	</div>
</template>

<style scoped>
#app {
	background-color: navajowhite;
	color: #0009;
	margin: 0 auto;
	padding: 2rem 15px;
	text-align: center;
	height: 100vh;
}

.container {
	max-width: 400px;
	text-align: center;
	width: 100%;
	margin: auto;
}

h1 {
	text-align: center;
	font-weight: bolder;
	font-size: 70px;
	padding-top: 20px;
}

.container button {
	background-color: #1899d6;
	border-radius: 16px;
	border-width: 0 0 4px;
	color: #ffffff;
	cursor: pointer;
	font-size: 15px;
	font-weight: 700;
	padding: 13px 16px;
	text-transform: uppercase;
	transition: filter 0.2s;
	width: 100%;
	margin-bottom: 15px;
}

.container button:hover {
	filter: brightness(1.2);
}

/* modal */
.modal {
	position: fixed;
	display: block;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 99999;
}

.modal-content {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fefefe;
	color: #000;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	direction: ltr;
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	width: 40%;
	z-index: 99999;
}

.head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.close {
	border: none;
	cursor: pointer;
	background-color: transparent;
	font-size: 40px;
}

.close:hover {
	opacity: 0.5;
}
/* modal mobile */
@media (max-width: 768px) {
	.modal-content {
		width: 90%;
		padding: 20px;
	}
}
</style>
