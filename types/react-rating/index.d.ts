// Type definitions for react-rating 1.5
// Project: https://github.com/dreyescat/react-rating
// Definitions by: Kyle Davis <https://github.com/kyledavisdev/>,
//                 Konrad Szwarc <https://github.com/szwarckonrad/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export as namespace Rating;

export default Rating;

export namespace Rating {
    interface props {
        start?: number;
        stop?: number;
        step?: number;
        fractions?: number;
        initialRating?: number;
        className?: string;
        placeholderRating?: number;
        readonly?: boolean;
        quiet?: boolean;
        direction?: "rtl" | "ltr";
        emptySymbol?: string | string[] | JSX.Element[] | JSX.Element;
        fullSymbol?: string | string[] | JSX.Element[] | JSX.Element;
        placeholderSymbol?: string | string[] | JSX.Element[] | JSX.Element;
        onChange?: (value: number) => void;
        onHover?: (value: number) => void;
        onClick?: (value: number) => void;
    }
}

declare class Rating extends React.Component<Rating.props> {}
