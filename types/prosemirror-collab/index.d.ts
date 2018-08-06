// Type definitions for prosemirror-collab 1.0
// Project: https://github.com/ProseMirror/prosemirror-collab
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Schema } from 'prosemirror-model';
import { EditorState, Plugin, Transaction } from 'prosemirror-state';
import { Step } from 'prosemirror-transform';

/**
 * Creates a plugin that enables the collaborative editing framework
 * for the editor.
 */
export function collab(config?: {
  version?: number | null;
  clientID?: number | string | null;
}): Plugin;
/**
 * Create a transaction that represents a set of new steps received from
 * the authority. Applying this transaction moves the state forward to
 * adjust to the authority's view of the document.
 */
export function receiveTransaction<S extends Schema = any>(
  state: EditorState<S>,
  steps: Array<Step<S>>,
  clientIDs: Array<number | string>
): Transaction<S>;
/**
 * Provides data describing the editor's unconfirmed steps, which need
 * to be sent to the central authority. Returns null when there is
 * nothing to send.
 *
 * `origins` holds the _original_ transactions that produced each
 * steps. This can be useful for looking up time stamps and other
 * metadata for the steps, but note that the steps may have been
 * rebased, whereas the origin transactions are still the old,
 * unchanged objects.
 */
export function sendableSteps<S extends Schema = any>(
  state: EditorState<S>
): {
  version: number;
  steps: Array<Step<S>>;
  clientID: number | string;
  origins: Array<Transaction<S>>;
} | null | undefined;
/**
 * Get the version up to which the collab plugin has synced with the
 * central authority.
 */
export function getVersion(state: EditorState): number;
