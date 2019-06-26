/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface HeaderNavigationOverrides {
  Root?: Override<any>;
}

export interface HeaderNavigationProps {
  overrides?: HeaderNavigationOverrides;
}

export class HeaderNavigation extends React.Component<HeaderNavigationProps> {}

export const StyledRoot: StyletronComponent<any>;
export const StyledNavigationItem: StyletronComponent<any>;
export const StyledNavigationList: StyletronComponent<any>;
