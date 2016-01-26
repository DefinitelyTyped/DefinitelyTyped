// Type definitions for Tether v0.6
// Project: http://github.hubspot.com/tether/
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module tether {

    interface TetherStatic {
        new(options: ITetherOptions): Tether;
    }

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

    interface Tether {
        setOptions(options: ITetherOptions): void;
        disable(): void;
        enable(): void;
        destroy(): void;
        position(): void;
    }

}

declare module "tether" {
    export = tether;
}

declare var Tether: tether.TetherStatic;

