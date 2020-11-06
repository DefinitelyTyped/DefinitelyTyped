// Type definitions for eev 0.1
// Project: https://github.com/chrisdavies/eev
// Definitions by: boris.stanojevic <https://github.com/borisStanojevic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type CallbackFunction = (data: unknown) => void;

interface Eev {
    on(names: string, fn: CallbackFunction): void;
    off(names: string, fn: CallbackFunction): void;
    emit(name: string, data?: unknown): void;
}

export default Eev;
