import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
import vueSvgLoader from "vite-svg-loader";

export default defineConfig({
	plugins: [
		vue(),
		vueSvgLoader({
			defaultImport: "component",
		}),
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
				entryFileNames: "[name].js",
				assetFileNames: (assetInfo) => {
					if (assetInfo.names.length === 0) return "";

					if (assetInfo.names[0].endsWith(".css")) {
						return "index.css";
					}

					return assetInfo.names[0];
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
