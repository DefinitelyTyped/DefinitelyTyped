import MarkdownIt from "markdown-it";

export default function emoji_plugin(md: MarkdownIt, options?: Partial<Options>): void;

/**
 * @see https://github.com/markdown-it/markdown-it-emoji#init
 */
export interface Options {
    defs: Record<string, string>;
    shortcuts: Record<string, string | string[]>;
    enabled: string[];
}
