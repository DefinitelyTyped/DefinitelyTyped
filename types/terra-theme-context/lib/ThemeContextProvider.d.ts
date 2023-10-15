import * as React from "react";

export interface ThemeContextProviderProps {
    /**
     * The components to be rendered within the context of the ThemeContextProvider. Components rendered here are able to interact with ThemeContextProvider through the ThemeContext.
     */
    children: React.ReactElement;
    /**
     * An object containing the name and className of the selected theme.
     */
    theme?: {
        name?: string | undefined;
        className?: string | undefined;
    } | undefined;
}

declare const ThemeContextProvider: React.FC<ThemeContextProviderProps>;
export default ThemeContextProvider;
