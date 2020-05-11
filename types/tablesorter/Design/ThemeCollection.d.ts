import { Theme } from "./Theme";

/**
 * Represents a collection of themes.
 */
export interface ThemeCollection {
    /**
     * The name of the theme and the `Theme` itself.
     */
    [themeName: string]: Theme;
}
