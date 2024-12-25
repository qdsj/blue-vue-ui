<script setup lang="ts">
import BeiAn from "../BeiAn/index.vue";
import Github from "./assets/github.png";
const props = defineProps<{
	author: string;
	github: string;
}>();
</script>

<template>
	<div class="bei-an-footer">
		<a :href="props.github" target="_blank">
			<img :src="Github" alt="github" />
		</a>
		<span>Released under the MIT License.</span>
		<span>Copyright © 2024-present {{ props.author }}</span>
		<span><BeiAn /></span>
	</div>
</template>

<style scoped lang="scss">
.bei-an-footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #f0f0f0;
	color: #666;
	font-size: 10px;
	line-height: 2;

	padding: 1em;
}

a {
	width: 2em;
	height: 2em;

	img {
		height: 100%;
	}
}
</style>
