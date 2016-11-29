// Type definitions for jQuery.Colorbox 1.4.15
// Project: http://www.jacklmoore.com/colorbox/
// Definitions by: Gidon Junge <https://github.com/gjunge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/

/// <reference path="../jquery/jquery.d.ts" />

interface ColorboxResizeSettings {
    height?: number | string;
    innerHeight?: number | string;
    width?: number | string;
    innerWidth?: number | string;
}

interface ColorboxSettings {
    /**
    * The transition type. Can be set to "elastic", "fade", or "none".
    */
    transition?: string;
    /**
    * Sets the speed of the fade and elastic transitions, in milliseconds.
    */
    speed?: number;
    /**
    * This can be used as an alternative anchor URL or to associate a URL for non-anchor elements such as images or form buttons.
    */
    href?: any;
    /**
    * This can be used as an anchor title alternative for Colorbox.
    */
    title?: any;
    /**
    * This can be used as an anchor rel alternative for Colorbox.
    */
    rel?: any;
    /**
    * If true, and if maxWidth, maxHeight, innerWidth, innerHeight, width, or height have been defined, Colorbox will scale photos to fit within the those values.
    */
    scalePhotos?: boolean;
    /**
    * If false, Colorbox will hide scrollbars for overflowing content.
    */
    scrolling?: boolean;
    /**
    * The overlay opacity level. Range: 0 to 1.
    */
    opacity?: number;
    /**
    * If true, Colorbox will immediately open.
    */
    open?: boolean;
    /**
    * If true, focus will be returned when Colorbox exits to the element it was launched from.
    */
    returnFocus?: boolean;
    /**
    * If false, the loading graphic removal and onComplete event will be delayed until iframe's content has completely loaded.
    */
    fastIframe?: boolean;
    /**
    * Allows for preloading of 'Next' and 'Previous' content in a group, after the current content has finished loading. Set to false to disable.
    */
    preloading?: boolean;
    /**
    * If false, disables closing Colorbox by clicking on the background overlay.
    */
    overlayClose?: boolean;
    /**
    * If false, will disable closing colorbox on 'esc' key press.
    */
    escKey?: boolean;
    /**
    * If false, will disable the left and right arrow keys from navigating between the items in a group.
    */
    arrowKey?: boolean;
    /**
    * If false, will disable the ability to loop back to the beginning of the group when on the last element.
    */
    loop?: boolean;
    /**
    * For submitting GET or POST values through an ajax request. The data property will act exactly like jQuery's .load() data argument, as Colorbox uses .load() for ajax handling.
    */
    data?: any;
    /**
    * Adds a given class to colorbox and the overlay.
    */
    className?: any;
    /**
    * Sets the fadeOut speed, in milliseconds, when closing Colorbox.
    */
    fadeOut?: number;
    /**
    * Text or HTML for the group counter while viewing a group. {current} and {total} are detected and replaced with actual numbers while Colorbox runs.
    */
    current?: string;
    /**
    * Text or HTML for the previous button while viewing a group.
    */
    previous?: string;
    /**
    * Text or HTML for the next button while viewing a group.
    */
    next?: string;
    /**
    * Text or HTML for the close button. The 'esc' key will also close Colorbox.
    */
    close?: string;
    /**
    * Set to false to remove the close button.
    */
    closeButton?: boolean;
    /**
    * Error message given when ajax content for a given URL cannot be loaded.
    */
    xhrError?: string;
    /**
    * Error message given when a link to an image fails to load.
    */
    imgError?: string;
    /**
    * If true, specifies that content should be displayed in an iFrame.
    */
    iframe?: boolean;
    /**
    * If true, content from the current document can be displayed by passing the href property a jQuery selector, or jQuery object.
    */
    inline?: boolean;
    /**
    * For displaying a string of HTML or text: $.colorbox({html:"<p>Hello</p>"});
    */
    html?: any;
    /**
    * If true, this setting forces Colorbox to display a link as a photo. Use this when automatic photo detection fails (such as using a url like 'photo.php' instead of 'photo.jpg')
    */
    photo?: boolean;
    /**
    * This property isn't actually used as Colorbox assumes all hrefs should be treated as either ajax or photos, unless one of the other content types were specified.
    */
    ajax?: any;
    /**
    * Set a fixed total width. This includes borders and buttons. Example: "100%", "500px", or 500
    */
    width?: number | string;
    /**
    * Set a fixed total height. This includes borders and buttons. Example: "100%", "500px", or 500
    */
    height?: number | string;
    /**
    * This is an alternative to 'width' used to set a fixed inner width. This excludes borders and buttons. Example: "50%", "500px", or 500
    */
    innerWidth?: number | string;
    /**
    * This is an alternative to 'height' used to set a fixed inner height. This excludes borders and buttons. Example: "50%", "500px", or 500
    */
    innerHeight?: number | string;
    /**
    * Set the initial width, prior to any content being loaded.
    */
    initialWidth?: number | string;
    /**
    * Set the initial height, prior to any content being loaded.
    */
    initialHeight?: number | string;
    /**
    * Set a maximum width for loaded content. Example: "100%", 500, "500px"
    */
    maxWidth?: number | string;
    /**
    * Set a maximum height for loaded content. Example: "100%", 500, "500px"
    */
    maxHeight?: number | string;
    /**
    * If true, adds an automatic slideshow to a content group / gallery.
    */
    slideshow?: boolean;
    /**
    * Sets the speed of the slideshow, in milliseconds.
    */
    slideshowSpeed?: number;
    /**
    * If true, the slideshow will automatically start to play.
    */
    slideshowAuto?: boolean;
    /**
    * Text for the slideshow start button.
    */
    slideshowStart?: string;
    /**
    * Text for the slideshow stop button
    */
    slideshowStop?: string;
    /**
    * If true, Colorbox will be displayed in a fixed position within the visitor's viewport. This is unlike the default absolute positioning relative to the document.
    */
    fixed?: boolean;
    /**
    * Accepts a pixel or percent value (50, "50px", "10%"). Controls Colorbox's vertical positioning instead of using the default position of being centered in the viewport.
    */
    top?: any;
    /**
    * Accepts a pixel or percent value (50, "50px", "10%"). Controls Colorbox's vertical positioning instead of using the default position of being centered in the viewport.
    */
    bottom?: any;
    /**
    * Accepts a pixel or percent value (50, "50px", "10%"). Controls Colorbox's horizontal positioning instead of using the default position of being centered in the viewport.
    */
    left?: any;
    /**
    * Accepts a pixel or percent value (50, "50px", "10%"). Controls Colorbox's horizontal positioning instead of using the default position of being centered in the viewport.
    */
    right?: any;
    /**
    * Repositions Colorbox if the window's resize event is fired.
    */
    reposition?: boolean;
    /**
    * If true, Colorbox will scale down the current photo to match the screen's pixel ratio
    */
    retinaImage?: boolean;
    /**
    * If true and the device has a high resolution display, Colorbox will replace the current photo's file extention with the retinaSuffix+extension
    */
    retinaUrl?: boolean;
    /**
    * If retinaUrl is true and the device has a high resolution display, the href value will have it's extention extended with this suffix. For example, the default value would change `my-photo.jpg` to `my-photo@2x.jpg`
    */
    retinaSuffix?: string;
    /**
    * Callback that fires right before Colorbox begins to open.
    */
    onOpen?: any;
    /**
    * Callback that fires right before attempting to load the target content.
    */
    onLoad?: any;
    /**
    * Callback that fires right after loaded content is displayed.
    */
    onComplete?: any;
    /**
    * Callback that fires at the start of the close process.
    */
    onCleanup?: any;
    /**
    * Callback that fires once Colorbox is closed.
    */
    onClosed?: any;
}

