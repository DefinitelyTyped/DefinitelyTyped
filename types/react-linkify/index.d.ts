import * as React from "react";

/**
 * Matching information
 */
export interface MatchInfo {
    /**
     * Link schema, can be empty for fuzzy links, or for protocol-neutral links
     */
    schema: string;
    /**
     * Offset of matched text
     */
    index: number;
    /**
     * Index of next char after the end of the matched text
     */
    lastIndex: number;
    /**
     * Normalized text
     */
    text: string;
    /**
     * Link, generated from matched text
     */
    url: string;
}

export interface Props {
    children: React.ReactNode;
    /**
     * Custom anchor tag creator
     * Default to using exisint <a> tag with the provided href={decoratedHref}, key={key}
     * and children={decoratedText}, without additional styling
     */
    componentDecorator?: ((decoratedHref: string, decoratedText: string, key: number) => React.ReactNode) | undefined;
    /**
     * Custom href decorator or mapper on the matched (url) href
     * Default to no transformation
     */
    hrefDecorator?: ((urlHref: string) => string) | undefined;
    /**
     * Custom matcher for (url), that returns each match with the matching information
     * Default to https://github.com/markdown-it/linkify-it's LinkifyIt().tlds(tlds).match
     */
    matchDecorator?: ((text: string) => MatchInfo[] | null) | undefined;
    /**
     * Custom text decorator or mapper on the matched (url) text
     * Default to no transformation
     */
    textDecorator?: ((urlText: string) => string) | undefined;
}

export default class ReactLinkify extends React.Component<Props> {}
