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
			"vue-components": path.resolve(__dirname, "../src"),
		},
	},
});
