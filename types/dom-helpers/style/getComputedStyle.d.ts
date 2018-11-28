declare const getComputedStyle: (
    element: Element
) => { getPropertyValue: (prop: string) => string };
export = getComputedStyle;
