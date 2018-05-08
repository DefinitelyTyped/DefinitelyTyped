// Tests by: Rogier Schouten <https://github.com/rogierschouten>

import Command = require("leadfoot/Command");
import Element = require("leadfoot/Element");
import Session = require("leadfoot/Session");


var session: Session;
var command: Command<any> = new Command(session);

command
	.findByXpath("some xpath")
	.click()
	.end();
