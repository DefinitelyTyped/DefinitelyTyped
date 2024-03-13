import Card from "..";

import { JSX } from "react";

declare namespace CardHeader {
    type Props<T extends keyof JSX.IntrinsicElements> = {
        /**
         * `className` of the container.
         */
        className?: string | undefined;

        /**
         * Renders a borderless card.
         */
        isBorderless?: boolean | undefined;

        /**
         * Add visual shading style.
         */
        isShady?: boolean | undefined;

        size?: Card.CardSize | undefined;

        /**
         * Render as a different element type
         */
        as?: T | undefined;
    } & JSX.IntrinsicElements[T];
}

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function CardHeader<T extends keyof JSX.IntrinsicElements = "div">(props: CardHeader.Props<T>): JSX.Element;

export default CardHeader;
