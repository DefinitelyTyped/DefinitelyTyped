// Type definitions for jquery.autosize 3.0.7
// Project: http://www.jacklmoore.com/autosize/
// Definitions by: Aaron T. King <https://github.com/kingdango>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace autosize {
    interface AutosizeStatic {
        (el: Element): void;
        (el: NodeList): void;
    }
}

declare var autosize: autosize.AutosizeStatic;

declare module 'autosize' {
    export = autosize;
}
