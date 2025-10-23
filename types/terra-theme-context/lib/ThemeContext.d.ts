import PropTypes = require("prop-types");
import React = require("react");

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
