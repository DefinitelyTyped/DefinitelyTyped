/*! 
 * Luminous v2.4.0
 * Copyright 2015-2024, Zebrafish Labs
 * All rights reserved.
 * Licensed under BSD-2 (https://github.com/imgix/luminous/blob/main/LICENSE.md) 
 */

interface LuminousOptions {
  /**
   *  Prefix for generated element class names (e.g. `my-ns` will result in classes such as `my-ns-lightbox`. Default `lum-` prefixed classes will always be added as well.
   */
  namespace?: string;

  /**
   *  Which attribute to pull the lightbox image source from.
   * @default "href"
   */
  sourceAttribute?: string;

  /**
   * Captions can be a literal string, or a function that receives the Luminous instance's trigger element as an argument and returns a string. Supports HTML, so use caution when dealing with user input.
   */
  caption?: string | ((trigger: Element | null) => string | null);

  /**
   * The event to listen to on the _trigger_ element: triggers opening.
   * @default "click"
   */
  openTrigger?: keyof GlobalEventHandlersEventMap;

  /**
   * The event to listen to on the _lightbox_ element: triggers closing.
   * @default "click"
   */
  closeTrigger?: keyof GlobalEventHandlersEventMap;

  /**
   * Allow closing by pressing escape.
   * @default true
   */
  closeWithEscape?: boolean;

  /**
   * Automatically close when the page is scrolled.
   * @default false
   */
  closeOnScroll?: boolean;

  /**
   * Disable close button
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * A node to append the lightbox element to.
   * @default document.body
   */
  appendToNode?: Element | null;

  /**
   * A selector defining what to append the lightbox element to.
   * This will take precedence over `appendToNode`.
   */
  appendToSelector?: string;

  /**
   * If present (and a function), this will be called whenever the lightbox is opened.
   */
  onOpen?: () => void;

  /**
   * If present (and a function), this will be called whenever the lightbox is closed.
   */
  onClose?: () => void;

  /**
   * When true, adds the `imgix-fluid` class to the `img` inside the lightbox. See https://github.com/imgix/imgix.js for more information.
   * @default false
   */
  includeImgixJsClass?: boolean;

  /**
   * Add base styles to the page. See the "Theming" section of README.md for more information.
   * @default true
   */
  injectBaseStyles?: boolean;
}

interface LuminousGalleryOptions {
  /**
   * Whether pressing the arrow keys should move to the next/previous slide.
   * @default true
   */
  arrowNavigation?: boolean;

  /**
   * A callback triggered when the image changes that is passed the image HTML element.
   */
  onChange?: (args: { imgEl: HTMLImageElement }) => void;
}

declare class Luminous {
  constructor(trigger: Element | null, options?: LuminousOptions);
}

declare class LuminousGallery {
  constructor(
    triggers: Array<Element> | NodeList,
    options?: LuminousGalleryOptions,
    luminousOpts?: LuminousOptions
  );
}

export { Luminous, LuminousGallery };

