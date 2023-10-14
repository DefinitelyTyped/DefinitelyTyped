// Type definitions for codemirror 5.60
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: mihailik <https://github.com/mihailik>
//                 nrbernard <https://github.com/nrbernard>
//                 Pr1st0n <https://github.com/Pr1st0n>
//                 rileymiller <https://github.com/rileymiller>
//                 toddself <https://github.com/toddself>
//                 ysulyma <https://github.com/ysulyma>
//                 azoson <https://github.com/azoson>
//                 kylesferrazza <https://github.com/kylesferrazza>
//                 fityocsaba96 <https://github.com/fityocsaba96>
//                 koddsson <https://github.com/koddsson>
//                 ficristo <https://github.com/ficristo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 5.0

export = CodeMirror;
export as namespace CodeMirror;

declare function CodeMirror(
    place: ParentNode | ((host: HTMLElement) => void),
    options?: CodeMirror.EditorConfiguration,
): CodeMirror.Editor;

declare namespace CodeMirror {
    const Doc: DocConstructor;
    const Pos: PositionConstructor;
    const Pass: { toString(): "CodeMirror.PASS" };

    /** Find the column position at a given string index using a given tabsize. */
    function countColumn(line: string, index: number | null, tabSize: number): number;
    function fromTextArea(host: HTMLTextAreaElement, options?: EditorConfiguration): EditorFromTextArea;

    /** Split a string by new line. */
    function splitLines(text: string): string[];

    /** Check if a char is part of an alphabet. */
    function isWordChar(ch: string): boolean;

    /** Call startState of the mode if available, otherwise return true */
    function startState<T>(mode: Mode<T>, a1?: any, a2?: any): T | boolean;

    /** Compare two positions, return 0 if they are the same, a negative number when a is less, and a positive number otherwise. */
    function cmpPos(a: Position, b: Position): number;

    /**
     * Utility function that computes an end position from a change (an object with from, to, and text properties, as passed to various event handlers).
     * The returned position will be the end of the changed range, after the change is applied.
     */
    function changeEnd(change: EditorChange): Position;

    /**
     * It contains a string that indicates the version of the library. This is a triple of integers "major.minor.patch",
     * where patch is zero for releases, and something else (usually one) for dev snapshots.
     */
    const version: string;

    /**
     * An object containing default values for all options.
     * You can assign to its properties to modify defaults (though this won't affect editors that have already been created).
     */
    const defaults: {
        [option: string]: any;
    };

    /**
     * If you want to define extra methods in terms of the CodeMirror API, it is possible to use defineExtension.
     * This will cause the given value(usually a method) to be added to all CodeMirror instances created from then on.
     */
    function defineExtension(name: string, value: any): void;

    /** Like defineExtension, but the method will be added to the interface for Doc objects instead. */
    function defineDocExtension(name: string, value: any): void;

    /**
     * Similarly, defineOption can be used to define new options for CodeMirror.
     * The updateFunc will be called with the editor instance and the new value when an editor is initialized,
     * and whenever the option is modified through setOption.
     */
    function defineOption(name: string, default_: any, updateFunc: (editor: Editor, val: any, old: any) => void): void;

    /**
     * If your extension just needs to run some code whenever a CodeMirror instance is initialized, use CodeMirror.defineInitHook.
     * Give it a function as its only argument, and from then on, that function will be called (with the instance as argument)
     * whenever a new CodeMirror instance is initialized.
     */
    function defineInitHook(func: (editor: Editor) => void): void;

    /**
     * Registers a helper value with the given name in the given namespace (type). This is used to define functionality
     * that may be looked up by mode. Will create (if it doesn't already exist) a property on the CodeMirror object for
     * the given type, pointing to an object that maps names to values. I.e. after doing
     * CodeMirror.registerHelper("hint", "foo", myFoo), the value CodeMirror.hint.foo will point to myFoo.
     */
    function registerHelper(namespace: string, name: string, helper: any): void;

    /** Given a state object, returns a {state, mode} object with the inner mode and its state for the current position. */
    function innerMode(mode: Mode<any>, state: any): { state: any; mode: Mode<any> };

    /**
     * Sometimes, it is useful to add or override mode object properties from external code.
     * The CodeMirror.extendMode function can be used to add properties to mode objects produced for a specific mode.
     * Its first argument is the name of the mode, its second an object that specifies the properties that should be added.
     * This is mostly useful to add utilities that can later be looked up through getMode.
     */
    function extendMode(name: string, properties: Partial<Mode<any>>): void;

    interface EditorEventMap {
        change: (instance: Editor, changeObj: EditorChange) => void;
        changes: (instance: Editor, changes: EditorChange[]) => void;
        beforeChange: (instance: Editor, changeObj: EditorChangeCancellable) => void;
        cursorActivity: (instance: Editor) => void;
        keyHandled: (instance: Editor, name: string, event: Event) => void;
        inputRead: (instance: Editor, changeObj: EditorChange) => void;
        electricInput: (instance: Editor, line: number) => void;
        beforeSelectionChange: (instance: Editor, obj: EditorSelectionChange) => void;
        viewportChange: (instance: Editor, from: number, to: number) => void;
        swapDoc: (instance: Editor, oldDoc: Doc) => void;
        gutterClick: (instance: Editor, line: number, gutter: string, clickEvent: Event) => void;
        gutterContextMenu: (instance: Editor, line: number, gutter: string, contextMenuEvent: MouseEvent) => void;
        focus: (instance: Editor, event: FocusEvent) => void;
        blur: (instance: Editor, event: FocusEvent) => void;
        scroll: (instance: Editor) => void;
        refresh: (instance: Editor) => void;
        optionChange: (instance: Editor, option: keyof EditorConfiguration) => void;
        scrollCursorIntoView: (instance: Editor, event: Event) => void;
        update: (instance: Editor) => void;
        renderLine: (instance: Editor, lineHandle: LineHandle, element: HTMLElement) => void;
        overwriteToggle: (instance: Editor, overwrite: boolean) => void;
    }

    interface DocEventMap {
        change: (instance: Doc, changeObj: EditorChange) => void;
        beforeChange: (instance: Doc, changeObj: EditorChangeCancellable) => void;
        cursorActivity: (instance: Doc) => void;
        beforeSelectionChange: (instance: Doc, obj: EditorSelectionChange) => void;
    }

    interface LineHandleEventMap {
        delete: () => void;
        change: (instance: LineHandle, changeObj: EditorChange) => void;
    }

    interface TextMarkerEventMap {
        beforeCursorEnter: () => void;
        clear: (from: Position, to: Position) => void;
        hide: () => void;
        unhide: () => void;
    }

    interface LineWidgetEventMap {
        redraw: () => void;
    }

    function on<T extends keyof DocEventMap>(doc: Doc, eventName: T, handler: DocEventMap[T]): void;
    function on<T extends keyof EditorEventMap>(cm: Editor, eventName: T, handler: EditorEventMap[T]): void;
    function on<T extends keyof LineHandleEventMap>(
        lineHandle: LineHandle,
        eventName: T,
        handler: LineHandleEventMap[T],
    ): void;
    function on<T extends keyof TextMarkerEventMap>(
        textMarker: TextMarker<unknown>,
        eventName: T,
        handler: TextMarkerEventMap[T],
    ): void;
    function on<T extends keyof LineWidgetEventMap>(
        LineWidget: LineWidget,
        eventName: T,
        handler: LineWidgetEventMap[T],
    ): void;
    function on(element: any, eventName: string, handler: () => void): void;

    function off<T extends keyof DocEventMap>(doc: Doc, eventName: T, handler: DocEventMap[T]): void;
    function off<T extends keyof EditorEventMap>(cm: Editor, eventName: T, handler: EditorEventMap[T]): void;
    function off<T extends keyof LineHandleEventMap>(
        lineHandle: LineHandle,
        eventName: T,
        handler: LineHandleEventMap[T],
    ): void;
    function off<T extends keyof TextMarkerEventMap>(
        textMarker: TextMarker<unknown>,
        eventName: T,
        handler: TextMarkerEventMap[T],
    ): void;
    function off<T extends keyof LineWidgetEventMap>(
        lineWidget: LineWidget,
        eventName: T,
        handler: LineWidgetEventMap[T],
    ): void;
    function off(element: any, eventName: string, handler: () => void): void;

    /**
     * Various CodeMirror-related objects emit events, which allow client code to react to various situations.
     * Handlers for such events can be registered with the on and off methods on the objects that the event fires on.
     * To fire your own events, use CodeMirror.signal(target, name, args...), where target is a non-DOM-node object.
     */
    function signal<T extends keyof DocEventMap>(doc: Doc, eventName: T, ...args: Parameters<DocEventMap[T]>): void;
    function signal<T extends keyof EditorEventMap>(
        cm: Editor,
        eventName: T,
        ...args: Parameters<EditorEventMap[T]>
    ): void;
    function signal<T extends keyof LineHandleEventMap>(
        lineHandle: LineHandle,
        eventName: T,
        ...args: Parameters<LineHandleEventMap[T]>
    ): void;
    function signal<T extends keyof TextMarkerEventMap>(
        textMarker: TextMarker<unknown>,
        eventName: T,
        ...args: Parameters<TextMarkerEventMap[T]>
    ): void;
    function signal<T extends keyof LineWidgetEventMap>(
        lineWidget: LineWidget,
        eventName: T,
        ...args: Parameters<LineWidgetEventMap[T]>
    ): void;
    function signal(target: any, name: string, ...args: any[]): void;

    /** Modify a keymap to normalize modifier order and properly recognize multi-stroke bindings. */
    function normalizeKeyMap(km: KeyMap): KeyMap;

