<template>
	<div id="app">
		<div class="container">
			<h2>Enter your card number</h2>
			<div class="inputs">
				<div v-for="(input, index) in inputs" :key="input.id">
					<input
						type="text"
						v-model="input.datatype"
						ref="inputs"
						maxlength="4"
						@input="moveToNextField($event.target.value, index)"
					/>
					<br />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputs: [
				{ id: "1", datatype: "" },
				{ id: "2", datatype: "" },
				{ id: "3", datatype: "" },
				{ id: "4", datatype: "" },
			],
		};
	},
	methods: {
		moveToNextField(value, index) {
			const nextIndex = index + 1;
			if (nextIndex < this.inputs.length && value.length >= 4) {
				this.$refs.inputs[nextIndex].focus();
			}
		},
	},
};
</script>

<style scoped>
#app {
	direction: ltr;
	background-color: lightskyblue;
	height: 100vh;
	padding: 5rem 1rem;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fff9;
	border-radius: 20px;
	padding: 4rem 1rem;
}

.inputs {
	display: flex;
	flex-direction: row;
}

input {
	width: 100px;
	border: none;
	border-bottom: 1px solid #888;
	background-color: transparent;
	margin: 1rem;
	padding: 0 1rem;
	text-align: center;
	font-size: 32px;
}

input:focus {
	outline: none;
	border-bottom: 2px solid black;
}

@media (max-width: 765px) {
	h2 {
		font-size: 20px;
	}
	.container {
		padding: 2rem 1rem;
	}

	input {
		padding: 0;
		margin: 5px;
		width: 40px;
		font-size: 20px;
	}
}
</style>
