import { LambdaLog, LogMessage } from "lambda-log";

const log = new LambdaLog({
    dynamicMeta: (logMessage: LogMessage) => {
        return {
            value: logMessage.value
        };
    }
});
log.log("info", "Some Message", {}, ["tag1", "tag2"]);
