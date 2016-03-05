// Type definitions for CodeMirror meta addon
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: bossqone <https://github.com/bossqone>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_meta

/// <reference path="../codemirror/codemirror.d.ts" />

declare module CodeMirror {
    var modeInfo: CodeMirror.ModeInfo[];
    
    function findModeByMIME(mime: string): CodeMirror.ModeInfo;
    function findModeByExtension(ext: string): CodeMirror.ModeInfo;
    function findModeByFileName(filename: string): CodeMirror.ModeInfo;
    function findModeByName(name: string): CodeMirror.ModeInfo;
    
    interface ModeInfo {
        name: string;
        mode: string;
        mime?: string;
        mimes?: string[];
        ext?: string[];
        file?: RegExp;
        alias?: string[];
    }
}
