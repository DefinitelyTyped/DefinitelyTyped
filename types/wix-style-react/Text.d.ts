import * as React from 'react';

export interface TextProps {
  showTooltip?: boolean;
  ellipsis?: boolean;
  tagName?: string;
  className?: string;
  size?: TextSize;
  secondary?: boolean;
  skin?: TextSkin;
  light?: boolean;
  weight?: TextWeight;
}

declare const Text: React.SFC<TextProps>;
export default Text;

export type TextSize = 'tiny' | 'small' | 'medium';

export type TextSkin =
  | 'standard'
  | 'error'
  | 'success'
  | 'premium'
  | 'disabled';

export type TextWeight = 'thin' | 'normal' | 'bold';
