import * as PropTypes from "prop-types";
import * as React from "react";

export const themeContextShape: PropTypes.Requireable<
    PropTypes.InferProps<{
        className: PropTypes.Requireable<string>;
    }>
>;

declare const ThemeProviderContext: React.Context<{
    /**
     * The current application theme className.
     * The default theme is indicated as undefined.
     */
    className?: string | undefined;
}>;

export default ThemeProviderContext;
