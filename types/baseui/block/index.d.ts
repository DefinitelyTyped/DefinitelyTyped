/// <reference types="baseui"/>
import * as React from 'react';

export type Responsive<T> = T | T[];

export type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

export type AlignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

export type AlignSelf =
  | 'auto'
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'inherit'
  | 'initial'
  | 'unset';

export type Flex = number | string;

export type Display =
  | 'block'
  | 'inline'
  | 'run-in'
  | 'flow'
  | 'flow-root'
  | 'table'
  | 'flex'
  | 'grid'
  | 'ruby'
  | 'block flow'
  | 'inline table'
  | 'flex run-in'
  | 'list-item'
  | 'list-item block'
  | 'list-item inline'
  | 'list-item flow'
  | 'list-item flow-root'
  | 'list-item block flow'
  | 'list-item block flow-root'
  | 'flow list-item block'
  | 'table-row-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-caption'
  | 'ruby-base'
  | 'ruby-text'
  | 'ruby-base-container'
  | 'ruby-text-container'
  | 'contents'
  | 'none'
  | 'inline-block'
  | 'inline-table'
  | 'inline-flex'
  | 'inline-grid'
  | 'inherit'
  | 'initial'
  | 'unset';

export type GridAutoFlow =
  | 'row'
  | 'column'
  | 'dense'
  | 'row dense'
  | 'column dense'
  | 'inherit'
  | 'initial'
  | 'unset';

export type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

export type JustifyItems =
  /* Basic keywords */
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'legacy right'
  | 'legacy left'
  | 'legacy center'
  | 'inherit'
  | 'initial'
  | 'unset';

export type JustifySelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

export type Position = 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';

export type Overflow =
  | 'visible'
  | 'hidden'
  | 'scroll'
  | 'scrollX'
  | 'scrollY'
  | 'auto'
  | 'inherit'
  | 'initial'
  | 'unset';

export type Scale = 0 | string;

export interface BlockOverrides {
  Block?: Override<any>;
}

export interface BlockProps {
  children?: React.ReactNode;
  as?: React.ElementType;
  overrides?: BlockOverrides;
  color?: Responsive<string>;
  backgroundColor?: Responsive<string>;
  font?: string | string[];
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content */
  alignContent?: Responsive<AlignContent>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items */
  alignItems?: Responsive<AlignItems>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: Responsive<AlignSelf>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction */
  flexDirection?: Responsive<FlexDirection>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/display */
  display?: Responsive<Display>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex */
  flex?: Responsive<Flex>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid */
  grid?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area */
  gridArea?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns */
  gridAutoColumns?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow */
  gridAutoFlow?: Responsive<GridAutoFlow>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows */
  gridAutoRows?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column */
  gridColumn?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end */
  gridColumnEnd?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap */
  gridColumnGap?: Responsive<Scale>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start */
  gridColumnStart?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap */
  gridGap?: Responsive<Scale>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row */
  gridRow?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end */
  gridRowEnd?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap */
  gridRowGap?: Responsive<Scale>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start */
  gridRowStart?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template */
  gridTemplate?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas */
  gridTemplateAreas?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns */
  gridTemplateColumns?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows */
  gridTemplateRows?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content */
  justifyContent?: Responsive<JustifyContent>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items */
  justifyItems?: Responsive<JustifyItems>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self */
  justifySelf?: Responsive<JustifySelf>;
  position?: Responsive<Position>;
  width?: Responsive<Scale>;
  minWidth?: Responsive<Scale>;
  maxWidth?: Responsive<Scale>;
  height?: Responsive<Scale>;
  minHeight?: Responsive<Scale>;
  maxHeight?: Responsive<Scale>;
  overflow?: Responsive<Overflow>;
  margin?: Responsive<Scale>;
  marginTop?: Responsive<Scale>;
  marginRight?: Responsive<Scale>;
  marginBottom?: Responsive<Scale>;
  marginLeft?: Responsive<Scale>;
  padding?: Responsive<Scale>;
  paddingTop?: Responsive<Scale>;
  paddingRight?: Responsive<Scale>;
  paddingBottom?: Responsive<Scale>;
  paddingLeft?: Responsive<Scale>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-content */
  placeContent?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-items */
  placeItems?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-self */
  placeSelf?: Responsive<string>;
  flexWrap?: Responsive<boolean>;
  left?: Responsive<Scale>;
  top?: Responsive<Scale>;
  right?: Responsive<Scale>;
  bottom?: Responsive<Scale>;
}

export const Block: React.FC<BlockProps>;
