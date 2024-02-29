export interface Options {
    speed?: number | undefined;
    spaces?: RegExp | undefined;
}

export interface Estimate {
    progress: number;
    remaining: number;
    total: number;
    update(): void;
    initialize(): void;
}

export function element(element: HTMLElement, options?: Options): Estimate;

export function text(text: string, options?: Options): number;