interface ColorboxStatic {

    /**
    * This method allows you to call Colorbox without having to assign it to an element.
    */
    (settings: ColorboxSettings): any;
    /**
    * This method moves to the next item in a group and are the same as pressing the 'next' or 'previous' buttons.
    */
    next(): void;
    /**
    * This method moves to the previous item in a group and are the same as pressing the 'next' or 'previous' buttons.
    */
    prev(): void;
    /**
    * This method initiates the close sequence, which does not immediately complete. The lightbox will be completely closed only when the cbox_closed event / onClosed callback is fired.
    */
    close(): void;
    /**
    * This method is used to fetch the current HTML element that Colorbox is associated with.
    */
    element(): JQuery;
    /**
    * This allows Colorbox to be resized based on it's own auto-calculations, or to a specific size. This must be called manually after Colorbox's content has loaded.
    */
    resize(): void;
    /**
    * This allows Colorbox to be resized based on it's own auto-calculations, or to a specific size. This must be called manually after Colorbox's content has loaded.
    */
    resize(settings: ColorboxResizeSettings): void;
    /**
    * Removes all traces of Colorbox from the document.
    */
    remove(): void;
    /**
    * Default settings used for Colorbox calls
    */
    settings: ColorboxSettings;

}

interface Colorbox {
    (): JQuery;
    (settings: ColorboxSettings): JQuery;

}

interface JQueryStatic {
    colorbox: ColorboxStatic;
}

interface JQuery {
    colorbox: Colorbox;
}
