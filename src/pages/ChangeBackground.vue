<script setup>
import { onMounted, ref } from "vue";

const colors = ref([
	"crimson",
	"deeppink",
	"deepskyblue",
	"gold",
	"lightgrey",
	"pink",
	"orange",
	"mediumturquoise",
	"lemonchiffon",
	"indigo",
]);
let colorName = ref();

// function that find index of colors array and change background color of the page
function changeColor(color) {
	const index = colors.value.indexOf(color);
	document.getElementById("background").style.backgroundColor =
		colors.value[index];
	colorName.value = color;
}

// set random color of colors array when page is loaded
onMounted(() => {
	const randomIndex = Math.floor(Math.random() * colors.value.length);
	changeColor(colors.value[randomIndex]);
});
</script>

<template>
	<div id="background">
		<h1>{{ colorName }}</h1>
		<div>
			<button
				@click="changeColor(color)"
				v-for="color in colors"
				:key="color"
				:style="{ 'background-color': color }"
			></button>
		</div>
	</div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

#background {
	transition: background-color 0.2s ease;
	text-align: center;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

h1 {
	font-size: clamp(1rem, 9vw, 4rem);
	font-family: monospace;
	text-shadow: 2px 2px 0 #fff;
	margin-bottom: 10rem;
}

button {
	margin: 10px;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	border: 7px solid #fff;
}
</style>
