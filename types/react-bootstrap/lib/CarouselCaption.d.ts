import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace CarouselCaption {
    export interface CarouselCaptionProps extends ReactDOM.HTMLProps<CarouselCaption> {
        componentClass?: React.ReactType;
    }
}
declare class CarouselCaption extends React.Component<CarouselCaption.CarouselCaptionProps> { }
export = CarouselCaption;
