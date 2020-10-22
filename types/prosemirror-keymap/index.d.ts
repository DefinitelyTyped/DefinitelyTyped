// Type definitions for prosemirror-keymap 1.0
// Project: https://github.com/ProseMirror/prosemirror-keymap
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
//                 Mike Morearty <https://github.com/mmorearty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Keymap } from 'prosemirror-commands';
import { Schema } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

/**
 * Create a keymap plugin for the given set of bindings.
 *
 * Bindings should map key names to [command](#commands)-style
 * functions, which will be called with `(EditorState, dispatch,
 * EditorView)` arguments, and should return true when they've handled
 * the key. Note that the view argument isn't part of the command
 * protocol, but can be used as an escape hatch if a binding needs to
 * directly interact with the UI.
 *
 * Key names may be strings like `"Shift-Ctrl-Enter"`—a key
 * identifier prefixed with zero or more modifiers. Key identifiers
 * are based on the strings that can appear in
 * [`KeyEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key).
 * Use lowercase letters to refer to letter keys (or uppercase letters
 * if you want shift to be held). You may use `"Space"` as an alias
 * for the `" "` name.
 *
 * Modifiers can be given in any order. `Shift-` (or `s-`), `Alt-` (or
 * `a-`), `Ctrl-` (or `c-` or `Control-`) and `Cmd-` (or `m-` or
 * `Meta-`) are recognized. For characters that are created by holding
 * shift, the `Shift-` prefix is implied, and should not be added
 * explicitly.
 *
 * You can use `Mod-` as a shorthand for `Cmd-` on Mac and `Ctrl-` on
 * other platforms.
 *
 * You can add multiple keymap plugins to an editor. The order in
 * which they appear determines their precedence (the ones early in
 * the array get to dispatch first).
 */
export function keymap<S extends Schema = any>(bindings: Keymap<S>): Plugin;

/**
 * Given a set of bindings (using the same format as
 * [`keymap`](#keymap.keymap), return a [keydown
 * handler](#view.EditorProps.handleKeyDown) handles them.
 */
export function keydownHandler<S extends Schema = any>(
  bindings: Keymap<S>,
): (view: EditorView, event: KeyboardEvent) => boolean;
