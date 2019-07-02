/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface CardOverrides {
  Action?: Override<any>;
  Body?: Override<any>;
  Contents?: Override<any>;
  HeaderImage?: Override<any>;
  Root?: Override<any>;
  Thumbnail?: Override<any>;
  Title?: Override<any>;
}
export interface CardProps {
  readonly action?: React.ReactNode;
  readonly children?: React.ReactNode;
  readonly hasThumbnail?: (props: { readonly thumbnail?: string }) => boolean;
  readonly headerImage?: string;
  readonly overrides?: CardOverrides;
  readonly thumbnail?: string;
  readonly title?: React.ReactNode;
}
export const Card: React.FC<CardProps>;
export type hasThumbnail = (props: { readonly thumbnail?: string }) => boolean;

export const StyledAction: StyletronComponent<any>;
export const StyledBody: StyletronComponent<any>;
export const StyledContents: StyletronComponent<any>;
export const StyledHeaderImage: StyletronComponent<any>;
export const StyledThumbnail: StyletronComponent<any>;
export const StyledTitle: StyletronComponent<any>;
export const StyledRoot: StyletronComponent<any>;
export const StyledWrapper: StyletronComponent<any>;
