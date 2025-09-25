module.exports = {
	name: "Karen Ortiz Portfolio", 
	description: "Performance monitoring for Karen's portfolio and CV",
	options: {
		runs: 3, // Run 3 times and average the results
		frequency: 60 * 24, // Run once per day (in minutes)
	},
	urls: [
		"https://www.karenortiz.space/", // Main portfolio
		"https://www.karenortiz.space/resume", // CV page
	]
};
