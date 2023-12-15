/// <reference types="jquery"/>
type RateItMode = "bg" | "font";
interface RateItOptions {
    value?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
    step?: number | undefined;
    backingfld?: string | undefined;
    readonly?: boolean | undefined;
    ispreset?: boolean | undefined;
    resetable?: boolean | undefined;
    starwidth?: number | undefined;
    starheight?: number | undefined;
    mode?: RateItMode | undefined;
    icon?: string | undefined;
}

interface JQuery {
    rateit(): JQuery;
    rateit(options: RateItOptions): JQuery;

    rateit(method: "value"): number;
    rateit(method: "value", param: number): JQuery;

    rateit(method: "max"): number;
    rateit(method: "max", param: number): JQuery;

    rateit(method: "min"): number;
    rateit(method: "min", param: number): JQuery;

    rateit(method: "readonly"): boolean;
    rateit(method: "readonly", param: boolean): JQuery;

    rateit(method: "ispreset"): boolean;
    rateit(method: "ispreset", param: boolean): JQuery;

    rateit(method: "reset"): JQuery;

    rateit(method: string, param: any): any;
}
