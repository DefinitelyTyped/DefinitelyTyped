declare function _style(element: Element, property: string): string;
declare function _style(
    element: Element,
    property: string | { [key: string]: any },
    value: any
): void;

declare const style: typeof _style;
export = style;
