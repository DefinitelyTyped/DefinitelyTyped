// Type definitions for blessed 0.1
// Project: https://github.com/chjj/blessed
// Definitions by: Bryn Austin Bellomy <https://github.com/brynbellomy>, Steve Kellock <https://github.com/skellock>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { EventEmitter } from "events";
import * as stream from "stream";
import * as child_process from "child_process";

export class BlessedProgram {
    hideCursor: () => void;
    move: any;
    showCursor: any;
}

export namespace Widgets {
    namespace Types {
        type TTopLeft = string | number | "center";

        type TPosition = string | number;

        type TMouseAction = "mousedown" | "mouseup" | "mousemove";

        interface TStyle {
            type?: string;
            bg?: string;
            fg?: string;
            ch?: string;
            bold?: boolean;
            underline?: boolean;
            blink?: boolean;
            inverse?: boolean;
            invisible?: boolean;
            transparent?: boolean;
            border?: "line" | "bg" | TBorder;
            hover?: boolean;
            focus?: boolean;
            label?: string;
            track?: { bg?: string; fg?: string };
            scrollbar?: { bg?: string; fg?: string };
        }

        interface TBorder {
            /**
             * Type of border (line or bg). bg by default.
             */
            type?: "line" | "bg";

            /**
             * Character to use if bg type, default is space.
             */
            ch?: string;

            /**
             * Border foreground and background, must be numbers (-1 for default).
             */
            bg?: number;
            fg?: number;

            /**
             * Border attributes.
             */
            bold?: string;
            underline?: string;
        }

        interface TCursor {
            /**
             * Have blessed draw a custom cursor and hide the terminal cursor (experimental).
             */
            artificial: boolean;

            /**
             * Shape of the cursor. Can be: block, underline, or line.
             */
            shape: "block" | "underline" | "line";

            /**
             * Whether the cursor blinks.
             */
            blink: boolean;

            /**
             * Color of the color. Accepts any valid color value (null is default).
             */
            color: string;
        }

        type TAlign = "left" | "center" | "right";

        interface ListbarCommand {
            key: string;
            callback(): void;
        }

        interface TImage {
            /**
             * Pixel width.
             */
            width: number;

            /**
             * Pixel height.
             */
            height: number;

            /**
             * Image bitmap.
             */
            bmp: any;

            /**
             * Image cellmap (bitmap scaled down to cell size).
             */
            cellmap: any;
        }

        interface Cursor {
            /**
             * Have blessed draw a custom cursor and hide the terminal cursor (experimental).
             */
            artificial: boolean;

            /**
             * Shape of the cursor. Can be: block, underline, or line.
             */
            shape: boolean;

            /**
             * Whether the cursor blinks.
             */
            blink: boolean;

            /**
             * Color of the color. Accepts any valid color value (null is default).
             */
            color: string;
        }
    }

    namespace Events {
        interface IMouseEventArg {
            x: number;
            y: number;
            action: Types.TMouseAction;
        }

        interface IKeyEventArg {
            full: string;
            name: string;
            shift: boolean;
            ctrl: boolean;
            meta: boolean;
            sequence: string;
        }
    }

    interface NodeChildProcessExecOptions {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }

    interface IDestroyable {
        destroy(): void;
    }

    interface IOptions {}

    interface IHasOptions<T extends IOptions> {
        options: T;
    }

    interface TputsOptions extends IOptions {
        terminal?: string;
        extended?: boolean;
        debug?: boolean;
        termcap?: string;
        terminfoFile?: string;
        terminfoPrefix?: string;
        termcapFile?: string;
    }

    class Tput implements IHasOptions<TputsOptions> {
        constructor(opts: TputsOptions);

        /**
         * Original options object.
         */
        options: TputsOptions;

        debug: boolean;
        padding: boolean;
        extended: boolean;
        printf: boolean;
        termcap: string;
        terminfoPrefix: string;
        terminfoFile: string;
        termcapFile: string;
        error: Error;
        terminal: string;

        setup(): void;
        term(is: any): boolean;
        readTerminfo(term: string): string;
        parseTerminfo(
            data: any,
            file: string
        ): {
            header: {
                dataSize: number;
                headerSize: number;
                magicNumber: boolean;
                namesSize: number;
                boolCount: number;
                numCount: number;
                strCount: number;
                strTableSize: number;
                extended: {
                    dataSize: number;
                    headerSize: number;
                    boolCount: number;
                    numCount: number;
                    strCount: number;
                    strTableSize: number;
                    lastStrTableOffset: number;
                };
            };
            name: string;
            names: string[];
            desc: string;
            bools: any;
            numbers: any;
            strings: any;
        };
    }

    interface IDestroyable {
        destroy(): void;
    }

    interface INodeOptions extends IOptions {
        name?: string;
        screen?: Screen;
        parent?: Node;
        children?: Node[];
        focusable?: boolean;
    }

    type NodeEventType =
        /** Received when node is added to a parent. */
        | "adopt"
        /** Received when node is removed from it's current parent. */
        | "remove"
        /** Received when node gains a new parent. */
        | "reparent"
        /** Received when node is attached to the screen directly or somewhere in its ancestry. */
        | "attach"
        /** Received when node is detached from the screen directly or somewhere in its ancestry. */
        | "detach";

    abstract class Node extends EventEmitter implements IHasOptions<INodeOptions>, IDestroyable {
        constructor(options: INodeOptions);

        focusable: boolean;

        /**
         * Original options object.
         */
        options: INodeOptions;

        /**
         * An object for any miscellanous user data.
         */
        data: { [index: string]: any };

        /**
         * An object for any miscellanous user data.
         */
        _: { [index: string]: any };

        /**
         * An object for any miscellanous user data.
         */
        $: { [index: string]: any };

        /**
         * Type of the node (e.g. box).
         */
        type: string;

        /**
         * Render index (document order index) of the last render call.
         */
        index: number;

        /**
         * Parent screen.
         */
        screen: Screen;

        /**
         * Parent node.
         */
        parent: Node;

        /**
         * Array of node's children.
         */
        children: Node[];

        /**
         * Prepend a node to this node's children.
         */
        prepend(node: Node): void;

        /**
         * Append a node to this node's children.
         */
        append(node: Node): void;

        /**
         * Remove child node from node.
         */
        remove(node: Node): void;

        /**
         * Insert a node to this node's children at index i.
         */
        insert(node: Node, index: number): void;

        /**
         * Insert a node to this node's children before the reference node.
         */
        insertBefore(node: Node, refNode: Node): void;

        /**
         * Insert a node from node after the reference node.
         */
        insertAfter(node: Node, refNode: Node): void;

        /**
         * Remove node from its parent.
         */
        detach(): void;
        free(): void;
        forDescendants(iter: (node: Node) => void, s: any): void;
        forAncestors(iter: (node: Node) => void, s: any): void;
        collectDescendants(s: any): void;
        collectAncestors(s: any): void;

        /**
         * Emit event for element, and recursively emit same event for all descendants.
         */
        emitDescendants(type?: string, ...args: any[]): void;
        emitAncestors(): void;
        hasDescendant(target: Node): void;
        hasAncestor(target: Node): boolean;
        destroy(): void;

        /**
         * Get user property with a potential default value.
         */
        get<T>(name: string, def: T): T;

