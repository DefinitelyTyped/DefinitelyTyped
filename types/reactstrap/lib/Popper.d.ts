// Type definitions for popper.js 1.10
// Project: https://github.com/FezVrasta/popper.js/
// Definitions by: edcarroll <https://github.com/edcarroll>, ggray <https://github.com/giladgray>, rhysd <https://rhysd.github.io>, joscha <https://github.com/joscha>, seckardt <https://github.com/seckardt>, marcfallows <https://github.com/marcfallows>

// This file only declares the public portions of the API.
// It should not define internal pieces such as utils or modifier details.
// It has been copied from: https://raw.githubusercontent.com/FezVrasta/popper.js/master/packages/popper/index.d.ts

declare namespace Popper {
    export type Position = "top" | "right" | "bottom" | "left";

    export type Placement =
        | "auto-start"
        | "auto"
        | "auto-end"
        | "top-start"
        | "top"
        | "top-end"
        | "right-start"
        | "right"
        | "right-end"
        | "bottom-end"
        | "bottom"
        | "bottom-start"
        | "left-end"
        | "left"
        | "left-start";

    export type Boundary = "scrollParent" | "viewport" | "window";

    export type ModifierFn = (data: Data, options: Object) => Data;

    export interface BaseModifier {
        order?: number;
        enabled?: boolean;
        fn?: ModifierFn;
    }

    export interface Modifiers {
        shift?: BaseModifier;
        offset?: BaseModifier & {
            offset?: number | string;
        };
        preventOverflow?: BaseModifier & {
            priority?: Position[];
            padding?: number;
            boundariesElement?: Boundary | Element;
            escapeWithReference?: boolean;
        };
        keepTogether?: BaseModifier;
        arrow?: BaseModifier & {
            element?: string | Element;
        };
        flip?: BaseModifier & {
            behavior?: "flip" | "clockwise" | "counterclockwise" | Position[];
            padding?: number;
            boundariesElement?: Boundary | Element;
        };
        inner?: BaseModifier;
        hide?: BaseModifier;
        applyStyle?: BaseModifier & {
            onLoad?: Function;
            gpuAcceleration?: boolean;
        };
        computeStyle?: BaseModifier & {
            gpuAcceleration?: boolean;
            x?: "bottom" | "top";
            y?: "left" | "right";
        };
        [name: string]: (BaseModifier & Record<string, any>) | undefined;
    }

    export interface Offset {
        top: number;
        left: number;
        width: number;
        height: number;
    }

    export interface Data {
        instance: Popper;
        placement: Placement;
        originalPlacement: Placement;
        flipped: boolean;
        hide: boolean;
        arrowElement: Element;
        styles: CSSStyleDeclaration;
        boundaries: Object;
        offsets: {
            popper: Offset;
            reference: Offset;
            arrow: {
                top: number;
                left: number;
            };
        };
    }

    export interface PopperOptions {
        placement?: Placement;
        positionFixed: boolean;
        eventsEnabled?: boolean;
        modifiers?: Modifiers;
        removeOnDestroy?: boolean;
        onCreate?(data: Data): void;
        onUpdate?(data: Data): void;
    }

    export interface ReferenceObject {
        clientHeight: number;
        clientWidth: number;
        getBoundingClientRect(): ClientRect;
    }
}

declare class Popper {
    static modifiers: (Popper.BaseModifier & { name: string })[];
    static placements: Popper.Placement[];
    static Defaults: Popper.PopperOptions;

    options: Popper.PopperOptions;

    constructor(
        reference: Element | Popper.ReferenceObject,
        popper: Element,
        options?: Popper.PopperOptions
    );

    destroy(): void;
    update(): void;
    scheduleUpdate(): void;
    enableEventListeners(): void;
    disableEventListeners(): void;
}

export default Popper;
