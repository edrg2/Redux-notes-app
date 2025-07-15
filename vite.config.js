import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const repositoryName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: repositoryName ? `/${repositoryName}/` : "/",
  test: {
    environment: "jsdom",
    setupFiles: "./setupTests.js",
  },
});
