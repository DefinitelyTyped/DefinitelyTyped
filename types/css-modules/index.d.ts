// Type definitions for css-modules
// Project: https://github.com/css-modules/css-modules
// Definitions by: Neek Sandhu <https://github.com/NeekSandhu>
// Definitions: https://github.com/ilich/DefinitelyTyped

declare module '*.css' {
    interface Stringifyable {
        /**
         * Stringifies the imported stylesheet for use with inline style tags 
         */
        toString: () => string
    }
    type SelectorNode = {
        /**
         * Returns the specific selector from imported stylesheet as string 
         */
        [key: string]: string
    }
    const styles: SelectorNode & Stringifyable
    export default styles
}
