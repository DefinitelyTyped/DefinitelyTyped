/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface BreadcrumbsOverrides {
  Root?: Override<any>;
  Separator?: Override<any>;
  Icon?: Override<any>;
}

export interface BreadcrumbsProps {
  children?: React.ReactNode;
  overrides?: BreadcrumbsOverrides;
  ariaLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps>;

export const StyledRoot: StyletronComponent<any>;
export const StyledSeparator: StyletronComponent<any>;
