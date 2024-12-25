import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		vue(),
		dts({
			include: ["src/**/*.ts", "src/**/*.vue"],
			beforeWriteFile: (filePath, content) => {
				return {
					filePath: filePath,
					content: content,
				};
			},
		}),
	],
	build: {
		// emptyOutDir: true,
		sourcemap: true,
		lib: {
			entry: "./src/index.ts",

			formats: ["es"],
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				preserveModules: true,
				preserveModulesRoot: "src",
				entryFileNames: (chunkInfo) => {
					// return `${chunkInfo.name.replace(/\.vue$/, "")}.js`;
					return `${chunkInfo.name}.js`;
				},
				assetFileNames: (assetInfo) => {
					if (assetInfo.name?.endsWith(".css")) {
						return "index.css";
					}
					return assetInfo.name;
				},
				format: "esm",
				globals: {
					vue: "Vue",
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
