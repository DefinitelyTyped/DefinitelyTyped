declare namespace Tippy {
    interface Tippy {
        id: number;
        popper: HTMLElement;
        popperInstance: object | null;
        props: Tippy.Props;
        reference: Element;
        state: {
            isEnabled: boolean;
            isVisible: boolean;
            isDestroyed: boolean;
            isMounted: boolean;
            isShown: boolean;
        };

        /**
         * Clears the instance's `delay` timeouts. There will likely be only very rare use cases for this.
         */
        clearDelayTimeouts(): void;

        /**
         * To permanently destroy and clean up the instance, use this method. The `_tippy` property is deleted from the reference element upon destruction.
         */
        destroy(): void;

        /**
         * Temporarily prevent a tippy from showing or hiding.
         */
        disable(): void;

        /**
         * Re-enable a tippy.
         */
        enable(): void;

        /**
         * Programmatically hide the tippy at any time.
         */
        hide(): void;

        /**
         * Will hide the tippy only if the cursor is outside of the tippy's interactive region. This allows you to programmatically hook into `interactive` behavior upon a `mouseleave` event if implementing custom event listeners.
         */
        hideWithInteractivity(event: MouseEvent): void;

        /**
         * Updating the `content` prop has its own method as a shortcut.
         */
        setContent(content: string | Element | (() => string | Element)): void;

        /**
         * You can update any prop after the instance has been created. Pass an object of new props in.
         */
        setProps(props: Props): void;

        /**
         * Programmatically show the tippy at any time.
         */
        show(): void;

        /**
         * Unmount the tippy from the DOM. This allows you to integrate spring animation libraries as an alternative to CSS. For instance, you'd call this in their `onComplete()` (or equivalent) callback.
         */
        unmount(): void;
    }

    interface Props {
        /**
         * The content of the tippy.
         */
        content?: string | Element | (() => string | Element);

        /**
         * Determines if content strings are parsed as HTML instead of text.
         *
         * Warning: Make sure you are sanitizing any user data if rendering HTML to prevent XSS attacks.
         */
        allowHTML?: boolean;

        /**
         * Determines if the background fill color of the tippy should be animated.
         */
        animateFill?: boolean;

        /**
         * The type of transition animation. See [Animations](https://atomiks.github.io/tippyjs/v6/animations/) for details.
         */
        animation?: string;

        /**
         * The element to append the tippy to. If `interactive: true`, the default behavior is `appendTo: "parent"`. See [Accessibility](https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity) for more information.
         *
         * Sometimes the tippy needs to be appended to a different DOM context due to accessibility, clipping, or z-index issues.
         */
        appendTo?: string | Element | (() => string | Element);

        /**
         * The aria attribute configuration. Both properties are optional:
         *
         * - `content`: The `aria-*` attribute applied to the reference element to announce the tippy content.
         * - `expanded`: Whether to add an `aria-expanded` attribute to the reference element.
         */
        aria?: {
            content?: string | null;
            expanded?: boolean | "auto";
        };

        /**
         * Determines if the tippy has an arrow.
         *
         * Warning: A string is parsed as `.innerHTML`. Don't pass unknown user data to this prop.
         */
        arrow?: boolean | string | Element;

        /**
         * Delay in ms once a trigger event is fired before a tippy shows or hides.
         */
        delay?: number | [number | null, number | null];

        /**
         * Duration in ms of the transition animation.
         */
        duration?: number | [number | null, number | null];

        /**
         * Determines if the tippy follows the user's mouse cursor.
         */
        followCursor?: boolean | "horizontal" | "vertical" | "initial";

        /**
         * Used as the positioning reference for the tippy.
         */
        getReferenceClientRect?:
            | null
            | (() => {
                width: number;
                height: number;
                left: number;
                right: number;
                top: number;
                bottom: number;
            });

        /**
         * Determines if the tippy hides upon clicking the reference or outside of the tippy. The behavior can depend upon the `trigger` events used.
         */
        hideOnClick?: boolean | "toggle";

        /**
         * When using UI (component) libraries like React, this is generally not necessary and slows down initialization perf a bit.
         */
        ignoreAttributes?: boolean;

        /**
         * Determines if a (customizable) CSS spring-like animation is applied to the transition animation.
         *
         * Changing the show duration to a higher value makes this look better.
         */
        interia?: boolean;

        /**
         * Provides enhanced support for `display: inline` elements. It will choose the most appropriate rect based on the placement.
         */
        inlinePositioning?: boolean;

        /**
         * Determines if the tippy has interactive content inside of it, so that it can be hovered over and clicked inside without hiding.
         *
         * Note: When `true`, the tippy will be appended to the `targets` parent element for accessibility reasons by default. This means it can inherit styling, such as `text-align: center`. If you are experiencing issues with positioning, add `appendTo: () => document.body` to your props.
         */
        interactive?: boolean;

        /**
         * Determines the size of the invisible border around the tippy that will prevent it from hiding if the cursor left it.
         */
        interactiveBorder?: number;

        /**
         * Determines the time in ms to debounce the interactive hide handler when the cursor leaves the tippy's interactive region.
         *
         * Offers a temporal (rather than spacial) alternative to `interactiveBorder`, although it can be used in conjunction with it.
         */
        interactiveDebounce?: number;

        /**
         * Specifies the maximum width of the tippy. Useful to prevent it from being too horizontally wide to read.
         *
         * Note: If the viewport's width is smaller than `maxWidth`, tippy's core CSS ensures the tippy remains smaller than the screen.
         */
        maxWidth?: number | "none";

        /**
         * Specifies the transition applied to the root positioned popper node. This describes the transition between "moves" (or position updates) of the popper element when it e.g. flips or changes target location.
         */
        moveTransition?: string;

        /**
         * Displaces the tippy from its reference element in pixels (skidding and distance).
         *
         * See [Popper's docs](https://popper.js.org/docs/v2/modifiers/offset/) for details.
         */
        offset?: [number, number];

        /**
         * Invoked after the tippy has been updated (via `.setProps()`).
         */
        onAfterUpdate?: (instance: Tippy.Tippy) => void;

        /**
         * Invoked before the tippy has been updated (via `.setProps()`).
         */
        onBeforeUpdate?: (instance: Tippy.Tippy) => void;

        /**
         * Invoked when the user clicks anywhere outside of the tippy or reference element.
         */
        onClickOutside?: (instance: Tippy, event: Event) => void;

        /**
         * Invoked once the tippy has been created.
         */
        onCreate?: (instance: Tippy.Tippy) => void;

        /**
         * Invoked once the tippy has been destroyed.
         */
        onDestroy?: (instance: Tippy.Tippy) => void;

        /**
         * Invoked once the tippy has been fully hidden and unmounted from the DOM.
         */
        onHidden?: (instance: Tippy.Tippy) => void;

        /**
         * Invoked once the tippy begins to hide.
         *
         * You can optionally `return false` from this lifecycle to cancel a hide based on a condition.
         */
        onHide?: ((instance: Tippy.Tippy) => void) | ((instance: Tippy.Tippy) => boolean);

        /**
         * Invoked once the tippy has been mounted to the DOM (and the popperInstance created).
         */
        onMount?: (instance: Tippy.Tippy) => void;

        /**
         * Invoked once the tippy begins to show.
         *
         * You can optionally `return false` from this lifecycle to cancel a show based on a condition.
         */
        onShow?: (instance: Tippy.Tippy) => void;

        /**
         * Invoked once the tippy has been fully transitioned in.
         *
         * Note: Since this is achieved via CSS `transitionend`, it relies on your own event listeners if using a custom render function. You'll need to call the lifecycle manually in this case.
         */
        onShown?: (instance: Tippy.Tippy) => void;

        /**
         * Invoked once the tippy has been triggered by a DOM event (e.g. `mouseenter`).
         */
        onTrigger?: (instance: Tippy, event: Event) => void;

        /**
         * Invoked once the tippy has been untriggered by a DOM event (e.g. `mouseleave`).
         */
        onUntrigger?: (instance: Tippy, event: Event) => void;

        /**
         * The *preferred* placement of the tippy. Note that Popper's `flip` modifier can change this to the opposite placement if it has more space.
         */
        placement?:
            | "top"
            | "top-start"
            | "top-end"
            | "right"
            | "right-start"
            | "right-end"
            | "bottom"
            | "bottom-start"
            | "bottom-end"
            | "left"
            | "left-start"
            | "left-end"
            | "auto"
            | "auto-start"
            | "auto-end";

        /**
         * Plugins to use. See [Plugins](https://atomiks.github.io/tippyjs/v6/plugins/) for details.
         *
         * Note: If using `tippy.setDefaultProps()`, specifying default plugins causes the default plugins to be merged with plugins specified in `tippy()` constructor calls.
         */
        plugins?: ReadonlyArray<Tippy.Plugin>;

        /**
         * Specifies custom Popper options. This gives you full control over the tippy's positioning. See [Popper's docs](https://popper.js.org/docs/v2/) for details.
         */
        popperOptions?: object;

        /**
         * Specifies a custom render function to use. This allows you to create your own tippy element DOM from scratch. Note that all `render` (R) related props are entirely controlled by you when specifying a custom function.
         *
         * See [Headless Tippy](https://atomiks.github.io/tippyjs/v6/headless-tippy/) for details.
         */
        render?: (instance: Tippy.Tippy) => void;

        /**
         * Specifies the `role` attribute on the tippy element.
         */
        role?: string;

        /**
         * Determines if the tippy is shown once it gets created, respecting `delay`.
         */
        showOnCreate?: boolean;

        /**
         * Determines if the tippy sticks to the reference element while it is mounted. This is usually not needed, but is useful if the reference element's position is animating, or to automatically update the tippy position without needing to manually do it in certain cases where the DOM layout changes.
         *
         * Note: This has a performance cost since checks are run on every animation frame. Use this only when necessary!
         */
        sticky?: boolean | "reference" | "popper";

        /**
         * Determines the theme of the tippy element. The core CSS defaults to a dark `#333` theme. This can be overridden by a custom theme. See [Themes](https://atomiks.github.io/tippyjs/v6/themes/) for details.
         */
        theme?: string;

        /**
         * Determines the behavior on touch devices.
         */
        touch?: boolean | "hold" | ["hold", number];

        /**
         * Determines the events that cause the tippy to show. Multiple event names are separated by spaces.
         */
        trigger?: "mouseenter focus" | "click" | "focusin" | "mouseenter click" | "manual";

        /**
         * The element(s) that the trigger event listeners are added to. Allows you to separate the tippy's positioning from its trigger source.
         */
        triggerTarget?: null | Element | ReadonlyArray<Element> | NodeList;

        /**
         * Specifies the `z-index` CSS on the root popper node.
         */
        zIndex?: number;
    }

    interface Plugin {
        name: string;
        defaultValue: boolean;
        fn(instance: Tippy.Tippy): {
            onCreate(): void;
            onMount(): void;
            onShow(): void;
            onHide(): void;
        };
    }

    interface TippyFunction {
        (element: string | Element | ReadonlyArray<Element> | NodeList, props: Tippy.Props): Tippy.Tippy;

        /**
         * Set the default props for each new instance.
         */
        setDefaultProps(defaultProps: Tippy.Props): void;

        /**
         * Hide all visible tippies on the document.
         */
        hideAll(args: {
            duration?: number;
            exclude?: Tippy.Tippy | string | Element | ReadonlyArray<Element> | NodeList;
        }): void;
    }
}

declare const tippy: Tippy.TippyFunction;
