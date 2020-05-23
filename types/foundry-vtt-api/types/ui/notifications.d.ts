/**
 * A common framework for displaying notifications to the client.
 * Submitted notifications are added to a queue, and up to 3 notifications are displayed at once.
 * Each notification is displayed for 5 seconds at which point further notifications are pulled from the queue.
 *
 * @example
 * ui.notifications.info("This is an info message");
 * ui.notifications.warn("This is a warning message");
 * ui.notifications.error("This is an error message");
 * ui.notifications.info("This is a 4th message which will not be shown until the first info message is done");
 */
declare class Notifications extends Application {
    /** Submitted notifications which are queued for display */
    queue: any[];

    /** Notifications which are currently displayed */
    active: any[];

    constructor(options: ApplicationOptions);

    /**
     * Push a new notification into the queue
     * @param message    The content of the notification message
     * @param type        The type of notification, currently "info", "warning", and "error" are supported
     */
    notify(message: string, type: 'info' | 'warning' | 'error'): void;

    /**
     * Display a notification with the "info" type
     * @param message    The content of the notification message
     */
    info(message: string): void;

    /**
     * Display a notification with the "warning" type
     * @param message    The content of the notification message
     */
    warn(message: string): void;

    /**
     * Display a notification with the "error" type
     * @param message    The content of the notification message
     */
    error(message: string): void;
}
