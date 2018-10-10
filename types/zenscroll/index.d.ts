// Type definitions for zenscroll 4.0
// Project: https://zengabor.github.io/zenscroll/
// Definitions by: Hamed Fathi <https://github.com/HamedFathi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var zenScroll: ZenScroll.zenscroll;
export = zenScroll;
export as namespace zenScroll;

declare namespace ZenScroll {
    interface setupOption {
        defaultDuration: number;
        edgeOffset: number;
    }

    interface zenscroll {
        setup(defaultDuration?: number, edgeOffset?: number): setupOption;
        to(elem: HTMLElement, duration?: number, onDone?: () => void): void;
        toY(targetY: number, duration?: number, onDone?: () => void): void;
        intoView(elem: HTMLElement, duration?: number, onDone?: () => void): void;
        center(elem: HTMLElement, duration?: number, offset?: number, onDone?: () => void): void;
        stop(): void;
        moving(): boolean;
        getY(): number;
        getTopOf(elem: HTMLElement): number;
        createScroller(scrollContainer: HTMLElement, defaultDuration?: number, edgeOffset?: number): zenscroll;
    }
}
