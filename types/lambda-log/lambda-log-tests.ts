import { LambdaLog } from "lambda-log";

const log = new LambdaLog();
log.log("info", "Some Message", {}, ["tag1", "tag2"]);
