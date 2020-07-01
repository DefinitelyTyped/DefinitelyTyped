// Type definitions for capitalize 2.0
// Project: https://github.com/grncdr/js-capitalize
// Definitions by: Frederick Fogerty <https://github.com/frederickfogerty>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Capitalize the first letter of a string
 * @param input the string to capitalize
 * @param [preserve] preserve casing of the rest of the strings content
 */
declare function capitalize(input: string, preserve?: boolean): string;
declare namespace capitalize {
    /**
     * Capitalize each word in a string
     * @param input the string to capitalize
     * @param [preserve] preserve casing of the rest of the strings content
     */
    function words(input: string, preserve?: boolean): string;
}
export = capitalize;
