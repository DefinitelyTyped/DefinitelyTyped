///<reference path="./index.d.ts"/>

/**
 * An markdown file which exports a JSX component.
 */
declare module '*.md' {
    import mdx = require('*.mdx');
    export = mdx;
}
