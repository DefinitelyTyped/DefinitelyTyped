// Type definitions for anchor-js 5.0
// Project: https://github.com/bryanbraun/anchorjs
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: remove @deprecated aliases in next major version (6.*)
declare namespace anchorjs {
    type Placement = "left" | "right";
    type Visibility = "always" | "hover";

    interface Options {
        ariaLabel?: string | undefined;
        base?: string | undefined;
        class?: string | undefined;
        icon?: string | undefined;
        placement?: AnchorPlacement | undefined;
        titleText?: string | undefined;
        truncate?: number | undefined;
        visible?: Visibility | undefined;
    }

    interface AnchorJS {
        options: Options;
        new(options?: Options): this;
        add(selector?: string): this;
        remove(selector?: string): this;
        removeAll(): void;
    }

    /** @deprecated alias for AnchorJS */
    type Anchor = AnchorJS;
    /** @deprecated alias for {Placement} */
    type AnchorPlacement = Placement;
    /** @deprecated alias for {Visibility} */
    type AnchorVisibility = Visibility;
    /** @deprecated alias for {Options} */
    type AnchorOptions = Options;
}

declare const AnchorJS: anchorjs.AnchorJS;

export = AnchorJS;

export as namespace AnchorJS;

declare global {
    const anchors: anchorjs.AnchorJS;
}
