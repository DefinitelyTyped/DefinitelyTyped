declare module goog {
    function require(name: 'goog.editor.plugins.UndoRedo'): typeof goog.editor.plugins.UndoRedo;
}

declare module goog.editor.plugins {

    /**
     * Encapsulates undo/redo logic using a custom undo stack (i.e. not browser
     * built-in). Browser built-in undo stacks are too flaky (e.g. IE's gets
     * clobbered on DOM modifications). Also, this allows interleaving non-editing
     * commands into the undo stack via the UndoRedoManager.
     *
     * @param {goog.editor.plugins.UndoRedoManager=} opt_manager An undo redo
     *    manager to be used by this plugin. If none is provided one is created.
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class UndoRedo extends goog.editor.Plugin {
        constructor(opt_manager?: goog.editor.plugins.UndoRedoManager);
        
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
        
        /**
         * Set the max undo stack depth (not the real memory usage).
         * @param {number} depth Depth of the stack.
         */
        setMaxUndoDepth(depth: number): void;
        
        /**
         * Set the undo-redo manager used by this plugin. Any state on a previous
         * undo-redo manager is lost.
         * @param {goog.editor.plugins.UndoRedoManager} manager The undo-redo manager.
         */
        setUndoRedoManager(manager: goog.editor.plugins.UndoRedoManager): void;
        
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the string corresponds to a command
         *     this plugin handles.
         * @override
         */
        isSupportedCommand(command: string): boolean;
        
        /**
         * Unregisters and disables the fieldObject with this plugin. Thie does *not*
         * clobber the undo stack for the fieldObject though.
         * TODO(user): For the multifield version, we really should add a way to
         * ignore undo actions on field's that have been made uneditable.
         * This is probably as simple as skipping over entries in the undo stack
         * that have a hashcode of an uneditable field.
         * @param {goog.editor.Field} fieldObject The field to register with the plugin.
         * @override
         */
        unregisterFieldObject(fieldObject: goog.editor.Field): void;
        
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @return {goog.editor.Field} The active field object for this field. This is
         *     the one registered field object for the single-plugin case and the
         *     focused field for the multi-field plugin case.
         */
        getCurrentFieldObject(): goog.editor.Field;
        
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @param {string} fieldHashCode The Field's hashcode.
         * @return {goog.editor.Field} The field object with the hashcode.
         */
        getFieldObjectForHash(fieldHashCode: string): goog.editor.Field;
        
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @return {goog.editor.Field} Target for COMMAND_VALUE_CHANGE events.
         */
        getCurrentEventTarget(): goog.editor.Field;
        
        /**
         * Restores the state of the editable field.
         * @param {goog.editor.plugins.UndoRedo.UndoState_} state The state initiating
         *    the restore.
         * @param {string} content The content to restore.
         * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
         *     The cursor position within the content.
         */
        restoreState(state: goog.editor.plugins.UndoRedo.UndoState_, content: string, cursorPosition: goog.editor.plugins.UndoRedo.CursorPosition_): void;
        
        /**
         * Clear the undo/redo stack.
         */
        clearHistory(): void;
        
        /**
         * Refreshes the current state of the editable field as maintained by undo-redo,
         * without adding any undo-redo states to the stack.
         * @param {goog.editor.Field} fieldObject The editable field.
         */
        refreshCurrentState(fieldObject: goog.editor.Field): void;
    }
}

declare module goog.editor.plugins.UndoRedo {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    type COMMAND = string;
    var COMMAND: {
        UNDO: COMMAND;
        REDO: COMMAND;
    };

    /**
     * This object encapsulates the state of an editable field.
     *
     * @param {string} fieldHashCode String the id of the field we're saving the
     *     content of.
     * @param {string} content String the actual text we're saving.
     * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
     *     CursorPosLite object for the cursor position in the field.
     * @param {Function} restore The function used to restore editable field state.
     * @private
     * @constructor
     * @extends {goog.editor.plugins.UndoRedoState}
     */
    interface UndoState_ extends goog.editor.plugins.UndoRedoState {
        
        /**
         * Updates the undo portion of this state. Should only be used to update the
         * current state of an editable field, which is not yet on the undo stack after
         * an undo or redo operation. You should never be modifying states on the stack!
         * @param {string} content The current content.
         * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
         *     The current cursor position.
         */
        setUndoState(content: string, cursorPosition: goog.editor.plugins.UndoRedo.CursorPosition_): void;
        
        /**
         * Adds redo information to this state. This method should be called before the
         * state is added onto the undo stack.
         *
         * @param {string} content The content to restore on a redo.
         * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
         *     The cursor position to restore on a redo.
         */
        setRedoState(content: string, cursorPosition: goog.editor.plugins.UndoRedo.CursorPosition_): void;
        
        /**
         * Checks if the *contents* of two
         * {@code goog.editor.plugins.UndoRedo.UndoState_}s are the same.  We don't
         * bother checking the cursor position (that's not something we'd want to save
         * anyway).
         * @param {goog.editor.plugins.UndoRedoState} rhs The state to compare.
         * @return {boolean} Whether the contents are the same.
         * @override
         */
        equals(rhs: goog.editor.plugins.UndoRedoState): boolean;
    }

    /**
     * Stores the state of the selection in a way the survives DOM modifications
     * that don't modify the user-interactable content (e.g. making something bold
     * vs. typing a character).
     *
     * TODO(user): Completely get rid of this and use goog.dom.SavedCaretRange.
     *
     * @param {goog.editor.Field} field The field the selection is in.
     * @private
     * @constructor
     */
    interface CursorPosition_ {
        
        /**
         * @return {boolean} Whether this object is valid.
         */
        isValid(): boolean;
        
        /**
         * @return {string} A string representation of this object.
         * @override
         */
        toString(): string;
        
        /**
         * Makes the browser's selection match the cursor position.
         */
        select(): void;
    }
}
