declare const Notification_base: any;
declare class Notification extends Notification_base {
    constructor(element: any, options: any);
    _changeState: (state: any, callback: any) => void;
    remove(): void;
    static components: WeakMap<object, any>;
    static options: {
        selectorInit: string;
        selectorButton: string;
        eventBeforeDeleteNotification: string;
        eventAfterDeleteNotification: string;
    };
}
export default Notification;
