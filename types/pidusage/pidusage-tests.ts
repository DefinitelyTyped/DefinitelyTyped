import pusage = require("pidusage")

pusage.stat(0, function(err, stat) {
	const cpu = stat.cpu;
	const memory = stat.memory;
});

pusage.unmonitor(0);
