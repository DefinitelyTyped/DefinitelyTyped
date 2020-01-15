// Type definitions for Hedron 1.0
// Project: https://github.com/garetmckinley/hedron
// Definitions by: James Best <https://github.com/jim-at-jibba>
//                 Dmytro Borysov <https://github.com/dborysov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface Styleable {
  /**
   * The amount of padding added
   */
  padding?: string;
  /**
   * The amount of padding added
   */
  margin?: string;
  /**
   * Width Property
   */
  width?: string;
  /**
   * Height Property
   */
  height?: string;
  /**
   * Visibilty Property
   */
  visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';
  /**
   * Display Property
   */
  display?:
    | 'inline'
    | 'block'
    | 'contents'
    | 'flex'
    | 'grid'
    | 'inline-block'
    | 'none'
    | 'initial'
    | 'inherit'
    | 'inline-flex'
    | 'inline-grid'
    | 'inline-table'
    | 'list-item'
    | 'run-in'
    | 'table'
    | 'table-caption'
    | 'table-column-group'
    | 'table-header-group'
    | 'table-footer-group'
    | 'table-row-group'
    | 'table-cell'
    | 'table-column'
    | 'table-row';
  /**
   * Opacity Property
   */
  opacity?: number;
  /**
   * Background Property
   */
  background?: string;
  /**
   * Border property
   */
  border?: string;
  /**
   * Controls hidden
   */
  hidden?: boolean;
}

export interface ProviderProps {
  /**
   * Draws all child columns with 'bounding boxes' for easy
   * visualization of the grid. This enables debug mode for all the
   * children of this component
   * @default false
   */
  debug?: boolean;
  /**
   * The amount of padding added
   */
  padding?: string;
  /**
   * Object specifying the breakpoints
   */
  breakpoints?: { [key: string]: string };
}

export interface BoundsProps extends Styleable {
  /**
   * Draws all child columns with 'bounding boxes' for easy
   * visualization of the grid. This enables debug mode for all the
   * children of this component
   * @default false
   */
  debug?: boolean;
  /**
   * Controls the CSS flex property
   */
  flex?: string;
  /**
   * Direction of content
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Sets whether the children should wrap when there's no more room on the primary axis
   */
  wrap?: boolean;
  /**
   * Alignment of children along the vertical axis
   */
  valign?: 'top' | 'center' | 'bottom';
  /**
   * Alignment of children along the horizontal axis
   */
  halign?: 'left' | 'center' | 'right';
  /**
   * Allow for customer props due to ability to add
   * custom breakpoints
   */
  [x: string]: any;
}

export interface BoxProps extends Styleable {
  /**
   * Draws all child columns with 'bounding boxes' for easy
   * visualization of the grid. This enables debug mode for all the
   * children of this component
   * @default false
   */
  debug?: boolean;
  /**
   * Controls the CSS flex property
   */
  flex?: string;
  /**
   * Sets whether the Box should fill up all available space
   */
  fill?: boolean;
  /**
   * Convenience property for disabling padding
   */
  fluid?: boolean;
  /**
   * Shifts the box to the right of the parent Bounds
   */
  shiftRight?: boolean;
  /**
   * Shifts the box to the left of the parent Bounds
   */
  shiftLeft?: boolean;
  /**
   * Shifts the box to the top of the parent Bounds
   */
  shiftUp?: boolean;
  /**
   * Shifts the box to the bottom of the parent Bounds
   */
  shiftDown?: boolean;
  /**
   *  Allow for customer props due to ability to add
   * custom breakpoints
   */
  [x: string]: any;
}

export class Provider extends React.Component<
  ProviderProps & React.HTMLProps<HTMLElement>
> {}

export class Bounds extends React.Component<
  BoundsProps & React.HTMLProps<HTMLElement>
> {}
export class Box extends React.Component<
  BoxProps & React.HTMLProps<HTMLElement>
> {}
