import * as React from 'react';

declare class Card extends React.Component<Card.CardProps> {}

export default Card;

declare namespace Card {
    type Position = 'top' | 'right' | 'bottom' | 'left';
    type Arrow = null | 'center' | 'top' | 'right' | 'bottom' | 'left';
    type Align = null | 'center' | 'right' | 'left';

    interface CardProps {
        position?: Position;
        arrow?: Arrow;
        align?: Align;
        useHover?: boolean;
        style?: {
            style?: React.CSSProperties;
            arrowStyle?: React.CSSProperties;
        };
    }
}
