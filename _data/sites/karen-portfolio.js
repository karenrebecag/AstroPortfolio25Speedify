module.exports = {
	name: "Karen Ortiz Portfolio", 
	description: "Performance monitoring for Karen's portfolio and CV",
	options: {
		runs: 3, // Run 3 times and average the results
		frequency: 60 * 23, // Run once every 23 hours (in minutes) - avoid exact 24h to prevent build conflicts
		freshChrome: "run", // Reset Chrome state for each run
	},
	urls: [
		"https://www.karenortiz.space/", // Main portfolio
		"https://www.karenortiz.space/cv", // CV page (corregido de /resume a /cv)
	]
};
