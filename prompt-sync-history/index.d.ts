// Type definitions for prompt-sync-history 1.0.1
// Project: https://github.com/davidmarkclements/prompt-sync-history
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {History} from 'prompt-sync';

declare namespace history {}
declare function history(file?:string, max?:number): History;

export = history;
