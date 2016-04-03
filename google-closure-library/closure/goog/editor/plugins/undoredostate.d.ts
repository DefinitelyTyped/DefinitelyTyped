declare module goog {
    function require(name: 'goog.editor.plugins.UndoRedoState'): typeof goog.editor.plugins.UndoRedoState;
}

declare module goog.editor.plugins {

    /**
     * Represents an undo and redo action for a particular state transition.
     *
     * @param {boolean} asynchronous Whether the undo or redo actions for this
     *     state complete asynchronously. If true, then this state must fire
     *     an ACTION_COMPLETED event when undo or redo is complete.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class UndoRedoState extends goog.events.EventTarget {
        constructor(asynchronous: boolean);
        
        /**
         * Event type for events indicating that this state has completed an undo or
         * redo operation.
         */
        static ACTION_COMPLETED: any;
        
        /**
         * @return {boolean} Whether or not the undo and redo actions of this state
         *     complete asynchronously. If true, the state will fire an ACTION_COMPLETED
         *     event when an undo or redo action is complete.
         */
        isAsynchronous(): boolean;
        
        /**
         * Undoes the action represented by this state.
         */
        undo(): void;
        
        /**
         * Redoes the action represented by this state.
         */
        redo(): void;
        
        /**
         * Checks if two undo-redo states are the same.
         * @param {goog.editor.plugins.UndoRedoState} state The state to compare.
         * @return {boolean} Wether the two states are equal.
         */
        equals(state: goog.editor.plugins.UndoRedoState): boolean;
    }
}
