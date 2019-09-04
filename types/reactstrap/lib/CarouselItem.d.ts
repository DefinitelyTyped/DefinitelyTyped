import * as React from 'react';
import { CSSModule } from '../index';

export interface CarouselItemProps extends React.HTMLProps<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  in?: boolean;
  cssModule?: CSSModule;
  slide?: boolean;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
}

declare class CarouselItem<T = {[key: string]: any}> extends React.Component<CarouselItemProps> {}
export default CarouselItem;
