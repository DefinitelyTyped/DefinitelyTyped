export = NextGenEvents;

declare class NextGenEvents {
    static readonly CONTEXT_ENABLED: 0;
    static readonly CONTEXT_DISABLED: 1;
    static readonly CONTEXT_QUEUED: 2;

    constructor();

    addListener(
        eventName: string,
        fn?: any,
        options?: NextGenEvents.AddListenerOptions,
    ): this;
    on(
        eventName: string,
        fn?: any,
        options?: NextGenEvents.AddListenerOptions,
    ): this;
    once(
        eventName: string,
        fn?: any,
        options?: NextGenEvents.AddListenerOptions,
    ): this;
    waitFor(eventName: string): Promise<this>;
    waitForAll(eventName: string): Promise<this>;
    removeListener(eventName: string, id: any): this;
    off(eventName: string, id: any): this;
    removeAllListeners(eventName: string): this;
    emit(nice: number, name: string, ...args: any[]): NextGenEvents.Event;
    emit(name: string, ...args: any[]): NextGenEvents.Event;
    waitForEmit(nice: number, name: string, ...args: any[]): Promise<any>;
    waitForEmit(name: string, ...args: any[]): Promise<any>;
    listeners(eventName: string): NextGenEvents.Func[];
    listenerCount(eventName: string): number;
    setNice(nice: number): void;
    desyncUseNextTick(useNextTick: boolean): void;
    setInterruptible(isInterruptible: boolean): void;
    getMaxListeners(): number;
    setMaxListeners(n: number): this;
    defineStates(...states: any[]): void;
    hasState(state: string): boolean;
    getAllStates(): NextGenEvents.States;
    addListenerContext(
        contextName: string,
        options: NextGenEvents.ContextOptions,
    ): this;
    disableListenerContext(contextName: string): this;
    enableListenerContext(contextName: string): this;
    queueListenerContext(contextName: string): this;
    serializeListenerContext(contextName: string, value?: boolean): this;
    setListenerContextNice(contextName: string, nice: number): this;
    destroyListenerContext(contextName: string): this;

