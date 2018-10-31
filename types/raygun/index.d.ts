// Type definitions for raygun 0.10
// Project: https://github.com/MindscapeHQ/raygun4node
// Definitions by: Taylor Lodge <https://github.com/UberMouse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace raygun {
    interface KeyValueObject  {
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
                name: 'raygun-node';
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
            user?: RaygunUser | { identifier: string }
            version?: string;
        };
    }

    interface RaygunOfflineStorageProvider<TTransportItem = RaygunPayload, TStorageItem = string> {
        init(options: any): RaygunOfflineStorageProvider;
        save(item: TTransportItem, callback: (error?: Error) => void): void;
        retrieve(callback: (error: Error, storageItems: ReadonlyArray<TStorageItem>) => void): void;
        send(callback: (error: Error, sendItems: ReadonlyArray<TStorageItem>) => void): void;
    }

    type OnBeforeSend = (payload: RaygunPayload, exception: Error, customData: KeyValueObject, request: RaygunRequest, tags: ReadonlyArray<string>) => boolean | RaygunPayload;
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
        groupingKey?: string;
        tags?: ReadonlyArray<string>;
        userHumanStringForObject?: boolean;
        reportColumnNumbers?: boolean;
        innerErrorFieldName?: string;
    }

    class Client {
        init(options: RaygunOptions): Client;
        setUser(user: RaygunUser): Client;
        setVersion(version: string): Client;
        onBeforeSend(callback: OnBeforeSend): Client;
        groupingKey(groupingKey: string): Client;
        offline(): Client;
        online(): Client;
        send(exception: Error | string, customData?: KeyValueObject, offlineStorageCallback?: (error?: Error) => void, request?: RaygunRequest, tags?: ReadonlyArray<string>): RaygunPayload;
        expressHandler(error: Error, request: RaygunRequest, res: any, next: any): void;
    }
}

export default raygun;
