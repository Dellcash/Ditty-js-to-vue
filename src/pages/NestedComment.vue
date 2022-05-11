<script setup>
import { ref } from "vue";

const comments = ref([
	{
		name: "Mario",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At.",
		children: [
			{
				name: "Emily",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, velit iste architecto placeat doloribus repellat! Asperiores numquam ratione voluptatum reiciendis?",
				children: [
					{
						name: "Mario",
						text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, necessitatibus?",
						children: [
							{
								name: "Emily",
								text: "Lorem, ipsum dolor.",
								children: [],
							},
						],
					},
					{
						name: "David",
						text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, necessitatibus?",
						children: [],
					},
				],
			},
		],
	},
	{
		name: "John",
		text: "Lorem ipsum dolor sit amet.",
	},
]);
</script>

<template>
	<div id="app">
		<div class="container">
			<ul>
				<!-- first -->
				<li v-for="comment in comments" :key="comment" class="first">
					<h5>{{ comment.name }}</h5>
					<p>{{ comment.text }}</p>
					<ul>
						<!-- second -->
						<li v-for="child in comment.children" :key="child" class="second">
							<h5>{{ child.name }}</h5>
							<p>{{ child.text }}</p>
							<ul>
								<!-- third -->
								<li
									v-for="grandchild in child.children"
									:key="grandchild"
									class="third"
								>
									<h5>{{ grandchild.name }}</h5>
									<p>{{ grandchild.text }}</p>
									<ul>
										<!-- fourth -->
										<li
											v-for="greatgrandchild in grandchild.children"
											:key="greatgrandchild"
											class="fourth"
										>
											<h5>{{ greatgrandchild.name }}</h5>
											<p>{{ greatgrandchild.text }}</p>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
#app {
	direction: ltr;
	background-color: salmon;
	padding: 5rem 1rem;
}

.container {
	background-color: #fff9;
	padding: 1rem 1.7rem;
	color: #444;
	border-radius: 20px;
}

ul {
	padding-left: 0;
}

li {
	list-style: none;
	border: 1px solid #bbb;
	margin: 1rem 0;
	padding: 1rem;
	border-radius: 20px;
}

.first {
	margin: 1rem 0;
	padding: 1rem;
}

.second {
	background-color: #fff5;
}

.third {
	background-color: #fff3;
}

.fourth {
	background-color: #fff1;
}

h5 {
	font-weight: bold;
	margin-bottom: 0;
}

p {
	margin-bottom: 0;
}
</style>
