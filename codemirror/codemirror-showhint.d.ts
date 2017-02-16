// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: jacqt <https://github.com/jacqt>, basarat <https://github.com/basarat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_show-hint

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    var commands: any;

    /** Provides a framework for showing autocompletion hints. Defines editor.showHint, which takes an optional
    options object, and pops up a widget that allows the user to select a completion. Finding hints is done with
    a hinting functions (the hint option), which is a function that take an editor instance and options object,
    and return a {list, from, to} object, where list is an array of strings or objects (the completions), and
    from and to give the start and end of the token that is being completed as {line, ch} objects. An optional
    selectedHint property (an integer) can be added to the completion object to control the initially selected hint. */
    function showHint(cm: CodeMirror.Doc, hinter?: HintFunction, options?: ShowHintOptions): void;

    interface Hints {
        from: Position;
        to: Position;
        list: (Hint | string)[];
    }

    /** Interface used by showHint.js Codemirror add-on
    When completions aren't simple strings, they should be objects with the following properties: */
    interface Hint {
        text: string;
        className?: string;
        displayText?: string;
        from?: Position;
        /** Called if a completion is picked. If provided *you* are responsible for applying the completion */
        hint?: (cm: any, data: Hints, cur: Hint) => void;
        render?: (element: HTMLLIElement, data: Hints, cur: Hint) => void;
        to?: Position;
    }

    interface Editor {
        /** An extension of the existing CodeMirror typings for the Editor.on("keyup", func) syntax */
        on(eventName: string, handler: (doc: CodeMirror.Doc, event: any) => void): void;
        off(eventName: string, handler: (doc: CodeMirror.Doc, event: any) => void): void;
    }

    interface Doc {
        showHint: (options: ShowHintOptions) => void;
    }

    interface HintFunction {
        (doc: CodeMirror.Doc): Hints;
    }

    interface AsyncHintFunction {
        (doc: CodeMirror.Doc, callback: (hints: Hints) => any): any;
        async?: boolean;
    }

    interface ShowHintOptions {
        completeSingle: boolean;
        hint: HintFunction | AsyncHintFunction;
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

    interface EditorConfiguration {
        showHint?: boolean;
        hintOptions?: ShowHintOptions;
    }
}

declare module "codemirror/addon/hint/show-hint" {
    export = CodeMirror;
}
