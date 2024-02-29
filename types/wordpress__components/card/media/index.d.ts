import { JSX } from "react";
declare namespace CardMedia {
    type Props<T extends keyof JSX.IntrinsicElements> = {
        /**
         * `className` of the container.
         */
        className?: string | undefined;

        /**
         * Render as a different element type
         */
        as?: T | undefined;
    } & JSX.IntrinsicElements[T];
}

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function CardMedia<T extends keyof JSX.IntrinsicElements = "div">(props: CardMedia.Props<T>): JSX.Element;

export default CardMedia;
