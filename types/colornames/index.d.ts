/**
 * Represents a color.
 */
interface Color {
    /**
     * Gets the value of the color.
     */
    value: string;

    /**
     * Gets a value indicating whether the color is a valid `CSS`-color.
     */
    css?: boolean | undefined;

    /**
     * Gets a value indicating whether the color is a valid `VGA`-color.
     */
    vga?: boolean | undefined;

    /**
     * Gets the name of the color.
     */
    name: string;
}

/**
 * Povides the functionality to resolve colors of a specific type by its name.
 */
interface ColorResolver {
    /**
     * Gets the color with the specified name.
     *
     * @param name
     * The name of the color to get.
     */
    (name: string): Color;

    /**
     * Gets all colors.
     */
    (): Color[];
}

/**
 * Provides the functionality to resolve any kind of color by its name.
 */
interface GlobalResolver {
    /**
     * Gets the color with the specified name.
     */
    (name: string): string | undefined;

    /**
     * Provides the functionality to query colors.
     */
    get: {
        /**
         * Gets the color with the specified name.
         *
         * @param name
         * The name of the color to get.
         */
        (name: string): Color;

        /**
         * Gets all available colors.
         */
        all(): Color[];

        /**
         * Provides the functionality to resolve `css`-colors.
         */
        css: ColorResolver;

        /**
         * Provides the functionality to resolve `vga`-colors.
         */
        vga: ColorResolver;
    };

    /**
     * Gets all available colors.
     */
    all(): Color[];
}

declare let colorNames: GlobalResolver;
export = colorNames;
