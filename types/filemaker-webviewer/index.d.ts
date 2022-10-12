// Type definitions for non-npm package filemaker-webviewer 1.0
// Project: https://claris.com
// Definitions by: Eric Luce <https://github.com/eluce2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped)
// Minimum TypeScript Version: 3.0

export enum FMScriptOption {
    CONTINUE,
    HALT,
    EXIT,
    RESUME,
    PAUSE,
    SUSPEND_AND_RESUME,
}

declare global {
    interface Window {
        FileMaker?: {
            PerformScript: (name: string, parameter: string) => void;
            PerformScriptWithOption: (name: string, parameter: string, option: FMScriptOption) => void;
        };
    }
}
