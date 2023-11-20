import * as React from "react";

export = FontAwesome;

interface Intermediate extends React.AllHTMLAttributes<HTMLElement> {
    size?: any;
}

declare namespace FontAwesome {
    type FontAwesomeSize = "lg" | "2x" | "3x" | "4x" | "5x";
    type FontAwesomeStack = "1x" | "2x";
    type FontAwesomeFlip = "horizontal" | "vertical";

    interface FontAwesomeProps extends Intermediate {
        ariaLabel?: string | undefined;
        border?: boolean | undefined;
        cssModule?: any;
        fixedWidth?: boolean | undefined;
        flip?: FontAwesomeFlip | undefined;
        inverse?: boolean | undefined;
        name: string;
        pulse?: boolean | undefined;
        rotate?: number | undefined;
        size?: FontAwesomeSize | undefined;
        spin?: boolean | undefined;
        stack?: FontAwesomeStack | undefined;
        tag?: string | undefined;
    }
}

declare class FontAwesome extends React.Component<FontAwesome.FontAwesomeProps> {}
