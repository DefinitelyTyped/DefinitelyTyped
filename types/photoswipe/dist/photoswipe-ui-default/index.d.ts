import * as PhotoSwipe from '../../index';

/**
 * Default UI class for PhotoSwipe. This class is largely undocumented and doesn't seem to have a public facing API.
 */
declare class PhotoSwipeUI_Default implements PhotoSwipe.UI<PhotoSwipeUI_Default.Options> {
    constructor(pswp: PhotoSwipe<PhotoSwipeUI_Default.Options>, framework: PhotoSwipe.UIFramework);
    init(): void;

    /**
     * Call this method to update the UI after the items array has been modified in the original PhotoSwipe element.
     */
    update(): void;
}

declare namespace PhotoSwipeUI_Default {
    /**
     * Options for the PhotoSwipe Default UI. Derived from http://photoswipe.com/documentation/options.html
     */
    export interface Options extends PhotoSwipe.Options {
        /**
         * Size of top & bottom bars in pixels. "bottom" parameter can be 'auto' (will calculate height of caption).
         * Option applies only when mouse is used, or when width of screen is more than 1200px.
         * Also look at `parseVerticalMargin` event.
         *
         * Default {top: 44, bottom: "auto"}.
         */
        barsSize?: { top: number; bottom: number | string };

        /**
         * Adds class pswp__ui--idle to pswp__ui element when mouse isn't moving for timeToIdle milliseconds.
         *
         * Default 4000.
         */
        timeToIdle?: number;

        /**
         * Adds class pswp__ui--idle to pswp__ui element when mouse leaves the window for timeToIdleOutside milliseconds.
         *
         * Default 1000.
         */
        timeToIdleOutside?: number;

        /**
         * Delay in milliseconds until loading indicator is displayed.
         *
         * Default 1000.
         */
        loadingIndicatorDelay?: number;

        /**
         * Function to build caption markup. The function takes three parameters:
         *
         * item      - slide object
         * captionEl - caption DOM element
         * isFake    - true when content is added to fake caption container
         *             (used to get size of next or previous caption)
         *
         * Return whether to show the caption or not.
         *
         * Default is:
         *
         * function(item, captionEl, isFake) {
         *     if(!item.title) {
         *         captionEl.children[0].innerHTML = '';
         *         return false;
         *     }
         *     captionEl.children[0].innerHTML = item.title;
         *     return true;
         * }
         *
         */
        addCaptionHTMLFn?: (item: Item, captionEl: HTMLElement, isFake: boolean) => boolean;

        /**
         * Whether to show the close button.
         *
         * Default true.
         */
        closeEl?: boolean;

        /**
         * Whether to show the caption.
         *
         * Default true.
         */
        captionEl?: boolean;

        /**
         * Whether to show the fullscreen button.
         *
         * Default true.
         */
        fullscreenEl?: boolean;

        /**
         * Whether to show the zoom button.
         *
         * Default true.
         */
        zoomEl?: boolean;

        /**
         * Whether to show the share button.
         *
         * Default true.
         */
        shareEl?: boolean;

        /**
         * Whether to show the current image's index in the gallery (located in top-left corner by default).
         *
         * Default true.
         */
        counterEl?: boolean;

        /**
         * Whether to show the left/right directional arrows.
         *
         * Default true.
         */
        arrowEl?: boolean;

        /**
         * Whether to show the preloader element.
         *
         * Default true.
         */
        preloaderEl?: boolean;

        /**
         * Tap on sliding area should close gallery.
         *
         * Default false.
         */
        tapToClose?: boolean;

        /**
         * Tap should toggle visibility of controls.
         *
         * Default true.
         */
        tapToToggleControls?: boolean;

        /**
         * Mouse click on image should close the gallery, only when image is smaller than size of the viewport.
         *
         * Default true.
         */
        clickToCloseNonZoomable?: boolean;

