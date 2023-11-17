import { ColorValue } from "../StyleSheet/StyleSheet";

export type ShareContent =
    | {
        title?: string | undefined;
        message: string;
    }
    | {
        title?: string | undefined;
        url: string;
    };

export type ShareOptions = {
    dialogTitle?: string | undefined;
    excludedActivityTypes?: string[] | undefined;
    tintColor?: ColorValue | undefined;
    subject?: string | undefined;
    anchor?: number | undefined;
};

export type ShareSharedAction = {
    action: "sharedAction";
    activityType?: string | undefined;
};

export type ShareDismissedAction = {
    action: "dismissedAction";
};

export type ShareAction = ShareSharedAction | ShareDismissedAction;

export interface ShareStatic {
    /**
     * Open a dialog to share text content.
     *
     * In iOS, Returns a Promise which will be invoked an object containing `action`, `activityType`.
     * If the user dismissed the dialog, the Promise will still be resolved with action being `Share.dismissedAction`
     * and all the other keys being undefined.
     *
     * In Android, Returns a Promise which always be resolved with action being `Share.sharedAction`.
     *
     * ### Content
     *
     *  - `message` - a message to share
     *  - `title` - title of the message
     *
     * #### iOS
     *
     *  - `url` - an URL to share
     *
     * At least one of URL and message is required.
     *
     * ### Options
     *
     * #### iOS
     *
     * - `excludedActivityTypes`
     * - `tintColor`
     *
     * #### Android
     *
     * - `dialogTitle`
     */
    share(content: ShareContent, options?: ShareOptions): Promise<ShareAction>;
    sharedAction: "sharedAction";
    dismissedAction: "dismissedAction";
}

export const Share: ShareStatic;
export type Share = ShareStatic;
