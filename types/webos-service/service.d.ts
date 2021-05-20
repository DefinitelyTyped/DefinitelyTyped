import { ActivityManager } from "./activity-manager";
import { Message } from "./message";
import { Method } from "./method";
import { Subscription } from "./subscription";

export interface ServiceOptions {
    // Idle time in seconds before exiting.
    readonly idleTimer?: number;
    // Prevents registering 'info' & 'quit' methods.
    readonly noBuiltinMethods?: boolean;
}

export class Service {
    readonly activityManager: ActivityManager;

    readonly busId: string;

    readonly cancelHandlers: Record<string, any>;

    readonly handlers: Record<string, any>;

    readonly idleTimer: number;

    readonly methods: { [category: string]: { [methodName: string]: Method } };

    readonly noBuiltinMethods: boolean;

    readonly subscriptions: { [id: string]: Message };

    cleanupUnifiedDone: boolean;

    handle: any;

    hasPublicMethods: boolean;

    privateHandle: any;

    publicHandle: any;

    sendingHandle: any;

    useACG: boolean;

    constructor(busId: string, activityManager?: ActivityManager, options?: ServiceOptions);

    call(uri: string, args: Record<string, any>, callback: (message: Message) => void): void;

    cancelSubscription(handle: any, ls2Message: any): void;

    cleanupUnified(): void;

    idIsPrivileged(id: string): boolean;

    info(message: Message): void;

    quit(message: Message): void;

    register(
        name: string,
        requestCallback?: (message: Message) => void,
        cancelCallback?: (message: Message) => void,
        description?: Record<string, any>,
    ): Method;

    registerPrivate(
        name: string,
        requestCallback?: (message: Message) => void,
        cancelCallback?: (message: Message) => void,
        description?: Record<string, any>,
    ): Method;

    subscribe(uri: string, args: Record<string, any>): Subscription;

    private readonly __serviceMainUnified: any;

    private _dispatch(handle: any, ls2Message: any): void;

    private _register(
        privateBus: boolean,
        name: string,
        requestCallback?: (message: Message) => void,
        cancelCallback?: (message: Message) => void,
        description?: Record<string, any>,
    ): Method;

    private _registerBuiltInMethods(privateBus: boolean): void;
}