    type DOMEvent =
        | "mousedown"
        | "dblclick"
        | "touchstart"
        | "contextmenu"
        | "keydown"
        | "keypress"
        | "keyup"
        | "cut"
        | "copy"
        | "paste"
        | "dragstart"
        | "dragenter"
        | "dragover"
        | "dragleave"
        | "drop";

    type CoordsMode = "window" | "page" | "local" | "div";

    interface Token {
        /** The character(on the given line) at which the token starts. */
        start: number;
        /** The character at which the token ends. */
        end: number;
        /** The token's string. */
        string: string;
        /** The token type the mode assigned to the token, such as "keyword" or "comment" (may also be null). */
        type: string | null;
        /** The mode's state at the end of this token. */
        state: any;
    }

    interface KeyMap {
        [keyName: string]: false | string | ((instance: Editor) => void | typeof Pass);
    }

    /**
     * Methods prefixed with doc. can, unless otherwise specified, be called both on CodeMirror (editor) instances and
     * CodeMirror.Doc instances. Thus, the Editor interface extends DocOrEditor defining the common API.
     */
    interface Editor extends DocOrEditor {
        /** Tells you whether the editor currently has focus. */
        hasFocus(): boolean;

        /**
         * Used to find the target position for horizontal cursor motion.start is a { line , ch } object,
         * an integer(may be negative), and unit one of the string "char", "column", or "word".
         * Will return a position that is produced by moving amount times the distance specified by unit.
         * When visually is true , motion in right - to - left text will be visual rather than logical.
         * When the motion was clipped by hitting the end or start of the document, the returned value will have a hitSide property set to true.
         */
        findPosH(
            start: Position,
            amount: number,
            unit: string,
            visually: boolean,
        ): { line: number; ch: number; hitSide?: boolean | undefined };

        /**
         * Similar to findPosH , but used for vertical motion.unit may be "line" or "page".
         * The other arguments and the returned value have the same interpretation as they have in findPosH.
         */
        findPosV(
            start: Position,
            amount: number,
            unit: string,
        ): { line: number; ch: number; hitSide?: boolean | undefined };

        /** Returns the start and end of the 'word' (the stretch of letters, whitespace, or punctuation) at the given position. */
        findWordAt(pos: Position): Range;

        /** Change the configuration of the editor. option should the name of an option, and value should be a valid value for that option. */
        setOption<K extends keyof EditorConfiguration>(option: K, value: EditorConfiguration[K]): void;

        /** Retrieves the current value of the given option for this editor instance. */
        getOption<K extends keyof EditorConfiguration>(option: K): EditorConfiguration[K];

        /**
         * Attach an additional keymap to the editor.
         * This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
         * Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
         * the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
         * in which case they end up below other keymaps added with this method.
         */
        addKeyMap(map: string | KeyMap, bottom?: boolean): void;

        /**
         * Disable a keymap added with addKeyMap.Either pass in the keymap object itself , or a string,
         * which will be compared against the name property of the active keymaps.
         */
        removeKeyMap(map: string | KeyMap): void;

        /**
         * Enable a highlighting overlay.This is a stateless mini-mode that can be used to add extra highlighting.
         * For example, the search add - on uses it to highlight the term that's currently being searched.
         * mode can be a mode spec or a mode object (an object with a token method). The options parameter is optional. If given, it should be an object.
         * Currently, only the opaque option is recognized. This defaults to off, but can be given to allow the overlay styling, when not null,
         * to override the styling of the base mode entirely, instead of the two being applied together.
         */
        addOverlay(mode: any, options?: { opaque?: boolean | undefined; priority?: number | undefined }): void;

        /** Pass this the exact argument passed for the mode parameter to addOverlay to remove an overlay again. */
        removeOverlay(mode: any): void;

        /** Retrieve the currently active document from an editor. */
        getDoc(): Doc;

        /** Attach a new document to the editor. Returns the old document, which is now no longer associated with an editor. */
        swapDoc(doc: Doc): Doc;

        /** Get the content of the current editor document. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
        getValue(seperator?: string): string;

        /** Set the content of the current editor document. */
        setValue(content: string): void;

        /**
         * start is a an optional string indicating which end of the selection to return.
         * It may be "from", "to", "head" (the side of the selection that moves when you press shift+arrow),
         * or "anchor" (the fixed side of the selection).Omitting the argument is the same as passing "head". A {line, ch} object will be returned.
         */
        getCursor(start?: string): Position;

        /**
         * Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
         * Will replace all selections with a single, empty selection at the given position.
         * The supported options are the same as for setSelection
         */
        setCursor(
            pos: Position | number,
            ch?: number,
            options?: { bias?: number | undefined; origin?: string | undefined; scroll?: boolean | undefined },
        ): void;

        /**
         * Sets the gutter marker for the given gutter (identified by its CSS class, see the gutters option) to the given value.
         * Value can be either null, to clear the marker, or a DOM element, to set it. The DOM element will be shown in the specified gutter next to the specified line.
         */
        setGutterMarker(line: any, gutterID: string, value: HTMLElement | null): LineHandle;

        /** Remove all gutter markers in the gutter with the given ID. */
        clearGutter(gutterID: string): void;

        /**
         * Set a CSS class name for the given line.line can be a number or a line handle.
         * where determines to which element this class should be applied, can can be one of "text" (the text element, which lies in front of the selection),
         * "background"(a background element that will be behind the selection),
         * or "wrap" (the wrapper node that wraps all of the line's elements, including gutter elements).
         * class should be the name of the class to apply.
         */
        addLineClass(line: any, where: string, _class_: string): LineHandle;

        /**
         * Remove a CSS class from a line.line can be a line handle or number.
         * where should be one of "text", "background", or "wrap"(see addLineClass).
         * class can be left off to remove all classes for the specified node, or be a string to remove only a specific class.
         */
        removeLineClass(line: any, where: string, class_?: string): LineHandle;

        /**
         * Compute the line at the given pixel height. mode is the relative element
         * to use to compute this line, it may be "window", "page" (the default), or "local"
         */
        lineAtHeight(height: number, mode?: CoordsMode): number;

        /**
         * Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
         * "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
         * is the bottom of the last line in the document. By default, the position of the actual text is returned.
         * If includeWidgets is true and the line has line widgets, the position above the first line widget is returned.
         */
        heightAtLine(line: any, mode?: CoordsMode, includeWidgets?: boolean): number;

        /** Returns the line number, text content, and marker status of the given line, which can be either a number or a line handle. */
        lineInfo(
            line: any,
        ): {
            line: any;
            handle: any;
            text: string;
            /** Object mapping gutter IDs to marker elements. */
            gutterMarkers: any;
            textClass: string;
            bgClass: string;
            wrapClass: string;
            /** Array of line widgets attached to this line. */
            widgets: any;
        };

        /**
         * Puts node, which should be an absolutely positioned DOM node, into the editor, positioned right below the given { line , ch } position.
         * When scrollIntoView is true, the editor will ensure that the entire node is visible (if possible).
         * To remove the widget again, simply use DOM methods (move it somewhere else, or call removeChild on its parent).
         */
        addWidget(pos: Position, node: HTMLElement, scrollIntoView: boolean): void;

        /**
         * Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
         * line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
         * options, when given, should be an object that configures the behavior of the widget.
         * Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it.
         */
        addLineWidget(line: any, node: HTMLElement, options?: LineWidgetOptions): LineWidget;

        /**
         * Programatically set the size of the editor (overriding the applicable CSS rules).
         * width and height height can be either numbers(interpreted as pixels) or CSS units ("100%", for example).
         * You can pass null for either of them to indicate that that dimension should not be changed.
         */
        setSize(width: any, height: any): void;

        /** Scroll the editor to a given(pixel) position.Both arguments may be left as null or undefined to have no effect. */
        scrollTo(x?: number | null, y?: number | null): void;

        /**
         * Get an { left , top , width , height , clientWidth , clientHeight } object that represents the current scroll position, the size of the scrollable area,
         * and the size of the visible area(minus scrollbars).
         */
        getScrollInfo(): ScrollInfo;

        /**
         * Scrolls the given element into view.
         * pos can be:
         * - a { line , ch } position, referring to a given character
         * - null, to refer to the cursor
         * - a { left , top , right , bottom } object, in editor-local coordinates
         * - a { from, to } object, in editor-local coordinates
         * The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well.
         */
        scrollIntoView(
            pos: Position | null | { line: number; ch: number } | {
                left: number;
                top: number;
                right: number;
                bottom: number;
            } | { from: Position; to: Position },
            margin?: number,
        ): void;

        /**
         * Returns an { left , top , bottom } object containing the coordinates of the cursor position.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * where specifies the position at which you want to measure. A boolean indicates either the start(true) or the end(false) of the selection.
         */
        cursorCoords(
            where?: boolean | Position | null,
            mode?: CoordsMode,
        ): { left: number; top: number; bottom: number };

        /**
         * Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * This differs from cursorCoords in that it'll give the size of the whole character,
         * rather than just the position that the cursor would have when it would sit at that position.
         */
        charCoords(
            pos: Position,
            mode?: CoordsMode,
        ): { left: number; right: number; top: number; bottom: number };

        /**
         * Given an { left , top } object , returns the { line , ch } position that corresponds to it.
         * The optional mode parameter determines relative to what the coordinates are interpreted.
         * It may be "window", "page" (the default), or "local".
         */
        coordsChar(object: { left: number; top: number }, mode?: CoordsMode): Position;

        /** Returns the line height of the default font for the editor. */
        defaultTextHeight(): number;

