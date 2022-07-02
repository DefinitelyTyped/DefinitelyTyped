declare namespace Card {
    type CardSize = 'large' | 'medium' | 'small' | 'extraSmall';
    type Props<T extends keyof JSX.IntrinsicElements> = {
        /**
         * `className` of the container.
         */
        className?: string | undefined;

        /**
         * Renders an elevated card.
         *
         * @deprecated Use `elevation={2}` instead.
         */
        isElevated?: boolean | undefined;

        /**
         * Size of the elevation shadow, based on the Style system’s elevation
         * system. This may be helpful in highlighting certain content. For more
         * information, check out [Elevation]{@link https://developer.wordpress.org/block-editor/designers-developers/developers/components/elevation/}.
         *
         * @defaultValue 0
         */
        elevation?: number | undefined;

        /**
         * Renders without a border.
         *
         * @defaultValue false
         */
        isBorderless?: boolean | undefined;

        /**
         * Renders with rounded corners.
         *
         * @defaultValue false
         */
        isRounded?: boolean | undefined;

        /**
         * Determines the amount of padding within the card.
         *
         * @defaultValue "medium"
         */
        size?: CardSize | undefined;

        /**
         * Render as a different element type
         */
        as?: T | undefined;
    } & JSX.IntrinsicElements[T];
}

// tslint:disable-next-line no-unnecessary-generics
declare function Card<T extends keyof JSX.IntrinsicElements = 'div'>(props: Card.Props<T>): JSX.Element;

export default Card;
