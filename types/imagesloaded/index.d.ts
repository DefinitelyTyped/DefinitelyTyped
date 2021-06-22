// Type definitions for imagesLoaded 4.1.1
// Project: https://github.com/desandro/imagesloaded
// Definitions by: Chris Charabaruk <https://github.com/coldacid>, Cameron Little <https://github.com/apexskier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace ImagesLoaded {
  type ElementSelector = Element | NodeList | Array<Element> | string;

  /** interface for an image currently loading or completed */
  interface LoadingImage {
    img: HTMLImageElement;
    isLoaded: boolean;
  }

  interface ImagesLoadedCallback {
    (instance?: ImagesLoaded): void;
  }

  interface ImagesLoadedListener {
    (instance: ImagesLoaded, image?: LoadingImage): void;
  }

  interface ImagesLoaded {
    new (elem: ElementSelector, callback: ImagesLoadedCallback): ImagesLoaded;

    images: Array<LoadingImage>;

    // event listeners
    on(event: string, listener: ImagesLoadedListener): void;
    off(event: string, listener: ImagesLoadedListener): void;
    once(event: string, listener: ImagesLoadedListener): void;
  }

  interface ImagesLoadedOptions {
    background: true | string;
  }

  interface ImagesLoadedConstructor {
    /**
     * Creates a new ImagesLoaded object with the provided callback
     * @param elem Element, NodeList, Element array, or selector string for images to watch
     * @param options object that can tell imagesloaded to watch background images as well
     * @param callback function triggered after all images have been loaded
     */
    (elem: ElementSelector, options: ImagesLoadedOptions, callback?: ImagesLoadedCallback): ImagesLoaded;
    (elem: ElementSelector, callback?: ImagesLoadedCallback): ImagesLoaded;
  }
}

declare var imagesLoaded: ImagesLoaded.ImagesLoadedConstructor;

declare module 'imagesloaded' {
  export = imagesLoaded;
}

interface JQuery {
  imagesLoaded(callback?: ImagesLoaded.ImagesLoadedCallback): JQueryDeferred<ImagesLoaded.ImagesLoaded>;
  imagesLoaded(options: ImagesLoaded.ImagesLoadedOptions, callback?: ImagesLoaded.ImagesLoadedCallback): JQueryDeferred<ImagesLoaded.ImagesLoaded>;
}
