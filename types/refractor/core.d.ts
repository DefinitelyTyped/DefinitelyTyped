import * as Prism from 'prismjs';

export interface RefractorSyntax {
    displayName: string;
    aliases: string[];
    (prism: typeof Prism): void;
}

export namespace AST {
    namespace Unist {
        interface Node {
            type: string;
        }

        interface Parent extends Node {
            children: RefractorNode[];
        }

        interface Text extends Node {
            value: string;
        }
    }

    interface Properties {
        className?: string[];
        [key: string]: any;
    }

    interface Element extends Unist.Parent {
        type: 'element';
        tagName: string;
        properties: Properties;
    }

    interface Text extends Unist.Text {
        type: 'text';
    }
}

export type RefractorNode = AST.Element | AST.Text;

/**
 * Register a syntax. Needed if you’re using refractor/core.js.
 *
 * ```ts
 * import refractor = require('refractor/core')
 * import markdown = require('refractor/lang/markdown')
 *
 * refractor.register(markdown)
 * console.log(refractor.highlight('*Emphasis*', 'markdown'))
 *
 * // => [ { type: 'element', tagName: 'span', properties: [Object], children: [Array] } ]
 * ```
 *
 * @param syntax
 */
export function register(syntax: RefractorSyntax): void;

/**
 * Parse value (string) according to the language (name or alias) syntax.
 *
 * @returns Virtual nodes representing the highlighted value (Array.<Node>).
 *
 * ```ts
 * import refractor = require('refractor/core')
 * console.log(refractor.highlight('em { color: red }', 'css'))
 * ```
 *
 * Yields:
 *
 * ```
 * [
 *   { type: 'element',
 *   tagName: 'span',
 *   properties: [Object],
 *   children: [Array] },
 *   { type: 'text', value: ' ' },
 *   // ...
 *   { type: 'text', value: ' red ' },
 *   { type: 'element',
 *   tagName: 'span',
 *   properties: [Object],
 *   children: [Array] }
 * ]
 * ```
 */
export function highlight(value: string, name: string): RefractorNode[];

/**
 * Check if a language (name or alias) is registered.
 *
 * ```ts
 * import refractor = require('refractor/core')
 * import markdown = require('refractor/lang/markdown')
 *
 * console.log(registered('markdown'))
 *
 * register(markdown)
 *
 * console.log(registered('markdown'))
 *
 * // =>  true | false
 * ```
 */
export function registered(name: string): boolean;

/**
 * List all registered languages (names and aliases).
 *
 * ```ts
 * import refractor = require('refractor/core')
 * import markdown = require('refractor/lang/markdown')
 *
 * console.log(refractor.listLanguages())
 *
 * refractor.register(markdown)
 *
 * console.log(refractor.listLanguages())
 * ```
 *
 * Yields:
 *
 * ```
 * [ 'markup',
 *   'xml',
 *   'html',
 *   'mathml',
 *   'svg',
 *   'css',
 *   'clike',
 *   'javascript',
 *   'js' ]
 * [ 'markup',
 *   'xml',
 *   'html',
 *   'mathml',
 *   'svg',
 *   'css',
 *   'clike',
 *   'javascript',
 *   'js',
 *   'markdown' ]
 * ```
 */
export function listLanguages(): string[];
