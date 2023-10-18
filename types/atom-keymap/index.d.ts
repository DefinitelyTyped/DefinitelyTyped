import { Disposable } from "event-kit";

declare global {
    namespace AtomKeymap {
        /**
         *  The event objects that are passed into the callbacks which the user provides to
         *  specific API calls.
         */
        namespace Events {
            /**
             *  This custom subclass of CustomEvent exists to provide the ::abortKeyBinding
             *  method, as well as versions of the ::stopPropagation methods that record the
             *  intent to stop propagation so event bubbling can be properly simulated for
             *  detached elements.
             */
            interface CommandEvent extends CustomEvent {
                keyBindingAborted: boolean;
                propagationStopped: boolean;

                abortKeyBinding(): void;
                stopPropagation(): CustomEvent;
                stopImmediatePropagation(): CustomEvent;
            }

            interface FullKeybindingMatch {
                /** The string of keystrokes that matched the binding. */
                keystrokes: string;

                /** The KeyBinding that the keystrokes matched. */
                binding: KeyBinding;

                /** The DOM element that was the target of the most recent keyboard event. */
                keyboardEventTarget: Element;
            }

            interface PartialKeybindingMatch {
                /** The string of keystrokes that matched the binding. */
                keystrokes: string;

                /** The KeyBindings that the keystrokes partially matched. */
                partiallyMatchedBindings: KeyBinding[];

                /** DOM element that was the target of the most recent keyboard event. */
                keyboardEventTarget: Element;
            }

            interface FailedKeybindingMatch {
                /** The string of keystrokes that failed to match the binding. */
                keystrokes: string;

                /** The DOM element that was the target of the most recent keyboard event. */
                keyboardEventTarget: Element;
            }

            interface FailedKeymapFileRead {
                /** The error message. */
                message: string;

                /** The error stack trace. */
                stack: string;
            }

            interface KeymapLoaded {
                /** The path of the keymap file. */
                path: string;
            }

            interface AddedKeystrokeResolver {
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
        }

        /**
         *  The option objects that the user is expected to fill out and provide to
         *  specific API calls.
         */
        namespace Options {
            interface BuildKeyEvent {
                ctrl?: boolean | undefined;
                alt?: boolean | undefined;
                shift?: boolean | undefined;
                cmd?: boolean | undefined;
                which?: number | undefined;
                target?: Element | undefined;
            }
        }

        interface KeyBinding {
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

        /**
         *  Allows commands to be associated with keystrokes in a context-sensitive way.
         *  In Atom, you can access a global instance of this object via `atom.keymaps`.
         */
        interface KeymapManager {
            defaultTarget: HTMLElement;

            partialMatchTimeout: number;

            /** Clear all registered key bindings and enqueued keystrokes. For use in tests. */
            clear(): void;

            /** Unwatch all watched paths. */
            destroy(): void;

            // Event Subscription
            /**
             *  Invoke the given callback when one or more keystrokes completely match a
             *  key binding.
             */
            onDidMatchBinding(callback: (event: Events.FullKeybindingMatch) => void): Disposable;

            /** Invoke the given callback when one or more keystrokes partially match a binding. */
            onDidPartiallyMatchBindings(callback: (event: Events.PartialKeybindingMatch) => void): Disposable;

            /** Invoke the given callback when one or more keystrokes fail to match any bindings. */
            onDidFailToMatchBinding(callback: (event: Events.FailedKeybindingMatch) => void): Disposable;

            /** Invoke the given callback when a keymap file is reloaded. */
            onDidReloadKeymap(callback: (event: Events.KeymapLoaded) => void): Disposable;

            /** Invoke the given callback when a keymap file is unloaded. */
            onDidUnloadKeymap(callback: (event: Events.KeymapLoaded) => void): Disposable;

            /** Invoke the given callback when a keymap file not able to be loaded. */
            onDidFailToReadFile(callback: (error: Events.FailedKeymapFileRead) => void): Disposable;

            // Adding and Removing Bindings
            /** Construct KeyBindings from an object grouping them by CSS selector. */
            build(
                source: string,
                bindings: { [key: string]: { [key: string]: string } },
                priority?: number,
            ): KeyBinding[];

            /** Add sets of key bindings grouped by CSS selector. */
            add(source: string, bindings: { [key: string]: { [key: string]: string } }, priority?: number): Disposable;

            // Accessing Bindings
            /** Get all current key bindings. */
            getKeyBindings(): KeyBinding[];

            /** Get the key bindings for a given command and optional target. */
            findKeyBindings(params?: {
                keystrokes?: string | undefined; // e.g. 'ctrl-x ctrl-s'
                command?: string | undefined; // e.g. 'editor:backspace'
                target?: Element | undefined;
            }): KeyBinding[];

            // Managing Keymap Files
            /** Load the key bindings from the given path. */
            loadKeymap(
                bindingsPath: string,
                options?: { watch?: boolean | undefined; priority?: number | undefined },
            ): void;

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
            addKeystrokeResolver(resolver: (event: Events.AddedKeystrokeResolver) => string): Disposable;

            /**
             *  Get the number of milliseconds allowed before pending states caused by
             *  partial matches of multi-keystroke bindings are terminated.
             */
            getPartialMatchTimeout(): number;
        }

        /** The static side to the KeymapManager class. */
        interface KeymapManagerStatic {
            /** Create a keydown DOM event. */
            buildKeydownEvent(key: string, options?: Options.BuildKeyEvent): void;

            /** Create a keyup DOM event. */
            buildKeyupEvent(key: string, options?: Options.BuildKeyEvent): void;

            /** Create a new KeymapManager. */
            new(options?: { defaultTarget?: HTMLElement | undefined }): KeymapManager;
        }
    }
}

declare const KeymapManager: AtomKeymap.KeymapManagerStatic;
export = KeymapManager;
