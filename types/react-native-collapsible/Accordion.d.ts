import * as React from 'react';
import { EasingMode } from './index';

export interface AccordionProps {
  /**
   * An array of sections passed to the render methods
   */
  sections: string[];

  /**
   * A function that should return a renderable representing the header
   */
  renderHeader(content: any, index: number, isActive: boolean): JSX.Element;

  /**
   * A function that should return a renderable representing the content
   */
  renderContent(content: any, index: number, isActive: boolean): JSX.Element;

  /**
   * An optional function that is called when currently active section is changed, index === false when collapsed
   */
  onChange?(index: number): void;

  /**
   * Set which index in the sections array is initially open. Defaults to none.
   */
  initiallyActiveSection?: number;

  /**
   * Control which index in the sections array is currently open. Defaults to none. If false, closes all sections.
   */
  activeSection?: boolean | number;

  /**
   * The color of the underlay that will show through when tapping on headers.
   *
   * @default black
   */
  underlayColor?: string;

  /**
   * Alignment of the content when transitioning, can be top, center or bottom
   *
   * @default top
   */
  align?: 'top' | 'center' | 'bottom';

  /**
   * Duration of transition in milliseconds
   *
   * @default 300
   */
  duration?: number;

  /**
   * Function or function name from Easing (or tween-functions if < RN 0.8). Collapsible will try to combine Easing functions for you if you name them like tween-functions.
   *
   * @default easeOutCubic
   */
  easing?: EasingMode | any;
}

export default class Accordion extends React.Component<AccordionProps, any> {}
