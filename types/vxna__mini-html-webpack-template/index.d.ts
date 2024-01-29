import { PluginContext } from "mini-html-webpack-plugin";

/**
 * Template for `mini-html-webpack-plugin` that extends default features with useful subset of options
 */
declare function template(ctx: PluginContext): string;

/**
 * Minimum viable template for mini-html-webpack-plugin
 */
export = template;
