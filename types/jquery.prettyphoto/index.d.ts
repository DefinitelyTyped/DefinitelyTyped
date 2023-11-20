/// <reference types="jquery" />

declare namespace scaron_prettyPhoto {
    /**
     * Pretty photo settings
     */
    interface PrettyPhotoSettings {
        /**
         * the attribute tag to use for prettyPhoto hooks.  For HTML5, use "data-rel" or similar.
         * @default 'rel'
         */
        hook?: string | undefined;

        /**
         * fast/slow/normal
         * @default 'fast'
         */
        animation_speed?: string | undefined;

        ajaxcallback?: (() => void) | undefined;

        /**
         * false OR interval time in ms
         * @default 5000
         */
        slideshow?: any;

        /**
         * true/false
         * @default false
         */
        autoplay_slideshow?: boolean | undefined;

        /**
         * Value between 0 and 1
         * @default 0.80
         */
        opacity?: number | undefined;

        /**
         * true/false
         * @default true
         */
        show_title?: boolean | undefined;

        /**
         * Resize the photos bigger than viewport. true/false
         * @default true
         */
        allow_resize?: boolean | undefined;

        /**
         * Allow the user to expand a resized image. true/false
         * @default true
         */
        allow_expand?: boolean | undefined;

        /**
         * Pixels
         * @default 500
         */
        default_width?: number | undefined;

        /**
         * Pixels
         * @default 344
         */
        default_height?: number | undefined;

        /**
         * The separator for the gallery counter 1 "of" 2
         * @default '/'
         */
        counter_separator_label?: string | undefined;

        /**
         * light_rounded / dark_rounded / light_square / dark_square / facebook
         * @default 'pp_default'
         */
        theme?: string | undefined;

        /**
         * The padding on each side of the picture
         * @default 20
         */
        horizontal_padding?: number | undefined;

        /**
         * Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto
         * @default false
         */
        hideflash?: boolean | undefined;

        /**
         * Set the flash wmode attribute
         * @default 'opaque'
         */
        wmode?: string | undefined;

        /**
         * Automatically start videos: True/False
         * @default true
         */
        autoplay?: boolean | undefined;

        /**
         * If set to true, only the close button will close the window
         * @default false
         */
        modal?: boolean | undefined;

        /**
         * Allow prettyPhoto to update the url to enable deeplinking.
         * @default true
         */
        deeplinking?: boolean | undefined;

        /**
         * If set to true, a gallery will overlay the fullscreen image on mouse over
         * @default true
         */
        overlay_gallery?: boolean | undefined;

        /**
         * Maximum number of pictures in the overlay gallery
         * @default 30
         */
        overlay_gallery_max?: number | undefined;

        /**
         * Set to false if you open forms inside prettyPhoto
         * @default true
         */
        keyboard_shortcuts?: boolean | undefined;

        /**
         * Called everytime an item is shown/changed
         * @default function () { }
         */
        changepicturecallback?: (() => void) | undefined;

        /**
         * Called when prettyPhoto is closed
         * @default function () { }
         */
        callback?: (() => void) | undefined;

        /**
         * @default true
         */
        ie6_fallback?: boolean | undefined;

        /**
         * Markup for pretty photo
         * @default omitted for brevity
         */
        markup?: string | undefined;

        /**
         * Markup for pretty photo gallery
         * @default omitted for brevity
         */
        gallery_markup?: string | undefined;

        /**
         * Markup for image
         * @default '<img id="fullResImage" src="{path}" />'
         */
        image_markup?: string | undefined;

        /**
         * Markup for flash
         * @default '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>'
         */
        flash_markup?: string | undefined;

        /**
         * Markup for quicktime
         * @default '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>'
         */
        quicktime_markup?: string | undefined;

        /**
         * Markup for iframe
         * @default '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>'
         */
        iframe_markup?: string | undefined;

        /**
         * @default '<div class="pp_inline">{content}</div>'
         */
        inline_markup?: string | undefined;

        /**
         * @default ''
         */
        custom_markup?: string | undefined;

        /**
         * Markup for social tools, set to html or false to disable
         * @default '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
         */
        social_tools?: any;
    }

    interface moduleJQuery {
        /**
         * Initialises prettyPhoto
         */
        (): JQuery;

        /**
         * Initialises prettyPhoto specificying overrides for the defaults
         * @param pp_settings custom prettyPhoto settings
         */
        (pp_settings: PrettyPhotoSettings): JQuery;
    }

    interface moduleJQueryStatic {
        /**
         * prettyPhoto version number
         */
        version: string;

        /**
         * Opens the prettyPhoto modal box.
         * Note: Always returns false.
         */
        open(): boolean;

        /**
         * Opens the prettyPhoto modal box.
         * Note: Always returns false.
         * @param image {String} Full path to the image to be open, can also be an array containing full images paths.
         * @param title {String} The title to be displayed with the picture, can also be an array containing all the titles.
         * @param description {String} The description to be displayed with the picture, can also be an array containing all the descriptions.
         */
        open(image: string, title: string, description: string): boolean;

        /**
         * Opens the prettyPhoto modal box.
         * Note: Always returns false.
         * @param image {Array} Full path to the image to be open, can also be an array containing full images paths.
         * @param title {Array} The title to be displayed with the picture, can also be an array containing all the titles.
         * @param description {Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
         */
        open(images: string[], titles: string[], descriptions: string[]): boolean;

        /**
         * Change page in the prettyPhoto modal box
         * @param direction {String} Direction of the paging, previous or next.
         */
        changePage(direction: string): void;

        /**
         * Change gallery page in the prettyPhoto modal box
         * @param direction {String} Direction of the paging, previous or next.
         */
        changeGalleryPage(direction: string): void;

        /**
         * Start the slideshow...
         */
        startSlideshow(): void;

        /**
         * Stop the slideshow...
         */
        stopSlideshow(): void;

        /**
         * Closes prettyPhoto.
         */
        close(): void;
    }
}

interface JQuery {
    prettyPhoto: scaron_prettyPhoto.moduleJQuery;
}

interface JQueryStatic {
    prettyPhoto: scaron_prettyPhoto.moduleJQueryStatic;
}
