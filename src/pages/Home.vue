<script setup>
// import { ref } from "vue";
import ChangeBackground from "./ChangeBackground.vue";
import BMI from "./BMI.vue";
import Modal from "./Modal.vue";
import Todo from "./Todo.vue";
import Users from "./Users.vue";
import Form from "./Form.vue";
import NestedComment from "./NestedComment.vue";
</script>

<template>
	<div>
		<main>
			<div class="pic">
				<ChangeBackground />
			</div>
			<div class="pic">
				<BMI />
			</div>
			<div class="pic">
				<Modal />
			</div>
			<div class="pic">
				<Todo />
			</div>
			<div class="pic">
				<Form />
			</div>
			<div class="pic">
				<Users />
			</div>
			<div class="pic">
				<NestedComment />
			</div>
		</main>
	</div>
</template>

<style scoped>
main {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	margin: 20px 0;
	padding: 20px;
}
.pic {
	padding: 10px;
	border: 1px solid #ccc;
	height: 80%;
	overflow: scroll;
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
		padding: 0;
		grid-gap: 0;
	}
}
</style>
