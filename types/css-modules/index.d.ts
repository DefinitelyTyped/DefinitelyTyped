// Type definitions for css-modules 1.0
// Project: https://github.com/css-modules/css-modules
// Definitions by: NeekSandhu <https://github.com/NeekSandhu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface Stringifyable {
    /**
     * Stringifies the imported stylesheet for use with inline style tags
     */
    toString(): string;
}
interface SelectorNode {
    /**
     * Returns the specific selector from imported stylesheet as string
     */
    [key: string]: string;
}

declare module '*.css' {
    const styles: SelectorNode & Stringifyable;
    export default styles;
}

declare module '*.scss' {
    const styles: SelectorNode & Stringifyable;
    export default styles;
}

declare module '*.sass' {
    const styles: SelectorNode & Stringifyable;
    export default styles;
}

declare module '*.less' {
    const styles: SelectorNode & Stringifyable;
    export default styles;
}
