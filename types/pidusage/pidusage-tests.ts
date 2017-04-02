import pusage = require("pidusage")

pusage.stat(0, function(err, stat) {
	console.log("Pcpu: %s", stat.cpu);
	console.log("Mem: %s", stat.memory);
});

pusage.unmonitor(0);