        /**
         * Returns the pixel width of an 'x' in the default font for the editor.
         * (Note that for non-monospace fonts, this is mostly useless, and even for monospace fonts, non-ascii characters might have a different width).
         */
        defaultCharWidth(): number;

        /**
         * Returns a { from , to } object indicating the start (inclusive) and end (exclusive) of the currently rendered part of the document.
         * In big documents, when most content is scrolled out of view, CodeMirror will only render the visible part, and a margin around it.
         * See also the viewportChange event.
         */
        getViewport(): { from: number; to: number };

        /**
         * If your code does something to change the size of the editor element (window resizes are already listened for), or unhides it,
         * you should probably follow up by calling this method to ensure CodeMirror is still looking as intended.
         */
        refresh(): void;

        /** Gets the inner mode at a given position. This will return the same as getMode for simple modes, but will return an inner mode for nesting modes (such as htmlmixed). */
        getModeAt(pos: Position): Mode<unknown>;

        /** Retrieves information about the token the current mode found before the given position (a {line, ch} object). */
        getTokenAt(pos: Position, precise?: boolean): Token;

        /**
         * This is a (much) cheaper version of getTokenAt useful for when you just need the type of the token at a given position,
         * and no other information. Will return null for unstyled tokens, and a string, potentially containing multiple
         * space-separated style names, otherwise.
         */
        getTokenTypeAt(pos: Position): string;

        /** This is similar to getTokenAt, but collects all tokens for a given line into an array. */
        getLineTokens(line: number, precise?: boolean): Token[];

        /**
         * Returns the mode's parser state, if any, at the end of the given line number.
         * If no line number is given, the state at the end of the document is returned.
         * This can be useful for storing parsing errors in the state, or getting other kinds of contextual information for a line.
         */
        getStateAfter(line?: number): any;

        /**
         * CodeMirror internally buffers changes and only updates its DOM structure after it has finished performing some operation.
         * If you need to perform a lot of operations on a CodeMirror instance, you can call this method with a function argument.
         * It will call the function, buffering up all changes, and only doing the expensive update after the function returns.
         * This can be a lot faster. The return value from this method will be the return value of your function.
         */
        operation<T>(fn: () => T): T;

        /**
         * In normal circumstances, use the above operation method. But if you want to buffer operations happening asynchronously, or that can't all be wrapped in a callback
         * function, you can call startOperation to tell CodeMirror to start buffering changes, and endOperation to actually render all the updates. Be careful: if you use this
         * API and forget to call endOperation, the editor will just never update.
         */
        startOperation(): void;
        endOperation(): void;

        /**
         * Adjust the indentation of the given line.
         * The second argument (which defaults to "smart") may be one of:
         * "prev" Base indentation on the indentation of the previous line.
         * "smart" Use the mode's smart indentation if available, behave like "prev" otherwise.
         * "add" Increase the indentation of the line by one indent unit.
         * "subtract" Reduce the indentation of the line.
         */
        indentLine(line: number, dir?: string): void;

        /** Indent a selection */
        indentSelection(how: string): void;

        /** Tells you whether the editor's content can be edited by the user. */
        isReadOnly(): boolean;

        /**
         * Switches between overwrite and normal insert mode (when not given an argument),
         * or sets the overwrite mode to a specific state (when given an argument).
         */
        toggleOverwrite(value?: boolean): void;

        /** Runs the command with the given name on the editor. */
        execCommand(name: string): void;

        /** Give the editor focus. */
        focus(): void;

        /**
         * Allow the given string to be translated with the phrases option.
         */
        phrase(text: string): unknown;

        /** Returns the hidden textarea used to read input. */
        getInputField(): HTMLTextAreaElement;

        /** Returns the DOM node that represents the editor, and controls its size. Remove this from your tree to delete an editor instance. */
        getWrapperElement(): HTMLElement;

        /** Returns the DOM node that is responsible for the scrolling of the editor. */
        getScrollerElement(): HTMLElement;

        /** Fetches the DOM node that contains the editor gutters. */
        getGutterElement(): HTMLElement;

        on<T extends keyof EditorEventMap>(eventName: T, handler: EditorEventMap[T]): void;
        on<K extends DOMEvent & keyof GlobalEventHandlersEventMap>(
            eventName: K,
            handler: (instance: Editor, event: GlobalEventHandlersEventMap[K]) => void,
        ): void;

        off<T extends keyof EditorEventMap>(eventName: T, handler: EditorEventMap[T]): void;
        off<K extends DOMEvent & keyof GlobalEventHandlersEventMap>(
            eventName: K,
            handler: (instance: Editor, event: GlobalEventHandlersEventMap[K]) => void,
        ): void;

        /** Expose the state object, so that the Editor.state.completionActive property is reachable */
        state: any;
    }

    interface EditorFromTextArea extends Editor {
        /** Copy the content of the editor into the textarea. */
        save(): void;

        /** Remove the editor, and restore the original textarea (with the editor's current content). */
        toTextArea(): void;

        /** Returns the textarea that the instance was based on. */
        getTextArea(): HTMLTextAreaElement;
    }

    interface ModeSpecOptions {
        /** Below options are supported in CSS mode */

        /** Whether to highlight non-standard CSS property keywords such as margin-inline or zoom (default: true). */
        highlightNonStandardPropertyKeywords?: boolean | undefined;

        /** Below options are supported in Cython/Python modes */

        /**  The version of Python to recognize. Default is 3. */
        version?: 2 | 3 | undefined;
        /**
         * If you have a single-line string that is not terminated at the end of the line, this will show subsequent
         * lines as errors if true, otherwise it will consider the newline as the end of the string. Default is false.
         */
        singleLineStringErrors?: boolean | undefined;
        /**
         * If you want to write long arguments to a function starting on a new line, how much that line should be
         * indented. Defaults to one normal indentation unit.
         */
        hangingIndent?: number | undefined;
        /** Regular Expression for single operator matching */
        singleOperators?: unknown | undefined;
        /**  Regular Expression for single delimiter matching default :^[\\(\\)\\[\\]\\{\\}@,:`=;\\.] */
        singleDelimiters?: unknown | undefined;
        /** Regular Expression for double operators matching, default :^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*)) */
        doubleOperators?: unknown | undefined;
        /** Regular Expression for double delimiters matching default :^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=)) */
        doubleDelimiters?: unknown | undefined;
        /** Regular Expression for triple delimiters matching default :^((//=)|(>>=)|(<<=)|(\\*\\*=)) */
        tripleDelimiters?: unknown | undefined;
        /** RegEx - Regular Expression for identifier, default :^[_A-Za-z][_A-Za-z0-9]* */
        identifiers?: unknown | undefined;
        /** List of extra words ton consider as keywords */
        extra_keywords?: string[] | undefined;
        /** List of extra words ton consider as builtins */
        extra_builtins?: string[] | undefined;

        /** useCPP, which determines whether C preprocessor directives are recognized. */
        useCPP?: boolean | undefined;

        /** Below options are supported in Handlebars/Haskell/YAML front matter  mode */
        base?: string | undefined;

        /** Below options are supported in HTML mixed  mode */
        tags?: { [key: string]: unknown } | undefined;

        /** Below options are supported in JavaScript mixed  mode */

        /** json which will set the mode to expect JSON data rather than a JavaScript program. */
        json?: boolean | undefined;
        /** jsonld which will set the mode to expect JSON-LD linked data rather than a JavaScript program */
        jsonld?: boolean | undefined;
        /** typescript which will activate additional syntax highlighting and some other things for TypeScript code */
        typescript?: boolean | undefined;
        /**
         * trackScope can be set to false to turn off tracking of local variables. This will prevent locals from getting
         * the "variable-2" token type, and will break completion of locals with javascript-hint.
         */
        trackScope?: boolean | undefined;
        /**
         * statementIndent which (given a number) will determine the amount of indentation to use for statements
         * continued on a new line.
         */
        statementIndent?: boolean | undefined;
        /**
         * wordCharacters, a regexp that indicates which characters should be considered part of an identifier.
         *  Defaults to /[\w$]/, which does not handle non-ASCII identifiers. Can be set to something more elaborate to
         *  improve Unicode support.
         */
        wordCharacters?: unknown | undefined;

        /** Below options are supported in Markdown mixed  mode */

        /** Whether to separately highlight markdown meta characters (*[]()etc.) (default: false). */
        highlightFormatting?: boolean | undefined;
        /** Maximum allowed blockquote nesting (default: 0 - infinite nesting). */
        maxBlockquoteDepth?: boolean | undefined;
        /** Whether to highlight inline XML (default: true). */
        xml?: boolean | undefined;
        /**
         * Whether to syntax-highlight fenced code blocks, if given mode is included, or fencedCodeBlockDefaultMode
         * is set (default: true).
         */
        fencedCodeBlockHighlighting?: boolean | undefined;
        /** Mode to use for fencedCodeBlockHighlighting, if given mode is not included. */
        fencedCodeBlockDefaultMode?: string | undefined;
        /** When you want to override default token type names (e.g. {code: "code"}). */
        tokenTypeOverrides?: unknown | undefined;
        /** Allow lazy headers without whitespace between hashtag and text (default: false). */
        allowAtxHeaderWithoutSpace?: boolean | undefined;

        /** Below options are supported in GFM mode mode */
        gitHubSpice?: boolean | undefined;
        taskLists?: boolean | undefined;
        strikethrough?: boolean | undefined;
        emoji?: boolean | undefined;

        /** Below options are supported in Smarty mode */

