import MarkdownIt = require("markdown-it");

declare namespace markdownItFence {
    interface Option {
        /**
         * Marker of fence block.
         * @default '`'
         */
        marker?: string | undefined;

        /** Render function. */
        render?: MarkdownIt.Renderer.RenderRule | undefined;

        /** Validate function. */
        validate?: ((params: string) => boolean) | undefined;
    }
}

declare function markdownItFence(
    md: MarkdownIt,
    name: string,
    opts?: markdownItFence.Option,
): void;

export = markdownItFence;
