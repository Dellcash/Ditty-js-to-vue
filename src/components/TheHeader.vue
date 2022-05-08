<script setup></script>

<template>
	<nav>
		<router-link to="/" style="margin-left: 20px">صفحه نخست</router-link>
		<router-link to="/change-background">پس‌زمینه</router-link>
		<router-link to="/bmi">بی‌ام‌آی</router-link>
	</nav>
</template>

<style scoped>
/* style nav */
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	height: 60px;
	background-color: #f5f5f5;
}

a {
	color: #000;
	font-weight: bold;
	text-decoration: none;
	padding: 10px;
	cursor: pointer;
}
</style>
