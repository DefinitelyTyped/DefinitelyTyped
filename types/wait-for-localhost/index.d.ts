// Type definitions for wait-for-localhost 2.0
// Project: https://github.com/sindresorhus/wait-for-localhost#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = waitForLocalhost;

declare function waitForLocalhost(port?: number): Promise<void>;
