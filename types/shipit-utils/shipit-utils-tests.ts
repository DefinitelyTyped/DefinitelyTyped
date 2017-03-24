import shipit = require("shipit");
import utils = require("shipit-utils");

var originalShipit = utils.getShipit(shipit);

var task = () => {
    return shipit.local("sleep 10s");
};

utils.registerTask(originalShipit, "myTask", task);
utils.registerTask(originalShipit, "myTask", ["some", "other", "tasks"]);