        /**
         * Set user property to value.
         */
        set(name: string, value: any): void;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: NodeEventType, callback: (arg: Node) => void): this;
    }

    type NodeScreenEventType =
        /**
         * Received when the terminal window focuses/blurs. Requires a terminal supporting the
         * focus protocol and focus needs to be passed to program.enableMouse().
         */
        | "focus"
        /**
         * Received when the terminal window focuses/blurs. Requires a terminal supporting the
         * focus protocol and focus needs to be passed to program.enableMouse().
         */
        | "blur"
        /**
         * Element was clicked (slightly smarter than mouseup).
         */
        | "click"
        | "element click"
        | "element mouseover"
        | "element mouseout"
        | "element mouseup";

    type NodeMouseEventType =
        | "mouse"
        | "mouseout"
        | "mouseover"
        | "mousedown"
        | "mouseup"
        | "mousewheel"
        | "wheeldown"
        | "wheelup"
        | "mousemove";

    type NodeGenericEventType =
        /** Received on screen resize. */
        | "resize"
        /** Received before render. */
        | "prerender"
        /** Received on render. */
        | "render"
        /** Received when the screen is destroyed (only useful when using multiple screens). */
        | "destroy"
        /** Received when the element is moved. */
        | "move"
        /** Received when element is shown. */
        | "show"
        /** Received when element becomes hidden. */
        | "hide"
        | "set content"
        | "parsed content";

    class NodeWithEvents extends Node {
        /**
         * Bind a keypress listener for a specific key.
         */
        key(name: string | string[], listener: (ch: any, key: Events.IKeyEventArg) => void): void;

        /**
         * Bind a keypress listener for a specific key once.
         */
        onceKey(name: string, listener: (ch: any, key: Events.IKeyEventArg) => void): void;

        /**
         * Remove a keypress listener for a specific key.
         */
        unkey(name: string, listener: (ch: any, key: Events.IKeyEventArg) => void): void;
        removeKey(name: string, listener: (ch: any, key: Events.IKeyEventArg) => void): void;

        on(event: string, listener: (ch: any, key: Events.IKeyEventArg) => void): this;
        /** Received on mouse events. */
        on(event: NodeMouseEventType, callback: (arg: Events.IMouseEventArg) => void): this;
        /** Received on key events. */
        on(event: "keypress", callback: (ch: string, key: Events.IKeyEventArg) => void): this;
        on(event: NodeScreenEventType, callback: (arg: Screen) => void): this;
        /** Received when blessed notices something untoward (output is not a tty, terminfo not found, etc). */
        on(event: "warning", callback: (text: string) => void): this;
        on(event: NodeGenericEventType, callback: () => void): this;
    }

    interface IScreenOptions extends INodeOptions {
        /**
         * The blessed Program to be associated with. Will be automatically instantiated if none is provided.
         */
        program?: BlessedProgram;

        /**
         * Attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with
         * uniform cells to their sides). This is known to cause flickering with elements that are not full-width,
         * however, it is more optimal for terminal rendering.
         */
        smartCSR?: boolean;

        /**
         * Do CSR on any element within 20 cols of the screen edge on either side. Faster than smartCSR,
         * but may cause flickering depending on what is on each side of the element.
         */
        fastCSR?: boolean;

        /**
         * Attempt to perform back_color_erase optimizations for terminals that support it. It will also work
         * with terminals that don't support it, but only on lines with the default background color. As it
         * stands with the current implementation, it's uncertain how much terminal performance this adds at
         * the cost of overhead within node.
         */
        useBCE?: boolean;

        /**
         * Amount of time (in ms) to redraw the screen after the terminal is resized (Default: 300).
         */
        resizeTimeout?: number;

        /**
         * The width of tabs within an element's content.
         */
        tabSize?: number;

        /**
         * Automatically position child elements with border and padding in mind (NOTE: this is a recommended
         * option. It may become default in the future).
         */
        autoPadding?: boolean;

        cursor?: Types.TCursor;

        /**
         * Create a log file. See log method.
         */
        log?(...msg: any[]): void;

        /**
         * Dump all output and input to desired file. Can be used together with log option if set as a boolean.
         */
        dump?: string;

        /**
         * Debug mode. Enables usage of the debug method. Also creates a debug console which will display when
         * pressing F12. It will display all log and debug messages.
         */
        debug?: boolean;

        /**
         * Array of keys in their full format (e.g. C-c) to ignore when keys are locked or grabbed. Useful
         * for creating a key that will always exit no matter whether the keys are locked.
         */
        ignoreLocked?: boolean;

        /**
         * Automatically "dock" borders with other elements instead of overlapping, depending on position
         * (experimental). For example: These border-overlapped elements:
         */
        dockBorders?: boolean;

        /**
         * Normally, dockable borders will not dock if the colors or attributes are different. This option
         * will allow them to dock regardless. It may produce some odd looking multi-colored borders though.
         */
        ignoreDockContrast?: boolean;

        /**
         * Allow for rendering of East Asian double-width characters, utf-16 surrogate pairs, and unicode
         * combining characters. This allows you to display text above the basic multilingual plane. This
         * is behind an option because it may affect performance slightly negatively. Without this option
         * enabled, all double-width, surrogate pair, and combining characters will be replaced by '??',
         * '?', '' respectively. (NOTE: iTerm2 cannot display combining characters properly. Blessed simply
         * removes them from an element's content if iTerm2 is detected).
         */
        fullUnicode?: boolean;

        /**
         * Send focus events after mouse is enabled.
         */
        sendFocus?: boolean;

        /**
         * Display warnings (such as the output not being a TTY, similar to ncurses).
         */
        warnings?: boolean;

        /**
         * Force blessed to use unicode even if it is not detected via terminfo, env variables, or windows code page.
         * If value is true unicode is forced. If value is false non-unicode is forced (default: null).
         */
        forceUnicode?: boolean;

        /**
         * Input and output streams. process.stdin/process.stdout by default, however, it could be a
         * net.Socket if you want to make a program that runs over telnet or something of that nature.
         */
        input?: stream.Writable;

        /**
         * Input and output streams. process.stdin/process.stdout by default, however, it could be a
         * net.Socket if you want to make a program that runs over telnet or something of that nature.
         */
        output?: stream.Readable;

        /**
         * The blessed Tput object (only available if you passed tput: true to the Program constructor.)
         */
        tput?: Tput;

        /**
         * Top of the focus history stack.
         */
        focused?: BlessedElement;

        /**
         * Width of the screen (same as program.cols).
         */
        width?: Types.TPosition;

        /**
         * Height of the screen (same as program.rows).
         */
        height?: Types.TPosition;

        /**
         * Same as screen.width.
         */
        cols?: number;

        /**
         * Same as screen.height.
         */
        rows?: number;

        /**
         * Relative top offset, always zero.
         */
        top?: Types.TTopLeft;

        /**
         * Relative left offset, always zero.
         */
        left?: Types.TTopLeft;

        /**
         * Relative right offset, always zero.
         */
        right?: Types.TPosition;

        /**
         * Relative bottom offset, always zero.
         */
        bottom?: Types.TPosition;

        /**
         * Absolute top offset, always zero.
         */
        atop?: Types.TTopLeft;

        /**
         * Absolute left offset, always zero.
         */
        aleft?: Types.TTopLeft;

        /**
         * Absolute right offset, always zero.
         */
        aright?: Types.TPosition;

        /**
         * Absolute bottom offset, always zero.
         */
        abottom?: Types.TPosition;

        /**
         * Whether the focused element grabs all keypresses.
         */
        grabKeys?: any;

        /**
         * Prevent keypresses from being received by any element.
         */
        lockKeys?: boolean;

        /**
         * The currently hovered element. Only set if mouse events are bound.
         */
        hover?: any;

        /**
         * Set or get terminal name. Set calls screen.setTerminal() internally.
         */
        terminal?: string;

        /**
         * Set or get window title.
         */
        title?: string;
    }

    class Screen extends NodeWithEvents implements IHasOptions<IScreenOptions> {
        constructor(opts: IScreenOptions);

        cleanSides: any;

        /**
         * Original options object.
         */
        options: IScreenOptions;

        /**
         * The blessed Program to be associated with. Will be automatically instantiated if none is provided.
         */
        program: BlessedProgram;

        /**
         * Attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with
         * uniform cells to their sides). This is known to cause flickering with elements that are not full-width,
         * however, it is more optimal for terminal rendering.
         */
        smartCSR: boolean;

        /**
         * Do CSR on any element within 20 cols of the screen edge on either side. Faster than smartCSR,
         * but may cause flickering depending on what is on each side of the element.
         */
        fastCSR: boolean;

        /**
         * Attempt to perform back_color_erase optimizations for terminals that support it. It will also work
         * with terminals that don't support it, but only on lines with the default background color. As it
         * stands with the current implementation, it's uncertain how much terminal performance this adds at
         * the cost of overhead within node.
         */
        useBCE: boolean;

        /**
         * Amount of time (in ms) to redraw the screen after the terminal is resized (Default: 300).
         */
        resizeTimeout: number;

        /**
         * The width of tabs within an element's content.
         */
        tabSize: number;

        /**
         * Automatically position child elements with border and padding in mind (NOTE: this is a recommended
         * option. It may become default in the future).
         */
        autoPadding: boolean;

        cursor: Types.TCursor;

        /**
         * Dump all output and input to desired file. Can be used together with log option if set as a boolean.
         */
        dump: string;

        /**
         * Array of keys in their full format (e.g. C-c) to ignore when keys are locked or grabbed. Useful
         * for creating a key that will always exit no matter whether the keys are locked.
         */
        ignoreLocked: boolean;

        /**
         * Automatically "dock" borders with other elements instead of overlapping, depending on position
         * (experimental). For example: These border-overlapped elements:
         */
        dockBorders: boolean;

        /**
         * Normally, dockable borders will not dock if the colors or attributes are different. This option
         * will allow them to dock regardless. It may produce some odd looking multi-colored borders though.
         */
        ignoreDockContrast: boolean;

        /**
         * Allow for rendering of East Asian double-width characters, utf-16 surrogate pairs, and unicode
         * combining characters. This allows you to display text above the basic multilingual plane. This
         * is behind an option because it may affect performance slightly negatively. Without this option
         * enabled, all double-width, surrogate pair, and combining characters will be replaced by '??',
         * '?', '' respectively. (NOTE: iTerm2 cannot display combining characters properly. Blessed simply
         * removes them from an element's content if iTerm2 is detected).
         */
        fullUnicode: boolean;

        /**
         * Send focus events after mouse is enabled.
         */
        sendFocus: boolean;

        /**
         * Display warnings (such as the output not being a TTY, similar to ncurses).
         */
        warnings: boolean;

        /**
         * Force blessed to use unicode even if it is not detected via terminfo, env variables, or windows code page.
         * If value is true unicode is forced. If value is false non-unicode is forced (default: null).
         */
        forceUnicode: boolean;

        /**
         * Input and output streams. process.stdin/process.stdout by default, however, it could be a
         * net.Socket if you want to make a program that runs over telnet or something of that nature.
         */
        input: stream.Writable;

        /**
         * Input and output streams. process.stdin/process.stdout by default, however, it could be a
         * net.Socket if you want to make a program that runs over telnet or something of that nature.
         */
        output: stream.Readable;

        /**
         * The blessed Tput object (only available if you passed tput: true to the Program constructor.)
         */
        tput: Tput;

        /**
         * Top of the focus history stack.
         */
        focused: BlessedElement;

        /**
         * Width of the screen (same as program.cols).
         */
        width: Types.TPosition;

        /**
         * Height of the screen (same as program.rows).
         */
        height: Types.TPosition;

        /**
         * Same as screen.width.
         */
        cols: number;

        /**
         * Same as screen.height.
         */
        rows: number;

        /**
         * Relative top offset, always zero.
         */
        top: Types.TTopLeft;

        /**
         * Relative left offset, always zero.
         */
        left: Types.TTopLeft;

        /**
         * Relative right offset, always zero.
         */
        right: Types.TPosition;

        /**
         * Relative bottom offset, always zero.
         */
        bottom: Types.TPosition;

        /**
         * Absolute top offset, always zero.
         */
        atop: Types.TTopLeft;

        /**
         * Absolute left offset, always zero.
         */
        aleft: Types.TTopLeft;

        /**
         * Absolute right offset, always zero.
         */
        aright: Types.TPosition;

        /**
         * Absolute bottom offset, always zero.
         */
        abottom: Types.TPosition;

        /**
         * Whether the focused element grabs all keypresses.
         */
        grabKeys: any;

        /**
         * Prevent keypresses from being received by any element.
         */
        lockKeys: boolean;

        /**
         * The currently hovered element. Only set if mouse events are bound.
         */
        hover: any;

        /**
         * Set or get terminal name. Set calls screen.setTerminal() internally.
         */
        terminal: string;

        /**
         * Set or get window title.
         */
        title: string;

        /**
         * Write string to the log file if one was created.
         */
        log(...msg: any[]): void;

        /**
         * Same as the log method, but only gets called if the debug option was set.
         */
        debug(...msg: string[]): void;

        /**
         * Allocate a new pending screen buffer and a new output screen buffer.
         */
        alloc(): void;

        /**
         * Reallocate the screen buffers and clear the screen.
         */
        realloc(): void;

        /**
         * Draw the screen based on the contents of the screen buffer.
         */
        draw(start: number, end: number): void;

        /**
         * Render all child elements, writing all data to the screen buffer and drawing the screen.
         */
        render(): void;

        /**
         * Clear any region on the screen.
         */
        clearRegion(x1: number, x2: number, y1: number, y2: number): void;

        /**
         * Fill any region with a character of a certain attribute.
         */
        fillRegion(attr: string, ch: string, x1: number, x2: number, y1: number, y2: number): void;

        /**
         * Focus element by offset of focusable elements.
         */
        focusOffset(offset: number): any;

        /**
         * Focus previous element in the index.
         */
        focusPrevious(): void;

        /**
         * Focus next element in the index.
         */
        focusNext(): void;

        /**
         * Push element on the focus stack (equivalent to screen.focused = el).
         */
        focusPush(element: BlessedElement): void;

        /**
         * Pop element off the focus stack.
         */
        focusPop(): BlessedElement;

        /**
         * Save the focused element.
         */
        saveFocus(): BlessedElement;

        /**
         * Restore the saved focused element.
         */
        restoreFocus(): BlessedElement;

        /**
         * "Rewind" focus to the last visible and attached element.
         */
        rewindFocus(): BlessedElement;

        /**
         * Spawn a process in the foreground, return to blessed app after exit.
         */
        spawn(file: string, args?: string[], options?: NodeChildProcessExecOptions): child_process.ChildProcess;

        /**
         * Spawn a process in the foreground, return to blessed app after exit. Executes callback on error or exit.
         */
        exec(
            file: string,
            args: string[],
            options: NodeChildProcessExecOptions,
            callback: (...args: any[]) => void
        ): child_process.ChildProcess;

        /**
         * Read data from text editor.
         */
        readEditor(options: any, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
        readEditor(callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;

        /**
         * Set effects based on two events and attributes.
         */
        setEffects(el: BlessedElement, fel: BlessedElement, over: any, out: any, effects: any, temp: any): void;

        /**
         * Insert a line into the screen (using csr: this bypasses the output buffer).
         */
        insertLine(n: number, y: number, top: number, bottom: number): void;

        /**
         * Delete a line from the screen (using csr: this bypasses the output buffer).
         */
        deleteLine(n: number, y: number, top: number, bottom: number): void;

        /**
         * Insert a line at the bottom of the screen.
         */
        insertBottom(top: number, bottom: number): void;

        /**
         * Insert a line at the top of the screen.
         */
        insertTop(top: number, bottom: number): void;

        /**
         * Delete a line at the bottom of the screen.
         */
        deleteBottom(top: number, bottom: number): void;

        /**
         * Delete a line at the top of the screen.
         */
        deleteTop(top: number, bottom: number): void;

        /**
         * Enable mouse events for the screen and optionally an element (automatically called when a form of
         * on('mouse') is bound).
         */
        enableMouse(el?: BlessedElement): void;

        /**
         * Enable keypress events for the screen and optionally an element (automatically called when a form of
         * on('keypress') is bound).
         */
        enableKeys(el?: BlessedElement): void;

        /**
         * Enable key and mouse events. Calls bot enableMouse and enableKeys.
         */
        enableInput(el?: BlessedElement): void;

        /**
         * Attempt to copy text to clipboard using iTerm2's proprietary sequence. Returns true if successful.
         */
        copyToClipboard(text: string): void;

        /**
         * Attempt to change cursor shape. Will not work in all terminals (see artificial cursors for a solution
         * to this). Returns true if successful.
         */
        cursorShape(shape: boolean, blink: boolean): any;

        /**
         * Attempt to change cursor color. Returns true if successful.
         */
        cursorColor(color: string): void;

        /**
         * Attempt to reset cursor. Returns true if successful.
         */
        cursorReset(): void;

        /**
         * Take an SGR screenshot of the screen within the region. Returns a string containing only
         * characters and SGR codes. Can be displayed by simply echoing it in a terminal.
         */
        screenshot(xi: number, xl: number, yi: number, yl: number): string;
        screenshot(): void;

        /**
         * Destroy the screen object and remove it from the global list. Also remove all global events relevant
         * to the screen object. If all screen objects are destroyed, the node process is essentially reset
         * to its initial state.
         */
        destroy(): void;

        /**
         * Reset the terminal to term. Reloads terminfo.
         */
        setTerminal(term: string): void;
    }

    interface Padding {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    }

    class PositionCoords {
        xi: number;
        xl: number;
        yi: number;
        yl: number;
    }

    interface Position {
        left: number | string;
        right: number | string;
        top: number | string;
        bottom: number | string;
    }

    interface Border {
        /**
         * Type of border (line or bg). bg by default.
         */
        type?: "line" | "bg";

        /**
         * Character to use if bg type, default is space.
         */
        ch?: string;

        /**
         * Border foreground and background, must be numbers (-1 for default).
         */
        bg?: number;
        fg?: number;

        /**
         * Border attributes.
         */
        bold?: string;
        underline?: string;
    }

    interface ElementOptions extends INodeOptions {
        tags?: boolean;

        fg?: string;
        bg?: string;
        bold?: string;
        underline?: string;

        style?: any;

        /**
         * Border object, see below.
         */
        border?: Border | "line" | "bg";

        /**
         * Element's text content.
         */
        content?: string;

        /**
         * Element is clickable.
         */
        clickable?: boolean;

        /**
         * Element is focusable and can receive key input.
         */
        input?: boolean;
        keyable?: boolean;

        /**
         * Element is focused.
         */
        focused?: BlessedElement;

        /**
         * Whether the element is hidden.
         */
        hidden?: boolean;

        /**
         * A simple text label for the element.
         */
        label?: string;

        /**
         * A floating text label for the element which appears on mouseover.
         */
        hoverText?: string;

        /**
         * Text alignment: left, center, or right.
         */
        align?: "left" | "center" | "right";

        /**
         * Vertical text alignment: top, middle, or bottom.
         */
        valign?: "top" | "middle" | "bottom";

        /**
         * Shrink/flex/grow to content and child elements. Width/height during render.
         */
        shrink?: boolean;

        /**
         * Amount of padding on the inside of the element. Can be a number or an object containing
         * the properties: left, right, top, and bottom.
         */
        padding?: number | Padding;

        top?: Types.TTopLeft;
        left?: Types.TTopLeft;
        right?: Types.TPosition;
        bottom?: Types.TPosition;

        /**
         * Width/height of the element, can be a number, percentage (0-100%), or keyword (half or shrink).
         * Percentages can also have offsets (50%+1, 50%-1).
         */
        width?: number | string;

        /**
         * Offsets of the element relative to its parent. Can be a number, percentage (0-100%), or
         * keyword (center). right and bottom do not accept keywords. Percentages can also have
         * offsets (50%+1, 50%-1).
         */
        height?: number | string;

        /**
         * Can contain the above options.
         */
        position?: Position;

        /**
         * Whether the element is scrollable or not.
         */
        scrollable?: boolean;

        /**
         * Background character (default is whitespace ).
         */
        ch?: string;

        /**
         * Allow the element to be dragged with the mouse.
         */
        draggable?: boolean;

        /**
         * Draw a translucent offset shadow behind the element.
         */
        shadow?: boolean;
    }

    interface Coords {
        xl: number;
        xi: number;
        yl: number;
        yi: number;
        base: number;
        _contentEnd: { x: number; y: number };
        notop: Types.TTopLeft;
        noleft: Types.TTopLeft;
        noright: Types.TPosition;
        nobot: Types.TPosition;
    }

    interface LabelOptions {
        text: string;
        side: Types.TAlign;
    }

    // TODO: scrollable - Note: If the scrollable option is enabled, Element inherits all methods from ScrollableBox.
    abstract class BlessedElement extends NodeWithEvents implements IHasOptions<ElementOptions> {
        constructor(opts: ElementOptions);

        /**
         * Original options object.
         */
        options: ElementOptions;

        /**
         * Name of the element. Useful for form submission.
         */
        name: string;

        /**
         * Border object.
         */
        border: Border;

        style: any;
        position: Position;
        content: string;
        hidden: boolean;
        visible: boolean;
        detached: boolean;

        /**
         * Border foreground and background, must be numbers (-1 for default).
         */
        bg: number;
        fg: number;

        /**
         * Border attributes.
         */
        bold: string;
        underline: string;

        /**
         * Calculated width.
         */
        width: number | string;

        /**
         * Calculated height.
         */
        height: number | string;

        /**
         * Calculated relative top offset.
         */
        top: Types.TTopLeft;

        /**
         * Calculated relative left offset.
         */
        left: Types.TTopLeft;

        /**
         * Calculated relative right offset.
         */
        right: Types.TPosition;

        /**
         * Calculated relative bottom offset.
         */
        bottom: Types.TPosition;

        /**
         * Calculated absolute top offset.
         */
        atop: Types.TTopLeft;

        /**
         * Calculated absolute left offset.
         */
        aleft: Types.TTopLeft;

        /**
         * Calculated absolute right offset.
         */
        aright: Types.TPosition;

        /**
         * Calculated absolute bottom offset.
         */
        abottom: Types.TPosition;

        /**
         * Whether the element is draggable. Set to true to allow dragging.
         */
        draggable: boolean;

        itop: Types.TTopLeft;
        ileft: Types.TTopLeft;
        iheight: Types.TPosition;
        iwidth: Types.TPosition;

        /**
         * Calculated relative top offset.
         */
        rtop: Types.TTopLeft;

        /**
         * Calculated relative left offset.
         */
        rleft: Types.TTopLeft;

        /**
         * Calculated relative right offset.
         */
        rright: Types.TPosition;

        /**
         * Calculated relative bottom offset.
         */
        rbottom: Types.TPosition;

        lpos: PositionCoords;

        /**
         * Write content and children to the screen buffer.
         */
        render(): Coords;

        /**
         * Hide element.
         */
        hide(): void;

        /**
         * Show element.
         */
        show(): void;

        /**
         * Toggle hidden/shown.
         */
        toggle(): void;

        /**
         * Focus element.
         */
        focus(): void;

        /**
         * Same asel.on('screen', ...) except this will automatically keep track of which listeners
         * are bound to the screen object. For use with removeScreenEvent(), free(), and destroy().
         */
        onScreenEvent(type: string, handler: (...args: any[]) => void): void;

        /**
         * Same asel.removeListener('screen', ...) except this will automatically keep track of which
         * listeners are bound to the screen object. For use with onScreenEvent(), free(), and destroy().
         */
        removeScreenEvent(type: string, handler: (...args: any[]) => void): void;

        /**
         * Free up the element. Automatically unbind all events that may have been bound to the screen
         * object. This prevents memory leaks. For use with onScreenEvent(), removeScreenEvent(),
         * and destroy().
         */
        free(): void;

        /**
         * Same as the detach() method, except this will automatically call free() and unbind any screen
         * events to prevent memory leaks. for use with onScreenEvent(), removeScreenEvent(), and free().
         */
        destroy(): void;

        /**
         * Set the z-index of the element (changes rendering order).
         */
        setIndex(z: number): void;

        /**
         * Put the element in front of its siblings.
         */
        setFront(): void;

        /**
         * Put the element in back of its siblings.
         */
        setBack(): void;

        /**
         * text/options - Set the label text for the top-left corner. Example options: {text:'foo',side:'left'}
         */
        setLabel(arg: string | LabelOptions): void;

        /**
         * Remove the label completely.
         */
        removeLabel(): any;

        /**
         * text/options - Set a hover text box to follow the cursor. Similar to the "title" DOM attribute
         * in the browser. Example options: {text:'foo'}
         */
        setHover(arg: string | LabelOptions): void;

        /**
         * Remove the hover label completely.
         */
        removeHover(): void;

        /**
         * Enable mouse events for the element (automatically called when a form of on('mouse') is bound).
         */
        enableMouse(): void;

        /**
         * Enable keypress events for the element (automatically called when a form of on('keypress') is bound).
         */
        enableKeys(): void;

        /**
         * Enable key and mouse events. Calls bot enableMouse and enableKeys.
         */
        enableInput(): void;

        /**
         * Enable dragging of the element.
         */
        enableDrag(): void;

        /**
         * Disable dragging of the element.
         */
        disableDrag(): void;

        /**
         * Take an SGR screenshot of the screen within the region. Returns a string containing only
         * characters and SGR codes. Can be displayed by simply echoing it in a terminal.
         */
        screenshot(xi: number, xl: number, yi: number, yl: number): string;
        screenshot(): void;

        /*
            Content Methods

            Methods for dealing with text content, line by line. Useful for writing a text editor,
            irc client, etc.

            Note: All of these methods deal with pre-aligned, pre-wrapped text. If you use deleteTop()
            on a box with a wrapped line at the top, it may remove 3-4 "real" lines (rows) depending
            on how long the original line was.

            The lines parameter can be a string or an array of strings. The line parameter must
            be a string.
        */

        /**
         * Set the content. Note: When text is input, it will be stripped of all non-SGR
         * escape codes, tabs will be replaced with 8 spaces, and tags will be replaced
         * with SGR codes (if enabled).
         */
        setContent(text: string): void;

        /**
         * Return content, slightly different from el.content. Assume the above formatting.
         */
        getContent(): string;

        /**
         * Similar to setContent, but ignore tags and remove escape codes.
         */
        setText(text: string): void;

        /**
         * Similar to getContent, but return content with tags and escape codes removed.
         */
        getText(): string;

        /**
         * Insert a line into the box's content.
         */
        insertLine(i: number, lines: string | string[]): void;

        /**
         * Delete a line from the box's content.
         */
        deleteLine(i: number): void;

        /**
         * Get a line from the box's content.
         */
        getLine(i: number): string;

        /**
         * Get a line from the box's content from the visible top.
         */
        getBaseLine(i: number): string;

        /**
         * Set a line in the box's content.
         */
        setLine(i: number, line: string | string[]): void;

        /**
         * Set a line in the box's content from the visible top.
         */
        setBaseLine(i: number, line: string | string[]): void;

        /**
         * Clear a line from the box's content.
         */
        clearLine(i: number): void;

        /**
         * Clear a line from the box's content from the visible top.
         */
        clearBaseLine(i: number): void;

        /**
         * Insert a line at the top of the box.
         */
        insertTop(lines: string | string[]): void;

        /**
         * Insert a line at the bottom of the box.
         */
        insertBottom(lines: string | string[]): void;

        /**
         * Delete a line at the top of the box.
         */
        deleteTop(): void;

        /**
         * Delete a line at the bottom of the box.
         */
        deleteBottom(): void;

        /**
         * Unshift a line onto the top of the content.
         */
        unshiftLine(lines: string | string[]): void;

        /**
         * Shift a line off the top of the content.
         */
        shiftLine(i: number): void;

        /**
         * Push a line onto the bottom of the content.
         */
        pushLine(lines: string | string[]): void;

        /**
         * Pop a line off the bottom of the content.
         */
        popLine(i: number): string;

        /**
         * An array containing the content lines.
         */
        getLines(): string[];

        /**
         * An array containing the lines as they are displayed on the screen.
         */
        getScreenLines(): string[];

        /**
         * Get a string's displayed width, taking into account double-width, surrogate pairs,
         * combining characters, tags, and SGR escape codes.
         */
        strWidth(text: string): string;
    }

    interface ScrollableBoxOptions extends ElementOptions {
        /**
         * A limit to the childBase. Default is Infinity.
         */
        baseLimit?: number;

        /**
         * A option which causes the ignoring of childOffset. This in turn causes the
         * childBase to change every time the element is scrolled.
         */
        alwaysScroll?: boolean;

        /**
         * Object enabling a scrollbar.
         * Style of the scrollbar track if present (takes regular style options).
         */
        scrollbar?: { style?: any; track?: any; ch?: string };
    }

    interface ScrollableTextOptions extends ScrollableBoxOptions {
        /**
         * Whether to enable automatic mouse support for this element.
         * Use pre-defined mouse events (right-click for editor).
         */
        mouse?: boolean | (() => void);

        /**
         * Use pre-defined keys (i or enter for insert, e for editor, C-e for editor while inserting).
         */
        keys?: string | string[] | boolean;

        /**
         * Use vi keys with the keys option.
         */
        vi?: boolean;
    }

    interface BoxOptions extends ScrollableTextOptions {
        bindings?: any;
    }

    /**
     * DEPRECATED - Use Box with the scrollable option instead. A box with scrollable content.
     */
    class ScrollableBoxElement extends BlessedElement {
        /**
         * The offset of the top of the scroll content.
         */
        childBase: number;

        /**
         * The offset of the chosen item/line.
         */
        childOffset: number;

        /**
         * Scroll the content by a relative offset.
         */
        scroll(offset: number, always?: boolean): void;

        /**
         * Scroll the content to an absolute index.
         */
        scrollTo(index: number): void;

        /**
         * Same as scrollTo.
         */
        setScroll(index: number): void;

        /**
         * Set the current scroll index in percentage (0-100).
         */
        setScrollPerc(perc: number): void;

        /**
         * Get the current scroll index in lines.
         */
        getScroll(): number;

        /**
         * Get the actual height of the scrolling area.
         */
        getScrollHeight(): number;

        /**
         * Get the current scroll index in percentage.
         */
        getScrollPerc(): number;

        /**
         * Reset the scroll index to its initial state.
         */
        resetScroll(): void;

        on(event: string, listener: (...args: any[]) => void): this;

        /**
         * Received when the element is scrolled.
         */
        on(event: "scroll", callback: () => void): this;
    }

    /**
     * DEPRECATED - Use Box with the scrollable and alwaysScroll options instead.
     * A scrollable text box which can display and scroll text, as well as handle
     * pre-existing newlines and escape codes.
     */
    class ScrollableTextElement extends ScrollableBoxElement {}

    /**
     * A box element which draws a simple box containing content or other elements.
     */
    class BoxElement extends ScrollableTextElement implements IHasOptions<BoxOptions> {
        constructor(opts: BoxOptions);

        /**
         * Original options object.
         */
        options: BoxOptions;
    }

    interface TextOptions extends ElementOptions {
        /**
         * Fill the entire line with chosen bg until parent bg ends, even if there
         * is not enough text to fill the entire width.
         */
        fill?: boolean;

        /**
         * Text alignment: left, center, or right.
         */
        align?: Types.TAlign;
    }

    /**
     * An element similar to Box, but geared towards rendering simple text elements.
     */
    class TextElement extends BlessedElement implements IHasOptions<TextOptions> {
        constructor(opts: TextOptions);

        /**
         * Original options object.
         */
        options: TextOptions;
    }

    /**
     * A simple line which can be line or bg styled.
     */
    interface LineOptions extends BoxOptions {
        /**
         * Can be vertical or horizontal.
         */
        orientation?: "vertical" | "horizontal";

        /**
         * Treated the same as a border object. (attributes can be contained in style).
         */
        type?: string;
        bg?: string;
        fg?: string;
        ch?: string;
    }

    /**
     * A simple line which can be line or bg styled.
     */
    class LineElement extends BoxElement implements IHasOptions<LineOptions> {
        constructor(opts: LineOptions);

        /**
         * Original options object.
         */
        options: LineOptions;
    }

    interface BigTextOptions extends BoxOptions {
        /**
         * bdf->json font file to use (see ttystudio for instructions on compiling BDFs to JSON).
         */
        font?: string;

        /**
         * bdf->json bold font file to use (see ttystudio for instructions on compiling BDFs to JSON).
         */
        fontBold?: string;

        /**
         * foreground character. (default: ' ')
         */
        fch?: string;
    }

    /**
     * A box which can render content drawn as 8x14 cell characters using the terminus font.
     */
    class BigTextElement extends BoxElement implements IHasOptions<BigTextOptions> {
        constructor(opts: BigTextOptions);

        /**
         * Original options object.
         */
        options: BigTextOptions;
    }

    interface ListElementStyle {
        selected?: any;
        item?: any;
    }

    interface ListOptions<TStyle extends ListElementStyle> extends BoxOptions {
        /**
         * Style for a selected item. Style for an unselected item.
         */
        style?: TStyle;

        /**
         * An array of strings which become the list's items.
         */
        items?: string[];

        /**
         * A function that is called when vi mode is enabled and the key / is pressed. This function accepts a
         * callback function which should be called with the search string. The search string is then used to
         * jump to an item that is found in items.
         */
        search?(err: any, value?: string): void;

        /**
         * Whether the list is interactive and can have items selected (Default: true).
         */
        interactive?: boolean;

        /**
         * Whether to automatically override tags and invert fg of item when selected (Default: true).
         */
        invertSelected?: boolean;
    }

    type ListElementEventType =
        /** List was canceled (when esc is pressed with the keys option). */
        | "cancel"
        /** Either a select or a cancel event was received. */
        | "action"
        | "create item"
        | "add item"
        | "remove item"
        | "insert item"
        | "set items";

    class ListElement extends BoxElement implements IHasOptions<ListOptions<ListElementStyle>> {
        constructor(opts: ListOptions<ListElementStyle>);

        /**
         * Original options object.
         */
        options: ListOptions<ListElementStyle>;

        /**
         * Add an item based on a string.
         */
        add(text: string): void;

        /**
         * Add an item based on a string.
         */
        addItem(text: string): void;

        /**
         * Removes an item from the list. Child can be an element, index, or string.
         */
        removeItem(child: BlessedElement): BlessedElement;

        /**
         * Push an item onto the list.
         */
        pushItem(child: BlessedElement): number;

        /**
         * Pop an item off the list.
         */
        popItem(): BlessedElement;

        /**
         * Unshift an item onto the list.
         */
        unshiftItem(child: BlessedElement): number;

        /**
         * Shift an item off the list.
         */
        shiftItem(): BlessedElement;

        /**
         * Inserts an item to the list. Child can be an element, index, or string.
         */
        insertItem(i: number, child: BlessedElement): void;

        /**
         * Returns the item element. Child can be an element, index, or string.
         */
        getItem(child: BlessedElement): BlessedElement;

        /**
         * Set item to content.
         */
        setItem(child: BlessedElement, content: BlessedElement | string): void;

        /**
         * Remove and insert items to the list.
         */
        spliceItem(i: number, n: number, ...items: BlessedElement[]): void;

        /**
         * Clears all items from the list.
         */
        clearItems(): void;

        /**
         * Sets the list items to multiple strings.
         */
        setItems(items: BlessedElement[]): void;

        /**
         * Returns the item index from the list. Child can be an element, index, or string.
         */
        getItemIndex(child: BlessedElement): number;

        /**
         * Select an index of an item.
         */
        select(index: number): void;

        /**
         * Select item based on current offset.
         */
        move(offset: number): void;

        /**
         * Select item above selected.
         */
        up(amount: number): void;

        /**
         * Select item below selected.
         */
        down(amount: number): void;

        /**
         * Show/focus list and pick an item. The callback is executed with the result.
         */
        pick(callback: () => void): void;

        /**
         * Find an item based on its text content.
         */
        fuzzyFind(arg: string | RegExp | (() => void)): void;

        on(event: string, listener: (...args: any[]) => void): this;
        /** Received when an item is selected. */
        on(event: "select", callback: (item: BoxElement, index: number) => void): this;
        on(event: ListElementEventType, callback: () => void): this;
        on(event: "select item", callback: (item: BlessedElement, index: number) => void): this;
    }

    interface FileManagerOptions extends ListOptions<ListElementStyle> {
        /**
         * Current working directory.
         */
        cwd?: string;
    }

    class FileManagerElement extends ListElement implements IHasOptions<FileManagerOptions> {
        constructor(opts: FileManagerOptions);

        /**
         * Original options object.
         */
        options: FileManagerOptions;

        /**
         * Current working directory.
         */
        cwd: string;

        /**
         * Refresh the file list (perform a readdir on cwd and update the list items).
         */
        refresh(cwd: string, callback: () => void): void;
        refresh(callback?: () => void): void;

        /**
         * Pick a single file and return the path in the callback.
         */
        pick(cwd: string, callback: () => void): void;
        pick(callback: () => void): void;

        /**
         * Reset back to original cwd.
         */
        reset(cwd: string, callback: () => void): void;
        reset(callback?: () => void): void;

        on(event: string, listener: (...args: any[]) => void): this;
        /** Received when an item is selected. */
        on(event: "cd", callback: (file: string, cwd: string) => void): this;
        /** Received when an item is selected. */
        on(event: "file", callback: (file: string) => void): this;
        on(event: "error", callback: (err: any, file: string) => void): this;
        on(event: "refresh", callback: () => void): this;
    }

    interface StyleListTable extends ListElementStyle {
        /**
         * Header style.
         */
        header?: any;

        /**
         * Cell style.
         */
        cell?: any;
    }

    interface ListTableOptions extends ListOptions<StyleListTable> {
        /**
         * Array of array of strings representing rows.
         */
        rows?: string[];
        data?: string[][];

        /**
         * Spaces to attempt to pad on the sides of each cell. 2 by default: one space on each side
         * (only useful if the width is shrunken).
         */
        pad?: number;

        /**
         * Do not draw inner cells.
         */
        noCellBorders?: boolean;

        style?: StyleListTable;
    }

    class ListTableElement extends ListElement implements IHasOptions<ListTableOptions> {
        constructor(opts: ListTableOptions);

        /**
         * Original options object.
         */
        options: ListTableOptions;

        /**
         * Set rows in table. Array of arrays of strings.
         * @example:
         *
         * table.setData([
         *      [ 'Animals',  'Foods'  ],
         *      [ 'Elephant', 'Apple'  ],
         *      [ 'Bird',     'Orange' ]
         *  ]);
         */
        setRows(rows: string[][]): void;

        /**
         * Set rows in table. Array of arrays of strings.
         * @example:
         *
         * table.setData([
         *      [ 'Animals',  'Foods'  ],
         *      [ 'Elephant', 'Apple'  ],
         *      [ 'Bird',     'Orange' ]
         *  ]);
         */
        setData(rows: string[][]): void;
    }

    interface ListbarOptions extends BoxOptions {
        style?: ListElementStyle;

        /**
         * Set buttons using an object with keys as titles of buttons, containing of objects
         * containing keys of keys and callback.
         */
        commands: Types.ListbarCommand[];
        items: Types.ListbarCommand[];

        /**
         * Automatically bind list buttons to keys 0-9.
         */
        autoCommandKeys: boolean;
    }

    class ListbarElement extends BoxElement implements IHasOptions<ListbarOptions> {
        constructor(opts: ListbarOptions);

        /**
         * Original options object.
         */
        options: ListbarOptions;

        /**
         * Set commands (see commands option above).
         */
        setItems(commands: Types.ListbarCommand[]): void;

        /**
         * Append an item to the bar.
         */
        add(item: Types.ListbarCommand, callback: () => void): void;

        /**
         * Append an item to the bar.
         */
        addItem(item: Types.ListbarCommand, callback: () => void): void;

        /**
         * Append an item to the bar.
         */
        appendItem(item: Types.ListbarCommand, callback: () => void): void;

        /**
         * Select an item on the bar.
         */
        select(offset: number): void;

        /**
         * Remove item from the bar.
         */
        removeItem(child: BlessedElement): void;

        /**
         * Move relatively across the bar.
         */
        move(offset: number): void;

        /**
         * Move left relatively across the bar.
         */
        moveLeft(offset: number): void;

        /**
         * Move right relatively across the bar.
         */
        moveRight(offset: number): void;

        /**
         * Select button and execute its callback.
         */
        selectTab(index: number): void;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "set items" | "remove item" | "select tab", callback: () => void): this;
    }

    interface FormOptions extends BoxOptions {
        /**
         * Allow default keys (tab, vi keys, enter).
         */
        keys?: any;

        /**
         * Allow vi keys.
         */
        vi?: boolean;
    }

    class FormElement<TFormData> extends BoxElement implements IHasOptions<FormOptions> {
        constructor(opts: FormOptions);

        /**
         * Original options object.
         */
        options: FormOptions;

        /**
         * Last submitted data.
         */
        submission: TFormData;

        /**
         * Focus next form element.
         */
        focusNext(): void;

        /**
         * Focus previous form element.
         */
        focusPrevious(): void;

        /**
         * Submit the form.
         */
        submit(): void;

        /**
         * Discard the form.
         */
        cancel(): void;

        /**
         * Clear the form.
         */
        reset(): void;

        on(event: string, listener: (...args: any[]) => void): this;
        /** Form is submitted. Receives a data object. */
        on(event: "submit", callback: (out: TFormData) => void): this;
        on(event: "cancel" | "reset", callback: () => void): this;
    }

    interface InputOptions extends BoxOptions {}

    abstract class InputElement extends BoxElement {
        constructor(opts: InputOptions);
    }

    /**
     * A box which allows multiline text input.
     */
    interface TextareaOptions extends InputOptions {
        /**
         * Call readInput() when the element is focused. Automatically unfocus.
         */
        inputOnFocus?: boolean;
    }

    type TextareaElementEventType =
        /** Value is an error. */
        | "error"
        /** Value is submitted (enter). */
        | "submit"
        /** Value is discared (escape). */
        | "cancel"
        /** Either submit or cancel. */
        | "action";

    class TextareaElement extends InputElement implements IHasOptions<TextareaOptions> {
        constructor(opts: TextareaOptions);

        /**
         * Original options object.
         */
        options: TextareaOptions;

        /**
         * The input text. read-only.
         */
        value: string;

        /**
         * Submit the textarea (emits submit).
         */
        submit(): void;

        /**
         * Cancel the textarea (emits cancel).
         */
        cancel(): void;

        /**
         * Grab key events and start reading text from the keyboard. Takes a callback which receives
         * the final value.
         */
        readInput(callback?: (err: any, value?: string) => void): void;

        /**
         * Grab key events and start reading text from the keyboard. Takes a callback which receives
         * the final value.
         */
        input(callback: (err: any, value?: string) => void): void;

        /**
         * Grab key events and start reading text from the keyboard. Takes a callback which receives
         * the final value.
         */
        setInput(callback: (err: any, value?: string) => void): void;

        /**
         * Open text editor in $EDITOR, read the output from the resulting file. Takes a callback which
         * receives the final value.
         */
        readEditor(callback: (err: any, value?: string) => void): void;

        /**
         * Open text editor in $EDITOR, read the output from the resulting file. Takes a callback which
         * receives the final value.
         */
        editor(callback: (err: any, value?: string) => void): void;

        /**
         * Open text editor in $EDITOR, read the output from the resulting file. Takes a callback which
         * receives the final value.
         */
        setEditor(callback: (err: any, value?: string) => void): void;

        /**
         * The same as this.value, for now.
         */
        getValue(): string;

        /**
         * Clear input.
         */
        clearValue(): void;

        /**
         * Set value.
         */
        setValue(text: string): void;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: TextareaElementEventType, callback: (err: any) => void): this;
    }

    interface TextboxOptions extends TextareaOptions {
        /**
         * Completely hide text.
         */
        secret?: boolean;

        /**
         * Replace text with asterisks (*).
         */
        censor?: boolean;
    }

    class TextboxElement extends TextareaElement implements IHasOptions<TextboxOptions> {
        constructor(opts: TextboxOptions);

        /**
         * Original options object.
         */
        options: TextboxOptions;

        /**
         * Completely hide text.
         */
        secret: boolean;

        /**
         * Replace text with asterisks (*).
         */
        censor: boolean;
    }

    interface ButtonOptions extends BoxOptions {}

    class ButtonElement extends InputElement implements IHasOptions<ButtonOptions> {
        constructor(opts: ButtonOptions);

        /**
         * Original options object.
         */
        options: ButtonOptions;

        /**
         * Press button. Emits press.
         */
        press(): void;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "press", callback: () => void): this;
    }

    interface CheckboxOptions extends BoxOptions {
        /**
         * whether the element is checked or not.
         */
        checked?: boolean;

        /**
         * enable mouse support.
         */
        mouse?: boolean;
    }

    /**
     * A checkbox which can be used in a form element.
     */
    class CheckboxElement extends InputElement implements IHasOptions<CheckboxOptions> {
        constructor(options?: CheckboxOptions);

        /**
         * Original options object.
         */
        options: CheckboxOptions;

        /**
         * the text next to the checkbox (do not use setcontent, use `check.text = ''`).
         */
        text: string;

        /**
         * whether the element is checked or not.
         */
        checked: boolean;

        /**
         * same as `checked`.
         */
        value: boolean;

        /**
         * check the element.
         */
        check(): void;

        /**
         * uncheck the element.
         */
        uncheck(): void;

        /**
         * toggle checked state.
         */
        toggle(): void;
    }

    interface RadioSetOptions extends BoxOptions {}

    /**
     * An element wrapping RadioButtons. RadioButtons within this element will be mutually exclusive
     * with each other.
     */
    abstract class RadioSetElement extends BoxElement {
        constructor(opts: RadioSetOptions);
    }

    interface RadioButtonOptions extends BoxOptions {}

    /**
     * A radio button which can be used in a form element.
     */
    abstract class RadioButtonElement extends CheckboxElement {
        constructor(opts: RadioButtonOptions);
    }

    interface PromptOptions extends BoxOptions {}

    /**
     * A prompt box containing a text input, okay, and cancel buttons (automatically hidden).
     */
    class PromptElement extends BoxElement implements IHasOptions<PromptOptions> {
        constructor(opts: PromptOptions);

        options: PromptOptions;

        /**
         * Show the prompt and wait for the result of the textbox. Set text and initial value.
         */
        input(text: string, value: string, callback: (err: any, value: string) => void): void;
        setInput(text: string, value: string, callback: (err: any, value: string) => void): void;
        readInput(text: string, value: string, callback: (err: any, value: string) => void): void;
    }

    interface QuestionOptions extends BoxOptions {}

    /**
     * A question box containing okay and cancel buttons (automatically hidden).
     */
    class QuestionElement extends BoxElement implements IHasOptions<QuestionOptions> {
        constructor(opts: QuestionOptions);

        options: QuestionOptions;

        /**
         * Ask a question. callback will yield the result.
         */
        ask(question: string, callback: (err: any, value: string) => void): void;
    }

    interface MessageOptions extends BoxOptions {}

    /**
     * A box containing a message to be displayed (automatically hidden).
     */
    class MessageElement extends BoxElement implements IHasOptions<MessageOptions> {
        constructor(opts: MessageOptions);

        options: MessageOptions;

        /**
         * Display a message for a time (default is 3 seconds). Set time to 0 for a
         * perpetual message that is dismissed on keypress.
         */
        log(text: string, time: number, callback: (err: any) => void): void;
        log(text: string, callback: (err: any) => void): void;
        display(text: string, time: number, callback: (err: any) => void): void;
        display(text: string, callback: (err: any) => void): void;

        /**
         * Display an error in the same way.
         */
        error(text: string, time: number, callback: () => void): void;
        error(text: string, callback: () => void): void;
    }

    interface LoadingOptions extends BoxOptions {}

    /**
     * A box with a spinning line to denote loading (automatically hidden).
     */
    class LoadingElement extends BoxElement implements IHasOptions<LoadingOptions> {
        constructor(opts: LoadingOptions);

        options: LoadingOptions;

        /**
         * Display the loading box with a message. Will lock keys until stop is called.
         */
        load(text: string): void;

        /**
         * Hide loading box. Unlock keys.
         */
        stop(): void;
    }

    interface ProgressBarOptions extends BoxOptions {
        /**
         * can be `horizontal` or `vertical`.
         */
        orientation: string;

        /**
         * the character to fill the bar with (default is space).
         */
        pch: string;

        /**
         * the amount filled (0 - 100).
         */
        filled: number;

        /**
         * same as `filled`.
         */
        value: number;

        /**
         * enable key support.
         */
        keys: boolean;

        /**
         * enable mouse support.
         */
        mouse: boolean;
    }

    /**
     * A progress bar allowing various styles. This can also be used as a form input.
     */
    class ProgressBarElement extends InputElement implements IHasOptions<ProgressBarOptions> {
        constructor(options?: ProgressBarOptions);

        options: ProgressBarOptions;

        /**
         * progress the bar by a fill amount.
         */
        progress(amount: number): void;

        /**
         * set progress to specific amount.
         */
        setProgress(amount: number): void;

        /**
         * reset the bar.
         */
        reset(): void;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "reset" | "complete", callback: () => void): this;
    }

    interface LogOptions extends ScrollableTextOptions {
        /**
         * amount of scrollback allowed. default: Infinity.
         */
        scrollback?: number;

        /**
         * scroll to bottom on input even if the user has scrolled up. default: false.
         */
        scrollOnInput?: boolean;
    }

    /**
     * A log permanently scrolled to the bottom.
     */
    class Log extends ScrollableTextElement implements IHasOptions<LogOptions> {
        constructor(options?: LogOptions);

        options: LogOptions;

        /**
         * amount of scrollback allowed. default: Infinity.
         */
        scrollback: number;

        /**
         * scroll to bottom on input even if the user has scrolled up. default: false.
         */
        scrollOnInput: boolean;

        /**
         * add a log line.
         */
        log(text: string): void;

        /**
         * add a log line.
         */
        add(text: string): void;
    }

    interface TableOptions extends BoxOptions {
        /**
         * array of array of strings representing rows (same as `data`).
         */
        rows?: string[][];

        /**
         * array of array of strings representing rows (same as `rows`).
         */
        data?: string[][];

        /**
         * spaces to attempt to pad on the sides of each cell. `2` by default: one space on each side (only useful if the width is shrunken).
         */
        pad?: number;

        /**
         * do not draw inner cells.
         */
        noCellBorders?: boolean;

        /**
         * fill cell borders with the adjacent background color.
         */
        fillCellBorders?: boolean;
    }

    /**
     * A stylized table of text elements.
     */
    class TableElement extends BoxElement implements IHasOptions<TableOptions> {
        constructor(opts: TableOptions);

        options: TableOptions;

        /**
         * set rows in table. array of arrays of strings.
         */
        setData(rows: string[][]): void;

        /**
         * set rows in table. array of arrays of strings.
         */
        setRows(rows: string[][]): void;
    }

    interface TerminalOptions extends BoxOptions {
        /**
         * handler for input data.
         */
        handler?(userInput: Buffer): void;

        /**
         * name of shell. $SHELL by default.
         */
        shell?: string;

        /**
         * args for shell.
         */
        args?: any;

        /**
         * can be line, underline, and block.
         */
        cursor?: "line" | "underline" | "block";

        terminal?: string;

        /**
         * Object for process env.
         */
        env?: any;
    }

    class TerminalElement extends BoxElement implements IHasOptions<TerminalOptions> {
        constructor(opts: TerminalOptions);

        options: TerminalOptions;

        /**
         * reference to the headless term.js terminal.
         */
        term: any;

        /**
         * reference to the pty.js pseudo terminal.
         */
        pty: any;

        /**
         * write data to the terminal.
         */
        write(data: string): void;

        /**
         * nearly identical to `element.screenshot`, however, the specified region includes the terminal's
         * _entire_ scrollback, rather than just what is visible on the screen.
         */
        screenshot(xi?: number, xl?: number, yi?: number, yl?: number): string;
    }

    interface ImageOptions extends BoxOptions {
        /**
         * path to image.
         */
        file: string;

        /**
         * path to w3mimgdisplay. if a proper w3mimgdisplay path is not given, blessed will search the
         * entire disk for the binary.
         */
        type: "ansi" | "overlay" | "w3m";
    }

    /**
     * Display an image in the terminal (jpeg, png, gif) using w3mimgdisplay. Requires w3m to be installed.
     * X11 required: works in xterm, urxvt, and possibly other terminals.
     */
    class ImageElement extends BoxElement implements IHasOptions<ImageOptions> {
        constructor(options?: ImageOptions);

        options: ImageOptions;
    }

    interface ANSIImageOptions extends BoxOptions {
        /**
         * URL or path to PNG/GIF file. Can also be a buffer.
         */
        file: string;

        /**
         * Scale cellmap down (0-1.0) from its original pixel width/height (Default: 1.0).
         */
        scale: number;

        /**
         * This differs from other element's width or height in that only one
         * of them is needed: blessed will maintain the aspect ratio of the image
         * as it scales down to the proper number of cells. NOTE: PNG/GIF's are
         * always automatically shrunken to size (based on scale) if a width or
         * height is not given.
         */
        width: number | string;
        height: number | string;

        /**
         * Add various "density" ASCII characters over the rendering to give the
         * image more detail, similar to libcaca/libcucul (the library mplayer uses
         * to display videos in the terminal).
         */
        ascii: string;

        /**
         * Whether to animate if the image is an APNG/animating GIF. If false, only
         * display the first frame or IDAT (Default: true).
         */
        animate: boolean;

        /**
         * Set the speed of animation. Slower: 0.0-1.0. Faster: 1-1000. It cannot go
         * faster than 1 frame per millisecond, so 1000 is the fastest. (Default: 1.0)
         */
        speed: number;

        /**
         * mem or cpu. If optimizing for memory, animation frames will be rendered to
         * bitmaps as the animation plays, using less memory. Optimizing for cpu will
         * precompile all bitmaps beforehand, which may be faster, but might also OOM
         * the process on large images. (Default: mem).
         */
        optimization: "mem" | "cpu";
    }

    /**
     * Convert any .png file (or .gif, see below) to an ANSI image and display it as an element.
     */
    class ANSIImageElement extends BoxElement implements IHasOptions<ANSIImageOptions> {
        constructor(options?: ANSIImageOptions);

        options: ANSIImageOptions;

        /**
         * Image object from the png reader.
         */
        img: Types.TImage;

        /**
         * set the image in the box to a new path.
         */
        setImage(img: string, callback: () => void): void;

        /**
         * clear the current image.
         */
        clearImage(callback: () => void): void;

        /**
         * Play animation if it has been paused or stopped.
         */
        play(): void;

        /**
         * Pause animation.
         */
        pause(): void;

        /**
         * Stop animation.
         */
        stop(): void;
    }

    interface OverlayImageOptions extends BoxOptions {
        /**
         * Path to image.
         */
        file: string;

        /**
         * Render the file as ANSI art instead of using w3m to overlay Internally uses the
         * ANSIImage element. See the ANSIImage element for more information/options. (Default: true).
         */
        ansi: boolean;

        /**
         * Path to w3mimgdisplay. If a proper w3mimgdisplay path is not given, blessed will
         * search the entire disk for the binary.
         */
        w3m: string;

        /**
         * Whether to search /usr, /bin, and /lib for w3mimgdisplay (Default: true).
         */
        search: string;
    }

    /**
     * Convert any .png file (or .gif, see below) to an ANSI image and display it as an element.
     */
    class OverlayImageElement extends BoxElement implements IHasOptions<OverlayImageOptions> {
        constructor(options?: OverlayImageOptions);

        options: OverlayImageOptions;

        /**
         * set the image in the box to a new path.
         */
        setImage(img: string, callback: () => void): void;

        /**
         * clear the current image.
         */
        clearImage(callback: () => void): void;

        /**
         * get the size of an image file in pixels.
         */
        imageSize(img: string, callback: () => void): void;

        /**
         * get the size of the terminal in pixels.
         */
        termSize(callback: () => void): void;

        /**
         * get the pixel to cell ratio for the terminal.
         */
        getPixelRatio(callback: () => void): void;
    }

    interface VideoOptions extends BoxOptions {
        /**
         * Video to play.
         */
        file: string;

        /**
         * Start time in seconds.
         */
        start: number;
    }

    class VideoElement extends BoxElement implements IHasOptions<VideoOptions> {
        constructor(options?: VideoOptions);

        options: VideoOptions;

        /**
         * The terminal element running mplayer or mpv.
         */
        tty: any;
    }

    interface LayoutOptions extends ElementOptions {
        /**
         * A callback which is called right before the children are iterated over to be rendered. Should return an
         * iterator callback which is called on each child element: iterator(el, i).
         */
        renderer?(): void;

        /**
         * Using the default renderer, it provides two layouts: inline, and grid. inline is the default and will render
         * akin to inline-block. grid will create an automatic grid based on element dimensions. The grid cells'
         * width and height are always determined by the largest children in the layout.
         */
        layout: "inline" | "inline-block" | "grid";
    }

    class LayoutElement extends BlessedElement implements IHasOptions<LayoutOptions> {
        constructor(options?: LayoutOptions);

        options: LayoutOptions;

        /**
         * A callback which is called right before the children are iterated over to be rendered. Should return an
         * iterator callback which is called on each child element: iterator(el, i).
         */
        renderer(coords: PositionCoords): void;

        /**
         * Check to see if a previous child element has been rendered and is visible on screen. This is only useful
         * for checking child elements that have already been attempted to be rendered! see the example below.
         */
        isRendered(el: BlessedElement): boolean;

        /**
         * Get the last rendered and visible child element based on an index. This is useful for basing the position
         * of the current child element on the position of the last child element.
         */
        getLast(i: number): BlessedElement;

        /**
         * Get the last rendered and visible child element coords based on an index. This is useful for basing the position
         * of the current child element on the position of the last child element. See the example below.
         */
        getLastCoords(i: number): PositionCoords;
    }

    class Program {
        /**
         * Wrap the given text in terminal formatting codes corresponding to the given attribute
         * name. The `attr` string can be of the form `red fg` or `52 bg` where `52` is a 0-255
         * integer color number.
         */
        text(text: string, attr: string): string;
    }
}

