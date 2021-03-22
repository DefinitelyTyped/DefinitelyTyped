// Type definitions for eev 0.1
// Project: https://github.com/chrisdavies/eev
// Definitions by: boris.stanojevic <https://github.com/borisStanojevic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type CallbackFunction = (data: any) => void;

declare class Eev {
    constructor();
    on(names: string, fn: CallbackFunction): void;
    off(names: string, fn: CallbackFunction): void;
    emit(name: string, data?: any): void;
}

export = Eev;
