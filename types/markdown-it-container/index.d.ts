import MarkdownIt = require("markdown-it");

declare namespace MarkdownItContainer {
    interface ContainerOpts {
        marker?: string | undefined;
        validate?(params: string): boolean;
        render?: MarkdownIt.Renderer.RenderRule | undefined;
    }
}

declare function MarkdownItContainer(md: MarkdownIt, name: string, opts: MarkdownItContainer.ContainerOpts): void;

export = MarkdownItContainer;
