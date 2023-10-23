import * as React from "react";

export default Sticky;

declare class Sticky extends React.Component<Sticky.Props> {}

declare namespace Sticky {
    interface Props<HolderProps extends object = {}> extends React.HTMLAttributes<HTMLElement> {
        /**
         * 'top' or 'bottom' - to which side element should stick.
         *
         * Defaults to 'top'.
         */
        mode?: "top" | "bottom" | undefined;

        /**
         * Allows you to disable sticking by setting this prop to `true`.
         *
         * Defaults to `false`.
         */
        disabled?: boolean | undefined;

        /**
         * This handler will be called right before changing `fixed` state.
         *
         * Defaults to `null`.
         */
        onFixedToggle?: ((fixed: boolean) => void) | undefined;

        /**
         * Anything that can be used by `React.createElement`. Used for `wrapper
         * element`. If you want to use some custom component, please be sure that
         * you don't lose `style` and `className` props.
         *
         * Defaults to 'div'.
         */
        wrapperCmp?: keyof React.ReactHTML | React.ReactElement | undefined;

        /**
         * Anything that can be used by React.createElement. Used for holder
         * element. If you want to use some custom component, please be sure that
         * you don't lose style and className props.
         *
         * Defaults to 'div'.
         */
        holderCmp?: keyof React.ReactHTML | React.ReactElement<HolderProps> | undefined;

        /**
         * These props will be used to create `holderElement`.
         */
        holderProps?: HolderProps | undefined;

        /**
         * Selector to define a `boundaryElement`. It should be one of the parents
         * of the current element.
         *
         * Defaults to `null`.
         */
        boundaryElement?: string | undefined;

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
        scrollElement?: string | undefined;

        /**
         * If your DOM structure is mutating (you are adding/removing elements), it
         * will be usefull to provide `positionRecheckInterval` greater than zero,
         * in this case position check will be also performed using setInterval in
         * addition to scroll events.
         *
         * Defaults to `0`.
         */
        positionRecheckInterval?: number | undefined;

        /**
         * In the event that you wish to override the style rules applied, simply
         * pass in the style object as a prop.
         *
         * Note: You likely want to avoid messing with the following attributes in
         * your stickyStyle: `left`, `top`, and `width`.
         */
        stickyStyle?: React.CSSProperties | undefined;

        /**
         * You can also specify a class name to be applied when the element becomes
         * sticky.
         *
         * Defaults to 'sticky'.
         */
        stickyClassName?: string | undefined;

        /**
         * Sticky state will be triggered when the top of the element is `topOffset`
         * pixels from the top of the `scrollElement`. Positive numbers give the
         * impression of a lazy sticky state, whereas negative numbers are more
         * eager in their attachment.
         *
         * Defaults to `0`.
         */
        topOffset?: number | undefined;

        /**
         * Sticky state will be triggered when the bottom of the element is
         * `bottomOffset` pixels from the bottom of the `scrollElement`.
         *
         * Defaults to `0`.
         */
        bottomOffset?: number | undefined;

        /**
         * If `false` then boundaryEl should have position: relative. In this case
         * sticky element won't disappear on reaching it's boundaries.
         *
         * Defaults to `true`.
         */
        hideOnBoundaryHit?: boolean | undefined;
    }
}
