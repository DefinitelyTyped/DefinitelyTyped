// Type definitions for node-gcm 1.0.2
// Project: https://www.npmjs.org/package/node-gcm
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 BWYou <https://github.com/yousky/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export interface INotificationOptions {
    title: string;
    body?: string;
    icon: string;
    sound?: string;
    badge?: string;
    tag?: string;
    color?: string;
    click_action?: string;
    body_loc_key?: string;
    body_loc_args?: string;
    title_loc_args?: string;
    title_loc_key?: string;
}

export interface IMessageOptions {
    collapseKey?: string;
    priority?: string;
    contentAvailable?: boolean;
    mutableContent?: boolean;
    delayWhileIdle?: boolean;
    timeToLive?: number;
    restrictedPackageName?: string;
    dryRun?: boolean;
    data?: {
        [key: string]: string;
    };
    notification?: INotificationOptions;
}

export declare class Message {
    constructor(options?: IMessageOptions);
    collapseKey: string;
    delayWhileIdle: boolean;
    timeToLive: number;
    dryRun: boolean;

    addData(key: string, value: string): void;
    addData(data: { [key: string]: string }): void;
    addNotification(value: INotificationOptions): void;
    addNotification(key: string, value: INotificationOptions): void;
}


export interface ISenderOptions {
    proxy?: any;
    maxSockets?: number;
    timeout?: number;
}
export interface ISenderSendOptions {
    retries?: number;
    backoff?: number;
}

export interface IRecipient {
    to?: string,
    topic?: string,
    condition?: string,
    notificationKey?: string,
    registrationIds?: string[],
    registrationTokens?: string[]
}

export declare class Sender {
    constructor(key: string, options?: ISenderOptions);
    key: string;
    options: ISenderOptions;

    send(message: Message, registrationIds: string | string[] | IRecipient, callback: (err: any, resJson: IResponseBody) => void): void;
    send(message: Message, registrationIds: string | string[] | IRecipient, retries: number, callback: (err: any, resJson: IResponseBody) => void): void;
    send(message: Message, registrationIds: string | string[] | IRecipient, options: ISenderSendOptions, callback: (err: any, resJson: IResponseBody) => void): void;
    sendNoRetry(message: Message, registrationIds: string | string[] | IRecipient, callback: (err: any, resJson: IResponseBody) => void): void;
}


export interface IResponseBody {
    success: number;
    failure: number;
    canonical_ids: number;
    multicast_id?: number;
    results?: {
        message_id?: string;
        registration_id?: string;
        error?: string;
    }[];
}
