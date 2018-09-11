// Type definitions for is-svg 3.0
// Project: https://github.com/sindresorhus/is-svg#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function isSvg(input?: string | Buffer | false | null): boolean;

// So that `import * as X` is possible
declare namespace isSvg {}

export = isSvg;
