import { Disposable } from '../index';

/**
 *  Allows commands to be associated with keystrokes in a context-sensitive way.
 *  In Atom, you can access a global instance of this object via `atom.keymaps`.
 */
export interface KeymapManager {
    /** Clear all registered key bindings and enqueued keystrokes. For use in tests. */
    clear(): void;

    /** Unwatch all watched paths. */
    destroy(): void;

    // Event Subscription
    /** Invoke the given callback when one or more keystrokes completely match a key binding. */
    onDidMatchBinding(callback: (event: FullKeybindingMatchEvent) => void): Disposable;

    /** Invoke the given callback when one or more keystrokes partially match a binding. */
    onDidPartiallyMatchBindings(callback: (event: PartialKeybindingMatchEvent) => void): Disposable;

    /** Invoke the given callback when one or more keystrokes fail to match any bindings. */
    onDidFailToMatchBinding(callback: (event: FailedKeybindingMatchEvent) => void): Disposable;

    /** Invoke the given callback when a keymap file is reloaded. */
    onDidReloadKeymap(callback: (event: KeymapLoadedEvent) => void): Disposable;

    /** Invoke the given callback when a keymap file is unloaded. */
    onDidUnloadKeymap(callback: (event: KeymapLoadedEvent) => void): Disposable;

    /** Invoke the given callback when a keymap file not able to be loaded. */
    onDidFailToReadFile(callback: (error: FailedKeymapFileReadEvent) => void): Disposable;

    // Adding and Removing Bindings
    /** Construct KeyBindings from an object grouping them by CSS selector. */
    build(source: string, bindings: { [key: string]: { [key: string]: string } }, priority?: number): KeyBinding[];

    /** Add sets of key bindings grouped by CSS selector. */
    add(source: string, bindings: { [key: string]: { [key: string]: string } }, priority?: number): Disposable;

    // Accessing Bindings
    /** Get all current key bindings. */
    getKeyBindings(): KeyBinding[];

    /** Get the key bindings for a given command and optional target. */
    findKeyBindings(params?: {
        keystrokes?: string; // e.g. 'ctrl-x ctrl-s'
        command?: string; // e.g. 'editor:backspace'
        target?: Element;
    }): KeyBinding[];

    // Managing Keymap Files
    /** Load the key bindings from the given path. */
    loadKeymap(bindingsPath: string, options?: { watch?: boolean; priority?: number }): void;

    /**
     *  Cause the keymap to reload the key bindings file at the given path whenever
     *  it changes.
     */
    watchKeymap(filePath: string, options?: { priority: number }): void;

    // Managing Keyboard Events
    /**
     *  Dispatch a custom event associated with the matching key binding for the
     *  given `KeyboardEvent` if one can be found.
     */
    handleKeyboardEvent(event: KeyboardEvent): void;

    /** Translates a keydown event to a keystroke string. */
    keystrokeForKeyboardEvent(event: KeyboardEvent): string;

    /** Customize translation of raw keyboard events to keystroke strings. */
    addKeystrokeResolver(resolver: (event: AddedKeystrokeResolverEvent) => string): Disposable;

    /**
     *  Get the number of milliseconds allowed before pending states caused by
     *  partial matches of multi-keystroke bindings are terminated.
     */
    getPartialMatchTimeout(): number;
}

export interface FullKeybindingMatchEvent {
    /** The string of keystrokes that matched the binding. */
    keystrokes: string;

    /** The KeyBinding that the keystrokes matched. */
    binding: KeyBinding;

    /** The DOM element that was the target of the most recent keyboard event. */
    keyboardEventTarget: Element;
}

export interface KeyBinding {
    // Properties
    enabled: boolean;
    source: string;
    command: string;
    keystrokes: string;
    keystrokeArray: string[];
    keystrokeCount: number;
    selector: string;
    specificity: number;

    // Comparison
    /** Determines whether the given keystroke matches any contained within this binding. */
    matches(keystroke: string): boolean;

    /**
     *  Compare another KeyBinding to this instance.
     *  Returns <= -1 if the argument is considered lesser or of lower priority.
     *  Returns 0 if this binding is equivalent to the argument.
     *  Returns >= 1 if the argument is considered greater or of higher priority.
     */
    compare(other: KeyBinding): number;
}

export interface PartialKeybindingMatchEvent {
    /** The string of keystrokes that matched the binding. */
    keystrokes: string;

    /** The KeyBindings that the keystrokes partially matched. */
    partiallyMatchedBindings: KeyBinding[];

    /** DOM element that was the target of the most recent keyboard event. */
    keyboardEventTarget: Element;
}

export interface AddedKeystrokeResolverEvent {
    /**
     *  The currently resolved keystroke string. If your function returns a falsy
     *  value, this is how Atom will resolve your keystroke.
     */
    keystroke: string;

    /**
     *  The raw DOM 3 `KeyboardEvent` being resolved. See the DOM API documentation
     *  for more details.
     */
    event: KeyboardEvent;

    /** The OS-specific name of the current keyboard layout. */
    layoutName: string;

    /**
     *  An object mapping DOM 3 `KeyboardEvent.code` values to objects with the
     *  typed character for that key in each modifier state, based on the current
     *  operating system layout.
     */
    keymap: object;
}

export interface FailedKeybindingMatchEvent {
    /** The string of keystrokes that failed to match the binding. */
    keystrokes: string;

    /** The DOM element that was the target of the most recent keyboard event. */
    keyboardEventTarget: Element;
}

export interface FailedKeymapFileReadEvent {
    /** The error message. */
    message: string;

    /** The error stack trace. */
    stack: string;
}

export interface KeymapLoadedEvent {
    /** The path of the keymap file. */
    path: string;
}
