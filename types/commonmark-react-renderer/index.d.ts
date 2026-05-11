import { Node } from "commonmark";
import * as React from "react";

declare namespace ReactRenderer {
    interface CommonProps {
        nodeKey: string;
        literal: string | null;
        children: React.ReactElement;
        "data-sourcepos"?: string | undefined;
    }

    interface HtmlInlineBlockProps extends CommonProps {
        isBlock: boolean;
        escapeHtml: boolean;
        skipHtml: boolean;
    }

    interface CodeBlockProps extends CommonProps {
        language?: string | undefined;
        codeinfo?: string[] | undefined;
    }

    interface CodeProps extends CommonProps {
        inline: boolean;
    }

    interface HeadingProps extends CommonProps {
        level: number;
    }

    interface SoftBreakProps extends CommonProps {
        softBreak: string;
    }

    interface LinkProps extends CommonProps {
        href: string;
        title: string | undefined;
        target?: string | undefined;
    }

    interface ImageProps extends CommonProps {
        src: string;
        title: string | undefined;
        alt: string;
    }

    interface ListProps extends CommonProps {
        start: number;
        type: string;
        tight: boolean;
    }

    interface Renderers {
        Blockquote: string | React.ComponentType<CommonProps> | null;
        Emph: string | React.ComponentType<CommonProps> | null;
        Linebreak: string | React.ComponentType<CommonProps> | null;
        Image: string | React.ComponentType<ImageProps> | null;
        Item: string | React.ComponentType<CommonProps> | null;
        Link: string | React.ComponentType<LinkProps> | null;
        Paragraph: string | React.ComponentType<CommonProps> | null;
        Strong: string | React.ComponentType<CommonProps> | null;
        ThematicBreak: string | React.ComponentType<CommonProps> | null;
        HtmlBlock: string | React.ComponentType<HtmlInlineBlockProps> | null;
        HtmlInline: string | React.ComponentType<HtmlInlineBlockProps> | null;
        List: string | React.ComponentType<ListProps> | null;
        CodeBlock: string | React.ComponentType<CodeBlockProps> | null;
        Code: string | React.ComponentType<CodeProps> | null;
        Heading: string | React.ComponentType<HeadingProps> | null;
        Text: string | React.ComponentType<CommonProps> | null;
        Softbreak: string | React.ComponentType<SoftBreakProps> | null;
    }

    interface Options {
        sourcePos?: boolean | undefined;
        escapeHtml?: boolean | undefined;
        skipHtml?: boolean | undefined;
        softBreak?: string | undefined;
        allowedTypes?: string[] | undefined;
        disallowedTypes?: string[] | undefined;
        unwrapDisallowed?: boolean | undefined;
        allowNode?:
            | ((node: { type: string; renderer: string; props: unknown; children: unknown[] }) => unknown)
            | undefined;
        renderers?: Partial<Renderers> | undefined;
        transformLinkUri?: ((uri: string) => string) | null | undefined;
        transformImageUri?: ((uri: string) => string) | null | undefined;
        linkTarget?: string | undefined;
    }

    interface Renderer {
        sourcePos: boolean;
        softBreak: string;
        renderers: Renderers;
        escapeHtml: boolean;
        skipHtml: boolean;
        transformLinUri: ((uri: string) => string) | null;
        transformImageUri: ((uri: string) => string) | null;
        allowNode:
            | ((node: { type: string; renderer: string; props: unknown; children: React.ReactNode[] }) => unknown)
            | undefined;
        allowedTypes: string[];
        unwrapDisallowed: boolean;
        render: (root: Node) => React.ReactNode;
        linkTarget: string | false;
    }
}

interface ReactRenderer {
    new(options?: ReactRenderer.Options): ReactRenderer.Renderer;
    uriTransformer: (uri: string) => string;
    types: string[];
    renderers: ReactRenderer.Renderers;
}

declare const ReactRenderer: ReactRenderer;

export = ReactRenderer;