        /** leftDelimiter and rightDelimiter, which should be strings that determine where the Smarty syntax starts and ends. */
        leftDelimiter?: string | undefined;
        rightDelimiter?: string | undefined;
        baseMode?: string | undefined;

        /** Below options are supported in sTeX mode */

        /** Whether to start parsing in math mode (default: false) */
        inMathMode?: boolean | undefined;

        /** Below options are supported in SystemVerilog mode */

        /** List of keywords which should not cause indentation to increase. */
        noIndentKeywords?: unknown | undefined;

        /** Below options are supported in VHDL mode */

        /** List of atom words. Default: "null" */
        atoms?: unknown | undefined;
        /** List of meta hooks. Default: ["`", "$"] */
        hooks?: unknown | undefined;
        /** Whether multi-line strings are accepted. Default: false */
        multiLineStrings?: boolean | undefined;

        /** Below options are supported in XML mode */

        /**
         * This switches the mode to parse HTML instead of XML. This means attributes do not have to be quoted,
         * and some elements (such as br) do not require a closing tag.
         */
        htmlMode?: boolean | undefined;
        /**
         * Controls whether the mode checks that close tags match the corresponding opening tag,
         * and highlights mismatches as errors. Defaults to true.
         */
        matchClosing?: boolean | undefined;
        /** Setting this to true will force the opening tag of CDATA blocks to not be indented. */
        alignCDATA?: boolean | undefined;
    }

    type ModeSpec<T> =
        & {
            [P in keyof T]: T[P];
        }
        & { name: string };

    interface SelectionOptions {
        /**
         * Determines whether the selection head should be scrolled into view. Defaults to true.
         */
        scroll?: boolean | undefined;

        /**
         * Determines whether the selection history event may be merged with the previous one.
         * When an origin starts with the character +, and the last recorded selection had the same origin
         * and was similar (close in time, both collapsed or both non-collapsed), the new one will replace
         * the old one. When it starts with *, it will always replace the previous event (if that had the same
         * origin). Built-in motion uses the "+move" origin. User input uses the "+input" origin.
         */
        origin?: string | undefined;

        /**
         * Determine the direction into which the selection endpoints should be adjusted when they fall inside
         * an atomic range. Can be either -1 (backward) or 1 (forward). When not given, the bias will be based
         * on the relative position of the old selection—the editor will try to move further away from that,
         * to prevent getting stuck.
         */
        bias?: number | undefined;
    }

    interface DocConstructor {
        new(text: string, mode?: string | ModeSpec<ModeSpecOptions>, firstLineNumber?: number, lineSep?: string): Doc;
        (text: string, mode?: string | ModeSpec<ModeSpecOptions>, firstLineNumber?: number, lineSep?: string): Doc;
    }

    interface DocOrEditor {
        /** Get the mode option */
        modeOption: string | ModeSpec<ModeSpecOptions>;

        /** Get the current editor content. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
        getValue(seperator?: string): string;

        /** Set the editor content. */
        setValue(content: string): void;

        /**
         * Get the text between the given points in the editor, which should be {line, ch} objects.
         * An optional third argument can be given to indicate the line separator string to use (defaults to "\n").
         */
        getRange(from: Position, to: Position, seperator?: string): string;

        /**
         * Replace the part of the document between from and to with the given string.
         * from and to must be {line, ch} objects. to can be left off to simply insert the string at position from.
         */
        replaceRange(
            replacement: string | string[],
            from: Position,
            to?: Position,
            origin?: string,
        ): void;

        /** Get the content of line n. */
        getLine(n: number): string;

        /** Set the content of line n. */
        setLine(n: number, text: string): void;

        /** Remove the given line from the document. */
        removeLine(n: number): void;

        /** Get the number of lines in the editor. */
        lineCount(): number;

        /**
         * Get the first line of the editor. This will usually be zero but for linked sub-views,
         * or documents instantiated with a non-zero first line, it might return other values.
         */
        firstLine(): number;

        /** Get the last line of the editor. This will usually be lineCount() - 1, but for linked sub-views, it might return other values. */
        lastLine(): number;

        /** Fetches the line handle for the given line number. */
        getLineHandle(num: number): LineHandle;

        /** Given a line handle, returns the current position of that line (or null when it is no longer in the document). */
        getLineNumber(handle: LineHandle): number | null;

        /**
         * Iterate over the whole document, and call f for each line, passing the line handle.
         * This is a faster way to visit a range of line handlers than calling getLineHandle for each of them.
         * Note that line handles have a text property containing the line's content (as a string).
         */
        eachLine(f: (line: LineHandle) => void): void;

        /**
         * Iterate over the range from start up to (not including) end, and call f for each line, passing the line handle.
         * This is a faster way to visit a range of line handlers than calling getLineHandle for each of them.
         * Note that line handles have a text property containing the line's content (as a string).
         */
        eachLine(start: number, end: number, f: (line: LineHandle) => void): void;

        /**
         * Set the editor content as 'clean', a flag that it will retain until it is edited, and which will be set again
         * when such an edit is undone again. Useful to track whether the content needs to be saved. This function is deprecated
         * in favor of changeGeneration, which allows multiple subsystems to track different notions of cleanness without interfering.
         */
        markClean(): void;

        /**
         * Returns a number that can later be passed to isClean to test whether any edits were made (and not undone) in the
         * meantime. If closeEvent is true, the current history event will be ‘closed’, meaning it can't be combined with further
         * changes (rapid typing or deleting events are typically combined).
         */
        changeGeneration(closeEvent?: boolean): number;

        /**
         * Returns whether the document is currently clean — not modified since initialization or the last call to markClean if
         * no argument is passed, or since the matching call to changeGeneration if a generation value is given.
         */
        isClean(generation?: number): boolean;

        /** Get the currently selected code. */
        getSelection(): string;

        /** Returns an array containing a string for each selection, representing the content of the selections. */
        getSelections(lineSep?: string): string[];

        /**
         * Replace the selection with the given string. By default, the new selection will span the inserted text.
         * The optional collapse argument can be used to change this -- passing "start" or "end" will collapse the selection to the start or end of the inserted text.
         */
        replaceSelection(replacement: string, collapse?: string): void;

        /**
         * Replaces the content of the selections with the strings in the array.
         * The length of the given array should be the same as the number of active selections.
         * The collapse argument works the same as in replaceSelection.
         */
        replaceSelections(replacements: string[], collapse?: string): void;

        /**
         * start is a an optional string indicating which end of the selection to return.
         * It may be "from", "to", "head" (the side of the selection that moves when you press shift+arrow),
         * or "anchor" (the fixed side of the selection).Omitting the argument is the same as passing "head". A {line, ch} object will be returned.
         */
        getCursor(start?: string): Position;

        /**
         * Retrieves a list of all current selections. These will always be sorted, and never overlap (overlapping selections are merged).
         * Each object in the array contains anchor and head properties referring to {line, ch} objects.
         */
        listSelections(): Range[];

        /** Return true if any text is selected. */
        somethingSelected(): boolean;

        /**
         * Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
         * Will replace all selections with a single, empty selection at the given position.
         * The supported options are the same as for setSelection
         */
        setCursor(
            pos: Position | number,
            ch?: number,
            options?: { bias?: number | undefined; origin?: string | undefined; scroll?: boolean | undefined },
        ): void;

        /** Set a single selection range. anchor and head should be {line, ch} objects. head defaults to anchor when not given. */
        setSelection(
            anchor: Position,
            head?: Position,
            options?: { bias?: number | undefined; origin?: string | undefined; scroll?: boolean | undefined },
        ): void;

        /**
         * Sets a new set of selections. There must be at least one selection in the given array. When primary is a
         * number, it determines which selection is the primary one. When it is not given, the primary index is taken from
         * the previous selection, or set to the last range if the previous selection had less ranges than the new one.
         * Supports the same options as setSelection.
         */
        setSelections(
            ranges: Array<{ anchor: Position; head: Position }>,
            primary?: number,
            options?: SelectionOptions,
        ): void;

        /**
         * Adds a new selection to the existing set of selections, and makes it the primary selection.
         */
        addSelection(anchor: Position, head?: Position): void;

        /**
         * Similar to setSelection, but will, if shift is held or the extending flag is set,
         * move the head of the selection while leaving the anchor at its current place.
         * to is optional, and can be passed to ensure a region (for example a word or paragraph) will end up selected
         * (in addition to whatever lies between that region and the current anchor). When multiple selections
         * are present, all but the primary selection will be dropped by this method. Supports the same options
         * as setSelection.
         */
        extendSelection(from: Position, to?: Position, options?: SelectionOptions): void;

        /**
         * An equivalent of extendSelection that acts on all selections at once.
         */
        extendSelections(heads: Position[], options?: SelectionOptions): void;

        /**
         * Applies the given function to all existing selections, and calls extendSelections on the result.
         */
        extendSelectionsBy(f: (range: Range) => Position): void;

        /**
         * Sets or clears the 'extending' flag , which acts similar to the shift key,
         * in that it will cause cursor movement and calls to extendSelection to leave the selection anchor in place.
         */
        setExtending(value: boolean): void;

        /**
         * Get the value of the 'extending' flag.
         */
        getExtending(): boolean;

        /** Create a new document that's linked to the target document. Linked documents will stay in sync (changes to one are also applied to the other) until unlinked. */
        linkedDoc(options: {
            /**
             * When turned on, the linked copy will share an undo history with the original.
             * Thus, something done in one of the two can be undone in the other, and vice versa.
             */
            sharedHist?: boolean | undefined;
            from?: number | undefined;
            /**
             * Can be given to make the new document a subview of the original. Subviews only show a given range of lines.
             * Note that line coordinates inside the subview will be consistent with those of the parent,
             * so that for example a subview starting at line 10 will refer to its first line as line 10, not 0.
             */
            to?: number | undefined;
            /** By default, the new document inherits the mode of the parent. This option can be set to a mode spec to give it a different mode. */
            mode?: string | ModeSpec<ModeSpecOptions> | undefined;
        }): Doc;

