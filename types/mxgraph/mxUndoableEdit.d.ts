/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxUndoableEdit
 *
 * Implements a composite undoable edit. Here is an example for a custom change
 * which gets executed via the model:
 *
 * (code)
 * function CustomChange(model, name)
 * {
 *   this.model = model;
 *   this.name = name;
 *   this.previous = name;
 * };
 *
 * CustomChange.prototype.execute()
 * {
 *   var tmp = this.model.name;
 *   this.model.name = this.previous;
 *   this.previous = tmp;
 * };
 *
 * var name = prompt('Enter name');
 * graph.model.execute(new CustomChange(graph.model, name));
 * (end)
 *
 * Event: mxEvent.EXECUTED
 *
 * Fires between START_EDIT and END_EDIT after an atomic change was executed.
 * The <code>change</code> property contains the change that was executed.
 *
 * Event: mxEvent.START_EDIT
 *
 * Fires before a set of changes will be executed in <undo> or <redo>.
 * This event contains no properties.
 *
 * Event: mxEvent.END_EDIT
 *
 * Fires after a set of changeswas executed in <undo> or <redo>.
 * This event contains no properties.
 *
 * Constructor: mxUndoableEdit
 *
 * Constructs a new undoable edit for the given source.
 */
declare namespace mxgraph {
  export class mxUndoableEdit {
    constructor(source: any, significant: boolean);

    /**
     * Variable: source
     *
     * Specifies the source of the edit.
     */
    source: any;

    /**
     * Variable: changes
     *
     * Array that contains the changes that make up this edit. The changes are
     * expected to either have an undo and redo function, or an execute
     * function. Default is an empty array.
     */
    changes: mxUndoableChange[];

    /**
     * Variable: significant
     *
     * Specifies if the undoable change is significant.
     * Default is true.
     */
    significant: boolean;

    /**
     * Variable: undone
     *
     * Specifies if this edit has been undone. Default is false.
     */
    undone: boolean;

    /**
     * Variable: redone
     *
     * Specifies if this edit has been redone. Default is false.
     */
    redone: boolean;

    /**
     * Function: isEmpty
     *
     * Returns true if the this edit contains no changes.
     */
    isEmpty(): boolean;

    /**
     * Function: isSignificant
     *
     * Returns <significant>.
     */
    isSignificant(): boolean;

    /**
     * Function: add
     *
     * Adds the specified change to this edit. The change is an object that is
     * expected to either have an undo and redo, or an execute function.
     */
    add(change: mxUndoableChange): void;

    /**
     * Function: notify
     *
     * Hook to notify any listeners of the changes after an <undo> or <redo>
     * has been carried out. This implementation is empty.
     */
    notify(): void;

    /**
     * Function: die
     *
     * Hook to free resources after the edit has been removed from the command
     * history. This implementation is empty.
     */
    die(): void;

    /**
     * Function: undo
     *
     * Undoes all changes in this edit.
     */
    undo(): void;

    /**
     * Function: redo
     *
     * Redoes all changes in this edit.
     */
    redo(): void;

  }

  interface mxUndoableChange {
    execute(): void;
  }
}