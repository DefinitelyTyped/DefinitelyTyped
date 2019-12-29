// Type definitions for raygun 0.10
// Project: https://github.com/MindscapeHQ/raygun4node
// Definitions by: Taylor Lodge <https://github.com/UberMouse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export namespace raygun {
    interface KeyValueObject {
        [key: string]: string | number | boolean | KeyValueObject;
    }
    interface StackFrame {
        lineNumber: number;
        className: string;
        fileName: string;
        methodName: string;
        columnNumber?: number;
    }
    interface RaygunErrorObject {
        message: string;
        className: string;
        stackTrace: StackFrame[];
        innerError?: RaygunErrorObject;
    }
    interface RaygunRequest {
        hostname?: string;
        host?: string;
        path?: string;
        method?: string;
        ip?: string;
        queryString?: KeyValueObject;
        headers?: KeyValueObject;
        form?: KeyValueObject;
    }
    interface RaygunUser {
        identifier: string;
        email?: string;
        fullName?: string;
        firstName?: string;
        uuid?: string;
    }
    interface RaygunPayload {
        occurredOn: Date;
        details: {
            client: {
                name: "raygun-node";
                version: string;
            };
            groupingKey?: string;
            error: RaygunErrorObject;
            environment: {
                osVersion: string;
                architecture: string;
                totalPhysicalMemory: number;
                availablePhysicalMemory: number;
                utcOffset: number;
                processorCount?: number;
                cpu: {
                    model: string;
                    speed: number;
                    times: {
                        user: number;
                        nice: number;
                        sys: number;
                        idle: number;
                        irq: number;
                    };
                };
            };
            machineName: string;
            userCustomData?: KeyValueObject;
            tags: string[];
            request?: RaygunRequest;
            user?: RaygunUser | { identifier: string };
            version?: string;
        };
    }

    interface RaygunOfflineStorageProvider<
        TTransportItem = RaygunPayload,
        TStorageItem = string
    > {
        init(options: any): RaygunOfflineStorageProvider;
        save(item: TTransportItem, callback: (error?: Error) => void): void;
        retrieve(
            callback: (
                error: Error,
                storageItems: ReadonlyArray<TStorageItem>
            ) => void
        ): void;
        send(
            callback: (
                error: Error,
                sendItems: ReadonlyArray<TStorageItem>
            ) => void
        ): void;
    }

    type OnBeforeSend = (
        payload: RaygunPayload,
        exception: Error,
        customData: KeyValueObject,
        request: RaygunRequest,
        tags: ReadonlyArray<string>
    ) => boolean | RaygunPayload;

    type GroupingKey = (
        payload: RaygunPayload,
        exception: Error,
        customData: KeyValueObject,
        request: RaygunRequest,
        tags: ReadonlyArray<string>
    ) => string;

    interface RaygunOptions {
        apiKey: string;
        filters?: ReadonlyArray<string>;
        port?: number;
        host?: string;
        useSSL?: boolean;
        onBeforeSend?: OnBeforeSend;
        offlineStorage?: RaygunOfflineStorageProvider;
        offlineStorageOptions?: any;
        isOffline?: boolean;
        groupingKey?: string|GroupingKey;
        tags?: ReadonlyArray<string>;
        userHumanStringForObject?: boolean;
        reportColumnNumbers?: boolean;
        innerErrorFieldName?: string;
    }
}

declare class Client {
    init(options: raygun.RaygunOptions): Client;
    setUser(user: raygun.RaygunUser): Client;
    setVersion(version: string): Client;
    onBeforeSend(callback: raygun.OnBeforeSend): Client;
    groupingKey(groupingKey: string|raygun.GroupingKey): Client;
    offline(): Client;
    online(): Client;
    send(
        exception: Error | string | object,
        customData?: raygun.KeyValueObject,
        offlineStorageCallback?: (error?: Error) => void,
        request?: raygun.RaygunRequest,
        tags?: ReadonlyArray<string>
    ): raygun.RaygunPayload;
    expressHandler(
        error: Error,
        request: raygun.RaygunRequest,
        res: any,
        next: any
    ): void;
    user(req: raygun.RaygunRequest): raygun.RaygunUser|string;
}

export { Client };
