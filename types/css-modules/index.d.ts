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