        /**
         * Break the link between two documents. After calling this , changes will no longer propagate between the documents,
         * and, if they had a shared history, the history will become separate.
         */
        unlinkDoc(doc: Doc): void;

        /**
         * Will call the given function for all documents linked to the target document. It will be passed two arguments,
         * the linked document and a boolean indicating whether that document shares history with the target.
         */
        iterLinkedDocs(fn: (doc: Doc, sharedHist: boolean) => void): void;

        /** Undo one edit (if any undo events are stored). */
        undo(): void;

        /** Redo one undone edit. */
        redo(): void;

        /**
         * Undo one edit or selection change.
         */
        undoSelection(): void;

        /**
         * Redo one undone edit or selection change.
         */
        redoSelection(): void;

        /** Returns an object with {undo, redo } properties , both of which hold integers , indicating the amount of stored undo and redo operations. */
        historySize(): { undo: number; redo: number };

        /** Clears the editor's undo history. */
        clearHistory(): void;

        /** Get a (JSON - serializeable) representation of the undo history. */
        getHistory(): any;

        /**
         * Replace the editor's undo history with the one provided, which must be a value as returned by getHistory.
         * Note that this will have entirely undefined results if the editor content isn't also the same as it was when getHistory was called.
         */
        setHistory(history: any): void;

        /** Can be used to mark a range of text with a specific CSS class name. from and to should be { line , ch } objects. */
        markText(
            from: Position,
            to: Position,
            options?: TextMarkerOptions,
        ): TextMarker<MarkerRange>;

        /**
         * Inserts a bookmark, a handle that follows the text around it as it is being edited, at the given position.
         * A bookmark has two methods find() and clear(). The first returns the current position of the bookmark, if it is still in the document,
         * and the second explicitly removes the bookmark.
         */
        setBookmark(
            pos: Position,
            options?: {
                /** Can be used to display a DOM node at the current location of the bookmark (analogous to the replacedWith option to markText). */
                widget?: HTMLElement | undefined;

                /**
                 * By default, text typed when the cursor is on top of the bookmark will end up to the right of the bookmark.
                 * Set this option to true to make it go to the left instead.
                 */
                insertLeft?: boolean | undefined;

                /**
                 * When the target document is linked to other documents, you can set shared to true to make the marker appear in all documents.
                 * By default, a marker appears only in its target document.
                 */
                shared?: boolean | undefined;

                /** As with markText, this determines whether mouse events on the widget inserted for this bookmark are handled by CodeMirror. The default is false. */
                handleMouseEvents?: boolean | undefined;
            },
        ): TextMarker<Position>;

        /** Returns an array of all the bookmarks and marked ranges found between the given positions. */
        findMarks(from: Position, to: Position): TextMarker[];

        /** Returns an array of all the bookmarks and marked ranges present at the given position. */
        findMarksAt(pos: Position): TextMarker[];

        /** Returns an array containing all marked ranges in the document. */
        getAllMarks(): TextMarker[];

        /**
         * Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
         * line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
         * options, when given, should be an object that configures the behavior of the widget.
         * Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it.
         */
        addLineWidget(line: any, node: HTMLElement, options?: LineWidgetOptions): LineWidget;

        /** Remove the line widget */
        removeLineWidget(widget: LineWidget): void;

        /**
         * Gets the mode object for the editor. Note that this is distinct from getOption("mode"), which gives you the mode specification,
         * rather than the resolved, instantiated mode object.
         */
        getMode(): Mode<unknown>;

        /** Returns the preferred line separator string for this document, as per the option by the same name. When that option is null, the string "\n" is returned. */
        lineSeparator(): string;

        /**
         * Calculates and returns a { line , ch } object for a zero-based index whose value is relative to the start of the editor's text.
         * If the index is out of range of the text then the returned object is clipped to start or end of the text respectively.
         */
        posFromIndex(index: number): Position;

        /** The reverse of posFromIndex. */
        indexFromPos(object: Position): number;

        /** Expose the state object, so that the Doc.state.completionActive property is reachable */
        state: any;
    }

    interface Doc extends DocOrEditor {
        /** Retrieve the editor associated with a document. May return null. */
        getEditor(): Editor | null;

        /** Create an identical copy of the given doc. When copyHistory is true , the history will also be copied. */
        copy(copyHistory: boolean): Doc;

        on<T extends keyof DocEventMap>(eventName: T, handler: DocEventMap[T]): void;
        off<T extends keyof DocEventMap>(eventName: T, handler: DocEventMap[T]): void;
    }

    interface LineHandle {
        text: string;
        on<T extends keyof LineHandleEventMap>(eventName: T, handler: LineHandleEventMap[T]): void;
        off<T extends keyof LineHandleEventMap>(leventName: T, handler: LineHandleEventMap[T]): void;
    }

    interface ScrollInfo {
        left: number;
        top: number;
        width: number;
        height: number;
        clientWidth: number;
        clientHeight: number;
    }

    interface MarkerRange {
        from: Position;
        to: Position;
    }

    interface TextMarker<T = MarkerRange | Position> extends Partial<TextMarkerOptions> {
        /** Remove the mark. */
        clear(): void;

        /**
         * Returns a {from, to} object (both holding document positions), indicating the current position of the marked range,
         * or undefined if the marker is no longer in the document.
         */
        find(): T | undefined;

        /** Called when you've done something that might change the size of the marker and want to cheaply update the display */
        changed(): void;

        on<T extends keyof TextMarkerEventMap>(eventName: T, handler: TextMarkerEventMap[T]): void;
        off<T extends keyof TextMarkerEventMap>(eventName: T, handler: TextMarkerEventMap[T]): void;
    }

    interface LineWidget {
        /** Removes the widget. */
        clear(): void;

        /**
         * Call this if you made some change to the widget's DOM node that might affect its height.
         * It'll force CodeMirror to update the height of the line that contains the widget.
         */
        changed(): void;

        on<T extends keyof LineWidgetEventMap>(eventName: T, handler: LineWidgetEventMap[T]): void;
        off<T extends keyof LineWidgetEventMap>(eventName: T, handler: LineWidgetEventMap[T]): void;
    }

    interface LineWidgetOptions {
        /** Whether the widget should cover the gutter. */
        coverGutter?: boolean | undefined;
        /** Whether the widget should stay fixed in the face of horizontal scrolling. */
        noHScroll?: boolean | undefined;
        /** Causes the widget to be placed above instead of below the text of the line. */
        above?: boolean | undefined;
        /** When true, will cause the widget to be rendered even if the line it is associated with is hidden. */
        showIfHidden?: boolean | undefined;
        /**
         * Determines whether the editor will capture mouse and drag events occurring in this widget.
         * Default is false—the events will be left alone for the default browser handler, or specific handlers on the widget, to capture.
         */
        handleMouseEvents?: boolean | undefined;
        /**
         * By default, the widget is added below other widgets for the line.
         * This option can be used to place it at a different position (zero for the top, N to put it after the Nth other widget).
         * Note that this only has effect once, when the widget is created.
         */
        insertAt?: number | undefined;
        /** Add an extra CSS class name to the wrapper element created for the widget. */
        className?: string | undefined;
    }

    interface EditorChange {
        /** Position (in the pre-change coordinate system) where the change started. */
        from: Position;
        /** Position (in the pre-change coordinate system) where the change ended. */
        to: Position;
        /** Array of strings representing the text that replaced the changed range (split by line). */
        text: string[];
        /**  Text that used to be between from and to, which is overwritten by this change. */
        removed?: string[] | undefined;
        /**  String representing the origin of the change event and whether it can be merged with history */
        origin?: string | undefined;
    }

    interface EditorChangeCancellable extends EditorChange {
        /**
         * may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact.
         * If the change came from undo/redo, `update` is undefined and the change cannot be modified.
         */
        update?(from?: Position, to?: Position, text?: string[]): void;

        cancel(): void;
    }

    interface PositionConstructor {
        new(line: number, ch?: number, sticky?: string): Position;
        (line: number, ch?: number, sticky?: string): Position;
    }

    interface EditorSelectionChange {
        ranges: Range[];
        update(ranges: Range[]): void;
        origin?: string | undefined;
    }

    interface Range {
        anchor: Position;
        head: Position;
        from(): Position;
        to(): Position;
        empty(): boolean;
    }

    interface Position {
        ch: number;
        line: number;
        sticky?: string | undefined;
    }

    interface ScrollbarMeasure {
        clientHeight: number;
        viewHeight: number;
        scrollWidth: number;
        viewWidth: number;
        barLeft: number;
        docHeight: number;
        scrollHeight: number;
        nativeBarWidth: number;
        gutterWidth: number;
    }

    interface ScrollbarModel {
        update(measure: ScrollbarMeasure): { bottom: number; right: number };
        clear(): void;
        setScrollLeft(pos: number): void;
        setScrollTop(pos: number): void;
    }

    interface ScrollbarModelConstructor {
        new(
            place: (node: Element) => void,
            scroll: (pos: number, axis: "horizontal" | "vertical") => void,
        ): ScrollbarModel;
    }

    interface ScrollbarModels {
        native: ScrollbarModelConstructor;
        null: ScrollbarModelConstructor;
    }

    const scrollbarModel: ScrollbarModels;

