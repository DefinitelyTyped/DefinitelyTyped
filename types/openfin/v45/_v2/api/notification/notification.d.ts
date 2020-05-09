import { Base, EmitterBase } from '../base';
import { Identity } from '../../identity';
import Transport from '../../transport/transport';
import { NotificationEvents } from '../events/notifications';
export declare class NotificationOptions {
    url: string;
    message: string;
    timeout: string | number;
    notificationId: number;
    uuidOfProxiedApp: string;
    ignoreMouseOver: boolean;
    constructor(options: any, identity: Identity, notificationId: number);
}
export interface NotificationCallback {
    message?: any;
}
/**
 * @classdesc A Notification object represents a window on OpenFin Runtime which
 * is shown briefly to the user on the bottom-right corner of the primary monitor.
 * A notification is typically used to alert the user of some important event which
 * requires their attention. Notifications are a child or your application that
 * are controlled by the runtime.
 * @class
 * @alias Notification
 * @hideconstructor
 */
export declare class _Notification extends EmitterBase<NotificationEvents> {
    private listenerList;
    private unhookAllListeners;
    protected options: NotificationOptions;
    protected generalListener: (msg: any) => void;
    protected notificationId: number;
    constructor(wire: Transport, options: NotificationOptions);
    url: string;
    timeout: number | string;
    message: any;
    /**
     * Invoked when the notification is shown
     * @return {Promise.<void>}
     * @tutorial Notification.show
     */
    show(): Promise<void>;
    /**
     * Sends a message to the notification.
     * @param { any } message The message to be sent to the notification.
     * Can be either a primitive data type (string, number, or boolean)
     * or composite data type (object, array) that is composed of other
     * primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial Notification.sendMessage
     */
    sendMessage(message: any): Promise<void>;
    /**
     * Closes the notification
     * @return {Promise.<void>}
     * @tutorial Notification.close
     */
    close(): Promise<void>;
}
/**
 * @lends Notification
 */
export default class _NotificationModule extends Base {
    private nextNoteId;
    private genNoteId;
    events: {
        show: string;
        close: string;
        error: string;
        click: string;
        message: string;
    };
    /**
     * Creates a new Notification.
     * @param { object } options
     * @return {_Notification}
     * @tutorial Notification.create
     * @static
     */
    create(options: any): _Notification;
}
