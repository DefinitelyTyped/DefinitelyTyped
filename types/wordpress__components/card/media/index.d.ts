import { StyledComponent } from '@emotion/styled';

declare namespace CardMedia {
    interface Props {
        /**
         * `className` of the container.
         */
        className?: string;
    }
}

declare const CardMedia: StyledComponent<JSX.IntrinsicElements['div'], CardMedia.Props, {}>;

export default CardMedia;
