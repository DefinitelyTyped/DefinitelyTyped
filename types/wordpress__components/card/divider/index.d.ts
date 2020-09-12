import { HorizontalRule } from '../../primitives';

declare namespace CardDivider {
    type Props<T extends keyof JSX.IntrinsicElements> = {
        /**
         * `className` of the container.
         */
        className?: string;

        children?: never;

        /**
         * Render as a different element type
         */
        as?: T;
    } & JSX.IntrinsicElements[T];
}

// tslint:disable:no-unnecessary-generics
declare function CardDivider<T extends keyof JSX.IntrinsicElements = typeof HorizontalRule>(
    props: CardDivider.Props<T>,
): JSX.Element;
// tslint:enable:no-unnecessary-generics

export default CardDivider;
