declare namespace OO.ui {
    /**
     * PopupWidget is a container for content. The popup is overlaid and positioned absolutely.
     * By default, each popup has an anchor that points toward its origin.
     * Please see the [OOUI documentation on MediaWiki.org](https://www.mediawiki.org/wiki/OOUI/Widgets/Popups)
     * for more information and examples.
     *
     * Unlike most widgets, PopupWidget is initially hidden and must be shown by calling {@link toggle}.
     *
     *     // A PopupWidget.
     *     var popup = new OO.ui.PopupWidget( {
     *         $content: $( '<p>Hi there!</p>' ),
     *         padded: true,
     *         width: 300
     *     } );
     *
     *     $( document.body ).append( popup.$element );
     *     // To display the popup, toggle the visibility to 'true'.
     *     popup.toggle( true );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.PopupWidget
     */
    interface PopupWidget extends PopupWidget.Props, PopupWidget.Prototype {}

    namespace PopupWidget {
        type Position = "above" | "below" | "before" | "after";

        type Alignment = "forwards" | "backwards" | "center" | "force-left" | "force-right";

        interface EventMap extends Widget.EventMap, mixin.LabelElement.EventMap {
            ready: [];
            closing: [];
        }

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.ClippableElement.ConfigOptions,
                mixin.FloatableElement.ConfigOptions
        {
            /** Width of popup in pixels. Pass `null` to use automatic width. */
            width?: number | null;

            /** Height of popup in pixels. Pass `null` to use automatic height. */
            height?: number | null;

            /** Show anchor pointing to origin of popup */
            anchor?: boolean;

            /**
             * Where to position the popup relative to $floatableContainer
             * - 'above': Put popup above $floatableContainer; anchor points down to the horizontal
             *    center of $floatableContainer
             * - 'below': Put popup below $floatableContainer; anchor points up to the horizontal
             *    center of $floatableContainer
             * - 'before': Put popup to the left (LTR) / right (RTL) of $floatableContainer; anchor
             *    points endwards (right/left) to the vertical center of $floatableContainer
             * - 'after': Put popup to the right (LTR) / left (RTL) of $floatableContainer; anchor
             *    points startwards (left/right) to the vertical center of $floatableContainer
             */
            position?: Position;

            /**
             * How to align the popup to $floatableContainer
             * - 'forwards': If position is above/below, move the popup as far endwards (right in
             *    LTR, left in RTL) as possible while still keeping the anchor within the popup;
             *    if position is before/after, move the popup as far downwards as possible.
             * - 'backwards': If position is above/below, move the popup as far startwards (left in
             *    LTR, right in RTL) as possible while still keeping the anchor within the popup;
             *    if position is before/after, move the popup as far upwards as possible.
             * - 'center': Horizontally (if position is above/below) or vertically (before/after)
             *    align the center of the popup with the center of $floatableContainer.
             * - 'force-left': Alias for 'forwards' in LTR and 'backwards' in RTL
             * - 'force-right': Alias for 'backwards' in RTL and 'forwards' in LTR
             */
            align?: Alignment;

            /**
             * Whether to automatically switch the popup's position between 'above' and 'below',
             * or between 'before' and 'after', if there is not enough space in the desired
             * direction to display the popup without clipping
             */
            autoFlip?: boolean;

            /**
             * Constrain the popup to the boundaries of the specified container.
             * See the [OOUI docs on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Popups#containerExample)
             * for an example.
             */
            $container?: JQuery;

            /** Padding between the popup and its container, specified as a number of pixels. */
            containerPadding?: number;

            /** Content to append to the popup's body */
            $content?: JQuery;

            /** Content to append to the popup's footer */
            $footer?: JQuery;

            /** Automatically close the popup when it loses focus. */
            autoClose?: boolean;

            /**
             * Elements that will not close the popup when clicked.
             * This config option is only relevant if {@link autoClose} is set to `true`. See the
             * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Popups#autocloseExample)
             * for an example.
             */
            $autoCloseIgnore?: JQuery;

            /** Show a popup header that contains a {@link label} (if specified) and close button. */
            head?: boolean;

            hideCloseButton?: boolean;

            /** Add padding to the popup's body */
            padded?: boolean;
        }

        interface Static extends Widget.Static, mixin.IconElement.Static, mixin.LabelElement.Static {}

        interface Props
            extends
                Widget.Props,
                mixin.IconElement.Props,
                mixin.LabelElement.Props,
                mixin.ClippableElement.Props,
                mixin.FloatableElement.Props
        {
            $body: JQuery;
            $popup: JQuery;
            $anchor: JQuery;
            $container: JQuery;
        }

