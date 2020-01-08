import { StyledComponent } from '@emotion/styled';

declare namespace Card {
    type CardSize = 'large' | 'medium' | 'small' | 'extraSmall';
    interface Props {
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
         * @default "medium"
         */
        size?: CardSize;
    }
}

declare const Card: StyledComponent<JSX.IntrinsicElements['div'], Card.Props, {}>;

export default Card;
