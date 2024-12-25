import vuePlugin from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	plugins: [vuePlugin()],
	server: {
		port: 8080,
	},
	resolve: {
		alias: {
			"blue-vue-ui": path.resolve(__dirname, "../src"),
		},
	},
});
