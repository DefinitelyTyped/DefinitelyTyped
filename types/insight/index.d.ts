declare namespace insight {
    interface IPackage {
        name: string;
        version: string;
    }

    interface IOptions {
        trackingCode: string;
        trackingProvider?: string | undefined;
        pkg?: IPackage | undefined;
        packageName?: string | undefined;
        packageVersion?: string | undefined;
        config?: IConfigstore | undefined;
    }

    interface IConfigstore {
        path: string;
        all: any;
        get(key: string): any;
        set(key: string, val: any): void;
        del(key: string): void;
    }

    interface IEvent {
        category: string;
        action: string;
        label?: string | undefined;
        value?: number | string | undefined;
    }
}

import IPackage = insight.IPackage;
import IOptions = insight.IOptions;
import IConfigstore = insight.IConfigstore;
import IEvent = insight.IEvent;

declare class Insight {
    trackingCode: string;
    trackingProvider: string;
    packageName: string;
    packageVersion: string;
    os: string;
    nodeVersion: string;
    appVersion: string;
    config: IConfigstore;

    optOut: boolean;
    clientId: string;

    constructor(options: IOptions);

    track(...args: string[]): void;
    trackEvent(event: IEvent): void;

    askPermission(msg?: string, cb?: Function): void;
}

export = Insight;
