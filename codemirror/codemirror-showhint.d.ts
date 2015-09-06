// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: jacqt <https://github.com/jacqt>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module CodeMirror {
    var commands : any;

    /** Provides a framework for showing autocompletion hints. Defines editor.showHint, which takes an optional
    options object, and pops up a widget that allows the user to select a completion. Finding hints is done with
    a hinting functions (the hint option), which is a function that take an editor instance and options object,
    and return a {list, from, to} object, where list is an array of strings or objects (the completions), and
    from and to give the start and end of the token that is being completed as {line, ch} objects. An optional
    selectedHint property (an integer) can be added to the completion object to control the initially selected hint. */
    function showHint (cm: CodeMirror.Doc, hinter?: (doc : CodeMirror.Doc) => Hints, options?: IShowHintOptions) : void;


    interface Hints {
        from: Position;
        to: Position;
        list: Hint[] | string[];
    }

    /** Interface used by showHint.js Codemirror add-on
    When completions aren't simple strings, they should be objects with the following properties: */
    interface Hint {
        text: string;
        className?: string;
        displayText?: string;
        from?: Position;
        render?: (element: any, self: any, data: any) => void;
        to?: Position;
    }

    interface Editor {
        /** An extension of the existing CodeMirror typings for the Editor.on("keyup", func) syntax */
        on(eventName: string, handler: (doc: CodeMirror.Doc, event : any ) => void ): void;
        off(eventName: string, handler: (doc: CodeMirror.Doc, event : any) => void ): void;
    }

    /** Extend CodeMirror.Doc with a state object, so that the Doc.state.completionActive property is reachable*/
    interface Doc {
        state: any;
        showHint: (options: IShowHintOptions) => void;
    }

    interface IShowHintOptions {
        completeSingle: boolean;
        hint: (doc : CodeMirror.Doc) => Hints;
    }

    /** The Handle used to interact with the autocomplete dialog box.*/
    interface Handle {
        moveFocus(n: number, avoidWrap: boolean): void;
        setFocus(n: number): void;
        menuSize(): number;
        length: number;
        close(): void;
        pick(): void;
        data: any;
    }
}
