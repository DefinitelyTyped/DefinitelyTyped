interface Options {
    offset: number;
    align?: "top" | "middle" | "bottom" | undefined;
    ease?: string | undefined;
    duration?: number | undefined;
}

declare function scrollToElement(selector: string | HTMLElement | Element, options?: Options): void;

export = scrollToElement;
