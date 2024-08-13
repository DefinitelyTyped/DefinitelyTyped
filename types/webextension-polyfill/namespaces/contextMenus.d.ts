//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.contextMenus
 *
 * Use the browser.contextMenus API to add items to the browser's context menu. You can choose what types of objects your
 * context menu additions apply to, such as images, hyperlinks, and pages.
 * Permissions: "contextMenus"
 */
import { Menus } from "./menus";

export namespace ContextMenus {
    interface Static extends Menus.Static {
        [s: string]: unknown;
    }
}
