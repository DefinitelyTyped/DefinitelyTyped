// Type definitions for atom-keymap v5.1.5
// Project: https://github.com/atom/atom-keymap/
// Definitions by: Vadim Macagon <https://github.com/enlight/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="event-kit" />

import * as AtomEventKit from 'event-kit';

export = AtomKeymap;

declare namespace AtomKeymap {
	type Disposable = AtomEventKit.Disposable;

	/** Instance side of KeyBinding class. */
	interface KeyBinding {
		enabled: boolean;
		source: string;
		command: string;
		keystrokes: string;
		keystrokeCount: number;
		selector: string;
		specificity: number;

		matches(keystroke: string): boolean;
		compare(keyBinding: KeyBinding): number;
	}

	interface ICompleteMatchEvent {
		/** Keystrokes that matched the binding. */
		keystrokes: string;
		/** Binding that was matched to the keystrokes. */
		binding: KeyBinding;
		/** DOM element that was the target of the most recent `KeyboardEvent`. */
		keyboardEventTarget: Element;
	}

	interface IPartialMatchEvent {
		/** Keystrokes that matched the binding. */
		keystrokes: string;
		/** Bindings that were partially matched to the keystrokes. */
		partiallyMatchedBindings: KeyBinding[];
		/** DOM element that was the target of the most recent `KeyboardEvent`. */
		keyboardEventTarget: Element;
	}

	interface IFailedMatchEvent {
		/** Keystrokes that failed to match a binding. */
		keystrokes: string;
		/** DOM element that was the target of the most recent `KeyboardEvent`. */
		keyboardEventTarget: Element;
	}

	interface IKeymapLoadEvent {
		/** Path to a keymap file. */
		path: string;
	}

  /** Static side of KeymapManager class. */
  interface KeymapManagerStatic {
    prototype: KeymapManager;
    new (options?: { defaultTarget?: Element }): KeymapManager;
  }

	/** Instance side of KeymapManager class. */
	interface KeymapManager {
		constructor: KeymapManagerStatic;
		/** Unwatches all watched paths. */
		destroy(): void;

		// Event Subscription

		/** Sets callback to invoke when one or more keystrokes completely match a key binding. */
		onDidMatchBinding(callback: (event: ICompleteMatchEvent) => void): Disposable;
		/** Sets callback to invoke when one or more keystrokes partially match a binding. */
		onDidPartiallyMatchBindings(callback: (event: IPartialMatchEvent) => void): Disposable;
		/** Sets callback to invoke when one or more keystrokes fail to match any bindings. */
		onDidFailToMatchBinding(callback: (event: IFailedMatchEvent) => void): Disposable;
		/** Sets callback to invoke when a keymap file is reloaded. */
		onDidReloadKeymap(callback: (event: IKeymapLoadEvent) => void): Disposable;
		/** Sets callback to invoke when a keymap file is unloaded. */
		onDidUnloadKeymap(callback: (event: IKeymapLoadEvent) => void): Disposable;
		/** Sets callback to invoke when a keymap file could not to be loaded. */
		onDidFailToReadFile(callback: (error: Error) => void): Disposable;

		// Adding and Removing Bindings

		/** Adds sets of key bindings grouped by CSS selector. */
		add(source: string, keyBindingsBySelector: any): Disposable;

		// Accessing Bindings

		getKeyBindings(): KeyBinding[];
		findKeyBindings(params?: {
			keystrokes: string; // e.g. 'ctrl-x ctrl-s'
			command: string; // e.g. 'editor:backspace'
			target?: Element;
		}): KeyBinding[];

		// Managing Keymap Files

		/**
		 * Loads the key bindings from the given path.
		 *
		 * @param bindingsPath A path to a file or a directory. If the path is a directory all files
		 *                     inside it will be loaded.
		 */
		loadKeymap(bindingsPath: string, options?: { watch: boolean }): void;
		/**
		 * Starts watching the given file/directory for changes, reloading any keymaps at that location
		 * when changes are detected.
		 *
		 * @param filePath A path to a file or a directory.
		 */
		watchKeymap(filePath: string): void;

		// Managing Keyboard Events

		/**
		 * Dispatches a custom event associated with the matching key binding for the given
		 * `KeyboardEvent` if one can be found.
		 */
		handleKeyboardEvent(event: KeyboardEvent): void;
		/** Translates a keydown event to a keystroke string. */
		keystrokeForKeyboardEvent(event: KeyboardEvent): string;
		/**
		 * @return The number of milliseconds allowed before pending states caused by partial matches of
		 *         multi-keystroke bindings are terminated.
		 */
		getPartialMatchTimeout(): number;
	}

	/** Allows commands to be associated with keystrokes in a context-sensitive way.*/
	var KeymapManager: KeymapManagerStatic;
}
