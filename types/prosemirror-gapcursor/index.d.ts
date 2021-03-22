// Type definitions for prosemirror-gapcursor 1.0
// Project: https://github.com/ProseMirror/prosemirror-gapcursor
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin, Selection } from 'prosemirror-state';
import { NodeSpec } from 'prosemirror-model';

/**
 * Gap cursor selections are represented using this class. Its
 * `$anchor` and `$head` properties both point at the cursor position.
 */
export class GapCursor extends Selection {}
/**
 * Create a gap cursor plugin. When enabled, this will capture clicks
 * near and arrow-key-motion past places that don't have a normally
 * selectable position nearby, and create a gap cursor selection for
 * them. The cursor is drawn as an element with class
 * `ProseMirror-gapcursor`. You can either include
 * `style/gapcursor.css` from the package's directory or add your own
 * styles to make it visible.
 */
export function gapCursor(): Plugin;

declare module "prosemirror-model" {
    interface NodeSpec {
        /**
         * By default, gap cursor are only allowed in places where the
         * default content node (in the schema content constraints) is a
         * textblock node. You can customize this by adding an `allowGapCursor`
         * property to your node specs — if it's true, gap cursor are allowed
         * everywhere in that node, if it's false they are never allowed.
         */
        allowGapCursor?: boolean;
    }
}
