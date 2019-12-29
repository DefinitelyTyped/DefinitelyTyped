// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: Nikolaj Kappler <https://github.com/nkappler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_panel

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface Panel {
        /**Removes the panel from the editor */
        clear(): void;
        /**Notifies panel that height of DOM node has changed */
        changed(height?: number): void;
    }

    interface ShowPanelOptions {
        /**Controls the position of the newly added panel. The following values are recognized:  
         * `top` (default): Adds the panel at the very top.  
         *  `after-top`: Adds the panel at the bottom of the top panels.  
         *  `bottom`: Adds the panel at the very bottom.  
         *  `before-bottom`: Adds the panel at the top of the bottom panels.  
        */
        position?: "top" | "after-top" | "bottom" | "before-bottom";
        /**The new panel will be added before the given panel. */
        before?: Panel;
        /**The new panel will be added after the given panel. */
        after?: Panel;
        /**The new panel will replace the given panel. */
        replace?: Panel;
        /**Whether to scroll the editor to keep the text's vertical position stable, when adding a panel above it. Defaults to false. */
        stable?: boolean;
    }

    interface Editor {

        /**
         * Places a DOM node above or below an editor and shrinks the editor to make room for the node.
         * When using the `after`, `before` or `replace` options, if the panel doesn't exists or has been removed, the value of the `position` option will be used as a fallback.
         * @param node the DOM node
         * @param options optional options object
         */
        addPanel(node: HTMLElement, options?: ShowPanelOptions): Panel;

    }
}
