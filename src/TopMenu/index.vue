<script setup lang="ts">
const props = defineProps({
	content: {
		default: "topmenu content",
		type: String,
	},
});
</script>

<template>
	<h1>topmenu: {{ props.content }}</h1>
</template>

<style scoped lang="scss"></style>
