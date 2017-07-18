import * as React from 'react';

interface CarouselCaptionProps extends React.HTMLProps<CarouselCaption> {
  componentClass?: React.ReactType;
}

export default class CarouselCaption extends React.Component<CarouselCaptionProps> { }
