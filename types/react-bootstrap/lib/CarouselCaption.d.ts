import * as React from 'react';

declare namespace CarouselCaption {
    export interface CarouselCaptionProps extends React.HTMLProps<CarouselCaption> {
        componentClass?: React.ElementType | undefined;
    }
}
declare class CarouselCaption extends React.Component<CarouselCaption.CarouselCaptionProps> { }
export = CarouselCaption;
