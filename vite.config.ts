import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],

	// Add the server configuration here:
	server: {
		allowedHosts: [
			"localhost", // Keep localhost if you use it
			"127.0.0.1", // Keep 127.0.0.1 if you use it
			// Add the specific Replit host from the error message:
			"d99b64eb-3b2a-4304-bdb0-f3f91e060759-00-17vqzska5twna.sisko.replit.dev",
			// Add any other hosts you might need
		],
	},
});
