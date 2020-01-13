import { ComponentType, HTMLProps, ElementType } from '@wordpress/element';

type Assign<T, U> = {
    [P in keyof (T & U)]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never;
};

declare namespace Card {
    type CardSize = 'large' | 'medium' | 'small' | 'extraSmall';
    interface BaseProps {
        /**
         * `className` of the container.
         */
        className?: string;

        /**
         * Renders a borderless card.
         */
        isBorderless?: boolean;

        /**
         * Renders an elevated card.
         */
        isElevated?: boolean;

        /**
         * Determines the amount of padding within the card.
         *
         * @defaultValue "medium"
         */
        size?: CardSize;

        as?: ElementType;
    }
    interface DivProps extends Assign<BaseProps, HTMLProps<HTMLDivElement>> {}
}

declare const Card: ComponentType<Card.DivProps>;

export default Card;
