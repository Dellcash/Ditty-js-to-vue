<script setup>
import { ref } from "vue";

const height = ref("");
const weight = ref("");
const result = ref("");

// form validation
const calcBmi = () => {
	if (height.value === "") {
		alert("لطفا قد را وارد کنید");
		return false;
	}
	if (weight.value === "") {
		alert("لطفا وزن را وارد کنید");
		return false;
	}
	return true;
};

// calculate BMI
const calculateBmi = () => {
	if (calcBmi()) {
		const bmi = weight.value / (height.value / 100) ** 2;
		return (result.value = bmi.toFixed(2));
	}
};
</script>

<template>
	<div id="pmi">
		<div class="container">
			<h1>محاسبه BMI</h1>

			<form @submit.prevent="calculateBmi">
				<div>
					<label for="height">قد:</label>
					<input
						id="height"
						v-model="height"
						type="text"
						class="form-control"
						placeholder="سانتی‌متر"
					/>
				</div>

				<div>
					<label for="weight">وزن:</label>
					<input
						id="weight"
						v-model="weight"
						type="text"
						class="form-control"
						placeholder="کیلوگرم"
					/>
				</div>

				<button class="btn btn-success w-100">محاسبه</button>
			</form>

			<p id="result">{{ result }}</p>
		</div>
	</div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

#pmi {
	font-size: 40px;
	background-color: crimson;
	padding: 40px 15px;
	text-align: center;
	height: 100vh;
	width: 100%;
}

.container {
	background: #fff;
	border-radius: 1rem;
	box-shadow: 0 0 20px -5px #555;
	max-width: 350px;
	padding: 20px;
	text-align: right;
}

h1 {
	text-align: center;
	border-bottom: 1px solid #bbb;
	padding-bottom: 10px;
}

form input {
	border-radius: 1rem !important;
}

button {
	font-size: 1.25rem !important;
	border-radius: 1.25rem !important;
	margin-top: 10px;
}

p#result {
	text-align: center;
	margin: 10px 0 0 0;
}

p#result:empty {
	display: none;
}

label {
	font-size: 30px;
}

@media (min-width: 768px) {
	.container {
		position: absolute;
		margin: auto;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
}
</style>
