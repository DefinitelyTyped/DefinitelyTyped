/// <reference types="jquery" />

declare namespace JQueryNanoScroller {
    interface NanoScrollerOptions {
        /**
         * To scroll at the top or bottom.
         */
        scroll?: "top" | "bottom" | undefined;
        /**
         * To scroll at the top with an offset value.
         */
        scrollTop?: number | undefined;
        /**
         * To scroll at the bottom with an offset value.
         */
        scrollBottom?: number | undefined;
        /**
         * To scroll to an element.
         */
        scrollTo?: JQuery | undefined;
        /**
         * To stop the operation.
         * This option will tell the plugin to disable all event bindings and hide the gadget scrollbar from the UI.
         */
        stop?: boolean | undefined;
        /**
         * Destroys nanoScroller and restores browser's native scrollbar.
         */
        destroy?: boolean | undefined;
        /**
         * To flash the scrollbar gadget for an amount of time defined in plugin settings (defaults to 1,5s).
         * Useful if you want to show the user that there is more content waiting for them.
         */
        flash?: boolean | undefined;
        /**
         * Set to true if you want to use native scrolling in iOS 5+.
         * This will disable your custom nanoScroller scrollbar in iOS 5+ and use the native one instead.
         * While the native iOS scrollbar usually works much better, there could possibly be bugs in certain situations.
         * @default false
         */
        iOSNativeScrolling?: boolean | undefined;
        /**
         * Sets the minimum height of the slider element.
         * @default 20
         */
        sliderMinHeight?: number | undefined;
        /**
         * Sets the maximum height of the slider element.
         * @default null
         */
        sliderMaxHeight?: number | null | undefined;
        /**
         * Set to true to prevent page scrolling when top or bottom inside the content div is reached.
         * @default false
         */
        preventPageScrolling?: boolean | undefined;
        /**
         * Set to true to disable the resize from nanoscroller.
         * Useful if you want total control of the resize event.
         * If you set this option to true remember to call the reset method so that the scroll don't have strange behavior.
         * @default false
         */
        disableResize?: boolean | undefined;
        /**
         * Set to true to stop the scrollbar from auto-hiding itself.
         * @default false
         */
        alwaysVisible?: boolean | undefined;
        /**
         * Use this setting to specify the scrollbar hide delay in milliseconds if you have enabled the flash option.
         * @default 1500
         */
        flashDelay?: number | undefined;
        /**
         * A classname for scrollbar track element.
         * If you change this setting, you also have to change it in the plugin's CSS file.
         * @default 'nano-pane'
         */
        paneClass?: string | undefined;
        /**
         * A classname for scrollbar thumb element.
         * If you change this setting, you also have to change it in the plugin's CSS file.
         * @default 'nano-slider'
         */
        sliderClass?: string | undefined;
        /**
         * A classname for your content div.
         * If you change this setting, you also have to change it in the plugin's CSS file.
         * @default 'nano-content'
         */
        contentClass?: string | undefined;
        /**
         * A classname for scrollbar enabled mode.
         * If you change this setting, you also have to change it in the plugin's CSS file.
         * @default 'has-scrollbar'
         */
        enabledClass?: string | undefined;
        /**
         * A classname for scrollbar flashed mode.
         * If you change this setting, you also have to change it in the plugin's CSS file.
         * @default 'flashed'
         */
        flashedClass?: string | undefined;
        /**
         * If you change this setting, you also have to change it in the plugin's CSS file.
         * @default 'active'
         */
        activeClass?: string | undefined;
        /**
         * Set the tab order of the scrollable content.
         * Set to -1 to skip over the scrollable content when tabbing.
         * @default 0
         */
        tabIndex?: number | undefined;
    }
}

interface JQuery {
    nanoScroller(options?: JQueryNanoScroller.NanoScrollerOptions): JQuery;
}
