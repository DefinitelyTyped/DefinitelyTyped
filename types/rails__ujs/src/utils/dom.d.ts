interface SelectorObject {
    selector: string;
    exclude?: string;
}

export function matches(element: Element, selector: SelectorObject | string): boolean;

export function getData(element: Element, key: string): any;
export function setData(element: Element, key: string, value: any): void;

export function $<E extends Element = HTMLElement>(selector: string): E[];
