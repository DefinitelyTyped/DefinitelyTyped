// Type definitions for prosemirror-dropcursor 1.0
// Project: https://github.com/ProseMirror/prosemirror-dropcursor
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Daniil Dotsev <https://github.com/dddotsev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'prosemirror-state';

/**
 * Create a plugin that, when added to a ProseMirror instance,
 * causes a decoration to show up at the drop position when something
 * is dragged over the editor.
 *
 * @param options These options are supported:
 * @param options.color The color of the cursor. Defaults to `black`.
 * @param options.width The precise width of the cursor in pixels. Defaults to 1.
 */
export function dropCursor(options?: { color?: string | null; width?: number | null }): Plugin;
