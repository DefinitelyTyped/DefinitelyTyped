/**
 * Optimized qsa, uses `getElementBy{Id|TagName|ClassName}` if it can
 */
declare const querySelectorAll: (
    element: Element,
    selector: string
) => Element[];
export = querySelectorAll;
