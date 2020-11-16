// Type definitions for @mdx-js/react 1.5
// Project: https://mdxjs.com
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ComponentType, ReactNode, StyleHTMLAttributes, FC, createElement } from 'react';

interface MDXProviderComponents {
    /**
     * The wrapper component can be used to set the layout for the MDX document.
     * It’s often used to set container width, borders, background colors, etc.
     * However, it’s also unique because it has access to the children passed to
     * it.
     *
     * This means that you can do powerful things with the MDX document
     * elements.
     */
    wrapper?: ComponentType<any>;
    /**
     * Paragraph
     */
    p?: ComponentType<any>;
    /**
     * Heading 1    #
     */
    h1?: ComponentType<any>;
    /**
     * Heading 2    ##
     */
    h2?: ComponentType<any>;
    /**
     * Heading 3    ###
     */
    h3?: ComponentType<any>;
    /**
     * Heading 4    ####
     */
    h4?: ComponentType<any>;
    /**
     * Heading 5    #####
     */
    h5?: ComponentType<any>;
    /**
     * Heading 6    ######
     */
    h6?: ComponentType<any>;
    /**
     * Thematic break    ***
     */
    thematicBreak?: ComponentType<any>;
    /**
     * Blockquote    >
     */
    blockquote?: ComponentType<any>;
    /**
     * List    -
     */
    ul?: ComponentType<any>;
    /**
     * Ordered list    1.
     */
    ol?: ComponentType<any>;
    /**
     * List item
     */
    li?: ComponentType<any>;
    /**
     * Table
     */
    table?: ComponentType<any>;
    /**
     * Table row
     */
    tr?: ComponentType<any>;
    /**
     * Table Cell
     */
    th?: ComponentType<any>;
    td?: ComponentType<any>;
    /**
     * Pre
     */
    pre?: ComponentType<any>;
    /**
     * Code    `\code```
     */
    code?: ComponentType<any>;
    /**
     * Emphasis    _emphasis_
     */
    em?: ComponentType<any>;
    /**
     * Strong    **strong**
     */
    strong?: ComponentType<any>;
    /**
     * Delete    ~~strikethrough~~
     */
    delete?: ComponentType<any>;
    /**
     * InlineCode    `inlineCode`
     */
    inlineCode?: ComponentType<any>;
    /**
     * Break    ---
     */
    hr?: ComponentType<any>;
    /**
     * Link    <https://mdxjs.com> or [MDX](https://mdxjs.com)
     */
    a?: ComponentType<any>;
    /**
     * Image    ![alt](https://mdx-logo.now.sh)
     */
    img?: ComponentType<any>;

    /**
     * Any other components we wish to define
     */
    [key: string]: ReactNode;
}

type MDXProviderComponentsProp = MDXProviderComponents | ((components: MDXProviderComponents) => MDXProviderComponents);

interface MDXProviderProps {
    children: React.ReactNode;
    components: MDXProviderComponentsProp;
}

declare const MDXProvider: FC<MDXProviderProps>;

declare function useMDXComponents(components?: MDXProviderComponentsProp): MDXProviderComponents;

interface InjectedMDXProviderProps {
    components: MDXProviderComponents;
}

// Taken from https://github.com/sindresorhus/type-fest/blob/794de74c6e0d1650fe07b91d22d970b68c1d3e37/source/except.d.ts#L1-L22
type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeysType>>;

declare function withMDXComponents<GProps extends InjectedMDXProviderProps>(
    Component: ComponentType<GProps>,
): FC<Except<GProps, keyof InjectedMDXProviderProps>>;

declare const mdx: typeof createElement;

export {
    withMDXComponents,
    useMDXComponents,
    MDXProvider,
    MDXProviderProps,
    InjectedMDXProviderProps,
    MDXProviderComponentsProp,
    MDXProviderComponents,
    mdx,
};
