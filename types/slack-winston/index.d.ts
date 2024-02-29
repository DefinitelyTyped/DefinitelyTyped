export interface SlackTransportOptions {
    domain: string;
    token: string;
    webhook_url: string;
    channel: string;

    username?: string | undefined;
    icon_emoji?: string | undefined;
    message?: string | undefined;
    queueDelay?: number | undefined;

    // from winston-transport TransportStreamOptions
    format?: Format | undefined;
    level?: string | undefined;
    silent?: boolean | undefined;
    handleExceptions?: boolean | undefined;

    log?(info: any, next: () => void): any;
    logv?(info: any, next: () => void): any;
    close?(): void;
}

export class Slack {
    constructor(options?: SlackTransportOptions);
    format?: Format | undefined;
    level?: string | undefined;
    silent?: boolean | undefined;
    handleExceptions?: boolean | undefined;

    log?(info: any, next: () => void): any;
    logv?(info: any, next: () => void): any;
    close?(): void;
}

export class Format {
    constructor(opts?: object);

    options?: object | undefined;
    transform: (info: TransformableInfo, opts?: any) => TransformableInfo | boolean;
}

export interface TransformableInfo {
    level: string;
    message: string;
    [key: string]: any;
}
