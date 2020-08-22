declare namespace CardMedia {
    type Props<T extends keyof JSX.IntrinsicElements> = {
        /**
         * `className` of the container.
         */
        className?: string;

        /**
         * Render as a different element type
         */
        as?: T;
    } & JSX.IntrinsicElements[T];
}

// tslint:disable-next-line no-unnecessary-generics
declare function CardMedia<T extends keyof JSX.IntrinsicElements = 'div'>(props: CardMedia.Props<T>): JSX.Element;

export default CardMedia;
