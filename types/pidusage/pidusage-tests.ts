import pusage = require("pidusage");

pusage.stat(0, (err: Error, stat: pusage.Stat) => {
	const cpu = stat.cpu;
	const memory = stat.memory;
});

pusage.unmonitor(0);
