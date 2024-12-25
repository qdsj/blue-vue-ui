const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "../dist");

const getFilePath = (filePath) => {
	return path.resolve(__dirname, `../${filePath}`);
};

const getFileDistPath = (filePath) => {
	return path.resolve(distPath, filePath);
};

const packageJsonPath = getFilePath("package.json");
const readmePath = getFilePath("README.md");
const licensePath = getFilePath("LICENSE");
const fontPath = getFilePath("src/assets");

fs.cpSync(packageJsonPath, getFileDistPath("package.json"), { recursive: true });
fs.cpSync(readmePath, getFileDistPath("README.md"), { recursive: true });
fs.cpSync(licensePath, getFileDistPath("LICENSE"), { recursive: true });
fs.cpSync(fontPath, getFileDistPath("assets"), { recursive: true });
