import * as React from 'react';

declare namespace CarouselCaption {
    export interface CarouselCaptionProps extends React.HTMLProps<CarouselCaption> {
        componentClass?: React.ReactType;
    }
}
declare class CarouselCaption extends React.Component<CarouselCaption.CarouselCaptionProps> { render(): React.ReactNode }
export = CarouselCaption;
