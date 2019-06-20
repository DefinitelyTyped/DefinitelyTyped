/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface RatingState {
  previewIndex?: number;
}
export interface RatingOverrides {
  Root?: Override<any>;
  Item?: Override<any>;
}

export interface StarRatingProps {
  overrides?: RatingOverrides;
  value?: number;
  numItems?: number;
  onChange?: (args: {value: number}) => any;
}

export interface EmoticonRatingProps {
  overrides?: RatingOverrides;
  value?: number;
  onChange?: (args: {value: number}) => any;
}
export class StarRating extends React.Component<StarRatingProps, RatingState> {
  selectItem(value: number): void;
  updatePreview(previewIndex?: number): void;
  renderRatingContents(): React.ReactNode[];
}

export class EmoticonRating extends React.Component<EmoticonRatingProps, RatingState> {
    selectItem(value: number): void;
    updatePreview(previewIndex?: number): void;
    renderRatingContents(): React.ReactNode[];
  }

export interface StyledRootProps {
  $theme: Theme;
}
export interface StyledRatingItemProps {
  $theme: Theme;
  $isActive: boolean;
  $isSelected: boolean;
  $index: number;
}
export const StyledRoot: StyletronComponent<StyledRootProps>;
export const StyledStar: StyletronComponent<StyledRatingItemProps>;
export const StyledEmoticon: StyletronComponent<StyledRatingItemProps>;
