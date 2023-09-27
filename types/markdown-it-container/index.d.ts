// Type definitions for MarkdownItContainer (markdown-it-container) 2.0
// Project: https://github.com/markdown-it/markdown-it-container
// Definitions by: Vyacheslav Demot <https://github.com/hronex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
