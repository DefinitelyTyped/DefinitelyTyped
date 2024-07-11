declare namespace Dragster {
    interface Dragster {
        removeListeners(): void;
        reset(): void;
    }

    interface DragsterStatic {
        (elem: HTMLElement): Dragster;
        new(elem: HTMLElement): Dragster;
    }
}

// Support through imports.
declare var Dragster: Dragster.DragsterStatic;
export = Dragster;

// Support as a global
export as namespace Dragster;

declare global {
    interface Window {
        Dragster: Dragster.DragsterStatic;
    }
}
