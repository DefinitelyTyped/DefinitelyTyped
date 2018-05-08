// Type definitions for notyf 2.0
// Project: https://github.com/caroso1222/notyf
// Definitions by: Pavel Gurov <https://github.com/gurov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    delay?: number;
    alertIcon?: string;
    confirmIcon?: string;
}

declare class Notyf {
    constructor(options?: Options);

    alert(text: string): void;
    confirm(text: string): void;
}
export = Notyf;
