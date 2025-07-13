// Project: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/phoenix_live_view
// Definitions by: Peter Zingg <https://github.com/pzingg>
//                 Igor Barchenkov <https://github.com/ibarchenkov>
//                 Rodolfo Carvalho <https://github.com/rhcarvalho>
//                 François Roland <https://github.com/francois-codes>
// Changelog:
// Version 1.0 renamed ViewHookInterface and Hook (interfaces) and ViewHook (class).
// Added the EventMetadata interface for the metadata LiveSocket option, and included
// other phoenix Socket and LiveSocket options. Imported other d.ts modules directly
// from tsc-emitted declarations from Javascript in phoenix_live_view version 1.0.
//
// Version 0.20 refactored ViewHook interface with generic type and
// ViewHookInternal interface
//
// Version 0.17 added LiveSocket.execJS() method for executing JavaScript utility operations on the client
// See: https://github.com/phoenixframework/phoenix_live_view/blob/master/CHANGELOG.md#enhancements-17
//
// Version 0.15 added options and interfaces for LiveView uploads
// See: https://hexdocs.pm/phoenix_live_view/uploads.html
//
// Version 0.15.4 added options and interfaces for LiveView uploads
// See: https://hexdocs.pm/phoenix_live_view/uploads.html
//
// Version 0.17.0 added LiveSocket.execJS() method for executing JavaScript utility operations on the client
// See: https://github.com/phoenixframework/phoenix_live_view/blob/master/CHANGELOG.md#enhancements-17

import { Hook, HooksOptions, ViewHookInterface } from "./hooks";
import LiveSocket, { isUsedInput } from "./live_socket";
import SocketOptions, { Defaults, DomOptions, EventMetadata } from "./socket_options";
import UploadEntry, { Uploader, UploadersOptions } from "./upload_entry";
import ViewHook from "./view_hook";

/** Creates a ViewHook instance for the given element and callbacks.
 *
 * @param {HTMLElement} el - The element to associate with the hook.
 * @param {object} [callbacks] - The list of hook callbacks, such as mounted,
 *   updated, destroyed, etc.
 *
 * @example
 *
 * class MyComponent extends HTMLElement {
 *   connectedCallback(){
 *     let onLiveViewMounted = () => this.hook.pushEvent(...))
 *     this.hook = createHook(this, {mounted: onLiveViewMounted})
 *   }
 * }
 *
 * *Note*: `createHook` must be called from the `connectedCallback` lifecycle
 * which is triggered after the element has been added to the DOM. If you try
 * to call `createHook` from the constructor, an error will be logged.
 *
 * @returns {ViewHook} Returns the ViewHook instance for the custom element.
 */
export function createHook(el: HTMLElement, callbacks?: object): ViewHook;

export {
    Defaults,
    DomOptions,
    EventMetadata,
    Hook,
    HooksOptions,
    isUsedInput,
    LiveSocket,
    SocketOptions,
    UploadEntry,
    Uploader,
    UploadersOptions,
    ViewHookInterface,
};

declare global {
    interface Window {
        liveSocket?: LiveSocket;
    }
}
