// Type definitions for prosemirror-commands 1.0
// Project: https://github.com/ProseMirror/prosemirror-commands
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
//                 Mike Morearty <https://github.com/mmorearty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { MarkType, Node as ProsemirrorNode, NodeType, Schema } from 'prosemirror-model';
import { EditorState, Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

/**
 * A command function takes an editor state, *optionally* a `dispatch`
 * function that it can use to dispatch a transaction and optionally
 * an `EditorView` instance. It should return a boolean that indicates
 * whether it could perform any action. When no `dispatch` callback is
 * passed, the command should do a 'dry run', determining whether it is
 * applicable, but not actually doing anything.
 */
export interface Command<S extends Schema = any> {
  (
    state: EditorState<S>,
    dispatch?: (tr: Transaction<S>) => void,
    view?: EditorView<S>
  ): boolean;
}

export interface Keymap<S extends Schema = any> {
  [key: string]: Command<S>;
}

/**
 * Delete the selection, if there is one.
 */
export function deleteSelection<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * If the selection is empty and at the start of a textblock, try to
 * reduce the distance between that block and the one before it—if
 * there's a block directly before it that can be joined, join them.
 * If not, try to move the selected block closer to the next one in
 * the document structure by lifting it out of its parent or moving it
 * into a parent of the previous block. Will use the view for accurate
 * (bidi-aware) start-of-textblock detection if given.
 */
export function joinBackward<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void,
  view?: EditorView<S>
): boolean;
/**
 * When the selection is empty and at the start of a textblock, select
 * the node before that textblock, if possible. This is intended to be
 * bound to keys like backspace, after
 * [`joinBackward`](#commands.joinBackward) or other deleting
 * commands, as a fall-back behavior when the schema doesn't allow
 * deletion at the selected point.
 */
export function selectNodeBackward<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void,
  view?: EditorView<S>
): boolean;
/**
 * If the selection is empty and the cursor is at the end of a
 * textblock, try to reduce or remove the boundary between that block
 * and the one after it, either by joining them or by moving the other
 * block closer to this one in the tree structure. Will use the view
 * for accurate start-of-textblock detection if given.
 */
export function joinForward<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void,
  view?: EditorView<S>
): boolean;
/**
 * When the selection is empty and at the end of a textblock, select
 * the node coming after that textblock, if possible. This is intended
 * to be bound to keys like delete, after
 * [`joinForward`](#commands.joinForward) and similar deleting
 * commands, to provide a fall-back behavior when the schema doesn't
 * allow deletion at the selected point.
 */
export function selectNodeForward<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void,
  view?: EditorView<S>
): boolean;
/**
 * Join the selected block or, if there is a text selection, the
 * closest ancestor block of the selection that can be joined, with
 * the sibling above it.
 */
export function joinUp<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * Join the selected block, or the closest ancestor of the selection
 * that can be joined, with the sibling after it.
 */
export function joinDown<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * Lift the selected block, or the closest ancestor block of the
 * selection that can be lifted, out of its parent node.
 */
export function lift<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * If the selection is in a node whose type has a truthy
 * [`code`](#model.NodeSpec.code) property in its spec, replace the
 * selection with a newline character.
 */
export function newlineInCode<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * When the selection is in a node with a truthy
 * [`code`](#model.NodeSpec.code) property in its spec, create a
 * default block after the code block, and move the cursor there.
 */
export function exitCode<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * If a block node is selected, create an empty paragraph before (if
 * it is its parent's first child) or after it.
 */
export function createParagraphNear<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * If the cursor is in an empty textblock that can be lifted, lift the
 * block.
 */
export function liftEmptyBlock<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * Split the parent block of the selection. If the selection is a text
 * selection, also delete its content.
 */
export function splitBlock<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * Acts like [`splitBlock`](#commands.splitBlock), but without
 * resetting the set of active marks at the cursor.
 */
export function splitBlockKeepMarks<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * Move the selection to the node wrapping the current selection, if
 * any. (Will not select the document node.)
 */
export function selectParentNode<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * Select the whole document.
 */
export function selectAll<S extends Schema = any>(
  state: EditorState<S>,
  dispatch?: (tr: Transaction<S>) => void
): boolean;
/**
 * Wrap the selection in a node of the given type with the given
 * attributes.
 */
export function wrapIn<S extends Schema = any>(
  nodeType: NodeType<S>,
  attrs?: { [key: string]: any }
): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean;
/**
 * Returns a command that tries to set the textblock around the
 * selection to the given node type with the given attributes.
 */
export function setBlockType<S extends Schema = any>(
  nodeType: NodeType<S>,
  attrs?: { [key: string]: any }
): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean;
/**
 * Create a command function that toggles the given mark with the
 * given attributes. Will return `false` when the current selection
 * doesn't support that mark. This will remove the mark if any marks
 * of that type exist in the selection, or add it otherwise. If the
 * selection is empty, this applies to the [stored
 * marks](#state.EditorState.storedMarks) instead of a range of the
 * document.
 */
export function toggleMark<S extends Schema = any>(
  markType: MarkType<S>,
  attrs?: { [key: string]: any }
): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean;
/**
 * Wrap a command so that, when it produces a transform that causes
 * two joinable nodes to end up next to each other, those are joined.
 * Nodes are considered joinable when they are of the same type and
 * when the `isJoinable` predicate returns true for them or, if an
 * array of strings was passed, if their node type name is in that
 * array.
 */
export function autoJoin<S extends Schema = any>(
  command: (state: EditorState<S>, p1?: (tr: Transaction<S>) => void) => boolean,
  isJoinable: ((before: ProsemirrorNode<S>, after: ProsemirrorNode<S>) => boolean) | string[]
): (state: EditorState<S>, p1?: (tr: Transaction<S>) => void) => boolean;
/**
 * Combine a number of command functions into a single function (which
 * calls them one by one until one returns true).
 */
export function chainCommands<S extends Schema = any>(...commands: Array<Command<S>>): Command<S>;
/**
 * A basic keymap containing bindings not specific to any schema.
 * Binds the following keys (when multiple commands are listed, they
 * are chained with [`chainCommands`](#commands.chainCommands)):
 *
 * * **Enter** to `newlineInCode`, `createParagraphNear`, `liftEmptyBlock`, `splitBlock`
 * * **Mod-Enter** to `exitCode`
 * * **Backspace** and **Mod-Backspace** to `deleteSelection`, `joinBackward`, `selectNodeBackward`
 * * **Delete** and **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
 * * **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
 * * **Mod-a** to `selectAll`
 */
export let pcBaseKeymap: Keymap;
/**
 * A copy of `pcBaseKeymap` that also binds **Ctrl-h** like Backspace,
 * **Ctrl-d** like Delete, **Alt-Backspace** like Ctrl-Backspace, and
 * **Ctrl-Alt-Backspace**, **Alt-Delete**, and **Alt-d** like
 * Ctrl-Delete.
 */
export let macBaseKeymap: Keymap;
/**
 * Depending on the detected platform, this will hold
 * [`pcBasekeymap`](#commands.pcBaseKeymap) or
 * [`macBaseKeymap`](#commands.macBaseKeymap).
 */
export let baseKeymap: Keymap;
