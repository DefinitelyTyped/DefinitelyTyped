import { Disposable } from '../index';

/** A notification to the user containing a message and type. */
export class Notification {
    constructor(type: 'warning' | 'info' | 'success', message: string, options?: NotificationOptions);
    constructor(type: 'fatal' | 'error', message: string, options?: ErrorNotificationOptions);

    // Event Subscription
    /** Invoke the given callback when the notification is dismissed. */
    onDidDismiss(callback: (notification: Notification) => void): Disposable;

    /** Invoke the given callback when the notification is displayed. */
    onDidDisplay(callback: (notification: Notification) => void): Disposable;

    // Methods
    /** Returns the Notification's type. */
    getType(): string;

    /** Returns the Notification's message. */
    getMessage(): string;

    /**
     *  Dismisses the notification, removing it from the UI. Calling this
     *  programmatically will call all callbacks added via onDidDismiss.
     */
    dismiss(): void;
}

export interface NotificationOptions {
    buttons?: Array<{
        className?: string;
        onDidClick?(event: MouseEvent): void;
        text?: string;
    }>;
    description?: string;
    detail?: string;
    dismissable?: boolean;
    icon?: string;
}

export interface ErrorNotificationOptions extends NotificationOptions {
    stack?: string;
}
