import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type CarouselCaptionProps<T = {}> = ReactDOM.HTMLProps<HTMLElement> & {
    captionHeader?: string;
    captionText: string;
    cssModule?: CSSModule;
} & T;

declare class CarouselCaption<T = {[key: string]: any}> extends React.Component<CarouselCaptionProps<T>> {}
export default CarouselCaption;
