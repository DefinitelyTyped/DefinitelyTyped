// Type definitions for ZeroClipboard
// Project: https://github.com/jonrohan/ZeroClipboard
// Definitions by: Eric J. Smith <https://github.com/ejsmith>
// Updated by: Blake Niemyjski <https://github.com/niemyjski>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

module ZeroClipboard {
    export function setMoviePath(moviePath: string);

    export class Client {
        constructor(element?: any);
        setText(text: string);
        ready: bool;
        clipText: string;
        handCursorEnabled: bool;
        cssEffects: bool;
        glue(element);
    }
}