// Type definitions for justifiedGallery 3.8
// Project: https://github.com/miromannino/Justified-Gallery
// Definitions by: Matt Smith <https://github.com/mattsmithcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

declare namespace JustifiedGallery {
    interface Settings {
        sizeRangeSuffixes?: { [size: number]: string };
        thumbnailPath?: ((imageSrc: string, imgWidth: number, imgHeight: number, image: JQuery) => string) | undefined;
        rowHeight?: number;
        maxRowHeight?: false | number | string;
        maxRowsCount?: number;
        margins?: number;
        border?: number;
        lastRow?: 'justify' | 'nojustify' | 'left' | 'right' | 'center' | 'hide';
        justifyThreshold?: number;
        waitThumbnailsLoad?: boolean;
        captions?: boolean;
        cssAnimation?: boolean;
        imagesAnimationDuration?: number;
        captionSettings?: CaptionSettings;
        rel?: string | null;
        target?: string | null;
        extension?: RegExp;
        refreshTime?: number;
        refreshSensitivity?: number;
        randomize?: boolean;
        rtl?: boolean;
        sort?: false | ((a: any, b: any) => number);
        filter?: false | string | ((value: HTMLElement, index: number, array: HTMLElement[]) => boolean);
        selector?: string;
        imgSelector?: string;
        triggerEvent?: ((event: string | JQuery.Event) => void);
    }

    interface CaptionSettings {
        animationDuration?: number;
        visibleOpacity?: number;
        nonVisibleOpacity?: number;
    }
}

// tslint:disable-next-line:no-single-declare-module
declare module "justifiedGallery" {
    export = JustifiedGallery;
}

interface JQuery {
    justifiedGallery(settings?: JustifiedGallery.Settings): JQuery;
}
