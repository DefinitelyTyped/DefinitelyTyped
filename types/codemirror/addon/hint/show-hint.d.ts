// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: jacqt <https://github.com/jacqt>
//                 basarat <https://github.com/basarat>
//                 mbilsing <https://github.com/mbilsing>
//                 orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_show-hint

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface HintHelper {}

    var hint: HintHelper;

    /** Provides a framework for showing autocompletion hints. Defines editor.showHint, which takes an optional
    options object, and pops up a widget that allows the user to select a completion. Finding hints is done with
    a hinting functions (the hint option), which is a function that take an editor instance and options object,
    and return a {list, from, to} object, where list is an array of strings or objects (the completions), and
    from and to give the start and end of the token that is being completed as {line, ch} objects. An optional
    selectedHint property (an integer) can be added to the completion object to control the initially selected hint. */
    function showHint(cm: CodeMirror.Editor, hinter?: HintFunction, options?: ShowHintOptions): void;

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
        hint?: (cm: CodeMirror.Editor, data: Hints, cur: Hint) => void;
        render?: (element: HTMLLIElement, data: Hints, cur: Hint) => void;
        to?: Position;
    }

    interface Editor {
        showHint: (options: ShowHintOptions) => void;
    }

    interface HintFunction<Opts = any> {
        (cm: CodeMirror.Editor, options?: Opts): Hints;
    }

    interface AsyncHintFunction {
        (cm: CodeMirror.Editor, callback: (hints: Hints) => any): any;
        async?: boolean;
    }

    interface ShowHintOptions {
        completeSingle: boolean;
        hint: HintFunction | AsyncHintFunction;
    }

    interface EditorConfiguration {
        showHint?: boolean;
        hintOptions?: ShowHintOptions;
    }
}
