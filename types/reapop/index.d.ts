// Type definitions for reapop 1.1
// Project: https://github.com/LouisBarranqueiro/reapop#readme
// Definitions by: Barrokgl <https://github.com/Barrokgl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { Dispatch } from 'redux';
/**
 * Add a notification (thunk action creator)
 *
 * We use a thunk here to create an ADD_NOTIFICATION action
 * and only return the notification object.
 */
export function addNotification(notification: Notification): (dispatch: Dispatch<any>) => Notification;

/**
 * Update a notification (thunk action creator)
 *
 * We use a thunk here to create an UPDATE_NOTIFICATION action
 * and only return the notification object.
 */
export function updateNotification(notification: Notification): (dispatch: Dispatch<any>) => Notification;

/**
 * Remove a notification (action creator)
 */
export function removeNotification(notification: Notification): {type: string; payload: Notification};

/**
 * Remove all notifications (action creator)
 */
export function removeNotifications(): {type: string};

// Action creators
interface Actions {
    addNotification(notification: Notification): Notification;
    updateNotification(notification: Notification): Notification;
    removeNotification(notification: Notification): {type: string; payload: Notification};
    removeNotifications(): {type: string};
}
export const actions: Actions;

// Action types
type ADD_NOTIFICATION = string;
type UPDATE_NOTIFICATION = string;
type REMOVE_NOTIFICATION = string;
type REMOVE_NOTIFICATIONS = string;
type ActionTypes = ADD_NOTIFICATION | UPDATE_NOTIFICATION | REMOVE_NOTIFICATION | REMOVE_NOTIFICATIONS;

interface Types {
    ADD_NOTIFICATION: ADD_NOTIFICATION;
    UPDATE_NOTIFICATION: UPDATE_NOTIFICATION;
    REMOVE_NOTIFICATION: REMOVE_NOTIFICATION;
    REMOVE_NOTIFICATIONS: REMOVE_NOTIFICATIONS;
}
export const types: Types;

// Reducers
export function reducer(defaultNotification?: Notification): (state: Notification[], notification: {type: ActionTypes; payload: any}) => Notification[];

// Constants
type DEFAULT_STATUS = string;
type INFO_STATUS = string;
type SUCCESS_STATUS = string;
type WARNING_STATUS = string;
type ERROR_STATUS = string;
type STATUSES = DEFAULT_STATUS | INFO_STATUS | SUCCESS_STATUS | WARNING_STATUS | ERROR_STATUS;

interface STATUS_TYPES {
    default: DEFAULT_STATUS;
    info: INFO_STATUS;
    success: SUCCESS_STATUS;
    warning: WARNING_STATUS;
    error: ERROR_STATUS;
}
export const STATUS: STATUS_TYPES;

type TOP = string;
type TOP_CENTER = string;
type TOP_LEFT_POSITION = string;
type TOP_RIGHT_POSITION = string;
type BOTTOM = string;
type BOTTOM_CENTER = string;
type BOTTOM_LEFT_POSITION = string;
type BOTTOM_RIGHT_POSITION = string;
type POSITION = TOP | TOP_CENTER | TOP_LEFT_POSITION | TOP_RIGHT_POSITION | BOTTOM | BOTTOM_CENTER | BOTTOM_LEFT_POSITION | BOTTOM_RIGHT_POSITION;

interface POSITIONS_TYPES {
    top: TOP;
    topCenter: TOP_CENTER;
    topLeft: TOP_LEFT_POSITION;
    topRight: TOP_RIGHT_POSITION;
    bottom: BOTTOM;
    bottomCenter: BOTTOM_CENTER;
    bottomLeft: BOTTOM_LEFT_POSITION;
    bottomRight: BOTTOM_RIGHT_POSITION;
}
export const POSITIONS: POSITIONS_TYPES;

interface Button {
    name: string;
    primary: boolean;
    onClick(): void;
}

export interface Notification {
    id?: string|number;
    title?: string;
    message?: string;
    image?: string;
    status?: string|number|STATUSES;
    position?: string|POSITION;
    dismissible?: boolean;
    dismissAfter?: number;
    closeButton?: boolean;
    buttons?: Button[];
    onAdd?(): void;
    onRemove?(): void;
    allowHTML?: boolean;
}

// default value for notifications
export const DEFAULT_NOTIFICATION: Notification;

export interface NotificationSystemTheme {
    smallScreenMin?: number;
    notificationsSystem?: {
        className?: string;
    };
    notificationsContainerClassName?: {
        main?: string;
        position?(position: string): string;
    };
    notificationsContainerTransition?: {
        enterTimeout?: number;
        leaveTimeout?: number;
        name?: any;
    };
    notificationClassName?: {
        wrapper?: string;
        main?: string;
        meta?: string;
        title?: string;
        message?: string;
        icon?: string;
        imageContainer?: string;
        image?: string;
        status?(status: string): string;
        dismissible?: string;
        closeButtonContainer?(): string;
        closeButton?(): string;
        buttons?(): string;
        button?: string;
        buttonText?: string;
    };
}

export interface NotificationSystemProps {
    theme: NotificationSystemTheme;
    filter?(notification: Notification): boolean;
}

declare class NotificationSystem extends React.Component<NotificationSystemProps, any> {}
export default NotificationSystem;
