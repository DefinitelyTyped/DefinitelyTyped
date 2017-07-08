// Type definitions for prosemirror-history 0.21
// Project: https://github.com/ProseMirror/prosemirror-history
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'prosemirror-state';
import { EditorState } from 'prosemirror-state';
import { Transaction } from 'prosemirror-state';

export function closeHistory(tr: Transaction): Transaction;
export function history<T>(config?: { depth?: number, newGroupDelay: number, preserveItems?: boolean }): Plugin<T>;
export function undo(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function redo(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function undoDepth(state: EditorState): number;
export function redoDepth(state: EditorState): number;
