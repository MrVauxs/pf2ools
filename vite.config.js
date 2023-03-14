import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	preview: {
		port: 5173,
		strictPort: true
	},
	server: {
		port: 5173,
		strictPort: true
	}
});
