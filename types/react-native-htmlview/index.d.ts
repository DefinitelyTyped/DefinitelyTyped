import { ComponentType, ReactNode } from "react";
import { ImageStyle, StyleProp, TextProps, TextStyle, ViewProps, ViewStyle } from "react-native";

type Nullish = null | undefined;

interface GenericAttribs {
    [key: string]: string;
}
interface SpecificAttribs {
    style: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}

export interface HTMLViewNode {
    data?: string | undefined;
    type?: string | undefined;
    name?: string | undefined;
    attribs: GenericAttribs & SpecificAttribs;
    children: HTMLViewNode[];
}

export interface HTMLViewProps {
    /**
     * a string of HTML content to render
     */
    value: string;

    stylesheet?:
        | {
            [key: string]: StyleProp<ViewStyle | TextStyle | ImageStyle>;
        }
        | undefined;

    onLinkPress?(url: string): void;

    onLinkLongPress?(url: string): void;

    /**
     * A custom function to render HTML nodes however you see fit. If the function returns undefined (not null), the
     * default renderer will be used for that node. The function takes the following arguments:
     *
     *  - defaultRenderer the default rendering implementation, so you can use the normal rendering logic for some subtree. defaultRenderer takes the following arguments:
     *     - node the node to render with the default rendering logic
     *     - parent the parent of node of node
     *
     * @param node the html node as parsed by htmlparser2
     * @param index position of the node in parent node's children
     * @param siblings parent node's children (including current node)
     * @param parent parent node
     * @param defaultRenderer the default rendering implementation, so you can use the normal rendering logic for some subtree:
     */
    renderNode?(
        node: HTMLViewNode,
        index: number,
        siblings: HTMLViewNode[],
        parent: HTMLViewNode,
        defaultRenderer: HTMLViewNodeRenderer,
    ): ReactNode;

    /**
     * Text which is rendered before every li inside a ul
     */
    bullet?: string | undefined;

    /**
     * Text which appears after every p element
     */
    paragraphBreak?: string | undefined;

    /**
     * Text which appears after text elements which create a new line (br, headings)
     */
    lineBreak?: string | undefined;

    /**
     *  When explicitly false, effectively sets paragraphBreak and lineBreak to null
     */
    addLineBreaks?: boolean | undefined;

    /*
     * The root wrapper component
     */
    RootComponent?: ComponentType | undefined;

    /*
     * Properties for the RootComponent, can be used independently from RootComponent
     */
    rootComponentProps?: ViewProps | undefined;

    /*
     * The component used for rendering HTML element nodes
     */
    NodeComponent?: ComponentType | undefined;

    /*
     * Properties for the NodeComponent, can be used independently from NodeComponent
     */
    nodeComponentProps?: TextProps | undefined;

    /*
     * The component used for rendering text element nodes
     */
    TextComponent?: ComponentType | undefined;

    /*
     * Properties for the TextComponent, can be used independently from TextComponent
     */
    textComponentProps?: TextProps | undefined;
}

export type HTMLViewNodeRenderer = (
    node: HTMLViewNode[],
    parent: HTMLViewNode | Nullish,
) => ReactNode;

declare const HTMLView: ComponentType<HTMLViewProps>;
export default HTMLView;
