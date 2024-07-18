import { CardinalOptions } from "cardinal";
import { Renderer } from "marked";
import type { TerminalRendererOptions } from "./index.cjs";

export { TerminalRendererOptions };

export default class TerminalRenderer extends Renderer {
    constructor(options?: TerminalRendererOptions, highlightOptions?: CardinalOptions);
}

export function markedTerminal(
    options?: TerminalRendererOptions,
    highlightOptions?: CardinalOptions,
): TerminalRenderer;
