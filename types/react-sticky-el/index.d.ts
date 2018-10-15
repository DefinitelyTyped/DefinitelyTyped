// Type definitions for react-sticky-el 1.0
// Project: https://github.com/gm0t/react-sticky-el
// Definitions by: Justin Braithwaite <https://github.com/jbraithwaite>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export default Sticky;

declare class Sticky extends React.Component<Sticky.Props> {}

declare namespace Sticky {
    interface Props<HolderProps extends object = {}>
        extends React.HTMLAttributes<HTMLElement> {
        /**
         * 'top' or 'bottom' - to which side element should stick.
         *
         * Defaults to 'top'.
         */
        mode?: "top" | "bottom";

        /**
         * Allows you to disable sticking by setting this prop to `true`.
         *
         * Defaults to `false`.
         */
        disabled?: boolean;

        /**
         * This handler will be called right before changing `fixed` state.
         *
         * Defaults to `null`.
         */
        onFixedToggle?: (fixed: boolean) => void;

        /**
         * Anything that can be used by `React.createElement`. Used for `wrapper
         * element`. If you want to use some custom component, please be sure that
         * you don't lose `style` and `className` props.
         *
         * Defaults to 'div'.
         */
        wrapperCmp?: keyof React.ReactHTML | React.ReactElement<any>;

        /**
         * Anything that can be used by React.createElement. Used for holder
         * element. If you want to use some custom component, please be sure that
         * you don't lose style and className props.
         *
         * Defaults to 'div'.
         */
        holderCmp?: keyof React.ReactHTML | React.ReactElement<HolderProps>;

        /**
         * These props will be used to create `holderElement`.
         */
        holderProps?: HolderProps;

        /**
         * Selector to define a `boundaryElement`. It should be one of the parents
         * of the current element.
         *
         * Defaults to `null`.
         */
        boundaryElement?: string;

        /**
         * Selector to define a `scrollElement`. All position checks will be
         * performed according to this element, also it will be listened for
         * 'scroll' event.
         *
         * It should be one of the parents of the current element. Possible
         * selectors: 'body', 'window', '#{id}', anything suitable for
         * `Element.matches`.
         *
         * Defaults to `window`.
         */
        scrollElement?: string;

        /**
         * If your DOM structure is mutating (you are adding/removing elements), it
         * will be usefull to provide `positionRecheckInterval` greater than zero,
         * in this case position check will be also performed using setInterval in
         * addition to scroll events.
         *
         * Defaults to `0`.
         */
        positionRecheckInterval?: number;

        /**
         * In the event that you wish to override the style rules applied, simply
         * pass in the style object as a prop.
         *
         * Note: You likely want to avoid messing with the following attributes in
         * your stickyStyle: `left`, `top`, and `width`.
         */
        stickyStyle?: React.CSSProperties;

        /**
         * You can also specify a class name to be applied when the element becomes
         * sticky.
         *
         * Defaults to 'sticky'.
         */
        stickyClassName?: string;

        /**
         * Sticky state will be triggered when the top of the element is `topOffset`
         * pixels from the top of the `scrollElement`. Positive numbers give the
         * impression of a lazy sticky state, whereas negative numbers are more
         * eager in their attachment.
         *
         * Defaults to `0`.
         */
        topOffset?: number;

        /**
         * Sticky state will be triggered when the bottom of the element is
         * `bottomOffset` pixels from the bottom of the `scrollElement`.
         *
         * Defaults to `0`.
         */
        bottomOffset?: number;

        /**
         * If `false` then boundaryEl should have position: relative. In this case
         * sticky element won't disappear on reaching it's boundaries.
         *
         * Defaults to `true`.
         */
        hideOnBoundaryHit?: boolean;
    }
}
