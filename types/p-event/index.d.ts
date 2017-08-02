// Type definitions for p-event 1.3
// Project: https://github.com/sindresorhus/p-event#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = pEvent;

declare function pEvent<T, TRest = T>(emitter: pEvent.Emitter<T, TRest>, event: string | symbol, options: MultiArgsOptions): Promise<Array<T | TRest>>;
declare function pEvent<T>(emitter: pEvent.Emitter<T>, event: string | symbol, options?: pEvent.Options): Promise<T>;

declare namespace pEvent {
    interface Emitter<T = any, TRest = T> {
        on?: AddRmListenerFn<T, TRest>;
        addListener?: AddRmListenerFn<T, TRest>;
        addEventListener?: AddRmListenerFn<T, TRest>;
        off?: AddRmListenerFn<T, TRest>;
        removeListener?: AddRmListenerFn<T, TRest>;
        removeEventListener?: AddRmListenerFn<T, TRest>;
    }

    interface Options {
        rejectionEvents?: string[];
        multiArgs?: boolean;
        timeout?: number;
        filter?<T>(el: T): boolean;
    }
}

type AddRmListenerFn<T, TRest> = (event: string | symbol, listener: (arg1: T, ...args: TRest[]) => void) => void;

interface MultiArgsOptions extends pEvent.Options {
    multiArgs: true;
}
