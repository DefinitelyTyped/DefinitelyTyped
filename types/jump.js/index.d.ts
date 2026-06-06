export = jump;

declare function jump(target: string | Element | number, opts?: jump.Options): void;

declare namespace jump {
    type TransitionFunc = (t: number, b: number, c: number, d: number) => number;
    interface Options {
        duration?: number | ((distance: number) => number) | undefined;
        offset?: number | undefined;
        callback?(): void;
        easing?: TransitionFunc | undefined;
        a11y?: boolean | undefined;
    }
}
