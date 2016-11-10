// Type definitions for prompt-sync-history 1.0.1
// Project: https://github.com/davidmarkclements/prompt-sync-history
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../prompt-sync/prompt-sync" />

declare module 'prompt-sync-history' {
    import {History} from 'prompt-sync';

    namespace history {}
    function history(file?:string, max?:number): History;

    export = history;
}
