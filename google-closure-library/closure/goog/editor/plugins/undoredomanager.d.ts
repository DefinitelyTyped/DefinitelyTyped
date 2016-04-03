declare module goog {
    function require(name: 'goog.editor.plugins.UndoRedoManager'): typeof goog.editor.plugins.UndoRedoManager;
    function require(name: 'goog.editor.plugins.UndoRedoManager.EventType'): typeof goog.editor.plugins.UndoRedoManager.EventType;
}

declare module goog.editor.plugins {

    /**
     * Manages undo and redo operations through a series of {@code UndoRedoState}s
     * maintained on undo and redo stacks.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class UndoRedoManager extends goog.events.EventTarget {
        constructor();
        
        /**
         * Set the max undo stack depth (not the real memory usage).
         * @param {number} depth Depth of the stack.
         */
        setMaxUndoDepth(depth: number): void;
        
        /**
         * Add state to the undo stack. This clears the redo stack.
         *
         * @param {goog.editor.plugins.UndoRedoState} state The state to add to the undo
         *     stack.
         */
        addState(state: goog.editor.plugins.UndoRedoState): void;
        
        /**
         * Performs the undo operation of the state at the top of the undo stack, moving
         * that state to the top of the redo stack. If the undo stack is empty, does
         * nothing.
         */
        undo(): void;
        
        /**
         * Performs the redo operation of the state at the top of the redo stack, moving
         * that state to the top of the undo stack. If redo undo stack is empty, does
         * nothing.
         */
        redo(): void;
        
        /**
         * @return {boolean} Wether the undo stack has items on it, i.e., if it is
         *     possible to perform an undo operation.
         */
        hasUndoState(): boolean;
        
        /**
         * @return {boolean} Wether the redo stack has items on it, i.e., if it is
         *     possible to perform a redo operation.
         */
        hasRedoState(): boolean;
        
        /**
         * Clears the undo and redo stacks.
         */
        clearHistory(): void;
        
        /**
         * @return {goog.editor.plugins.UndoRedoState|undefined} The state at the top of
         *     the undo stack without removing it from the stack.
         */
        undoPeek(): goog.editor.plugins.UndoRedoState|void;
        
        /**
         * @return {goog.editor.plugins.UndoRedoState|undefined} The state at the top of
         *     the redo stack without removing it from the stack.
         */
        redoPeek(): goog.editor.plugins.UndoRedoState|void;
    }
}

declare module goog.editor.plugins.UndoRedoManager {

    /**
     * Event types for the events dispatched by undo-redo manager.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        STATE_CHANGE: EventType;
        STATE_ADDED: EventType;
        BEFORE_UNDO: EventType;
        BEFORE_REDO: EventType;
    };
}
