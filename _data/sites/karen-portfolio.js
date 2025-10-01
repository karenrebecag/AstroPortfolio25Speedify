module.exports = {
	name: "Karen Ortiz Portfolio", 
	description: "Performance monitoring for Karen's portfolio, CV, and project pages",
	options: {
		runs: 3, // Run 3 times and average the results
		frequency: 1, // Force immediate testing - Updated: 2025-10-01
		freshChrome: "run", // Reset Chrome state for each run
	},
	urls: [

		//Paginas Principales
		"https://www.karenortiz.space/", // Main portfolio
		"https://www.karenortiz.space/resume", // CV page
		"https://www.karenortiz.space/privacy", // This Portfolio project page
		"https://www.karenortiz.space/greetings", // Greetings page

		//Paginas de Proyectos
		"https://www.karenortiz.space/p_AurinTaskManager", // Aurin Task Manager project page
		"https://www.karenortiz.space/p_ThisPortfolio", // This Portfolio project page
	]
};
