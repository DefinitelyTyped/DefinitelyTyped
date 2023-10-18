import * as React from "react";

interface ReactStarsProps {
    /** Name of parent class */
    className?: string | undefined;

    /** How many total stars you want */
    count?: number | undefined;

    /** Set rating value */
    value?: number | undefined;

    /** Which character you want to use as a star */
    char?: string | undefined;

    /** Color of inactive star (this supports any CSS valid value) */
    color1?: string | undefined;

    /** Color of selected or active star */
    color2?: string | undefined;

    /** Size of stars (in px) */
    size?: number | undefined;

    /** Should you be able to select rating or just see rating (for reusability) */
    edit?: boolean | undefined;

    /** Should component use half stars, if not the decimal part will be dropped otherwise normal algebra rools will apply to round to half stars */
    half?: boolean | undefined;

    /** Will be invoked any time the rating is changed */
    onChange?: ((new_rating: number) => void) | undefined;
}

declare class ReactStars extends React.Component<ReactStarsProps> {}

export default ReactStars;
