// Type definitions for dragster 0.1
// Project: https://github.com/bensmithett/dragster
// Definitions by: Zsolt Kovacs <https://github.com/zskovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Dragster {
    interface Dragster {
        removeListeners(): void;
        reset(): void;
    }

    interface DragsterStatic {
        (elem: HTMLElement): Dragster;
        new (elem: HTMLElement): Dragster;
    }
}

// Support through imports.
declare var Dragster: Dragster.DragsterStatic;
export = Dragster;

// Support as a global
export as namespace Dragster;
