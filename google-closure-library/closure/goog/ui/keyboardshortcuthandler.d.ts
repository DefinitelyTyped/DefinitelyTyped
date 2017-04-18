declare module goog {
    function require(name: 'goog.ui.KeyboardShortcutHandler'): typeof goog.ui.KeyboardShortcutHandler;
    function require(name: 'goog.ui.KeyboardShortcutEvent'): typeof goog.ui.KeyboardShortcutEvent;
    function require(name: 'goog.ui.KeyboardShortcutHandler.EventType'): typeof goog.ui.KeyboardShortcutHandler.EventType;
}

declare module goog.ui {

    /**
     * Component for handling keyboard shortcuts. A shortcut is registered and bound
     * to a specific identifier. Once the shortcut is triggered an event is fired
     * with the identifier for the shortcut. This allows keyboard shortcuts to be
     * customized without modifying the code that listens for them.
     *
     * Supports keyboard shortcuts triggered by a single key, a stroke stroke (key
     * plus at least one modifier) and a sequence of keys or strokes.
     *
     * @param {goog.events.EventTarget|EventTarget} keyTarget Event target that the
     *     key event listener is attached to, typically the applications root
     *     container.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class KeyboardShortcutHandler extends goog.events.EventTarget {
        constructor(keyTarget: goog.events.EventTarget|goog.globalEventTarget);
        
        /**
         * Maximum allowed delay, in milliseconds, allowed between the first and second
         * key in a key sequence.
         * @type {number}
         */
        static MAX_KEY_SEQUENCE_DELAY: number;
        
        /**
         * Static method for getting the key code for a given key.
         * @param {string} name Name of key.
         * @return {number} The key code.
         */
        static getKeyCode(name: string): number;
        
        /**
         * Sets whether to always prevent the default action when a shortcut event is
         * fired. If false, the default action is prevented only if preventDefault is
         * called on either of the corresponding SHORTCUT_TRIGGERED or SHORTCUT_PREFIX
         * events. If true, the default action is prevented whenever a shortcut event
         * is fired. The default value is true.
         * @param {boolean} alwaysPreventDefault Whether to always call preventDefault.
         */
        setAlwaysPreventDefault(alwaysPreventDefault: boolean): void;
        
        /**
         * Returns whether the default action will always be prevented when a shortcut
         * event is fired. The default value is true.
         * @see #setAlwaysPreventDefault
         * @return {boolean} Whether preventDefault will always be called.
         */
        getAlwaysPreventDefault(): boolean;
        
        /**
         * Sets whether to always stop propagation for the event when fired. If false,
         * the propagation is stopped only if stopPropagation is called on either of the
         * corresponding SHORT_CUT_TRIGGERED or SHORTCUT_PREFIX events. If true, the
         * event is prevented from propagating beyond its target whenever it is fired.
         * The default value is false.
         * @param {boolean} alwaysStopPropagation Whether to always call
         *     stopPropagation.
         */
        setAlwaysStopPropagation(alwaysStopPropagation: boolean): void;
        
        /**
         * Returns whether the event will always be stopped from propagating beyond its
         * target when a shortcut event is fired. The default value is false.
         * @see #setAlwaysStopPropagation
         * @return {boolean} Whether stopPropagation will always be called.
         */
        getAlwaysStopPropagation(): boolean;
        
        /**
         * Sets whether to treat all shortcuts (including modifier shortcuts) as if the
         * keys had been passed to the setGlobalKeys function.
         * @param {boolean} allShortcutsGlobal Whether to treat all shortcuts as global.
         */
        setAllShortcutsAreGlobal(allShortcutsGlobal: boolean): void;
        
        /**
         * Returns whether all shortcuts (including modifier shortcuts) are treated as
         * if the keys had been passed to the setGlobalKeys function.
         * @see #setAllShortcutsAreGlobal
         * @return {boolean} Whether all shortcuts are treated as globals.
         */
        getAllShortcutsAreGlobal(): boolean;
        
