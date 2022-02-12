import * as React from 'react';

declare class Card extends React.Component<Card.CardProps> {}

export default Card;

declare namespace Card {
    type Position = 'top' | 'right' | 'bottom' | 'left';
    type Arrow = null | 'center' | 'top' | 'right' | 'bottom' | 'left';
    type Align = null | 'center' | 'right' | 'left';

    interface CardProps {
        children?: React.ReactNode;
        position?: Position | undefined;
        arrow?: Arrow | undefined;
        align?: Align | undefined;
        useHover?: boolean | undefined;
        style?: {
            style?: React.CSSProperties | undefined;
            arrowStyle?: React.CSSProperties | undefined;
        } | undefined;
    }
}
