import { CSSModule } from '../index';

export interface CarouselIndicatorsProps extends React.HTMLProps<HTMLElement> {
    items: object[];
    activeIndex: number;
    cssModule?: CSSModule;
    onClickHandler: (idx: number) => void;
}

declare const CarouselIndicators: React.StatelessComponent<CarouselIndicatorsProps>;
export default CarouselIndicators;
