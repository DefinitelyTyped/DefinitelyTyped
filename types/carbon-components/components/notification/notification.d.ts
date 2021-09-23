interface NotificationOptions {
    selectorInit: string;
    selectorButton: string;
    eventBeforeDeleteNotification: string;
    eventAfterDeleteNotification: string;
}

declare const Notification_base: any;
declare class Notification extends Notification_base {
    constructor(element: HTMLElement, options?: Partial<NotificationOptions>);
    _changeState: (state: string, callback: () => void) => void;
    remove(): void;
    static components: WeakMap<object, any>;
    static options: NotificationOptions;
}
export default Notification;
