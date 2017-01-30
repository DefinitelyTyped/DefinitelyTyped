// Type definitions for dragster
// Project: https://github.com/bensmithett/dragster
// Definitions by: Zsolt Kovacs <https://github.com/zskovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Dragster {
    constructor(elem: HTMLElement);
    removeListeners(): void;
    reset(): void;
}

export = Dragster;