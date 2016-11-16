

interface Notification {

    /**
     * The text displayed in the notification body
     * @readonly
     */
    body: string;


    /**
     * The direction the popup will show
     * @readonly
     */
    dir: "auto" | "ltr" | "rtl";

    /**
     * The image shown in the notification
     * @readonly
     */
    image: string;


    /**
     * The icon shown in the notification
     * @readonly
     */
    icon: string;

    /**
     * The badge shown in the notification
     * @readonly
     */
    badge: string;

    /**
     * The sound for the notification
     * @readonly
     */
    sound: string;


    /**
     * The title shown in the notification
     * @readonly
     */
    title: string;


    /**
     * The notification language
     * @readonly
     */
    lang: string;

    /**
     * Should the notification re-notify
     * @readonly
     */
    renotify?: boolean;

    /**
     * Is the Notification Silent
     * @readonly
     */
    silent?: boolean;

    /**
     * Is the Notification sticky
     * @readonly
     */
    sticky?: boolean;

    /**
     * Requires Interaction by the User
     * @readonly
     */
    requireInteraction?: boolean;

    /**
     * Close the Notification
     */
    close(): void;

    /**
     * User Clicked the Notification
     */
    onclick: (event: Event) => void;

    /**
     * Error Occurred while creating the notification
     */
    onerror: (error: Error) => void;

    /**
     * Any actions available to the user
     */
    actions?: Array<NotificationAction>;

}

interface NotificationAction {
    action: string;
    title: string;
    icon?: string;
}

interface NotificationStatic {

    /**
     * The permission currently granted
     * @readonly
     */
    permission: "default" | "denied" | "granted";

    /**
     * Request Permission to use Notifications
     */
    requestPermission(deprecatedCallback?: (permission: "default" | "denied" | "granted") => void): PromiseLike<"default" | "denied" | "granted">;

    /**
     * Maximum Number of Actions that can be performed
     * @readonly
     */
    maxActions: number;

    new (title: string, options: NotificationOptions): Notification;

}



declare var Notification: NotificationStatic;



declare interface NotificationOptions {

    title?: string;

    body?: string;

    image?: string;

    icon?: string;

    badge?: string;

    sound?: string;

    tag?: string;

    lang?: string;

    renotify?: boolean;

    silent?: boolean;

    sticky?: boolean;

    requireInteraction?: boolean;

    dir?: "auto" | "ltr" | "rtl";

    actions?: Array<NotificationAction>;

}