// Type definitions for Tether v1.1
// Project: http://github.hubspot.com/tether/
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
        attachment?: string;
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

declare module "tether" {
    export = Tether;
}

