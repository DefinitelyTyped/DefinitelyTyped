export {};

// https://torchlight.dev/docs/themes
type TorchlightTheme =
    | "github-light"
    | "light-plus"
    | "material-theme-lighter"
    | "min-light"
    | "slack-theme-ochin"
    | "solarized-light"
    | "winter-is-coming-light"
    | "serendipity-light"
    | "dark-plus"
    | "github-dark"
    | "material-theme-darker"
    | "material-theme-default"
    | "material-theme-ocean"
    | "material-theme-palenight"
    | "material-facebook"
    | "olaolu-palenight"
    | "min-dark"
    | "monokai"
    | "nord"
    | "slack-theme-dark-mode"
    | "solarized-dark"
    | "one-dark-pro"
    | "moonlight"
    | "moonlight-ii"
    | "winter-is-coming-dark"
    | "winter-is-coming-blue"
    | "synthwave-84"
    | "fortnite"
    | "cobalt2"
    | "serendipity-dark"
    | "dark-404"
    | "yellow-delight"
    | "liver-purple"
    | "liver-dark"
    | "monokuro-blue"
    | "monokuro-brown"
    | "monokuro-cyan"
    | "monokuro-gray"
    | "monokuro-green"
    | "monokuro-indigo"
    | "monokuro-lime"
    | "monokuro-orange"
    | "monokuro-pink"
    | "monokuro-purple"
    | "monokuro-red"
    | "monokuro-teal"
    | "monokuro-yellow"
    | "deep-purple"
    | "shades-of-purple"
    | "atom-one-dark"
    | "night-owl"
    | "iceberg-dark"
    | "dracula";

interface TorchlightApiResponse {
    requests: number;
    duration: number;
    blocks: Array<{
        id: string;
        hash: string;
        language: string;
        theme: string;
        wrapped: string;
        highlighted: string;
        classes: string;
        styles: string;
        attrs: Record<string, string>;
    }>;
}

export interface TorchlightConfig {
    token?: string;
    theme?: TorchlightTheme;
    host?: string;
    options?: Partial<{
        /**
         * Turn line numbers on or off globally.
         */
        lineNumbers: boolean;

        /**
         * Control the `style` attribute applied to line numbers.
         */
        lineNumberStyle: string;

        /**
         * Control the `style` attribute applied to line numbers.
         */
        diffIndicators: boolean;

        /**
         * If there are any diff indicators for a line, put them
         * in place of the line number to save horizontal space.
         */
        diffIndicatorsInPlaceOfLineNumbers: boolean;

        /**
         * When lines are collapsed, this is the text that will
         * be shown to indicate that they can be expanded.
         */
        summaryCollapsedIndicator: string;
    }>;
}

declare class Torchlight {
    init(config: TorchlightConfig, cache: string | false): Torchlight;

    config<K extends keyof TorchlightConfig>(key: K, def?: TorchlightConfig[K]): TorchlightConfig[K];

    configHash(): string;

    highlight(blocks: Block[]): Promise<Block[]>;

    fan(blocks: Block[]): Promise<Block[]>;

    request(blocks: Block[]): Promise<TorchlightApiResponse["blocks"]>;
}

interface BlockOptions {
    id?: string | undefined;
    theme?: TorchlightTheme | undefined;
    code: string;
    language: string;
}

export class Block {
    constructor(options: BlockOptions);

    hash(): string;

    code(code: string): Block;

    language(language: string): Block;

    theme(theme: string): Block;

    placeholder(extra?: string): string;

    setResponseData(data?: { highlighted: any; classes: any; styles: any }): Block;

    toRequestParams(): {
        id: string;
        hash: string;
        language: string;
        theme: string;
        code: string;
    };
}

export const torchlight: Torchlight;
