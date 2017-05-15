// Type definitions for d3-slider
// Project: https://github.com/MasterMaps/d3-slider
// Definitions by: Linkun Chen <https://github.com/lk-chen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as d3 from "d3";

declare module "d3" {
    export function slider(): Slider;

    interface Slider {
        (sel: d3.Selection<any>): void;
        min(): number;
        min(val: number): Slider;
        max(): number;
        max(val: number): Slider;
        step(): number;
        step(val: number): Slider;
        animate(): boolean | number;
        animate(val: boolean | number): Slider;
        orientation(): string;
        orientation(val: string): Slider;
        axis(): boolean | d3.svg.Axis;
        axis(val: boolean | d3.svg.Axis): Slider;
        margin(): number;
        margin(val: number): Slider;
        value(): any;
        value(val: any): Slider;
        snap(): boolean;
        snap(val: boolean): Slider;
        scale(): any;
        scale(val: any): Slider;
        on(evt: ("slide" | "slideend"), callback: (evt: any, val: any) => void): Slider;
    }
}