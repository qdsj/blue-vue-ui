<script setup lang="ts">
const props = defineProps({
	content: {
		default: "按钮",
		type: String,
	},
});

const emit = defineEmits(["click"]);

const clickFn = () => {
	emit("click");
};
</script>

<template>
	<button @click="clickFn" class="custom-button">{{ props.content }}</button>
</template>

<style scoped lang="scss">
.custom-button {
	background-color: #007bff;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>
