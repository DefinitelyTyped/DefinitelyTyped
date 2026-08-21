/// <reference types="jquery"/>

interface JQuery {
    overlay(opts?: JQueryTools.overlay.OverlayOptions): JQuery;
    overlay<T extends JQueryTools.overlay.Overlay>(opts?: JQueryTools.overlay.OverlayOptions): T;
    data(key: "overlay"): JQueryTools.overlay.Overlay;
}

interface JQueryStatic {
    tools: JQueryTools.ToolsStatic;
}

/** jQuery Tools (http://jquerytools.github.io/documentation/overlay/index.html) */
declare namespace JQueryTools {
    interface ToolsStatic {
        overlay: overlay.OverlayStatic;
    }

    namespace overlay {
        interface OverlayStatic {
            addEffect(
                effectName: string,
                effectFn: (this: Overlay, position: CssOptions, done: () => void) => void,
                closeFn: (this: Overlay, done: () => void) => void,
            ): void;
        }

        interface CssOptions {
            [key: string]: any;
        }

        interface OverlayOptions {
            /**
             * A jQuery selector for the closing elements inside the overlay. These
             * can be any elements such as links, buttons or images. If this is not
             * supplied, a close element is auto-generated. Read more about this in
             * defining close actions.
             */
            close?: JQuery | undefined;
            /**
             * By default, overlays are closed when the mouse is clicked outside the
             * overlay area. Setting this property to false suppresses this behaviour
             * which is suitable for modal dialogs.
             * @default true
             */
            closeOnClick?: boolean | undefined;
            /**
             * By default, overlays are closed when the ESC keyboard key is pressed.
             * Setting this property to false suppresses this behaviour.
             * @default true
             */
            closeOnEsc?: boolean | undefined;
            /** The speed to close the overlay, in milliseconds */
            closeSpeed?: number | undefined;
            /**
             * The effect to be used when an overlay is opened and closed. This can
             * dramatically change the behaviour of the overlay. By default this tool
             * uses an effect called "default" which is a simple show/hide effect.
             * @default 'default'
             */
            effect?: string | undefined;
            /**
             * since 1.2.0. whether overlay stays in the same position while the screen
             * is scrolled. This is the default behaviour for all browsers except IE6
             * and below. IE6 does not support fixed positioning. If this property is
             * set to false then the overlay is positioned in relationship to the document
             * so that when the screen is scrolled then the overlay moves along with the document.
             * @default true
             */
            fixed?: boolean | undefined;
            /**
             * Previously known as expose. Overlay is very often used together with the
             * Mask Tool. Because of this, the support for this feature has been built
             * inside the tool. This option accepts the mask configuration. This is either
             * a simple string specifying the background color of the mask or a more complex
             * object literal specifying more configuration variables. See an example of an
             * overlay together with mask. By default masking is disabled.
             */
            mask?: string | MaskOptions | undefined;
            /**
             * Specifies how far from the left-hand edge of the screen the overlay should be
             * placed. By default the overlay is horizontally centered with the value "center"
             * but you can also supply a numerical value specifying a distance in pixels.
             * @default 'center'
             */
            left?: "center" | number | undefined;
            /**
             * If enabled then the overlay loads immediately after it has been initialized.
             * @default false
             */
            load?: boolean | undefined;
            /**
             * By default, there can be only one overlay on the page at once. Setting this
             * property to false allows you to have multiple overlay instances.
             * @default true
             */
            oneInstance?: boolean | undefined;
            /**
             * The speed of the fade-in animation on the "default" effect. Valid values are
             * 'slow', 'normal' and 'fast', or you can supply a numerical value (in milliseconds).
             * By setting this property to 0, the overlay will appear immediately without any animation.
             * @default 'normal'
             */
            speed?: "slow" | "normal" | "fast" | number | undefined;
            /**
             * The element to be overlayed (if not specified in the rel attribute of the triggering element).
             */
            target?: Element | undefined;
            /**
             * Specifies how far from the top edge of the screen the overlay should be placed.
             * Acceptable values are an integer number specifying a distance in pixels, a string
             * (such as '15%') specifying a percentage value or "center" in which case the overlay
             * is vertically centered. Percentage values work consistently at different screen resolutions.
             * @default '10%'
             */
            top?: string | number | undefined;

            /**
             * before the overlay is displayed. The overlay has already been positioned at the
             * location from where it will start animating.
             */
            onBeforeLoad?(this: Overlay, event: JQueryEventObject): void;
            /** when the overlay has completely been displayed  */
            onLoad?(this: Overlay, event: JQueryEventObject): void;
            /** before the overlay is closed */
            onBeforeClose?(this: Overlay, event: JQueryEventObject): void;
            /** when the overlay is closed  */
            onClose?(this: Overlay, event: JQueryEventObject): void;
        }

        interface MaskOptions {
            /** CSS color string (i.e. hex value) */
            color?: string | undefined;
            /** load speed in milliseconds */
            loadSpeed?: number | undefined;
            /** Opacity of mask.  Between 0 and 1. */
            opacity?: number | undefined;
        }

        interface Overlay {
            /** Closes the overlay. */
            close(): Overlay;
            /** Returns the closing element(s) as a jQuery object. */
            getClosers(): JQuery;
            /** Returns the configuration for the overlay. */
            getConf(): OverlayOptions;
            /** Returns the overlayed element as a jQuery object. */
            getOverlay(): JQuery;
            /** Returns the triggering element as a jQuery object. */
            getTrigger(): JQuery;
            /** Returns `true` if the overlay is opened. */
            isOpened(): boolean;
            /** Opens the overlay. */
            load(): Overlay;
        }
    }
}
