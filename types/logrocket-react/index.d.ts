import LogRocket = require("logrocket");

type LR = typeof LogRocket;

declare function setupLogRocketReact(logRocket: LR): void;

export = setupLogRocketReact;