    type InputStyle = "textarea" | "contenteditable";

    interface EditorConfiguration {
        /** The starting value of the editor. Can be a string, or a document object. */
        value?: string | Doc | undefined;

        /**
         * string|object. The mode to use. When not given, this will default to the first mode that was loaded.
         * It may be a string, which either simply names the mode or is a MIME type associated with the mode.
         * Alternatively, it may be an object containing configuration options for the mode,
         * with a name property that names the mode (for example {name: "javascript", json: true}).
         */
        mode?: string | ModeSpec<ModeSpecOptions> | undefined;

        /**
         * Explicitly set the line separator for the editor. By default (value null), the document will be split on CRLFs as well
         * as lone CRs and LFs, and a single LF will be used as line separator in all output (such as getValue). When a specific
         * string is given, lines will only be split on that string, and output will, by default, use that same separator.
         */
        lineSeparator?: string | null | undefined;

        /**
         * The theme to style the editor with. You must make sure the CSS file defining the corresponding .cm-s-[name] styles is loaded.
         * The default is "default".
         */
        theme?: string | undefined;

        /** How many spaces a block (whatever that means in the edited language) should be indented. The default is 2. */
        indentUnit?: number | undefined;

        /** Whether to use the context-sensitive indentation that the mode provides (or just indent the same as the line before). Defaults to true. */
        smartIndent?: boolean | undefined;

        /** The width of a tab character. Defaults to 4. */
        tabSize?: number | undefined;

        /** Whether, when indenting, the first N*tabSize spaces should be replaced by N tabs. Default is false. */
        indentWithTabs?: boolean | undefined;

        /**
         * Configures whether the editor should re-indent the current line when a character is typed
         * that might change its proper indentation (only works if the mode supports indentation). Default is true.
         */
        electricChars?: boolean | undefined;

        /**
         * A regular expression used to determine which characters should be replaced by a special placeholder. Mostly useful for non-printing
         * special characters. The default is /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/.
         */
        specialChars?: RegExp | undefined;

        /**
         * A function that, given a special character identified by the specialChars option, produces a DOM node that is used to
         * represent the character. By default, a red dot (•) is shown, with a title tooltip to indicate the character code.
         */
        specialCharPlaceholder?: ((char: string) => HTMLElement) | undefined;

        /**
         * Flips overall layout and selects base paragraph direction to be left-to-right or right-to-left. Default is "ltr". CodeMirror
         * applies the Unicode Bidirectional Algorithm to each line, but does not autodetect base direction — it's set to the editor
         * direction for all lines. The resulting order is sometimes wrong when base direction doesn't match user intent (for example,
         * leading and trailing punctuation jumps to the wrong side of the line). Therefore, it's helpful for multilingual input to let
         * users toggle this option.
         */
        direction?: "ltr" | "rtl" | undefined;

        /**
         * Determines whether horizontal cursor movement through right-to-left (Arabic, Hebrew) text
         * is visual (pressing the left arrow moves the cursor left)
         * or logical (pressing the left arrow moves to the next lower index in the string, which is visually right in right-to-left text).
         * The default is false on Windows, and true on other platforms.
         */
        rtlMoveVisually?: boolean | undefined;

        /**
         * Configures the keymap to use. The default is "default", which is the only keymap defined in codemirror.js itself.
         * Extra keymaps are found in the keymap directory. See the section on keymaps for more information.
         */
        keyMap?: string | undefined;

        /** Can be used to specify extra keybindings for the editor, alongside the ones defined by keyMap. Should be either null, or a valid keymap value. */
        extraKeys?: string | KeyMap | undefined;

        /** Allows you to configure the behavior of mouse selection and dragging. The function is called when the left mouse button is pressed. */
        configureMouse?:
            | ((
                cm: Editor,
                repeat: "single" | "double" | "triple",
                event: Event,
            ) => MouseSelectionConfiguration)
            | undefined;

        /** Whether CodeMirror should scroll or wrap for long lines. Defaults to false (scroll). */
        lineWrapping?: boolean | undefined;

        /** Whether to show line numbers to the left of the editor. */
        lineNumbers?: boolean | undefined;

        /** At which number to start counting lines. Default is 1. */
        firstLineNumber?: number | undefined;

        /** A function used to format line numbers. The function is passed the line number, and should return a string that will be shown in the gutter. */
        lineNumberFormatter?: ((line: number) => string) | undefined;

        /**
         * Can be used to add extra gutters (beyond or instead of the line number gutter).
         * Should be an array of CSS class names, each of which defines a width (and optionally a background),
         * and which will be used to draw the background of the gutters.
         * May include the CodeMirror-linenumbers class, in order to explicitly set the position of the line number gutter
         * (it will default to be to the right of all other gutters). These class names are the keys passed to setGutterMarker.
         */
        gutters?: Array<string | { className: string; style?: string | undefined }> | undefined;

        /**
         * Determines whether the gutter scrolls along with the content horizontally (false)
         * or whether it stays fixed during horizontal scrolling (true, the default).
         */
        fixedGutter?: boolean | undefined;

        /**
         * Chooses a scrollbar implementation. The default is "native", showing native scrollbars. The core library also
         * provides the "null" style, which completely hides the scrollbars. Addons can implement additional scrollbar models.
         */
        scrollbarStyle?: keyof ScrollbarModels | undefined;

        /**
         * When fixedGutter is on, and there is a horizontal scrollbar, by default the gutter will be visible to the left of this scrollbar.
         * If this option is set to true, it will be covered by an element with class CodeMirror-gutter-filler.
         */
        coverGutterNextToScrollbar?: boolean | undefined;

        /**
         * Selects the way CodeMirror handles input and focus.
         * The core library defines the "textarea" and "contenteditable" input models.
         * On mobile browsers, the default is "contenteditable". On desktop browsers, the default is "textarea".
         * Support for IME and screen readers is better in the "contenteditable" model.
         */
        inputStyle?: InputStyle | undefined;

        /** boolean|string. This disables editing of the editor content by the user. If the special value "nocursor" is given (instead of simply true), focusing of the editor is also disallowed. */
        readOnly?: boolean | "nocursor" | undefined;

        /** This label is read by the screenreaders when CodeMirror text area is focused. This is helpful for accessibility. */
        screenReaderLabel?: string | undefined;

        /** Whether the cursor should be drawn when a selection is active. Defaults to false. */
        showCursorWhenSelecting?: boolean | undefined;

        /** When enabled, which is the default, doing copy or cut when there is no selection will copy or cut the whole lines that have cursors on them. */
        lineWiseCopyCut?: boolean | undefined;

        /**
         * When pasting something from an external source (not from the editor itself), if the number of lines matches the number of selection,
         * CodeMirror will by default insert one line per selection. You can set this to false to disable that behavior.
         */
        pasteLinesPerSelection?: boolean | undefined;

        /** Determines whether multiple selections are joined as soon as they touch (the default) or only when they overlap (true). */
        selectionsMayTouch?: boolean | undefined;

        /** The maximum number of undo levels that the editor stores. Defaults to 40. */
        undoDepth?: number | undefined;

        /** The period of inactivity (in milliseconds) that will cause a new history event to be started when typing or deleting. Defaults to 500. */
        historyEventDelay?: number | undefined;

        /** The tab index to assign to the editor. If not given, no tab index will be assigned. */
        tabindex?: number | undefined;

        /**
         * Can be used to make CodeMirror focus itself on initialization. Defaults to off.
         * When fromTextArea is used, and no explicit value is given for this option, it will be set to true when either the source textarea is focused,
         * or it has an autofocus attribute and no other element is focused.
         */
        autofocus?: boolean | undefined;

        /**
         * Some addons run user-visible strings (such as labels in the interface) through the phrase method to allow for translation.
         * This option determines the return value of that method. When it is null or an object that doesn't have a property named by
         * the input string, that string is returned. Otherwise, the value of the property corresponding to that string is returned.
         */
        phrases?: { [s: string]: unknown } | undefined;

        /** Controls whether drag-and - drop is enabled. On by default. */
        dragDrop?: boolean | undefined;

        /**
         * When set (default is null) only files whose type is in the array can be dropped into the editor.
         * The strings should be MIME types, and will be checked against the type of the File object as reported by the browser.
         */
        allowDropFileTypes?: string[] | null | undefined;

        /**
         * When given , this will be called when the editor is handling a dragenter , dragover , or drop event.
         * It will be passed the editor instance and the event object as arguments.
         * The callback can choose to handle the event itself , in which case it should return true to indicate that CodeMirror should not do anything further.
         */
        onDragEvent?: ((instance: Editor, event: DragEvent) => boolean) | undefined;

        /**
         * This provides a rather low-level hook into CodeMirror's key handling.
         * If provided, this function will be called on every keydown, keyup, and keypress event that CodeMirror captures.
         * It will be passed two arguments, the editor instance and the key event.
         * This key event is pretty much the raw key event, except that a stop() method is always added to it.
         * You could feed it to, for example, jQuery.Event to further normalize it.
         * This function can inspect the key event, and handle it if it wants to.
         * It may return true to tell CodeMirror to ignore the event.
         * Be wary that, on some browsers, stopping a keydown does not stop the keypress from firing, whereas on others it does.
         * If you respond to an event, you should probably inspect its type property and only do something when it is keydown
         * (or keypress for actions that need character data).
         */
        onKeyEvent?: ((instance: Editor, event: KeyboardEvent) => boolean) | undefined;

        /** Half - period in milliseconds used for cursor blinking. The default blink rate is 530ms. */
        cursorBlinkRate?: number | undefined;

