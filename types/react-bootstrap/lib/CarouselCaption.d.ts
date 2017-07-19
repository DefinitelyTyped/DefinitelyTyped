import * as React from 'react';

declare class CarouselCaption extends React.Component<CarouselCaptionProps> { }
declare namespace CarouselCaption { }
export = CarouselCaption

interface CarouselCaptionProps extends React.HTMLProps<CarouselCaption> {
  componentClass?: React.ReactType;
}