export namespace widget {
    class Terminal extends Widgets.TerminalElement {}
}

export function screen(options?: Widgets.IScreenOptions): Widgets.Screen;
export function box(options?: Widgets.BoxOptions): Widgets.BoxElement;
export function text(options?: Widgets.TextOptions): Widgets.TextElement;
export function line(options?: Widgets.LineOptions): Widgets.LineElement;
export function scrollablebox(options?: Widgets.BoxOptions): Widgets.BoxElement;
export function scrollabletext(options?: Widgets.BoxOptions): Widgets.BoxElement;
export function bigtext(options?: Widgets.BigTextOptions): Widgets.BigTextElement;
export function list(options?: Widgets.ListOptions<Widgets.ListElementStyle>): Widgets.ListElement;
export function filemanager(options?: Widgets.FileManagerOptions): Widgets.FileManagerElement;
export function listtable(options?: Widgets.ListTableOptions): Widgets.ListTableElement;
export function listbar(options?: Widgets.ListbarOptions): Widgets.ListbarElement;
export function form<TFormData>(options?: Widgets.FormOptions): Widgets.FormElement<TFormData>;
export function input(options?: Widgets.InputOptions): Widgets.InputElement;
export function textarea(options?: Widgets.TextareaOptions): Widgets.TextareaElement;
export function textbox(options?: Widgets.TextboxOptions): Widgets.TextboxElement;
export function button(options?: Widgets.ButtonOptions): Widgets.ButtonElement;
export function checkbox(options?: Widgets.CheckboxOptions): Widgets.CheckboxElement;
export function radioset(options?: Widgets.RadioSetOptions): Widgets.RadioSetElement;
export function radiobutton(options?: Widgets.RadioButtonOptions): Widgets.RadioButtonElement;
export function table(options?: Widgets.TableOptions): Widgets.TableElement;
export function prompt(options?: Widgets.PromptOptions): Widgets.PromptElement;
export function question(options?: Widgets.QuestionOptions): Widgets.QuestionElement;
export function message(options?: Widgets.MessageOptions): Widgets.MessageElement;
export function loading(options?: Widgets.LoadingOptions): Widgets.LoadingElement;
export function log(options?: Widgets.LogOptions): Widgets.Log;
export function progressbar(options?: Widgets.ProgressBarOptions): Widgets.ProgressBarElement;
export function program(options?: Widgets.IScreenOptions): BlessedProgram;
export function terminal(options?: Widgets.TerminalOptions): Widgets.TerminalElement;
export function layout(options?: Widgets.LayoutOptions): Widgets.LayoutElement;
export function escape(item: any): any;

export const colors: {
    match(hexColor: string): string;
};
