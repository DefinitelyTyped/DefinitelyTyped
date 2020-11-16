import { Logger, Severity, SeverityLevel } from "@cyberblast/logger";

const something = {something: ""};
const callback = (logData: any) => {};

let logger = new Logger(""); // $ExpectType Logger
logger = new Logger(); // $ExpectType Logger
logger.category; // $ExpectedType { [key: string]: string; }
logger.init(); // $ExpectedType Promise<void>
logger.close(); // $ExpectedType void
logger.defineCategory(""); // $ExpectedType void

const logData1 = {
  severity: Severity.Error,
  category: "",
  message: ""
};
logger.log(logData1); // $ExpectedType void

const logData2 = {
  severity: Severity.Error,
  category: "",
  message: "",
  time: new Date()
};
logger.log(logData2); // $ExpectedType void

const logData3 = {
  severity: Severity.Error,
  category: "",
  message: "",
  data: something
};
logger.log(logData3); // $ExpectedType void

logger.logError(""); // $ExpectedType  void
logger.logError("", ""); // $ExpectedType  void
logger.logError("", "", something); // $ExpectedType  void

logger.logWarning(""); // $ExpectedType  void
logger.logWarning("", ""); // $ExpectedType  void
logger.logWarning("", "", something); // $ExpectedType  void

logger.logInfo(""); // $ExpectedType void
logger.logInfo("", ""); // $ExpectedType void
logger.logInfo("", "", something); // $ExpectedType void

logger.logVerbose(""); // $ExpectedType void
logger.logVerbose("", ""); // $ExpectedType void
logger.logVerbose("", "", something); // $ExpectedType void

logger.onLog(callback); // $ExpectedType void
logger.on("", callback); // $ExpectedType void
logger.onError(callback); // $ExpectedType void
logger.onWarning(callback); // $ExpectedType void
logger.onInfo(callback); // $ExpectedType void
logger.onVerbose(callback); // $ExpectedType void

Severity.Error; // $ExpectedType string
Severity.Warning; // $ExpectedType string
Severity.Info; // $ExpectedType string
Severity.Verbose; // $ExpectedType string

SeverityLevel.Error; // $ExpectedType number
SeverityLevel.Warning; // $ExpectedType number
SeverityLevel.Info; // $ExpectedType number
SeverityLevel.Verbose; // $ExpectedType number
