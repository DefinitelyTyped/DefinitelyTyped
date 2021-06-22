// Type definitions for prosemirror-history 1.0
// Project: https://github.com/ProseMirror/prosemirror-history
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Schema } from 'prosemirror-model';
import { EditorState, Plugin, Transaction } from 'prosemirror-state';

/**
 * Set a flag on the given transaction that will prevent further steps
 * from being appended to an existing history event (so that they
 * require a separate undo command to undo).
 */
export function closeHistory<S extends Schema = any>(tr: Transaction<S>): Transaction<S>;
/**
 * Returns a plugin that enables the undo history for an editor. The
 * plugin will track undo and redo stacks, which can be used with the
 * [`undo`](#history.undo) and [`redo`](#history.redo) commands.
 *
 * You can set an `"addToHistory"` [metadata
 * property](#state.Transaction.setMeta) of `false` on a transaction
 * to prevent it from being rolled back by undo.
 */
export function history(config?: { depth?: number | null; newGroupDelay?: number | null }): Plugin;
/**
 * A command function that undoes the last change, if any.
 */
export function undo<S extends Schema = any>(state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void): boolean;
/**
 * A command function that redoes the last undone change, if any.
 */
export function redo<S extends Schema = any>(state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void): boolean;
/**
 * The amount of undoable events available in a given state.
 */
export function undoDepth(state: EditorState): number;
/**
 * The amount of redoable events available in a given editor state.
 */
export function redoDepth(state: EditorState): number;