        /**
         * How much extra space to always keep above and below the cursor when
         * approaching the top or bottom of the visible view in a scrollable document. Default is 0.
         */
        cursorScrollMargin?: number | undefined;

        /**
         * Determines the height of the cursor. Default is 1 , meaning it spans the whole height of the line.
         * For some fonts (and by some tastes) a smaller height (for example 0.85),
         * which causes the cursor to not reach all the way to the bottom of the line, looks better
         */
        cursorHeight?: number | undefined;

        /**
         * Controls whether, when the context menu is opened with a click outside of the current selection,
         * the cursor is moved to the point of the click. Defaults to true.
         */
        resetSelectionOnContextMenu?: boolean | undefined;

        /**
         * Highlighting is done by a pseudo background thread that will work for workTime milliseconds,
         * and then use timeout to sleep for workDelay milliseconds.
         * The defaults are 200 and 300, you can change these options to make the highlighting more or less aggressive.
         */
        workTime?: number | undefined;

        /** See workTime. */
        workDelay?: number | undefined;

        /**
         * Indicates how quickly CodeMirror should poll its input textarea for changes(when focused).
         * Most input is captured by events, but some things, like IME input on some browsers, don't generate events that allow CodeMirror to properly detect it.
         * Thus, it polls. Default is 100 milliseconds.
         */
        pollInterval?: number | undefined;

        /**
         * By default, CodeMirror will combine adjacent tokens into a single span if they have the same class.
         * This will result in a simpler DOM tree, and thus perform better. With some kinds of styling(such as rounded corners),
         * this will change the way the document looks. You can set this option to false to disable this behavior.
         */
        flattenSpans?: boolean | undefined;

        /**
         * When enabled (off by default), an extra CSS class will be added to each token, indicating the (inner) mode that produced it, prefixed with "cm-m-".
         * For example, tokens from the XML mode will get the cm-m-xml class.
         */
        addModeClass?: boolean | undefined;

        /**
         * When highlighting long lines, in order to stay responsive, the editor will give up and simply style
         * the rest of the line as plain text when it reaches a certain position. The default is 10000.
         * You can set this to Infinity to turn off this behavior.
         */
        maxHighlightLength?: number | undefined;

        /**
         * Specifies the amount of lines that are rendered above and below the part of the document that's currently scrolled into view.
         * This affects the amount of updates needed when scrolling, and the amount of work that such an update does.
         * You should usually leave it at its default, 10. Can be set to Infinity to make sure the whole document is always rendered,
         * and thus the browser's text search works on it. This will have bad effects on performance of big documents.
         */
        viewportMargin?: number | undefined;

        /** Specifies whether or not spellcheck will be enabled on the input. */
        spellcheck?: boolean | undefined;

        /** Specifies whether or not autocorrect will be enabled on the input. */
        autocorrect?: boolean | undefined;

        /** Specifies whether or not autocapitalization will be enabled on the input. */
        autocapitalize?: boolean | undefined;
    }

    interface TextMarkerOptions {
        /** Assigns a CSS class to the marked stretch of text. */
        className?: string | undefined;

        /** Determines whether text inserted on the left of the marker will end up inside or outside of it. */
        inclusiveLeft?: boolean | undefined;

        /** Like inclusiveLeft, but for the right side. */
        inclusiveRight?: boolean | undefined;

        /** For atomic ranges, determines whether the cursor is allowed to be placed directly to the left of the range. Has no effect on non-atomic ranges. */
        selectLeft?: boolean | undefined;

        /** Like selectLeft, but for the right side. */
        selectRight?: boolean | undefined;

        /**
         * Atomic ranges act as a single unit when cursor movement is concerned — i.e. it is impossible to place the cursor inside of them.
         * You can control whether the cursor is allowed to be placed directly before or after them using selectLeft or selectRight.
         * If selectLeft (or right) is not provided, then inclusiveLeft (or right) will control this behavior.
         */
        atomic?: boolean | undefined;

        /** Collapsed ranges do not show up in the display. Setting a range to be collapsed will automatically make it atomic. */
        collapsed?: boolean | undefined;

        /**
         * When enabled, will cause the mark to clear itself whenever the cursor enters its range.
         * This is mostly useful for text - replacement widgets that need to 'snap open' when the user tries to edit them.
         * The "clear" event fired on the range handle can be used to be notified when this happens.
         */
        clearOnEnter?: boolean | undefined;

        /** Determines whether the mark is automatically cleared when it becomes empty. Default is true. */
        clearWhenEmpty?: boolean | undefined;

        /**
         * Use a given node to display this range. Implies both collapsed and atomic.
         * The given DOM node must be an inline element (as opposed to a block element).
         */
        replacedWith?: HTMLElement | undefined;

        /**
         * When replacedWith is given, this determines whether the editor will
         * capture mouse and drag events occurring in this widget. Default is
         * false—the events will be left alone for the default browser handler,
         * or specific handlers on the widget, to capture.
         */
        handleMouseEvents?: boolean | undefined;

        /**
         * A read-only span can, as long as it is not cleared, not be modified except by calling setValue to reset the whole document.
         * Note: adding a read-only span currently clears the undo history of the editor,
         * because existing undo events being partially nullified by read - only spans would corrupt the history (in the current implementation).
         */
        readOnly?: boolean | undefined;

        /** When set to true (default is false), adding this marker will create an event in the undo history that can be individually undone (clearing the marker). */
        addToHistory?: boolean | undefined;

        /** Can be used to specify an extra CSS class to be applied to the leftmost span that is part of the marker. */
        startStyle?: string | undefined;

        /** Equivalent to startStyle, but for the rightmost span. */
        endStyle?: string | undefined;

        /** A string of CSS to be applied to the covered text. For example "color: #fe3". */
        css?: string | undefined;

        /** When given, will give the nodes created for this span a HTML title attribute with the given value. */
        title?: string | undefined;

        /** When given, add the attributes in the given object to the elements created for the marked text. Adding class or style attributes this way is not supported. */
        attributes?: { [name: string]: string } | undefined;

        /**
         * When the target document is linked to other documents, you can set shared to true to make the marker appear in all documents.
         * By default, a marker appears only in its target document.
         */
        shared?: boolean | undefined;
    }

    class StringStream {
        constructor(text: string);
        lastColumnPos: number;
        lastColumnValue: number;
        lineStart: number;

        /**
         * Current position in the string.
         */
        pos: number;

        /**
         * Where the stream's position was when it was first passed to the token function.
         */
        start: number;

        /**
         * The current line's content.
         */
        string: string;

        /**
         * Number of spaces per tab character.
         */
        tabSize: number;

        /**
         * Returns true only if the stream is at the end of the line.
         */
        eol(): boolean;

        /**
         * Returns true only if the stream is at the start of the line.
         */
        sol(): boolean;

        /**
         * Returns the next character in the stream without advancing it. Will return an null at the end of the line.
         */
        peek(): string | null;

        /**
         * Returns the next character in the stream and advances it. Also returns null when no more characters are available.
         */
        next(): string | null;

        /**
         * match can be a character, a regular expression, or a function that takes a character and returns a boolean.
         * If the next character in the stream 'matches' the given argument, it is consumed and returned.
         * Otherwise, undefined is returned.
         */
        eat(match: string | RegExp | ((char: string) => boolean)): string;

        /**
         * Repeatedly calls eat with the given argument, until it fails. Returns true if any characters were eaten.
         */
        eatWhile(match: string | RegExp | ((char: string) => boolean)): boolean;

        /**
         * Shortcut for eatWhile when matching white-space.
         */
        eatSpace(): boolean;

        /**
         * Moves the position to the end of the line.
         */
        skipToEnd(): void;

        /**
         * Skips to the next occurrence of the given character, if found on the current line (doesn't advance the stream if
         * the character does not occur on the line).
         *
         * Returns true if the character was found.
         */
        skipTo(ch: string): boolean;

        /**
         * Act like a multi-character eat - if consume is true or not given - or a look-ahead that doesn't update the stream
         * position - if it is false. pattern can be either a string or a regular expression starting with ^. When it is a
         * string, caseFold can be set to true to make the match case-insensitive. When successfully matching a regular
         * expression, the returned value will be the array returned by match, in case you need to extract matched groups.
         */
        match(pattern: string, consume?: boolean, caseFold?: boolean): boolean;
        match(pattern: RegExp, consume?: boolean): string[];

        /**
         * Backs up the stream n characters. Backing it up further than the start of the current token will cause things to
         * break, so be careful.
         */
        backUp(n: number): void;

        /**
         * Returns the column (taking into account tabs) at which the current token starts.
         */
        column(): number;

        /**
         * Tells you how far the current line has been indented, in spaces. Corrects for tab characters.
         */
        indentation(): number;

        /**
         * Get the string between the start of the current token and the current stream position.
         */
        current(): string;

        /**
         * Returns the content of the line n lines ahead in the stream without
         * advancing it. Will return undefined if not found.
         */
        lookAhead(n: number): string | undefined;
    }

    /**
     * A Mode is, in the simplest case, a lexer (tokenizer) for your language — a function that takes a character stream as input,
     * advances it past a token, and returns a style for that token. More advanced modes can also handle indentation for the language.
     */
    interface Mode<T> {
        name?: string | undefined;

        /**
         * This function should read one token from the stream it is given as an argument, optionally update its state,
         * and return a style string, or null for tokens that do not have to be styled. Multiple styles can be returned, separated by spaces.
         */
        token: (stream: StringStream, state: T) => string | null;

