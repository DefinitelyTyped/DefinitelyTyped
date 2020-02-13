import * as React from 'react';
import { CSSModule } from '../index';

export interface CarouselProps extends React.HTMLProps<HTMLElement> {
  [key: string]: any;
  activeIndex?: number;
  next: () => void;
  previous: () => void;
  keyboard?: boolean;
  pause?: 'hover' | false;
  ride?: 'carousel';
  interval?: number | string | boolean;
  mouseEnter?: () => void;
  mouseExit?: () => void;
  slide?: boolean;
  cssModule?: CSSModule;
  enableTouch?: boolean;
}

export interface UncontrolledCarouselProps extends React.HTMLProps<HTMLElement> {
  [key: string]: any;
  items: any[];
  activeIndex?: number;
  next?: () => void;
  previous?: () => void;
  keyboard?: boolean;
  pause?: "hover" | false;
  ride?: "carousel";
  interval?: number | string | boolean;
  mouseEnter?: () => void;
  mouseExit?: () => void;
  slide?: boolean;
  cssModule?: CSSModule;
  controls?: boolean;
  indicators?: boolean;
  autoPlay?: boolean;
  enableTouch?: boolean;
}

declare class Carousel<T = {[key: string]: any}> extends React.Component<CarouselProps> {}
export default Carousel;
