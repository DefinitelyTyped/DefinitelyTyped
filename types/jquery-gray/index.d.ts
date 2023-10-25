/// <reference types="jquery" />

export type Classes = Partial<{
    fade: string;
}>;

export type Options = Partial<{
    fade: boolean;
    classes: Classes;
}>;

declare global {
    interface JQuery {
        gray(options?: Options): JQuery;
        toggleClass(className: "grayscale-off"): JQuery;
    }
}
