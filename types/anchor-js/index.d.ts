// Type definitions for anchor-js 4.2
// Project: https://github.com/bryanbraun/anchorjs
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace anchorjs {
    interface Anchor {
        options: AnchorOptions;

        add(selector?: string): Anchor;
        remove(selector?: string): Anchor;
        removeAll(): void;
    }

    type AnchorPlacement = 'left' | 'right';
    type AnchorVisibility = 'always' | 'hover' | 'touch';

    interface AnchorOptions {
        ariaLabel?: string | undefined;
        base?: string | undefined;
        class?: string | undefined;
        icon?: string | undefined;
        placement?: AnchorPlacement | undefined;
        titleText?: string | undefined;
        truncate?: number | undefined;
        visible?: AnchorVisibility | undefined;
    }

    interface AnchorStatic {
        new(options?: AnchorOptions): Anchor;
    }
}

declare const anchors: anchorjs.Anchor;
declare const AnchorJS: anchorjs.AnchorStatic;

export = AnchorJS;

export as namespace AnchorJS;

declare global {
    const anchors: anchorjs.Anchor;
}
