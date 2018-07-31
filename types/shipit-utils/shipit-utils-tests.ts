import shipit = require("shipit");
import utils = require("shipit-utils");

const originalShipit = utils.getShipit(shipit);

const task = () => shipit.local("sleep 10s");

utils.registerTask(originalShipit, "myTask", task);
utils.registerTask(originalShipit, "myTask", ["some", "other", "tasks"]);
