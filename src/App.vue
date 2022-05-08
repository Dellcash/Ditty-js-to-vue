<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
	<TheHeader />
	<RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Harmattan&display=swap");

* {
	font-family: "Harmattan", sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