    static emitEvent(event: NextGenEvents.Event): NextGenEvents.Event;
    static init(): void;
    static initFrom(from: NextGenEvents): void;
    static mergeListeners(foreigners: NextGenEvents.Listeners): void;
    static filterOutCallback(what: any, currentElement: any): boolean;
    static listenerWrapper(
        listener: any,
        event: any,
        contextScope: string,
        serial: any,
    ): void;
    static emitToOneListener(
        event: NextGenEvents.Event,
        listener: any,
        removedListeners: any,
    ): void;
    static emitCallback(event: NextGenEvents.Event): void;
    static listenerCount(emitter: NextGenEvents, eventName: string): number;
    static share(source: NextGenEvents, target: NextGenEvents): void;
    static reset(emitter: NextGenEvents): void;
    static noop(...args: any[]): void;
    static groupAddListener(
        emitters: NextGenEvents[],
        eventName: string,
        fn?: NextGenEvents.Func,
        options?: NextGenEvents.AddListenerOptions,
    ): any;
    static groupOn(
        emitters: NextGenEvents[],
        eventName: string,
        fn?: NextGenEvents.Func,
        options?: NextGenEvents.AddListenerOptions,
    ): any;
    static groupOnce(
        emitters: NextGenEvents[],
        eventName: string,
        fn?: NextGenEvents.Func,
        options?: NextGenEvents.AddListenerOptions,
    ): void;
    static groupWaitFor(
        emitters: NextGenEvents[],
        eventName: string,
    ): Promise<void>;
    static groupWaitForAll(
        emitters: NextGenEvents[],
        eventName: string,
    ): Promise<void>;
    static groupOnceFirst(
        emitters: NextGenEvents[],
        eventName: string,
        fn?: NextGenEvents.Func,
        options?: NextGenEvents.AddListenerOptions,
    ): void;
    static groupGlobalOnce(
        emitters: NextGenEvents[],
        eventName: string,
        fn?: NextGenEvents.Func,
        options?: NextGenEvents.AddListenerOptions,
    ): void;
    static groupWaitForFirst(
        emitters: NextGenEvents[],
        eventName: string,
    ): Promise<void>;
    static groupWaitForFirstAll(
        emitters: NextGenEvents[],
        eventName: string,
    ): Promise<void>;
    static groupOnceLast(
        emitters: NextGenEvents[],
        eventName: string,
        fn?: NextGenEvents.Func,
        options?: NextGenEvents.AddListenerOptions,
    ): void;
    static groupGlobalOnceAll(
        emitters: NextGenEvents[],
        eventName: string,
        fn?: NextGenEvents.Func,
        options?: NextGenEvents.AddListenerOptions,
    ): void;
    static groupWaitForLast(
        emitters: NextGenEvents[],
        eventName: string,
    ): Promise<void>;
    static groupWaitForLastAll(
        emitters: NextGenEvents[],
        eventName: string,
    ): Promise<void>;
    static groupRemoveListener(
        emitters: NextGenEvents[],
        eventName: string,
        id: number,
    ): void;
    static groupRemoveAllListeners(
        emitters: NextGenEvents[],
        eventName: string,
    ): void;
    static groupEmit(
        emitters: NextGenEvents[],
        nice?: number,
        ...args: any[]
    ): void;
    static groupWaitForEmit(
        emitters: NextGenEvents[],
        nice?: number,
        ...args: any[]
    ): Promise<void>;
    static groupDefineStates(emitters: NextGenEvents[], ...args: any[]): void;
    static getContextScope(
        context: NextGenEvents.Context,
        scopeName: string,
    ): NextGenEvents.Scope;
    static processScopeQueue(
        self: NextGenEvents,
        contextScope: NextGenEvents.Scope,
        serial: boolean,
        isCompletionCallback: boolean,
    ): void;
}

declare namespace NextGenEvents {
    interface Event {
        emitter: NextGenEvents;
        interrupt: null;
        sync: boolean;
        mice: number;
        name: string;
        callback: (interrupt: any) => any;
        args: any;
    }

    type AddListenerOptions =
        | boolean
        | {
            fn: any;
            id?: any;
            once: any;
            async: any;
            eventObject: any;
            nice?: number | undefined;
            context?: string | undefined;
        };

    const SYNC: number;
    const DESYNC: number;
    const defaultMaxListeners: number;

    type Func = (...args: any[]) => any;

    interface Listeners {
        error: Func[];
        interrupt: Func[];
        newListener: Func[];
        removeListener: Func[];
    }

    interface States {
        [key: string]: any;
    }

    interface Context {
        nice: typeof SYNC;
        ready: boolean;
        status: any;
        serial: boolean;
        scopes: { [key: string]: any };
    }

    interface Scope {
        ready: boolean;
        queue: any[];
    }

    interface ContextOptions {
        nice?: typeof SYNC | undefined;
        ready: boolean;
        status?: any;
        serial?: any;
        scopes: {
            [key: string]: Scope;
        };
    }

    class Internal {
        nice: typeof SYNC;
        interruptible: boolean;
        contexts: {
            [key: string]: Context;
        };
        desync: (fn: (...args: any[]) => void, ...args: any[]) => void;
        depth: number;
        states: States;
        stateGroups: { [key: string]: any };
        listeners: Listeners;
        maxListeners: typeof defaultMaxListeners;

        constructor(from?: NextGenEvents);
    }

    class Proxy {
        receive: (raw: any) => void;
        send: (message: any) => void;

        remoteServices: {
            [key: string]: NextGenEvents;
        };

        addLocalService(
            name: string,
            heartBeatEmitter: any,
            options: { listen: boolean; emit: boolean; ack: boolean },
        ): void;

        addRemoteService(name: string): void;

        push(data: any): void;

        destroy(): any;
    }
}
