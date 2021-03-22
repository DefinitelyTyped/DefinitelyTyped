// Type definitions for codemirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: koddsson <https://github.com/koddsson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import * as CodeMirror from 'codemirror';

interface MimeType {
    name: string;
    mime?: string;
    mimes?: string;
    mode: string;
    file?: RegExp;
    ext?: string[];
    alias?: string[];
}

declare module 'codemirror' {
    const modeInfo: MimeType[];
    function findModeByMIME(mime: string): MimeType;
    function findModeByExtension(ext: string): MimeType;
    function findModeByFileName(filename: string): MimeType;
    function findModeByName(name: string): MimeType;
}
