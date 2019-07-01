/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface KIND {
  neutral: 'neutral';
  primary: 'primary';
  positive: 'positive';
  warning: 'warning';
  negative: 'negative';
  custom: 'custom';
}
export interface VARIANT {
  solid: 'solid';
  light: 'light';
  outlined: 'outlined';
}

export interface TagOverrides {
  Root?: Override<any>;
  Action?: Override<any>;
  ActionIcon?: Override<any>;
  Text?: Override<any>;
}

export interface TagProps {
  overrides?: TagOverrides;
  closeable?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  kind?: KIND[keyof KIND];
  variant?: VARIANT[keyof VARIANT];
  children?: React.ReactNode;
  color?: string;
  onActionClick?: (e: Event, children?: React.ReactNode) => any;
  onActionKeyDown?: (e: Event, children?: React.ReactNode) => any;
  onClick?: (event: Event) => any;
  onKeyDown?: (event: Event) => any;
}

export class Tag extends React.Component<TagProps> {
  handleKeyDown(event: KeyboardEvent): void;
  handleActionKeyDown(event: KeyboardEvent): void;
}

export const StyledRoot: StyletronComponent<any>;
export const StyledAction: StyletronComponent<any>;
export const StyledActionIcon: StyletronComponent<any>;
export const StyledText: StyletronComponent<any>;

export const KIND: KIND;
export const VARIANT: VARIANT;
