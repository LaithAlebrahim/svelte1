import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ["PATCH", "DELETE"],
		},
		prerender: {
			default: true,
		},
		paths: {
			base: dev ? "" : "/svelte1",
		},
	},
};

export default config;