        /**
         * Element classes that should close PhotoSwipe when clicked on.
         * In HTML markup, class should always start with "pswp__", e.g.: "pswp__item", "pswp__caption".
         *
         * "pswp__ui--over-close" class will be added to root element of UI when mouse is over one of these elements
         * By default it's used to highlight the close button.
         *
         * Default ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'].
         */
        closeElClasses?: string[];

        /**
         * Separator for "1 of X" counter.
         *
         * Default ' / '.
         */
        indexIndicatorSep?: string;

        /**
         * The entries that show up when you click the Share button.
         *
         * Default is:
         *
         * [
         *     {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u='},
         *     {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text=&url='},
         *     {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url=&media=&description='},
         *     {id:'download', label:'Download image', url:'', download:true}
         * ]
         *
         */
        shareButtons?: ShareButtonData[];

        /**
         * A callback that should return the URL for the currently selected image. The callback is passed
         * the shareButtonData entry that was clicked on.
         *
         * Default is:
         *
         * function( shareButtonData ) {
         *     // `shareButtonData` - object from shareButtons array
         *     //
         *     // `pswp` is the gallery instance object,
         *     // you should define it by yourself
         *     //
         *     return pswp.currItem.src || '';
         * }
         *
         */
        getImageURLForShare?: (shareButtonData: ShareButtonData) => string;

        /**
         * A callback that should return the "Page" associated with the selected image. (e.g. on Facebook, the shared
         * content will be associated with the returned page). The callback is passed the shareButtonData entry that
         * was clicked on.
         *
         * Default is:
         *
         * function( shareButtonData ) {
         *     return window.location.href;
         * }
         *
         */
        getPageURLForShare?: (shareButtonData: ShareButtonData) => string;

        /**
         * A callback that should return the Text associated with the selected image. The callback is passed
         * the shareButtonData entry that was clicked on.
         *
         * Default is:
         *
         * function( shareButtonData ) {
         *     return pswp.currItem.title || '';
         * }
         *
         */
        getTextForShare?: (shareButtonData: ShareButtonData) => string;

        /**
         * A final output callback that you can use to further modify the share button's HTML. The callback is passed
         * (1) the shareButtonData entry being generated, and (2) the default HTML generated by PhotoSwipUI_Default.
         *
         * Default is:
         *
         * function(shareButtonData, shareButtonOut) {
         *     return shareButtonOut;
         * }
         *
         */
        parseShareButtonOut?: (shareButtonData: ShareButtonData, shareButtonOut: string) => string;
    }

    export interface ShareButtonData {
        /**
         * An id for this share button entry. The share element associated with this entry will be classed with
         * 'pswp__share--' + id
         */
        id: string;

        /**
         * The user-visible text to display for this entry.
         */
        label: string;

        /**
         * The full sharing endpoint URL for this social media site (e.g. Facebook's is facebook.com/sharer/sharer.php), with URL parameters.
         * PhotoSwipUI_Default treats the URL specially. In the url string, any of the following text is treated specially:
         * '{{url}}', '{{image_url}}, '{{raw_image_url}}, '{{text}}'. PhotoSwipeUI_Default will replace each of them with the following value:
         *
         * {{url}} becomes the (URIEncoded) url to the current "Page" (as returned by getPageURLForShare).
         * {{image_url}} becomes the (URIEncoded) url of the selected image (as returned by getImageURLForShare).
         * {{raw_image_url}} becomes the raw url of the selected image (as returned by getImageURLForShare).
         * {{text}} becomes the (URIEncoded) share text of the selected image (as returned by getTextForShare).
         */
        url: string;

        /**
         * Whether this link is a direct download button or not.
         *
         * Default false.
         */
        download?: boolean;
    }

    /**
     * Extra properties that the Default UI accepts.
     */
    export interface Item extends PhotoSwipe.Item {
        /**
         * The caption for this item.
         */
        title?: string;
    }
}

export = PhotoSwipeUI_Default;
export as namespace PhotoSwipeUI_Default;