        /**
         * Sets whether to treat shortcuts with modifiers as if the keys had been
         * passed to the setGlobalKeys function.  Ignored if you have called
         * setAllShortcutsAreGlobal(true).  Applies only to form elements (not
         * content-editable).
         * @param {boolean} modifierShortcutsGlobal Whether to treat shortcuts with
         *     modifiers as global.
         */
        setModifierShortcutsAreGlobal(modifierShortcutsGlobal: boolean): void;
        
        /**
         * Returns whether shortcuts with modifiers are treated as if the keys had been
         * passed to the setGlobalKeys function.  Ignored if you have called
         * setAllShortcutsAreGlobal(true).  Applies only to form elements (not
         * content-editable).
         * @see #setModifierShortcutsAreGlobal
         * @return {boolean} Whether shortcuts with modifiers are treated as globals.
         */
        getModifierShortcutsAreGlobal(): boolean;
        
        /**
         * Sets whether to treat space key as a shortcut when the focused element is a
         * checkbox, radiobutton or button.
         * @param {boolean} allowSpaceKeyOnButtons Whether to treat space key as a
         *     shortcut when the focused element is a checkbox, radiobutton or button.
         */
        setAllowSpaceKeyOnButtons(allowSpaceKeyOnButtons: boolean): void;
        
        /**
         * Registers a keyboard shortcut.
         * @param {string} identifier Identifier for the task performed by the keyboard
         *                 combination. Multiple shortcuts can be provided for the same
         *                 task by specifying the same identifier.
         * @param {...(number|string|Array<number>)} var_args See below.
         *
         * param {number} keyCode Numeric code for key
         * param {number=} opt_modifiers Bitmap indicating required modifier keys.
         *                goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT, CONTROL,
         *                ALT, or META.
         *
         * The last two parameters can be repeated any number of times to create a
         * shortcut using a sequence of strokes. Instead of varagrs the second parameter
         * could also be an array where each element would be ragarded as a parameter.
         *
         * A string representation of the shortcut can be supplied instead of the last
         * two parameters. In that case the method only takes two arguments, the
         * identifier and the string.
         *
         * Examples:
         *   g               registerShortcut(str, G_KEYCODE)
         *   Ctrl+g          registerShortcut(str, G_KEYCODE, CTRL)
         *   Ctrl+Shift+g    registerShortcut(str, G_KEYCODE, CTRL | SHIFT)
         *   Ctrl+g a        registerShortcut(str, G_KEYCODE, CTRL, A_KEYCODE)
         *   Ctrl+g Shift+a  registerShortcut(str, G_KEYCODE, CTRL, A_KEYCODE, SHIFT)
         *   g a             registerShortcut(str, G_KEYCODE, NONE, A_KEYCODE)
         *
         * Examples using string representation for shortcuts:
         *   g               registerShortcut(str, 'g')
         *   Ctrl+g          registerShortcut(str, 'ctrl+g')
         *   Ctrl+Shift+g    registerShortcut(str, 'ctrl+shift+g')
         *   Ctrl+g a        registerShortcut(str, 'ctrl+g a')
         *   Ctrl+g Shift+a  registerShortcut(str, 'ctrl+g shift+a')
         *   g a             registerShortcut(str, 'g a').
         */
        registerShortcut(identifier: string, ...var_args: (number|string|Array<number>)[]): void;
        
        /**
         * Unregisters a keyboard shortcut by keyCode and modifiers or string
         * representation of sequence.
         *
         * param {number} keyCode Numeric code for key
         * param {number=} opt_modifiers Bitmap indicating required modifier keys.
         *                 goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT, CONTROL,
         *                 ALT, or META.
         *
         * The two parameters can be repeated any number of times to create a shortcut
         * using a sequence of strokes.
         *
         * A string representation of the shortcut can be supplied instead see
         * {@link #registerShortcut} for syntax. In that case the method only takes one
         * argument.
         *
         * @param {...(number|string|Array<number>)} var_args String representation, or
         *     array or list of alternating key codes and modifiers.
         */
        unregisterShortcut(...var_args: (number|string|Array<number>)[]): void;
        
