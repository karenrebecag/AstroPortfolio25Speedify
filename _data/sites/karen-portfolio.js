module.exports = {
	name: "Karen Ortiz Portfolio", 
	description: "Performance monitoring for Karen's portfolio, CV, and project pages",
	options: {
		runs: 3, // Run 3 times and average the results
		frequency: 1, // Temporarily set to 1 minute to force immediate testing
		freshChrome: "run", // Reset Chrome state for each run
	},
	urls: [
		"https://www.karenortiz.space/", // Main portfolio
		"https://www.karenortiz.space/cv", // CV page
		"https://www.karenortiz.space/greetings", // Greetings page
		"https://www.karenortiz.space/p_AurinTaskManager", // Aurin Task Manager project page
	]
};
