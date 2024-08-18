//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.browserAction
 *
 * Permissions: "manifest:action", "manifest:browser_action"
 */
import { Action } from "./action";

export namespace BrowserAction {
    interface Static extends Action.Static {
        [s: string]: unknown;
    }
}
