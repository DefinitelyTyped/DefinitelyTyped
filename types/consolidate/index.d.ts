// Type definitions for consolidate
// Project: https://github.com/visionmedia/consolidate.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, Theo Sherry <https://github.com/theosherry>, Nicolas Henry <https://github.com/nicolashenry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Imported from: https://github.com/soywiz/typescript-node-definitions/consolidate.d.ts

/// <reference types="node" />
/// <reference types="bluebird" />


declare var cons: Consolidate;

export = cons;

interface Consolidate {
    /**
         * expose the instance of the engine
   */
    requires: Object;

    /**
     * Clear the cache.
     *
     * @api public
     */
    clearCache(): void;
    // template engines
    atpl: RendererInterface;
    dot: RendererInterface;
    dust: RendererInterface;
    eco: RendererInterface;
    ejs: RendererInterface;
    ect: RendererInterface;
    haml: RendererInterface;
    // TODO figure out how to do haml-coffee
    hamlet: RendererInterface;
    handlebars: RendererInterface;
    hogan: RendererInterface;
    htmling: RendererInterface;
    jade: RendererInterface;
    jazz: RendererInterface;
    jqtpl: RendererInterface;
    just: RendererInterface;
    liquid: RendererInterface;
    liquor: RendererInterface;
    lodash: RendererInterface;
    mote: RendererInterface;
    mustache: RendererInterface;
    nunjucks: RendererInterface;
    pug: RendererInterface;
    qejs: RendererInterface;
    ractive: RendererInterface;
    react: RendererInterface;
    swig: RendererInterface;
    templayed: RendererInterface;
    toffee: RendererInterface;
    underscore: RendererInterface;
    walrus: RendererInterface;
    whiskers: RendererInterface;
}

interface RendererInterface {
    render(path: string, fn: (err: Error, html: string) => any): any;

    render(path: string, options: { cache?: boolean, [otherOptions: string]: any }, fn: (err: Error, html: string) => any): any;

    render(path: string, options?: { cache?: boolean, [otherOptions: string]: any }): Promise<string>;

    (path: string, fn: (err: Error, html: string) => any): any;

    (path: string, options: { cache?: boolean, [otherOptions: string]: any }, fn: (err: Error, html: string) => any): any;

    (path: string, options?: { cache?: boolean, [otherOptions: string]: any }): Promise<string>;
}