        /**
         * Verifies if a particular keyboard shortcut is registered already. It has
         * the same interface as the unregistering of shortcuts.
         *
         * param {number} keyCode Numeric code for key
         * param {number=} opt_modifiers Bitmap indicating required modifier keys.
         *                 goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT, CONTROL,
         *                 ALT, or META.
         *
         * The two parameters can be repeated any number of times to create a shortcut
         * using a sequence of strokes.
         *
         * A string representation of the shortcut can be supplied instead see
         * {@link #registerShortcut} for syntax. In that case the method only takes one
         * argument.
         *
         * @param {...(number|string|Array<number>)} var_args String representation, or
         *     array or list of alternating key codes and modifiers.
         * @return {boolean} Whether the specified keyboard shortcut is registered.
         */
        isShortcutRegistered(...var_args: (number|string|Array<number>)[]): boolean;
        
        /**
         * Unregisters all keyboard shortcuts.
         */
        unregisterAll(): void;
        
        /**
         * Sets the global keys; keys that are safe to always regarded as shortcuts,
         * even if entered in a textarea or input field.
         * @param {Array<number>} keys List of keys.
         */
        setGlobalKeys(keys: Array<number>): void;
        
        /**
         * @return {!Array<string>} The global keys, i.e. keys that are safe to always
         *     regard as shortcuts, even if entered in a textarea or input field.
         */
        getGlobalKeys(): Array<string>;
        
        /**
         * Returns event type for a specific shortcut.
         * @param {string} identifier Identifier for the shortcut task.
         * @return {string} Theh event type.
         */
        getEventType(identifier: string): string;
        
        /**
         * Builds stroke array from string representation of shortcut.
         * @param {string} s String representation of shortcut.
         * @return {!Array<!{keyCode: ?number, modifiers: number}>} The stroke array.  A
         *     null keyCode means no non-modifier key was part of the stroke.
         */
        static parseStringShortcut(s: string): Array<{keyCode: number; modifiers: number}>;
        
        /**
         * Adds a key event listener that triggers {@link #handleKeyDown_} when keys
         * are pressed.
         * @param {goog.events.EventTarget|EventTarget} keyTarget Event target that the
         *     event listener should be attached to.
         * @protected
         */
        initializeKeyListener(keyTarget: goog.events.EventTarget|goog.globalEventTarget): void;
        
        /**
         * Removes the listener that was added by link {@link #initializeKeyListener}.
         * @protected
         */
        clearKeyListener(): void;
    }

    /**
     * Object representing a keyboard shortcut event.
     * @param {string} type Event type.
     * @param {string} identifier Task identifier for the triggered shortcut.
     * @param {Node|goog.events.EventTarget} target Target the original key press
     *     event originated from.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class KeyboardShortcutEvent extends goog.events.Event {
        constructor(type: string, identifier: string, target: Node|goog.events.EventTarget);
    }
}

declare module goog.ui.KeyboardShortcutHandler {

    /**
     * Bit values for modifier keys.
     * @enum {number}
     */
    type Modifiers = number;
    var Modifiers: {
        NONE: Modifiers;
        SHIFT: Modifiers;
        CTRL: Modifiers;
        ALT: Modifiers;
        META: Modifiers;
    };

    /**
     * Events.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        SHORTCUT_TRIGGERED: EventType;
        SHORTCUT_PREFIX: EventType;
    };

    /**
     * A map of strokes (represented as numbers) to the nodes reached by those
     * strokes.
     * @typedef {Object<number, goog.ui.KeyboardShortcutHandler.SequenceNode_>}
     * @private
     */
    type SequenceTree_ = {[index: number]: goog.ui.KeyboardShortcutHandler.SequenceNode_};

    /**
     * A node in a keyboard shortcut sequence tree. A node is either:
     * 1. A terminal node with a non-nullable shortcut string which is the
     *    identifier for the shortcut triggered by traversing the tree to that node.
     * 2. An internal node with a null shortcut string and a
     *    {@code goog.ui.KeyboardShortcutHandler.SequenceTree_} representing the
     *    continued stroke sequences from this node.
     * For clarity, the static factory methods for creating internal and terminal
     * nodes below should be used rather than using this constructor directly.
     * @param {string=} opt_shortcut The shortcut identifier, for terminal nodes.
     * @constructor
     * @struct
     * @private
     */
    interface SequenceNode_ {
    }
}
