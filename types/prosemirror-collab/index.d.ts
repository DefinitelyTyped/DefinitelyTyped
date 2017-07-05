// Type definitions for prosemirror-collab 0.21
// Project: https://github.com/ProseMirror/prosemirror-collab
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'prosemirror-state';
import { EditorState } from 'prosemirror-state';
import { Step } from 'prosemirror-transform';
import { Transaction } from 'prosemirror-state';

export function collab<T>(config?: { version?: number, clientID?: number | string }): Plugin<T>;
export function receiveTransaction(state: EditorState, steps: Step[], clientIDs: Array<number | string>): Transaction;
export function sendableSteps(state: EditorState): { version: number, steps: Step[], clientID: number | string, origins: Transaction[] } | null;
export function getVersion(state: EditorState): number;
