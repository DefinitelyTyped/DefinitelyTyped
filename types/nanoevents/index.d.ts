// Type definitions for nanoevents 1.0
// Project: https://github.com/ai/nanoevents#readme
// Definitions by: nju33 <https://github.com/nju33>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function unbind(): void;

declare class NanoEvents<T extends object> {
    on<U extends keyof T>(name: U, callBack: (arg: T[U]) => any): typeof unbind;
    emit<U extends keyof T>(name: U, value: T[U]): void;
}

export = NanoEvents;
