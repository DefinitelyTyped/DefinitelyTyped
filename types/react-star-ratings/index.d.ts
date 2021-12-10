// Type definitions for react-star-ratings 2.3
// Project: https://github.com/ekeric13/react-star-ratings
// Definitions by: Andrew Shkurenko <https://github.com/vanillkay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as React from "react";

interface StarRatingProps {
    rating?: number;
    numberOfStars?: number;
    changeRating?: (rating: number) => void;
    starRatedColor?: string;
    starEmptyColor?: string;
    starHoverColor?: string;
    starDimension?: string;
    starSpacing?: string;
    gradientPathName?: string;
    ignoreInlineStyles?: boolean;
    svgIconPath?: string;
    svgIconViewBox?: string;
    name?: string;
}

declare class StarRatings extends React.Component<
  StarRatingProps
> {}

export = StarRatings;
