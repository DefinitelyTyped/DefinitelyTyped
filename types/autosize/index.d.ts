// Type definitions for jquery.autosize 3.0.7
// Project: http://www.jacklmoore.com/autosize/
// Definitions by: Aaron T. King <https://github.com/kingdango>, keika299 <https://github.com/keika299>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace autosize {
    interface AutosizeStatic {
        (el: Element): void;
        (el: NodeList): void;
        update(el: Element): void;
        update(el: NodeList): void;
        destroy(el: Element): void;
        destroy(el: NodeList): void;
    }
}

declare var autosize: autosize.AutosizeStatic;

export = autosize;
export as namespace autosize;
