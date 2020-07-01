// Type definitions for change-emitter v0.1.2
// Project: https://github.com/acdlite/change-emitter
// Definitions by: Iskander Sierra <https://github.com/iskandersierra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'change-emitter' {

    type Unlisten = () => void;
    type Listener = (...args: any[]) => void;
    type ListenerOf0 = () => void;
    type ListenerOf1<T> = (value: T) => void;
    type ListenerOf2<T1, T2> = (value1: T1, value2: T2) => void;
    type ListenerOf3<T1, T2, T3> = (value1: T1, value2: T2, value3: T3) => void;
    type ListenerOf4<T1, T2, T3, T4> = (value1: T1, value2: T2, value3: T3, value4: T4) => void;
    type ListenerOf5<T1, T2, T3, T4, T5> = (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => void;

    interface ChangeEmitter {
        listen(listener: Listener): Unlisten;
        emit(...args: any[]): void;
    }

    interface ChangeEmitterOf1<T> {
        listen(listener: ListenerOf1<T>): Unlisten;
        emit(value: T): void;
    }

    interface ChangeEmitterOf0 {
        listen(listener: ListenerOf0): Unlisten;
        emit(): void;
    }

    interface ChangeEmitterOf2<T1, T2> {
        listen(listener: ListenerOf2<T1, T2>): Unlisten;
        emit(value1: T1, value2: T2): void;
    }

    interface ChangeEmitterOf3<T1, T2, T3> {
        listen(listener: ListenerOf3<T1, T2, T3>): Unlisten;
        emit(value1: T1, value2: T2, value3: T3): void;
    }

    interface ChangeEmitterOf4<T1, T2, T3, T4> {
        listen(listener: ListenerOf4<T1, T2, T3, T4>): Unlisten;
        emit(value1: T1, value2: T2, value3: T3, value4: T4): void;
    }

    interface ChangeEmitterOf5<T1, T2, T3, T4, T5> {
        listen(listener: ListenerOf5<T1, T2, T3, T4, T5>): Unlisten;
        emit(value1: T1, value2: T2, value3: T3, value4: T4, value5: T5): void;
    }

    export function createChangeEmitter(): ChangeEmitter;
    export function createChangeEmitter<T>(): ChangeEmitterOf1<T>;
    export function createChangeEmitter<T1, T2>(): ChangeEmitterOf2<T1, T2>;
    export function createChangeEmitter<T1, T2, T3>(): ChangeEmitterOf3<T1, T2, T3>;
    export function createChangeEmitter<T1, T2, T3, T4>(): ChangeEmitterOf4<T1, T2, T3, T4>;
    export function createChangeEmitter<T1, T2, T3, T4, T5>(): ChangeEmitterOf5<T1, T2, T3, T4, T5>;
}
