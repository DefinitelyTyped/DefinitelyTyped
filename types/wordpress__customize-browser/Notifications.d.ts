import { Notification } from './Notification';
import { Values } from './Values';

export interface Notifications_Options {
    container?: JQuery;
    alt?: boolean;
}

export interface Notifications_Get_Options {
    sort?: boolean;
}

export class Notifications extends Values<Notification> {
    alt: boolean;
    defaultConstructor: Notification;
    initialize(options: Notifications_Options): void;
    count(): number;
    add(notification: string | Notification, notificationObject?: Notification): Notification;
    remove(code: string): Notification;
    get(args: Notifications_Get_Options): Notification[];
    render(): void;
    constrainFocus(event: JQuery.Event): void;
}
