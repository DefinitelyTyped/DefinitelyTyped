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
