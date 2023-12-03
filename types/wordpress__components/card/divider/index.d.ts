import { HorizontalRule } from "../../primitives";

import { JSX } from "react";

declare namespace CardDivider {
    type Props<T extends keyof JSX.IntrinsicElements> = {
        /**
         * `className` of the container.
         */
        className?: string | undefined;

        children?: never | undefined;

        /**
         * Render as a different element type
         */
        as?: T | undefined;
    } & JSX.IntrinsicElements[T];
}

/* eslint-disable @definitelytyped/no-unnecessary-generics */
declare function CardDivider<T extends keyof JSX.IntrinsicElements = typeof HorizontalRule>(
    props: CardDivider.Props<T>,
): JSX.Element;
/* eslint-enable @definitelytyped/no-unnecessary-generics */

export default CardDivider;
