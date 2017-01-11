

interface Notification {

    /**
     * The text displayed in the notification body
     * @readonly
     */
    body?: string;


    /**
     * The direction the popup will show
     * @readonly
     */
    dir?: "auto" | "ltr" | "rtl";

    /**
     * The icon shown in the notification
     * @readonly
     */
    icon?: string;

    /**
     * The title shown in the notification
     * @readonly
     */
    title?: string;

    /**
     * The notification language
     * @readonly
     */
    lang?: string;

    /**
     * The notification tag
     * @readonly
     */
    tag?: string;

    /**
     * Close the Notification
     */
    close(): void;

    /**
     * User Clicked the Notification
     */
    onclick: (event: Event) => void;

    /**
     * The Notification is visible
     */
    onshow: (event: Event) => void;

    /**
     * The Notification has closed
     */
    onclose: (event: Event) => void;

    /**
     * Error Occurred while creating the notification
     */
    onerror: (error: ErrorEvent) => void;

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
    requestPermission(callback?: (permission: "default" | "denied" | "granted") => void): PromiseLike<"default" | "denied" | "granted">;

    /**
     * Creates a new Notification
     */
    new (title: string, options: NotificationOptions): Notification;

}

declare var Notification: NotificationStatic;

declare interface NotificationOptions {
/**
     * The text displayed in the notification body
     */
    body?: string;

    /**
     * The direction the popup will show
     */
    dir?: "auto" | "ltr" | "rtl";

    /**
     * The icon shown in the notification
     */
    icon?: string;

    /**
     * The notification language
     */
    lang?: string;

    /**
     * The notification tag (causes replacement of existing notification with same tag)
     */
    tag?: string;    
}