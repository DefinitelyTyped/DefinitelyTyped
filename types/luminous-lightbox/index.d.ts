/*!
 * Luminous v2.4.0
 * Copyright 2015-2024, Zebrafish Labs
 * All rights reserved.
 * Licensed under BSD-2 (https://github.com/imgix/luminous/blob/main/LICENSE.md)
 */

export interface LuminousOptions {
    /**
     * Prefix for generated element class names (e.g. `my-ns` will result in classes such as `my-ns-lightbox`. Default `lum-` prefixed classes will always be added as well.
     */
    namespace?: string | undefined;

    /**
     * Which attribute to pull the lightbox image source from.
     * @default "href"
     */
    sourceAttribute?: string | undefined;

    /**
     * Captions can be a literal string, or a function that receives the Luminous instance's trigger element as an argument and returns a string. Supports HTML, so use caution when dealing with user input.
     */
    caption?: string | ((trigger: Element | null) => string | null) | undefined;

    /**
     * The event to listen to on the _trigger_ element: triggers opening.
     * @default "click"
     */
    openTrigger?: keyof GlobalEventHandlersEventMap | undefined;

    /**
     * The event to listen to on the _lightbox_ element: triggers closing.
     * @default "click"
     */
    closeTrigger?: keyof GlobalEventHandlersEventMap | undefined;

    /**
     * Allow closing by pressing escape.
     * @default true
     */
    closeWithEscape?: boolean | undefined;

    /**
     * Automatically close when the page is scrolled.
     * @default false
     */
    closeOnScroll?: boolean | undefined;

    /**
     * Disable close button
     * @default true
     */
    showCloseButton?: boolean | undefined;

    /**
     * A node to append the lightbox element to.
     * @default document.body
     */
    appendToNode?: Element | null | undefined;

    /**
     * A selector defining what to append the lightbox element to.
     * This will take precedence over `appendToNode`.
     */
    appendToSelector?: string | undefined;

    /**
     * If present (and a function), this will be called whenever the lightbox is opened.
     */
    onOpen?: (() => void) | undefined;

    /**
     * If present (and a function), this will be called whenever the lightbox is closed.
     */
    onClose?: (() => void) | undefined;

    /**
     * When true, adds the `imgix-fluid` class to the `img` inside the lightbox. See https://github.com/imgix/imgix.js for more information.
     * @default false
     */
    includeImgixJsClass?: boolean | undefined;

    /**
     * Add base styles to the page. See the "Theming" section of README.md for more information.
     * @default true
     */
    injectBaseStyles?: boolean | undefined;
}

export interface LuminousGalleryOptions {
    /**
     * Whether pressing the arrow keys should move to the next/previous slide.
     * @default true
     */
    arrowNavigation?: boolean | undefined;

    /**
     * A callback triggered when the image changes that is passed the image HTML element.
     */
    onChange?: ((args: { imgEl: HTMLImageElement }) => void) | undefined;
}

export class Luminous {
    constructor(trigger: Element | null, options?: LuminousOptions);
}

export class LuminousGallery {
    constructor(triggers: Array<Element> | NodeList, options?: LuminousGalleryOptions, luminousOpts?: LuminousOptions);
}
