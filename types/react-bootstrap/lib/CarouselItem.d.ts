import * as React from 'react';

declare class CarouselItem extends React.Component<CarouselItemProps> { }
declare namespace CarouselItem { }
export = CarouselItem

interface CarouselItemProps extends React.HTMLProps<CarouselItem> {
  active?: boolean;
  animtateIn?: boolean;
  animateOut?: boolean;
  direction?: string;
  index?: number;
  onAnimateOutEnd?: Function;
}
