export interface SelectorObject {
    selector: string;
    exclude: string;
}

export function matches(element: Element, selector: SelectorObject | string): boolean;

export function getData(element: Element, key: string): unknown;
export function setData(element: Element, key: string, value: unknown): void;

export function $(selector: string): Element[];
