import * as utils from "@architect/utils";

const updater = utils.updater("Example");
updater.start("Hello", "world", 1);
updater.debug.status("Hello world 2");
updater.verbose.done();

utils.banner({});
utils.getLambdaName("");
utils.pathToUnix("");
utils.toLogicalID("");
