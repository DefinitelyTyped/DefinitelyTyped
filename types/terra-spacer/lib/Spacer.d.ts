import * as React from "react";

import { SpacerShorthand } from "./__spacerShorthand";

export { SpacerShorthand } from "./__spacerShorthand";

export interface SpacerSizes {
    NONE: "none";
    "SMALL-2": "small-2";
    "SMALL-1": "small-1";
    SMALL: "small";
    MEDIUM: "medium";
    LARGE: "large";
    "LARGE+1": "large+1";
    "LARGE+2": "large+2";
    "LARGE+3": "large+3";
    "LARGE+4": "large+4";
}

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Sets margin in a syntax similar to the standard CSS spec https://developer.mozilla.org/en-US/docs/Web/CSS/margin.
     * One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    margin?: SpacerShorthand | undefined;
    /**
     * Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    marginTop?: SpacerSizes[keyof SpacerSizes] | undefined;
    /**
     * Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    marginBottom?: SpacerSizes[keyof SpacerSizes] | undefined;
    /**
     * Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    marginLeft?: SpacerSizes[keyof SpacerSizes] | undefined;
    /**
     * Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    marginRight?: SpacerSizes[keyof SpacerSizes] | undefined;
    /**
     * Sets padding in a syntax similar to the standard CSS spec https://developer.mozilla.org/en-US/docs/Web/CSS/padding.
     * One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    padding?: SpacerShorthand | undefined;
    /**
     * Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    paddingTop?: SpacerSizes[keyof SpacerSizes] | undefined;
    /**
     * Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    paddingBottom?: SpacerSizes[keyof SpacerSizes] | undefined;
    /**
     * Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    paddingLeft?: SpacerSizes[keyof SpacerSizes] | undefined;
    /**
     * Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.
     */
    paddingRight?: SpacerSizes[keyof SpacerSizes] | undefined;
    /**
     * Sets the display to be inline-block.
     */
    isInlineBlock?: boolean | undefined;
}

declare const Spacer: React.FC<SpacerProps> & { Opts: { Sizes: SpacerSizes } };
export default Spacer;
