// Type definitions for CodeMirror loadmode addon
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: bossqone <https://github.com/bossqone>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_loadmode

/// <reference path="../codemirror/codemirror.d.ts" />

declare module CodeMirror {
    var modeURL: string;
    
    function requireMode(mode: string, cont: () => void): void;
    function requireMode(mode: { name: string }, cont: () => void): void;
    
    function autoLoadMode(instance: CodeMirror.Editor, mode: string): void;
    function autoLoadMode(instance: CodeMirror.Editor, mode: { name: string }): void;
}
