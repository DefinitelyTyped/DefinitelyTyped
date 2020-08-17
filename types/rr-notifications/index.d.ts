// Type definitions for rr-notifications 1.1
// Project: https://thegrinder.github.io/rr-notifications
// Definitions by: Robbie Moore <https://github.com/RobbieGM>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />

export interface NotificationsContextType {
    showNotification(payload?: NotificationPayload): void;
    removeNotification(id: string): () => void;
}

/**
 * The payload of each notification is described by this interface. Users of
 * this types package should use declaration merging to add their own standard
 * properties to this interface, since the library leaves it up to the user.
 */
// tslint:disable-next-line:no-empty-interface
export interface NotificationPayload {}

export const NotificationsContext: React.Context<NotificationsContextType>;

export function useNotification(): NotificationsContextType;

export const NotificationsProvider: React.FC<{
    /** Render prop which passes down removeNotification function and notification payload */
    renderNotification(args: { removeNotification: () => void; payload: NotificationPayload }): JSX.Element;
    /** Fixed position where all notifications are displayed */
    position?: [string, string, string, string];
    /** Duration of the show and hide animations in milliseconds */
    animationDuration?: number;
    /** Animation timing function / cubic-bezier */
    animationEasing?: string;
    /** Time in milliseconds after which the notification is automatically dismissed */
    dismissAfter?: number;
    /**
     * Horizontal direction which notification appears from. If not provided, the notification will
     * appear from top or bottom, depending on position prop
     */
    slideFromSide?: 'right' | 'left';
}>;
