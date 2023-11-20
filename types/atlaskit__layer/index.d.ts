import { Component, ReactNode } from "react";

export default class Layer extends Component<Props> {}

export interface Props {
    /**
     * Sets whether the content auto flip when it reaches the border set it as true for default flip
     * or set the custom flip positions
     */
    autoFlip?: boolean | FlipPositionType | FlipPositionType[] | undefined;
    /**
     * Element to act as a boundary for the Layer. The Layer will not sit outside this element if it
     * can help it. If, through it's normal positoning, it would end up outside the boundary the
     * layer will flip positions if the autoPosition prop is set.
     */
    boundariesElement?: BoundariesElementType | undefined;
    /** Target to which layer is attached */
    children?: ReactNode | undefined;
    /** HTML content to display in the layer. Will be aligned to the target according to the position prop. */
    content?: ReactNode | undefined;
    /**
     * String representing the offsets from the target element in the format "[x-offset][y-offset]",
     * measured in pixels.
     */
    offset?: string | undefined;
    /**
     * Callback that is used to know when the flipped state of Layer changes. This occurs when placing a
     * Layered element in the requested position would cause Layer to be rendered outside of the
     * boundariesElement (usually viewport).
     */
    onFlippedChange?:
        | ((
            flipped: boolean,
            actualPosition: CSSPositionType,
            originalPosition: CSSPositionType,
        ) => void)
        | undefined;
    /**
     * Position of a layer relative to its target. The position attribute takes two positional arguments in
     * the format position="edge edge-position", where edge specifies what edge to align the layer to, and
     * edge-position specifies where on that edge the layer should appear.
     */
    position?: PositionType | undefined;
    /** z-index for the layer component */
    zIndex?: number | undefined;
    /** Lock scrolling behind the layer */
    lockScroll?: boolean | undefined;
}

export type FlipPositionType = "top" | "right" | "bottom" | "left";

export type PositionType =
    | "top left"
    | "top center"
    | "top right"
    | "right top"
    | "right middle"
    | "right bottom"
    | "bottom left"
    | "bottom center"
    | "bottom right"
    | "left top"
    | "left middle"
    | "left bottom";

export type BoundariesElementType = "viewport" | "window" | "scrollParent";

export type CSSPositionType = "absolute" | "fixed";
