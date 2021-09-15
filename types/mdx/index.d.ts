// Type definitions for non-npm package mdx 2.0
// Project: https://github.com/mdx-js/mdx
// Definitions by: Christian Murphy <https://github.com/ChristianMurphy>
//                 Remco Haszing <https://github.com/remcohaszing>
//                 Titus Wormer <https://github.com/wooorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

/**
 * An MDX file which exports a JSX component.
 */
declare module '*.mdx' {
    /**
     * An function component which renders the MDX content using a JSX implementation.
     *
     * @param props This value is be available as the named variable `props` inside the MDX component.
     * @returns A JSX element. The meaning of this may depend on the project configuration. I.e. it
     * could be a React, Preact, or Vuex element.
     */
    export default function MDXContent(props: Record<string, unknown>): JSX.Element;
}
