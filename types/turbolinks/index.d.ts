// Type definitions for turbolinks 5.2
// Project: https://github.com/turbolinks/turbolinks
// Definitions by: evankim390 <https://github.com/evankim390>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Turbolinks;
export as namespace Turbolinks;

declare const Turbolinks: Turbolinks.TurbolinksStatic;

declare namespace Turbolinks {
    interface Action {
        action: "advance" | "replace";
    }
    interface TurbolinksStatic {
        start(): void;
        visit(location: string, options?: Action): void;
        clearCache(): void;
        setProgressBarDelay(delayInMilliseconds: number): void;
        supported: boolean;
    }
}
