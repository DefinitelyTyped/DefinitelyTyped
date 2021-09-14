// Type definitions for ax 0.1
// Project: https://github.com/AstroxNetwork/ax
// Definitions by: Hsehoiki <https://github.com/kasumisk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface AxType {
    /**
     * ax function
     */
    setNavigationBarTitle: (text: string) => boolean;
    setNavigationBarColor: (color: string) => boolean;
}

/**
 * ax is global object
 */
declare const ax: AxType;

export = ax;
