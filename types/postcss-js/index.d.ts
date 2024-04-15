import { AcceptedPlugin, LazyResult, ProcessOptions, Root } from "postcss";
import NoWorkResult = require("postcss/lib/no-work-result");

/** CSS-in-JS object */
export type CssInJs = Record<string, any>;

/**
 * Convert a PostCSS `Root` into a CSS-in-JS object
 * @param root The root to convert
 * @returns CSS-in-JS object
 */
export function objectify(root: Root): CssInJs;

/**
 * Parse a CSS-in-JS object into a PostCSS `Root`
 * @param obj The CSS-in-JS to parse
 * @returns A PostCSS `Root`
 */
export function parse(obj: CssInJs): Root;

/**
 * Create a PostCSS processor with a simple API
 * @param plugins Synchronous plugins to use with PostCSS
 * @returns A processor function that accepts (idk) and returns a CSS-in-JS object
 */
export function sync(plugins: AcceptedPlugin[]): (input: CssInJs) => CssInJs;

/**
 * Create a PostCSS processor with a simple API, allowing asynchronous plugins
 * @param plugins Plugins to use with PostCSS
 * @returns A processor function that accepts (idk) and returns a CSS-in-JS object
 */
export function async(plugins: AcceptedPlugin[]): (input: CssInJs) => Promise<CssInJs>;

// Override process method to allow passing CssInJs
// when the parser is the postcss-js parser.
// This lets the postcss-js parser be used
// as long as the object passed to `process` is a CSS-in-JS object
declare module "postcss/lib/processor" {
    class Processor_ {
        process(
            obj: CssInJs,
            opts: Omit<ProcessOptions, "parser"> & { parser: typeof parse },
        ): LazyResult | NoWorkResult;
    }
}
