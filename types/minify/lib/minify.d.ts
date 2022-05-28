import cleanCSS = require('clean-css');
import htmlMinifier = require('html-minifier-terser');
import terser = require('terser');

import css from './css';
import html from './html';
import img from './img';
import js from './js';

// supported extensions
export type Ext = 'js' | 'html' | 'css';

interface Minify {
    /**
     * A minifier of js, css, html and img files.
     * @async
     */
    (file: string, options?: Options): Promise<string>;
    js: typeof js;
    html: typeof html;
    css: typeof css;
    img: typeof img;
}

export const minify: Minify;

/**
 * Full documentation for options that each file type accepts
 * can be found on the pages of the libraries used by minify to process the files
 */
export interface Options {
    /**
     * see {@link https://github.com/kangax/html-minifier}
     */
    html?: htmlMinifier.Options | undefined;
    /**
     * see {@link https://github.com/jakubpawlowicz/clean-css}
     */
    css?: cleanCSS.Options | undefined;
    /**
     * see {@link https://github.com/terser/terser}
     */
    js?: terser.MinifyOptions | undefined;
    /**
     * see {@link https://github.com/Filirom1/css-base64-images}
     */
    img?:
        | {
              /**
               * bigger images are not base64 in the CSS
               * @default 4096
               */
              maxSize?: number | undefined;
          }
        | undefined;
}

// prevent Minify interface export
export {};
