import * as React from 'react';
import { CSSModule } from '../index';

export interface CarouselControlProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  direction: 'prev' | 'next';
  onClickHandler: () => void;
  cssModule?: CSSModule;
  directionText?: string;
}

export default class CarouselControl<T = {}> extends React.Component<CarouselControlProps> { }
