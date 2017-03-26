
import * as spawn from "cross-spawn-promise";

spawn("npm", ["info", "cross-spawn-promise"], { stdio: "inherit" })
	.then(x => {
		const result = x.toString();
	})
	.catch((error: spawn.CrossSpawnError) => {
		if (!error) {
			return;
		}
	});
