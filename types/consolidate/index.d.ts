// Type definitions for consolidate 0.14
// Project: https://github.com/visionmedia/consolidate.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 Theo Sherry <https://github.com/theosherry>
//                 Nicolas Henry <https://github.com/nicolashenry>
//                 Andrew Leedham <https://github.com/AndrewLeedham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

// Imported from: https://github.com/soywiz/typescript-node-definitions/consolidate.d.ts

/// <reference types="node" />

import Promise = require("bluebird");

declare var cons: Consolidate;

export = cons;

type SupportedTemplateEngines =
    | 'arc-templates'
    | 'atpl'
    | 'bracket'
    | 'dot'
    | 'dust'
    | 'eco'
    | 'ejs'
    | 'ect'
    | 'haml'
    | 'haml-coffee'
    | 'hamlet'
    | 'handlebars'
    | 'hogan'
    | 'htmling'
    | 'jade'
    | 'jazz'
    | 'jqtpl'
    | 'just'
    | 'liquid'
    | 'liquor'
    | 'lodash'
    | 'marko'
    | 'mote'
    | 'mustache'
    | 'nunjucks'
    | 'plates'
    | 'pug'
    | 'qejs'
    | 'ractive'
    | 'razor'
    | 'react'
    | 'slm'
    | 'squirrelly'
    | 'swig'
    | 'teacup'
    | 'templayed'
    | 'toffee'
    | 'twig'
    | 'underscore'
    | 'vash'
    | 'velocityjs'
    | 'walrus'
    | 'whiskers';

type Requires = SupportedTemplateEngines | 'extend' | 'ReactDOM' | 'babel';

type ConsolidateType = {
    [engine in SupportedTemplateEngines]: RendererInterface;
}

type RequiresType = {
    [engine in Requires]: any;
}

interface Consolidate extends ConsolidateType {
    /**
     * expose the instance of the engine
     */
    requires: RequiresType;

    /**
     * Clear the cache.
     *
     * @api public
     */
    clearCache(): void;
}

interface RendererInterface {
    render(path: string, fn: (err: Error, html: string) => any): any;

    render(path: string, options: { cache?: boolean, [otherOptions: string]: any }, fn: (err: Error, html: string) => any): any;

    render(path: string, options?: { cache?: boolean, [otherOptions: string]: any }): Promise<string>;

    (path: string, fn: (err: Error, html: string) => any): any;

    (path: string, options: { cache?: boolean, [otherOptions: string]: any }, fn: (err: Error, html: string) => any): any;

    (path: string, options?: { cache?: boolean, [otherOptions: string]: any }): Promise<string>;
}
