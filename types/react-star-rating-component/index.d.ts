// Type definitions for react-star-rating-component 1.4
// Project: https://github.com/voronianski/react-star-rating-component#readme
// Definitions by: Cody Sand <https://github.com/marpstar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

interface StarRatingComponentProps {
  /** name of the radio input */
  name: string;

  /** the value of the star rating to display. i.e. the number of filled stars */
  value: number;

  /** number of icons in rating, default `5` */
  starCount?: number;

  onStarClick?: (nextValue: number, prevValue: number, name: string) => void;

  onStarHover?: (nextValue: number, prevValue: number, name: string) => void;

  onStarHoverOut?: (nextValue: number, prevValue: number, name: string) => void;

  /** render method for the full-star icon */
  renderStarIcon?: (
    nextValue: number,
    prevValue: number,
    name: string
  ) => React.ReactNode | string;

  /** render method for the half-star icon */
  renderStarIconHalf?: (
    nextValue: number,
    prevValue: number,
    name: string
  ) => React.ReactNode | string;

  /** color of selected icons */
  starColor?: string;

  /** color of non-selected icons */
  emptyStarColor?: string;

  /** is component available for editing, default `true` */
  editing?: boolean;
}

declare class StarRatingComponent extends React.Component<
  StarRatingComponentProps
> {}

export = StarRatingComponent;
