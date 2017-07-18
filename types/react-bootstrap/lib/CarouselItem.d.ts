import * as React from 'react';

interface CarouselItemProps extends React.HTMLProps<CarouselItem> {
  active?: boolean;
  animtateIn?: boolean;
  animateOut?: boolean;
  direction?: string;
  index?: number;
  onAnimateOutEnd?: Function;
}

export default class CarouselItem extends React.Component<CarouselItemProps> { }
