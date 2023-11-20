export interface INotificationOptions {
    title: string;
    body?: string | undefined;
    icon: string;
    sound?: string | undefined;
    badge?: string | undefined;
    tag?: string | undefined;
    color?: string | undefined;
    click_action?: string | undefined;
    body_loc_key?: string | undefined;
    body_loc_args?: string | undefined;
    title_loc_args?: string | undefined;
    title_loc_key?: string | undefined;
}

export interface IMessageOptions {
    collapseKey?: string | undefined;
    priority?: string | undefined;
    contentAvailable?: boolean | undefined;
    mutableContent?: boolean | undefined;
    delayWhileIdle?: boolean | undefined;
    timeToLive?: number | undefined;
    restrictedPackageName?: string | undefined;
    dryRun?: boolean | undefined;
    data?: {
        [key: string]: string;
    } | undefined;
    notification?: INotificationOptions | undefined;
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
    maxSockets?: number | undefined;
    timeout?: number | undefined;
}
export interface ISenderSendOptions {
    retries?: number | undefined;
    backoff?: number | undefined;
}

export interface IRecipient {
    to?: string | undefined;
    topic?: string | undefined;
    condition?: string | undefined;
    notificationKey?: string | undefined;
    registrationIds?: string[] | undefined;
    registrationTokens?: string[] | undefined;
}

export declare class Sender {
    constructor(key: string, options?: ISenderOptions);
    key: string;
    options: ISenderOptions;

    send(
        message: Message,
        registrationIds: string | string[] | IRecipient,
        callback: (err: any, resJson: IResponseBody) => void,
    ): void;
    send(
        message: Message,
        registrationIds: string | string[] | IRecipient,
        retries: number,
        callback: (err: any, resJson: IResponseBody) => void,
    ): void;
    send(
        message: Message,
        registrationIds: string | string[] | IRecipient,
        options: ISenderSendOptions,
        callback: (err: any, resJson: IResponseBody) => void,
    ): void;
    sendNoRetry(
        message: Message,
        registrationIds: string | string[] | IRecipient,
        callback: (err: any, resJson: IResponseBody) => void,
    ): void;
}

export interface IResponseBody {
    success: number;
    failure: number;
    canonical_ids: number;
    multicast_id?: number | undefined;
    results?: {
        message_id?: string | undefined;
        registration_id?: string | undefined;
        error?: string | undefined;
    }[] | undefined;
}
