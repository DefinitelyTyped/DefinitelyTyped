export = Tether;
export as namespace Tether;

// global Tether constructor
declare class Tether {
    constructor(options: Tether.ITetherOptions);

    public setOptions(options: Tether.ITetherOptions): void;
    public disable(): void;
    public enable(): void;
    public destroy(): void;
    public position(): void;

    public static position(): void;
}

declare namespace Tether {
    interface ITetherOptions {
        attachment: string;
        bodyElement?: HTMLElement | undefined;
        classes?: { [className: string]: boolean | string } | undefined;
        classPrefix?: string | undefined;
        constraints?: ITetherConstraint[] | undefined;
        element?: HTMLElement | string | any | undefined /* JQuery */;
        enabled?: boolean | undefined;
        offset?: string | undefined;
        optimizations?: any;
        target?: HTMLElement | string | any | undefined /* JQuery */;
        targetAttachment?: string | undefined;
        targetOffset?: string | undefined;
        targetModifier?: string | undefined;
    }

    interface ITetherConstraint {
        attachment?: string | undefined;
        outOfBoundsClass?: string | undefined;
        pin?: boolean | string[] | undefined;
        pinnedClass?: string | undefined;
        to?: string | HTMLElement | number[] | undefined;
    }
}
