// Type definitions for tabbable v3.1.1
// Project: https://github.com/davidtheclark/tabbable
// Definitions by: Michael Swiger <https://github.com/mokkan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function T(el: Element | Document, options?: T.Options): HTMLElement[];

declare namespace T {
    interface Options {
        includeContainer?: boolean;
    }
}

export = T;