// Type definitions for makeup-expander 0.6
// Project: https://github.com/makeup-js/makeup-expander
// Definitions by: Timur Manyanov <https://github.com/darkwebdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

declare namespace Expander {
    interface Options {
        autoCollapse?: boolean;
        collapseOnClickOut?: boolean;
        collapseOnFocusOut?: boolean;
        collapseOnMouseOut?: boolean;
        contentSelector?: string;
        expandOnClick?: boolean;
        expandOnFocus?: boolean;
        expandOnHover?: boolean;
        focusManagement?: string | null;
        hostSelector?: string;
        expandedClass?: string;
        simulateSpacebarClick?: boolean;
    }
}

declare class Expander {
    constructor(el: HTMLElement, selectedOptions?: Expander.Options);

    collapseOnClickOut: boolean;

    collapseOnFocusOut: boolean;

    collapseOnMouseOut: boolean;

    expandOnClick: boolean;

    expandOnFocus: boolean;

    expandOnHover: boolean;

    collapse(): void;

    expand(isKeyboard: boolean): void;

    isExpanded(): boolean;

    toggle(): void;
}

export = Expander;
