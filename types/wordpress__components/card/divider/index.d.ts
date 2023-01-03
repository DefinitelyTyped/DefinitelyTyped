import { HorizontalRule } from '../../primitives';

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

/* eslint-disable no-unnecessary-generics */
declare function CardDivider<T extends keyof JSX.IntrinsicElements = typeof HorizontalRule>(
    props: CardDivider.Props<T>,
): JSX.Element;
/* eslint-enable no-unnecessary-generics */

export default CardDivider;
