import Remarkable = require(".");

export = Renderer;

/**
 * Renderer class. Renders HTML and exposes `rules` to allow
 * local modifications.
 */
declare class Renderer {
    rules: Remarkable.Rules;

    /**
     * Exported helper, for custom rules only.
     */
    getBreak: Remarkable.GetBreak;

    /**
     * Render a string of inline HTML with the given `tokens` and
     * `options`.
     */
    renderInline(tokens: Remarkable.Token[], options: Remarkable.Options, env: Remarkable.Env): string;

    /**
     * Render a string of HTML with the given `tokens` and
     * `options`.
     */
    render(tokens: Remarkable.Token[], options: Remarkable.Options, env: Remarkable.Env): string;
}
