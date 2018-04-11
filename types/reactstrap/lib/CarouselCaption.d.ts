import { CSSModule } from '../index';

export interface CarouselCaptionProps extends React.HTMLProps<HTMLElement> {
    captionHeader?: string;
    captionText: string;
    cssModule?: CSSModule;
}

declare const CarouselCaption: React.StatelessComponent<CarouselCaptionProps>;
export default CarouselCaption;
