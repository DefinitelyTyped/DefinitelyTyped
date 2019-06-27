import { ComponentType, HTMLProps, ReactNode } from '@wordpress/element';

declare namespace Popover {
    interface Props extends HTMLProps<HTMLDivElement> {
        /**
         * A custom `DOMRect` object at which to position the popover.
         */
        anchorRect?: DOMRect | ClientRect;
        /**
         * Should the popover have an animation?
         * @defaultValue true
         */
        animate?: boolean;
        /**
         * The content to be displayed within the popover.
         */
        children: ReactNode;
        /**
         * An optional additional class name to apply to the rendered popover.
         */
        className?: string;
        /**
         * Opt-in prop to show popovers fullscreen on mobile.
         */
        expandOnMobile?: boolean;
        /**
         * By default, the first tabblable element in the popover will receive
         * focus when it mounts. This is the same as setting focusOnMount to
         * `"firstElement"`. If you want to focus the container instead, you can
         * set focusOnMount to `"container"`.
         *
         * Set this prop to `false` to disable focus changing entirely. This
         * should only be set when an appropriately accessible substitute
         * behavior exists.
         *
         * @defaultValue "firstElement"
         */
        focusOnMount?: 'firstElement' | 'container' | false;
        /**
         * Set this to customize the text that is shown in popover's header
         * when it is fullscreen on mobile.
         */
        headerTitle?: string;
        /**
         * Set this to hide the arrow which visually indicates what the popover
         * is anchored to. Note that the arrow will not display if `position` is
         * set to `"middle center"`.
         */
        noArrow?: boolean;
        /**
         * The direction in which the popover should open relative to its
         * parent node. Specify y- and x-axis as a space-separated string.
         * @defaultValue "top center"
         */
        position?: Position;
        /**
         * Function that should return a `DOMRect` of where to position the
         * popover.
         */
        getAnchorRect?(currentAnchorElement: HTMLSpanElement | null): DOMRect | ClientRect | undefined;
        /**
         * A callback invoked when the popover should be closed.
         */
        onClose?(): void;
        /**
         * A callback invoked when the user clicks outside the opened popover,
         * passing the click event. The popover should be closed in response to
         * this interaction.
         * @defaultValue Props.onClose
         */
        onClickOutside?(): void;
    }
    /**
     * The direction in which the popover should open relative to its parent
     * node. Specify y- and x-axis as a space-separated string.
     */
    type Position =
        | 'top left'
        | 'top right'
        | 'top center'
        | 'middle left'
        | 'middle right'
        | 'middle center'
        | 'bottom left'
        | 'bottom right'
        | 'bottom center';
}
declare const Popover: ComponentType<Popover.Props>;

export default Popover;
