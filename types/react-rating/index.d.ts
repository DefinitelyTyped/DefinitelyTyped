// Type definitions for react-rating 1.5
// Project: https://github.com/dreyescat/react-rating
// Definitions by: Kyle Davis <https://github.com/kyledavisdev/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace Rating;

export default Rating;

export namespace Rating {
    interface props {
        /**
         * Range starting value (exclusive).
         *
         * Default value: 0
         */
        start?: number;

        /**
         * Range stop value (inclusive).
         *
         * Default value: 5
         */
        stop?: number;

        /**
         * Describes how many values each Symbol represents. For example, for a start value of 0, a stop value of 10 and a step of 2, we will end up with 5 Symbols, with each Symbol representing value increments of 2.
         *
         * Default value: 1
         */
        step?: number;

        /**
         * Number of equal subdivisions that can be selected as a rating in each Symbol. For example, for a fractions value of 2, you will be able to select a rating with a precision of down to half a Symbol. Must be >= 1
         *
         * Default value: 1
         */
        fractions?: number;

        /**
         * Range starting value (exclusive).
         *
         * Default value: 0
         */
        initialRating?: number;

        /**
         * The value that will be used as an initial rating. This is the old initialRate.
         *
         * Default value: 0
         */
        className?: string;

        /**
         * If you do not define an initialRating value, you can use a placeholder rating. Visually, this will have the same result as if you had defined an initialRating value. If initialRating is set placeholderRating is not taken into account. This is the old placeholderRate
         *
         * Default value: 0
         */
        placeholderRating?: number;

        /**
         * Whether the rating can be modified or not.
         *
         * Default value: false
         */
        readonly?: boolean;

        /**
         * Whether to animate rate hovering or not.
         *
         * Default value: false
         */
        quiet?: boolean;

        /**
         * The direction of the rating element contents
         *
         * Default value: "ltr"
         */
        direction?: "rtl" | "ltr";

        /**
         * React element, inline style object, or classes applied to the rating symbols when empty. Can also be an array of such symbols that will be applied in a circular manner (round-robin). This is the old empty.
         *
         * Default value: Style.empty
         */
        emptySymbol?: string | string[] | JSX.Element[] | JSX.Element;

        /**
         * React element, inline style object, or classes applied to the rating symbols when full. Can also be an array of such symbols that will be applied in a circular manner (round-robin). This is the old full.
         *
         * Default value: Style.full
         */
        fullSymbol?: string | string[] | JSX.Element[] | JSX.Element;

        /**
         * React element, inline style object, or classes applied to the placeholder rating symbols. Can also be an array of such symbols that will be applied in a circular manner (round-robin). This is the old placeholder.
         *
         * Default value: Style.placeholder
         */
        placeholderSymbol?: string | string[] | JSX.Element[] | JSX.Element;

        /**
         * Gets called with the value when a different value than the currently set is selected.
         */
        onChange?: (value: number) => void;

        /**
         * Gets called with the value when a symbol is clicked. The value is equal to the value that corresponds to that part of the symbol.
         */
        onHover?: (value: number) => void;

        /**
         * Gets called with the value when you hover over a symbol. The value is equal to the value that corresponds to that part of the symbol. Gets called in quiet mode too. When hover ends, gets called with no value (i.e. undefined as the value).
         */
        onClick?: (value: number) => void;
    }
}

declare class Rating extends React.Component<Rating.props> {}
