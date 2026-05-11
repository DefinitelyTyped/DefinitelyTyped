import { logger } from "log";

logger.log("");
logger.log("%s", "hi");
logger.log("%i %o", 9, { obj: true });
logger.error("");
logger.debug("b", "c", "d");
logger.error("%s %s %s", "boop");
logger.log("%s %s %s", "hi", 1, { hello_obj: "Hello" });
logger.warn("%s %s %s", "hi", 1, {});
logger.info("%s %s %s", "boop");
logger.debug("b", "c", "d");
logger.trace("%s %s %s", "hi", 1, { trace: 1 });
