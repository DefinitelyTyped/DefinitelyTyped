import { Component, ComponentType, createElement, FC, ReactNode, StyleHTMLAttributes } from "react";

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
    wrapper?: ComponentType<any> | undefined;
    /**
     * Paragraph
     */
    p?: ComponentType<any> | undefined;
    /**
     * Heading 1    #
     */
    h1?: ComponentType<any> | undefined;
    /**
     * Heading 2    ##
     */
    h2?: ComponentType<any> | undefined;
    /**
     * Heading 3    ###
     */
    h3?: ComponentType<any> | undefined;
    /**
     * Heading 4    ####
     */
    h4?: ComponentType<any> | undefined;
    /**
     * Heading 5    #####
     */
    h5?: ComponentType<any> | undefined;
    /**
     * Heading 6    ######
     */
    h6?: ComponentType<any> | undefined;
    /**
     * Thematic break    ***
     */
    thematicBreak?: ComponentType<any> | undefined;
    /**
     * Blockquote    >
     */
    blockquote?: ComponentType<any> | undefined;
    /**
     * List    -
     */
    ul?: ComponentType<any> | undefined;
    /**
     * Ordered list    1.
     */
    ol?: ComponentType<any> | undefined;
    /**
     * List item
     */
    li?: ComponentType<any> | undefined;
    /**
     * Table
     */
    table?: ComponentType<any> | undefined;
    /**
     * Table row
     */
    tr?: ComponentType<any> | undefined;
    /**
     * Table Cell
     */
    th?: ComponentType<any> | undefined;
    td?: ComponentType<any> | undefined;
    /**
     * Pre
     */
    pre?: ComponentType<any> | undefined;
    /**
     * Code    `\code```
     */
    code?: ComponentType<any> | undefined;
    /**
     * Emphasis    _emphasis_
     */
    em?: ComponentType<any> | undefined;
    /**
     * Strong    **strong**
     */
    strong?: ComponentType<any> | undefined;
    /**
     * Delete    ~~strikethrough~~
     */
    delete?: ComponentType<any> | undefined;
    /**
     * InlineCode    `inlineCode`
     */
    inlineCode?: ComponentType<any> | undefined;
    /**
     * Break    ---
     */
    hr?: ComponentType<any> | undefined;
    /**
     * Link    <https://mdxjs.com> or [MDX](https://mdxjs.com)
     */
    a?: ComponentType<any> | undefined;
    /**
     * Image    ![alt](https://mdx-logo.now.sh)
     */
    img?: ComponentType<any> | undefined;

    /**
     * Any other components we wish to define
     */
    [key: string]: ComponentType<any> | undefined;
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
    InjectedMDXProviderProps,
    mdx,
    MDXProvider,
    MDXProviderComponents,
    MDXProviderComponentsProp,
    MDXProviderProps,
    useMDXComponents,
    withMDXComponents,
};
