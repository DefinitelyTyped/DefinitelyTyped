import { CSSModule } from '../index';

export interface CarouselControlProps extends React.HTMLProps<HTMLElement> {
    direction: 'prev' | 'next';
    onClickHandler: () => void;
    cssModule?: CSSModule;
    directionText: string;
}

declare const CarouselControl: React.StatelessComponent<CarouselControlProps>;
export default CarouselControl;
