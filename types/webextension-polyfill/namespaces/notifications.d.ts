//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.notifications
 *
 * Permissions: "notifications"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";

export namespace Notifications {
    type TemplateType = "basic" | "image" | "list" | "progress";

    type PermissionLevel = "granted" | "denied";

    interface NotificationItem {
        /**
         * Title of one item of a list notification.
         */
        title: string;

        /**
         * Additional details about this item.
         */
        message: string;
    }

    interface CreateNotificationOptions {
        /**
         * Which type of notification to display.
         */
        type: TemplateType;

        /**
         * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
         * Optional.
         */
        iconUrl?: string;

        /**
         * A URL to the app icon mask.
         * Optional.
         */
        appIconMaskUrl?: string;

        /**
         * Title of the notification (e.g. sender name for email).
         */
        title: string;

        /**
         * Main notification content.
         */
        message: string;

        /**
         * Alternate notification content with a lower-weight font.
         * Optional.
         */
        contextMessage?: string;

        /**
         * Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is default.
         * Optional.
         */
        priority?: number;

        /**
         * A timestamp associated with the notification, in milliseconds past the epoch.
         * Optional.
         */
        eventTime?: number;

        /**
         * A URL to the image thumbnail for image-type notifications.
         * Optional.
         */
        imageUrl?: string;

        /**
         * Items for multi-item notifications.
         * Optional.
         */
        items?: NotificationItem[];

        /**
         * Current progress ranges from 0 to 100.
         * Optional.
         */
        progress?: number;

        /**
         * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
         * Optional.
         */
        isClickable?: boolean;
    }

    interface UpdateNotificationOptions {
        /**
         * Which type of notification to display.
         * Optional.
         */
        type?: TemplateType;

        /**
         * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
         * Optional.
         */
        iconUrl?: string;

        /**
         * A URL to the app icon mask.
         * Optional.
         */
        appIconMaskUrl?: string;

        /**
         * Title of the notification (e.g. sender name for email).
         * Optional.
         */
        title?: string;

        /**
         * Main notification content.
         * Optional.
         */
        message?: string;

        /**
         * Alternate notification content with a lower-weight font.
         * Optional.
         */
        contextMessage?: string;

        /**
         * Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is default.
         * Optional.
         */
        priority?: number;

        /**
         * A timestamp associated with the notification, in milliseconds past the epoch.
         * Optional.
         */
        eventTime?: number;

        /**
         * A URL to the image thumbnail for image-type notifications.
         * Optional.
         */
        imageUrl?: string;

        /**
         * Items for multi-item notifications.
         * Optional.
         */
        items?: NotificationItem[];

        /**
         * Current progress ranges from 0 to 100.
         * Optional.
         */
        progress?: number;

        /**
         * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
         * Optional.
         */
        isClickable?: boolean;
    }

    interface Static {
        /**
         * Creates and displays a notification.
         *
         * @param notificationId Optional. Identifier of the notification. If it is empty, this method generates an id.
         * If it matches an existing notification, this method first clears that notification before proceeding with the create
         * operation.
         * @param options Contents of the notification.
         */
        create(notificationId: string | undefined, options: CreateNotificationOptions): Promise<string>;

        /**
         * Creates and displays a notification.
         *
         * @param options Contents of the notification.
         */
        create(options: CreateNotificationOptions): Promise<string>;

        /**
         * Clears an existing notification.
         *
         * @param notificationId The id of the notification to be updated.
         */
        clear(notificationId: string): Promise<boolean>;

        /**
         * Retrieves all the notifications.
         */
        getAll(): Promise<Record<string, CreateNotificationOptions>>;

        /**
         * Fired when the notification closed, either by the system or by user action.
         *
         * @param notificationId The notificationId of the closed notification.
         * @param byUser True if the notification was closed by the user.
         */
        onClosed: Events.Event<(notificationId: string, byUser: boolean) => void>;

        /**
         * Fired when the user clicked in a non-button area of the notification.
         *
         * @param notificationId The notificationId of the clicked notification.
         */
        onClicked: Events.Event<(notificationId: string) => void>;

        /**
         * Fired when the  user pressed a button in the notification.
         *
         * @param notificationId The notificationId of the clicked notification.
         * @param buttonIndex The index of the button clicked by the user.
         */
        onButtonClicked: Events.Event<(notificationId: string, buttonIndex: number) => void>;

        /**
         * Fired when the notification is shown.
         *
         * @param notificationId The notificationId of the shown notification.
         */
        onShown: Events.Event<(notificationId: string) => void>;
    }
}
