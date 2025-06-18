/**
 * Provides the functionality to generate a css-class for an icon.
 */
export interface IconClassGenerator {
    /**
     * Generates a css-class for an icon.
     */
    (id: string, params: string[]): string;
}
