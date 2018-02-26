import { CSSModule } from '../index';

export interface Transition {
    onEnter?: () => void;
    onEntering?: () => void;
    onEntered?: () => void;
    onExit?: () => void;
    onExiting?: () => void;
    onExited?: () => void;
}

export interface CarouselItemProps extends React.HTMLProps<HTMLElement>, Transition {
    tag?: React.ReactType;
    in?: boolean;
    cssModule?: CSSModule;
    slide?: boolean;
}

declare const CarouselItem: React.StatelessComponent<CarouselItemProps>;
export default CarouselItem;