        interface Prototype
            extends
                Widget.Prototype,
                mixin.IconElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.ClippableElement.Prototype,
                mixin.FloatableElement.Prototype
        {
            /**
             * Show, hide, or toggle the visibility of the anchor.
             *
             * @param show Show anchor, omit to toggle
             */
            toggleAnchor(show?: boolean): void;

            /**
             * Change which edge the anchor appears on.
             *
             * @param edge 'top', 'bottom', 'start' or 'end'
             */
            setAnchorEdge(edge: "top" | "bottom" | "start" | "end"): void;

            /**
             * Check if the anchor is visible.
             *
             * @return Anchor is visible
             */
            hasAnchor(): boolean;

            /**
             * Toggle visibility of the popup. The popup is initially hidden and must be shown by
             * calling `.toggle( true )` after its {@link Element.Props.$element $element} is
             * attached to the DOM.
             *
             * Do not show the popup while it is not attached to the DOM. The calculations required
             * to display it in the right place and with the right dimensions only work correctly
             * while it is attached. Side-effects may include broken interface and exceptions being
             * thrown. This wasn't always strictly enforced, so currently it only generates a
             * warning in the browser console.
             */
            toggle(show?: boolean): this;

            /**
             * Set the size of the popup.
             *
             * Changing the size may also change the popup's position depending on the alignment.
             *
             * @param width Width in pixels. Pass `null` to use automatic width.
             * @param height Height in pixels. Pass `null` to use automatic height.
             * @param transition Use a smooth transition
             */
            setSize(width?: number | null, height?: number | null, transition?: boolean): void;

            /**
             * Update the size and position.
             *
             * Only use this to keep the popup properly anchored. Use {@link setSize} to change the
             * size, and this will be called automatically.
             *
             * @param transition Use a smooth transition
             */
            updateDimensions(transition?: boolean): void;

            /**
             * Set popup alignment
             *
             * @param align Alignment of the popup, `center`, `force-left`, `force-right`,
             *  `backwards` or `forwards`.
             */
            setAlignment(align?: Alignment): void;

            /**
             * Get popup alignment
             *
             * @return Alignment of the popup, `center`, `force-left`, `force-right`, `backwards` or
             *  `forwards`.
             */
            getAlignment(): Alignment;

            /**
             * Change the positioning of the popup.
             *
             * @param position 'above', 'below', 'before' or 'after'
             */
            setPosition(position: Position): void;

            /**
             * Get popup positioning.
             *
             * @return 'above', 'below', 'before' or 'after'
             */
            getPosition(): Position;

            /**
             * Set popup auto-flipping.
             *
             * @param autoFlip Whether to automatically switch the popup's position between
             *  'above' and 'below', or between 'before' and 'after', if there is not enough space in the
             *  desired direction to display the popup without clipping
             */
            setAutoFlip(autoFlip: boolean): void;

            /**
             * Set which elements will not close the popup when clicked.
             *
             * For auto-closing popups, clicks on these elements will not cause the popup to auto-close.
             *
             * @param $autoCloseIgnore Elements to ignore for auto-closing
             */
            setAutoCloseIgnore($autoCloseIgnore: JQuery): void;

            /**
             * Get an ID of the body element, this can be used as the
             * `aria-describedby` attribute for an input field.
             *
             * @return The ID of the body element
             */
            getBodyId(): string;

            // #region EventEmitter overloads
            on<K extends keyof EventMap, A extends ArgTuple = [], C = null>(
                event: K,
                method: EventHandler<C, (this: C, ...args: [...A, ...EventMap[K]]) => void>,
                args?: A,
                context?: C,
            ): this;
            on<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method: EventHandler<C>,
                args?: any[],
                context?: C,
            ): this;

            once<K extends keyof EventMap>(event: K, listener: (this: null, ...args: EventMap[K]) => void): this;
            once<K extends string>(
                event: K extends keyof EventMap ? never : K,
                listener: (this: null, ...args: any[]) => void,
            ): this;

            off<K extends keyof EventMap, C = null>(
                event: K,
                method?: EventHandler<C, (this: C, ...args: EventMap[K]) => void>,
                context?: C,
            ): this;
            off<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method?: EventHandler<C>,
                context?: C,
            ): this;

            emit<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emit<K extends string>(event: K extends keyof EventMap ? never : K, ...args: any[]): boolean;

            emitThrow<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emitThrow<K extends string>(event: K extends keyof EventMap ? never : K, ...args: any[]): boolean;

            connect<T extends Partial<Record<keyof EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
                context: C,
                methods: EventConnectionMap<T, C, EventMap>,
            ): this;

            disconnect<T extends Partial<Record<keyof EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
                context: C,
                methods?: EventConnectionMap<T, C, EventMap>,
            ): this;
            // #endregion
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): PopupWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const PopupWidget: PopupWidget.Constructor;
}
