// Type definitions for logrocket-react 3.0
// Project: https://github.com/LogRocket/logrocket-react
// Definitions by: Nivesh Ravindran <https://github.com/Nibblesh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import LogRocket = require('logrocket');

type LR = typeof LogRocket;

declare function setupLogRocketReact(logRocket: LR): void;

export = setupLogRocketReact;
