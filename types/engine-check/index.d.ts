// Type definitions for engine-check 1.0
// Project: https://github.com/ppvg/node-engine-check
// Definitions by: jgeth <https://github.com/jgeth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface EngineCheckOptions {
    searchRoot?: string;
    silent?: boolean;
    debug?: boolean;
}
export function checkVersion(options?: EngineCheckOptions): void;
