/// <reference lib="dom" />

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
