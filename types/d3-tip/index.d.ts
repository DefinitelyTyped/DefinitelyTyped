// Type definitions for d3-tip v3.5.5
// Project: https://github.com/Caged/d3-tip
// Definitions by: Gert Braspenning <https://github.com/brspnnggrt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Primitive } from "d3";

declare module "d3" {
    type TooltipDirection = ("n" | "s" | "e" | "w" | "nw" | "ne" | "sw" | "se");
    interface Tooltip {
        hide(): Tooltip;
        show(): Tooltip;
        show<Datum>(data: Datum[]): Tooltip;
        show(target: SVGElement): Tooltip;
        show<Datum>(data: Datum[], target: SVGElement): Tooltip;
        attr(name: string): string;
        attr(name: string, value: Primitive): Tooltip;
        attr<Datum>(name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive): Tooltip;
        attr<Datum>(obj: { [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive) }): Tooltip;
        style(name: string): string;
        style(name: string, value: Primitive, priority?: string): Tooltip;
        style<Datum>(name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive, priority?: string): Tooltip;
        style<Datum>(obj: { [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive) }, priority?: string): Tooltip;
        offset(): [number, number];
        offset(tuple: [number, number]): Tooltip;
        offset<Datum>(func: (datum: Datum, index: number, outerIndex: number) => [number, number]): Tooltip;
        direction(): TooltipDirection;
        direction(direction: TooltipDirection): Tooltip;
        direction<Datum>(func: (datum: Datum, index: number, outerIndex: number) => TooltipDirection): Tooltip;
        html(): string;
        html(content: string): Tooltip;
        html<Datum>(func: (datum: Datum, index: number, outerIndex: number) => string): Tooltip;
        rootElement(): HTMLElement;
        rootElement(element: HTMLElement): Tooltip;
        rootElement<Datum>(func: (datum: Datum, index: number, outerIndex: number) => HTMLElement): Tooltip;
        destroy(): Tooltip;
    }
    export function tip(): Tooltip;
}

