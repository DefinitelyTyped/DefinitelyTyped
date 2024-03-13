import MarkdownIt = require("markdown-it");
import Renderer = require("markdown-it/lib/renderer");
import Token = require("markdown-it/lib/token");

declare namespace MarkdownItContainer {
    interface ContainerOpts {
        marker?: string | undefined;
        validate?(params: string): boolean;
        render?: Renderer.RenderRule | undefined;
    }
}

declare function MarkdownItContainer(
    md: MarkdownIt,
    name: string,
    opts: MarkdownItContainer.ContainerOpts,
): void;

export = MarkdownItContainer;
