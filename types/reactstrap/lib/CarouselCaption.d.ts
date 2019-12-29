import * as React from 'react';
import { CSSModule } from '../index';

export interface CarouselCaptionProps extends React.HTMLProps<HTMLElement> {
  [key: string]: any;
    captionHeader?: string;
    captionText: string;
    cssModule?: CSSModule;
}

declare class CarouselCaption<T = {[key: string]: any}> extends React.Component<CarouselCaptionProps> {}
export default CarouselCaption;
