//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.activityLog
 *
 * Monitor extension activity
 * Permissions: "activityLog"
 */
import { Events } from "./events";
import { ExtensionTypes } from "./extensionTypes";

export namespace ActivityLog {
    interface OnExtensionActivityDetailsType {
        /**
         * The date string when this call is triggered.
         */
        timeStamp: ExtensionTypes.DateType;

        /**
         * The type of log entry.  api_call is a function call made by the extension and api_event is an event callback to the
         * extension.  content_script is logged when a content script is injected.
         */
        type: OnExtensionActivityDetailsTypeTypeEnum;

        /**
         * The type of view where the activity occurred.  Content scripts will not have a viewType.
         * Optional.
         */
        viewType?: OnExtensionActivityDetailsTypeViewTypeEnum;

        /**
         * The name of the api call or event, or the script url if this is a content or user script event.
         */
        name: string;

        data: OnExtensionActivityDetailsTypeDataType;
    }

    /**
     * The type of log entry.  api_call is a function call made by the extension and api_event is an event callback to the
     * extension.  content_script is logged when a content script is injected.
     */
    type OnExtensionActivityDetailsTypeTypeEnum = "api_call" | "api_event" | "content_script" | "user_script";

    /**
     * The type of view where the activity occurred.  Content scripts will not have a viewType.
     */
    type OnExtensionActivityDetailsTypeViewTypeEnum =
        | "background"
        | "popup"
        | "sidebar"
        | "tab"
        | "devtools_page"
        | "devtools_panel";

    /**
     * The result of the call.
     */
    interface OnExtensionActivityDetailsTypeDataResultType {
        [s: string]: unknown;
    }

    interface OnExtensionActivityDetailsTypeDataType {
        /**
         * A list of arguments passed to the call.
         * Optional.
         */
        args?: any[];

        /**
         * The result of the call.
         * Optional.
         */
        result?: OnExtensionActivityDetailsTypeDataResultType;

        /**
         * The tab associated with this event if it is a tab or content script.
         * Optional.
         */
        tabId?: number;

        /**
         * If the type is content_script, this is the url of the script that was injected.
         * Optional.
         */
        url?: string;
    }

    /**
     * Receives an activityItem for each logging event.
     */
    interface onExtensionActivityEvent extends Events.Event<(details: OnExtensionActivityDetailsType) => void> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param id
         */
        addListener(callback: (details: OnExtensionActivityDetailsType) => void, id: string): void;
    }

    interface Static {
        /**
         * Receives an activityItem for each logging event.
         */
        onExtensionActivity: onExtensionActivityEvent;
    }
}
