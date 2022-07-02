// Type definitions for @vxna/mini-html-webpack-template 2.0
// Project: https://github.com/vxna/mini-html-webpack-template#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { PluginContext } from 'mini-html-webpack-plugin';

/**
 * Template for `mini-html-webpack-plugin` that extends default features with useful subset of options
 */
declare function template(ctx: PluginContext): string;

/**
 * Minimum viable template for mini-html-webpack-plugin
 */
export = template;