        /**
         * A function that produces a state object to be used at the start of a document.
         */
        startState?: (() => T) | undefined;
        /**
         * For languages that have significant blank lines, you can define a blankLine(state) method on your mode that will get called
         * whenever a blank line is passed over, so that it can update the parser state.
         */
        blankLine?: ((state: T) => void) | undefined;
        /**
         * Given a state returns a safe copy of that state.
         */
        copyState?: ((state: T) => T) | undefined;

        /**
         * Returns the number of spaces of indentation that should be used if a newline were added after the given state. Optionally
         * this can use the textAfter string (which is the text after the current position) or the line string, which is the whole
         * text of the line.
         */
        indent?: ((state: T, textAfter: string, line: string) => number) | undefined;

        /** The four below strings are used for working with the commenting addon. */
        /**
         * String that starts a line comment.
         */
        lineComment?: string | undefined;
        /**
         * String that starts a block comment.
         */
        blockCommentStart?: string | undefined;
        /**
         * String that ends a block comment.
         */
        blockCommentEnd?: string | undefined;
        /**
         * String to put at the start of continued lines in a block comment.
         */
        blockCommentLead?: string | undefined;

        /**
         * Trigger a reindent whenever one of the characters in the string is typed.
         */
        electricChars?: string | undefined;
        /**
         * Trigger a reindent whenever the regex matches the part of the line before the cursor.
         */
        electricinput?: RegExp | undefined;
    }

    /**
     * A function that, given a CodeMirror configuration object and an optional mode configuration object, returns a mode object.
     */
    interface ModeFactory<T> {
        (config: EditorConfiguration, modeOptions?: any): Mode<T>;
    }

    /**
     * id will be the id for the defined mode. Typically, you should use this second argument to defineMode as your module scope function
     * (modes should not leak anything into the global scope!), i.e. write your whole mode inside this function.
     */
    function defineMode(id: string, modefactory: ModeFactory<any>): void;

    /**
     * The first argument is a configuration object as passed to the mode constructor function, and the second argument
     * is a mode specification as in the EditorConfiguration mode option.
     */
    function getMode(config: EditorConfiguration, mode: string | ModeSpec<ModeSpecOptions>): Mode<unknown>;

    /**
     * Utility function from the overlay.js addon that allows modes to be combined. The mode given as the base argument takes care of
     * most of the normal mode functionality, but a second (typically simple) mode is used, which can override the style of text.
     * Both modes get to parse all of the text, but when both assign a non-null style to a piece of code, the overlay wins, unless
     * the combine argument was true and not overridden, or state.overlay.combineTokens was true, in which case the styles are combined.
     */
    function overlayMode(base: Mode<any>, overlay: Mode<any>, combine?: boolean): Mode<any>;

    interface ModeMap {
        [modeName: string]: ModeFactory<any>;
    }

    /**
     * Maps mode names to their constructors
     */
    const modes: ModeMap;

    function defineMIME(mime: string, modeSpec: string | ModeSpec<ModeSpecOptions>): void;

    interface MimeModeMap {
        [mimeName: string]: string | ModeSpec<ModeSpecOptions>;
    }

    /**
     * Maps MIME types to mode specs.
     */
    const mimeModes: MimeModeMap;

    interface CommandActions {
        /** Select the whole content of the editor. */
        selectAll(cm: Editor): void;

        /** When multiple selections are present, this deselects all but the primary selection. */
        singleSelection(cm: Editor): void;

        /** Emacs-style line killing. Deletes the part of the line after the cursor. If that consists only of whitespace, the newline at the end of the line is also deleted. */
        killLine(cm: Editor): void;

        /** Deletes the whole line under the cursor, including newline at the end. */
        deleteLine(cm: Editor): void;

        /** Delete the part of the line before the cursor. */
        delLineLeft(cm: Editor): void;

        /** Delete the part of the line from the left side of the visual line the cursor is on to the cursor. */
        delWrappedLineLeft(cm: Editor): void;

        /** Delete the part of the line from the cursor to the right side of the visual line the cursor is on. */
        delWrappedLineRight(cm: Editor): void;

        /**
         * Undo the last change. Note that, because browsers still don't make it possible for scripts to react to
         * or customize the context menu, selecting undo (or redo) from the context menu in a CodeMirror instance does not work.
         */
        undo(cm: Editor): void;

        /** Redo the last undone change. */
        redo(cm: Editor): void;

        /** Undo the last change to the selection, or if there are no selection-only changes at the top of the history, undo the last change. */
        undoSelection(cm: Editor): void;

        /** Redo the last change to the selection, or the last text change if no selection changes remain. */
        redoSelection(cm: Editor): void;

        /** Move the cursor to the start of the document. */
        goDocStart(cm: Editor): void;

        /** Move the cursor to the end of the document. */
        goDocEnd(cm: Editor): void;

        /** Move the cursor to the start of the line. */
        goLineStart(cm: Editor): void;

        /** Move to the start of the text on the line, or if we are already there, to the actual start of the line (including whitespace). */
        goLineStartSmart(cm: Editor): void;

        /** Move the cursor to the end of the line. */
        goLineEnd(cm: Editor): void;

        /** Move the cursor to the right side of the visual line it is on. */
        goLineRight(cm: Editor): void;

        /** Move the cursor to the left side of the visual line it is on. If this line is wrapped, that may not be the start of the line. */
        goLineLeft(cm: Editor): void;

        /** Move the cursor to the left side of the visual line it is on. If that takes it to the start of the line, behave like goLineStartSmart. */
        goLineLeftSmart(cm: Editor): void;

        /** Move the cursor up one line. */
        goLineUp(cm: Editor): void;

        /** Move down one line. */
        goLineDown(cm: Editor): void;

        /** Move the cursor up one screen, and scroll up by the same distance. */
        goPageUp(cm: Editor): void;

        /** Move the cursor down one screen, and scroll down by the same distance. */
        goPageDown(cm: Editor): void;

        /** Move the cursor one character left, going to the previous line when hitting the start of line. */
        goCharLeft(cm: Editor): void;

        /** Move the cursor one character right, going to the next line when hitting the end of line. */
        goCharRight(cm: Editor): void;

        /** Move the cursor one character left, but don't cross line boundaries. */
        goColumnLeft(cm: Editor): void;

        /** Move the cursor one character right, don't cross line boundaries. */
        goColumnRight(cm: Editor): void;

        /** Move the cursor to the start of the previous word. */
        goWordLeft(cm: Editor): void;

        /** Move the cursor to the end of the next word. */
        goWordRight(cm: Editor): void;

        /**
         * Move to the left of the group before the cursor. A group is a stretch of word characters, a stretch of punctuation
         * characters, a newline, or a stretch of more than one whitespace character.
         */
        goGroupLeft(cm: Editor): void;

        /** Move to the right of the group after the cursor (see above). */
        goGroupRight(cm: Editor): void;

        /** Delete the character before the cursor. */
        delCharBefore(cm: Editor): void;

        /** Delete the character after the cursor. */
        delCharAfter(cm: Editor): void;

        /** Delete up to the start of the word before the cursor. */
        delWordBefore(cm: Editor): void;

        /** Delete up to the end of the word after the cursor. */
        delWordAfter(cm: Editor): void;

        /** Delete to the left of the group before the cursor. */
        delGroupBefore(cm: Editor): void;

        /** Delete to the start of the group after the cursor. */
        delGroupAfter(cm: Editor): void;

        /** Auto-indent the current line or selection. */
        indentAuto(cm: Editor): void;

        /** Indent the current line or selection by one indent unit. */
        indentMore(cm: Editor): void;

        /** Dedent the current line or selection by one indent unit. */
        indentLess(cm: Editor): void;

        /** Insert a tab character at the cursor. */
        insertTab(cm: Editor): void;

        /** Insert the amount of spaces that match the width a tab at the cursor position would have. */
        insertSoftTab(cm: Editor): void;

        /** If something is selected, indent it by one indent unit. If nothing is selected, insert a tab character. */
        defaultTabTab(cm: Editor): void;

        /** Swap the characters before and after the cursor. */
        transposeChars(cm: Editor): void;

        /** Insert a newline and auto-indent the new line. */
        newlineAndIndent(cm: Editor): void;

        /** Flip the overwrite flag. */
        toggleOverwrite(cm: Editor): void;
    }

    /**
     * Commands are parameter-less actions that can be performed on an editor.
     * Their main use is for key bindings.
     * Commands are defined by adding properties to the CodeMirror.commands object.
     */
    const commands: CommandActions;

    interface MouseSelectionConfiguration {
        /**
         * The unit by which to select. May be one of the built-in units
         * or a function that takes a position and returns a range around
         * that, for a custom unit. The default is to return "word" for
         * double clicks, "line" for triple clicks, "rectangle" for alt-clicks
         * (or, on Chrome OS, meta-shift-clicks), and "single" otherwise.
         */
        unit?:
            | "char"
            | "word"
            | "line"
            | "rectangle"
            | ((cm: Editor, pos: Position) => { from: Position; to: Position })
            | undefined;

        /**
         * Whether to extend the existing selection range or start
         * a new one. By default, this is enabled when shift clicking.
         */
        extend?: boolean | undefined;

        /**
         * When enabled, this adds a new range to the existing selection,
         * rather than replacing it. The default behavior is to enable this
         * for command-click on Mac OS, and control-click on other platforms.
         */
        addNew?: boolean | undefined;

        /**
         * When the mouse even drags content around inside the editor, this
         * controls whether it is copied (false) or moved (true). By default, this
         * is enabled by alt-clicking on Mac OS, and ctrl-clicking elsewhere.
         */
        moveOnDrag?: boolean | undefined;
    }
}
