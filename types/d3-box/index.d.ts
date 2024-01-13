import * as d3 from "d3";

declare module "d3" {
    export function box(): Box;

    interface Box {
        (sel: d3.Selection<any>): void;
        width(): number;
        width(x: number): Box;
        height(): number;
        height(x: number): Box;
        tickFormat(): (n: number) => string;
        tickFormat(fun: (n: number) => string): Box;
        duration(): number;
        duration(x: number): Box;
        domain(): () => number[];
        domain(x: number[]): Box;
        value(): (d: any) => number;
        value(x: (d: any) => number): Box;
        whiskers(): (d: any[], i?: number) => number[];
        whiskers(x: (d: any[], i?: number) => number[]): Box;
        quartiles(): (d: any[]) => number[];
        quantiles(x: (d: any[]) => number[]): Box;
    }
}
