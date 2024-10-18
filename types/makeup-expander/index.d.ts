declare namespace Expander {
    interface Options {
        autoCollapse?: boolean | undefined;
        collapseOnClickOut?: boolean | undefined;
        collapseOnFocusOut?: boolean | undefined;
        collapseOnMouseOut?: boolean | undefined;
        contentSelector?: string | undefined;
        expandOnClick?: boolean | undefined;
        expandOnFocus?: boolean | undefined;
        expandOnHover?: boolean | undefined;
        focusManagement?: string | null | undefined;
        hostSelector?: string | undefined;
        expandedClass?: string | undefined;
        simulateSpacebarClick?: boolean | undefined;
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
