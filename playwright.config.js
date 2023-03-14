/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: "npm run build && npm run preview",
		port: 4173,
		reuseExistingServer: true
	},
	testDir: "tests",
	use: {
		trace: "on"
	}
};

export default config;