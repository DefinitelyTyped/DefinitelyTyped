// Type definitions for ipify 2.0
// Project: https://github.com/sindresorhus/ipify#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = ipify;

declare function ipify(endpoint?: string): Promise<string>;
