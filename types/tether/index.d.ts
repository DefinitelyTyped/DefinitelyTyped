// Type definitions for Tether v1.4
// Project: https://github.hubspot.com/tether/
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
        bodyElement?: HTMLElement;
        classes?: {[className: string]: boolean};
        classPrefix?: string;
        constraints?: ITetherConstraint[];
        element?: HTMLElement | string | any /* JQuery */;
        enabled?: boolean;
        offset?: string;
        optimizations?: any;
        target?: HTMLElement | string | any /* JQuery */;
        targetAttachment?: string;
        targetOffset?: string;
        targetModifier?: string;
    }

    interface ITetherConstraint {
        attachment?: string;
        outOfBoundsClass?: string;
        pin?: boolean | string[];
        pinnedClass?: string;
        to?: string | HTMLElement | number[];
    }
}
