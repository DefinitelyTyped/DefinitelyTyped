// Type definitions for non-npm package filemaker-webviewer 1.0
// Project: https://claris.com
// Definitions by: Eric Luce <https://github.com/eluce2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Window {
    FileMaker?: {
        PerformScript: (name: string, parameter: string) => void;
        PerformScriptWithOption: (
            name: string,
            parameter: string,
            option: "0" | "1" | "2" | "3" | "4" | "5",
        ) => void;
    };
}
