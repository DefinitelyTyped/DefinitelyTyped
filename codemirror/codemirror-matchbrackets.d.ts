// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: Sixin Li <https://github.com/sixinli>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_matchbrackets

declare module CodeMirror {
    interface EditorConfiguration {
        //  when set to true, causes matching brackets to be highlighted whenever the cursor is next to them
        matchBrackets?: boolean;
    }
}
