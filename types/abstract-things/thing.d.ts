import EventEmitter from './events';

declare namespace Thing {
    interface EmitEventOptions {
        multiple: boolean;
    }
}

declare class Thing {
    constructor(...args: any);

    get id(): string | null;
    set id(identifier: string | null);

    init(): Promise<undefined | this>;
    initCallback(): Promise<void>;

    destroy(): Promise<void>;
    destroyCallback(): Promise<void>;

    emitEvent(event: string, data?: unknown, options?: Thing.EmitEventOptions): void;
    on: InstanceType<typeof EventEmitter>['on'];
    off: InstanceType<typeof EventEmitter>['off'];
    onAny: InstanceType<typeof EventEmitter>['onAny'];
    offAny: InstanceType<typeof EventEmitter>['offAny'];

    debug(): void;
    matches(...tags: string[]): boolean;

    static type<T>(func: T): T & Thing;
    static mixin<T>(func: T): T & Thing;
    static mixinDynamic<T>(...mixins: T[]): T & Thing;

    extendWith<T>(...mixins: T[]): T & Thing;
}

export = Thing;
