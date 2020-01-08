import Card from '..';
import { StyledComponent } from '@emotion/styled';

declare namespace CardHeader {
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
         * Add visual shading style.
         */
        isShady?: boolean;

        size?: Card.CardSize;
    }
}

declare const CardHeader: StyledComponent<JSX.IntrinsicElements['div'], CardHeader.Props, {}>;

export default CardHeader;
