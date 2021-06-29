import '../../';

declare module '../../' {
    /**
     * Provides a framework for showing autocompletion hints. Defines editor.showHint, which takes an optional
     * options object, and pops up a widget that allows the user to select a completion. Finding hints is done with
     * a hinting functions (the hint option), which is a function that take an editor instance and options object,
     * and return a {list, from, to} object, where list is an array of strings or objects (the completions), and
     * from and to give the start and end of the token that is being completed as {line, ch} objects. An optional
     * selectedHint property (an integer) can be added to the completion object to control the initially selected hint.
     */
    function showHint(cm: Editor, hinter?: HintFunction, options?: ShowHintOptions): void;

    function on<T extends keyof CompletionEventMap>(hints: Hints, eventName: T, handler: CompletionEventMap[T]): void;
    function off<T extends keyof CompletionEventMap>(hints: Hints, eventName: T, handler: CompletionEventMap[T]): void;
    function signal<T extends keyof CompletionEventMap>(hints: Hints, eventName: T, ...args: Parameters<CompletionEventMap[T]>): void;

    interface CompletionEventMap {
        shown: () => void;
        select: (completion: Hint | string, element: Element) => void;
        pick: (completion: Hint | string) => void;
        close: () => void;
    }

    interface Hints {
        from: Position;
        to: Position;
        list: Array<Hint | string>;
    }

    /**
     * Interface used by showHint.js Codemirror add-on
     * When completions aren't simple strings, they should be objects with the following properties:
     */
    interface Hint {
        text: string;
        className?: string;
        displayText?: string;
        from?: Position;
        /** Called if a completion is picked. If provided *you* are responsible for applying the completion */
        hint?: (cm: Editor, data: Hints, cur: Hint) => void;
        render?: (element: HTMLLIElement, data: Hints, cur: Hint) => void;
        to?: Position;
    }

    interface EditorEventMap {
        startCompletion: (instance: Editor) => void;
        endCompletion: (instance: Editor) => void;
    }

    interface Editor {
        showHint(options?: ShowHintOptions): void;
        closeHint(): void;
    }

    interface CommandActions {
        /* An extension of the existing CodeMirror typings for the autocomplete command */
        autocomplete: typeof showHint;
    }

    interface HintFunction {
        (cm: Editor, options: ShowHintOptions): Hints | null | undefined | PromiseLike<Hints | null | undefined>;
    }

    interface AsyncHintFunction {
        (cm: Editor, callback: (hints: Hints | null | undefined) => void, options: ShowHintOptions): void;
        async: true;
    }

    interface HintFunctionResolver {
        resolve(cm: Editor, post: Position): HintFunction | AsyncHintFunction;
    }

    interface ShowHintOptions {
        completeSingle?: boolean;
        hint?: HintFunction | AsyncHintFunction | HintFunctionResolver;
        alignWithWord?: boolean;
        closeCharacters?: RegExp;
        closeOnPick?: boolean;
        closeOnUnfocus?: boolean;
        updateOnCursorActivity?: boolean;
        completeOnSingleClick?: boolean;
        container?: HTMLElement | null;
        customKeys?: { [key: string]: ((editor: Editor, handle: CompletionHandle) => void) | string } | null;
        extraKeys?: { [key: string]: ((editor: Editor, handle: CompletionHandle) => void) | string } | null;
        paddingForScrollbar?: boolean;
        moveOnOverlap?: boolean;
        words?: ReadonlyArray<string>; // used by fromList
    }

    /** The Handle used to interact with the autocomplete dialog box. */
    interface CompletionHandle {
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

    interface HintHelpers {
        auto: HintFunctionResolver;
        fromList: HintFunction;
    }

    const hint: HintHelpers;
}
