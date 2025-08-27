import * as React from "react";

interface StarRatingComponentProps {
    /** name of the radio input */
    name: string;

    /** the value of the star rating to display. i.e. the number of filled stars */
    value: number;

    /** number of icons in rating, default `5` */
    starCount?: number | undefined;

    onStarClick?: ((nextValue: number, prevValue: number, name: string) => void) | undefined;

    onStarHover?: ((nextValue: number, prevValue: number, name: string) => void) | undefined;

    onStarHoverOut?: ((nextValue: number, prevValue: number, name: string) => void) | undefined;

    /** render method for the full-star icon */
    renderStarIcon?:
        | ((
            nextValue: number,
            prevValue: number,
            name: string,
        ) => React.ReactNode | string)
        | undefined;

    /** render method for the half-star icon */
    renderStarIconHalf?:
        | ((
            nextValue: number,
            prevValue: number,
            name: string,
        ) => React.ReactNode | string)
        | undefined;

    /** color of selected icons */
    starColor?: string | undefined;

    /** color of non-selected icons */
    emptyStarColor?: string | undefined;

    /** is component available for editing, default `true` */
    editing?: boolean | undefined;
}

declare class StarRatingComponent extends React.Component<
    StarRatingComponentProps
> {}

export = StarRatingComponent;
