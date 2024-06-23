/// <reference types="jquery" />

interface ObloUtilStatic {
    debug: boolean;

    log(...args: any[]): void;
    error(...args: any[]): void;
    clip(min: number, max: number, x: number): number;
    square(x: number): number;
    replicate<X>(n: number, x: X): X[];
    pad(c: string, l: number, str: any): string;
    padZero(l: number, n: number): string;
    addslashes(str: string): string;
    showJSON(json: any, indentStr?: string, maxDepth?: number): string;
    showTime(date: Date): string;
    showDate(date: Date): string;
    readDate(dateStr: string): Date;
    setAttr($elt: JQuery, attrName: string, isSet: boolean): void;
}

declare var util: ObloUtilStatic;

declare module "oblo-util" {
    export = util;
}
