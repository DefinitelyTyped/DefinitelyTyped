// Type definitions for mermaid 8.2
// Project: https://github.com/knsv/mermaid#readme
// Definitions by: Geoffrey Gilmore <https://github.com/ggilmore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import mermaidAPI from "./mermaidAPI";

/**
 * ## init
 * Function that goes through the document to find the chart definitions in there and render them.
 *
 * The function tags the processed attributes with the attribute data-processed and ignores found elements with the
 * attribute already set. This way the init function can be triggered several times.
 *
 * Optionally, `init` can accept in the second argument one of the following:
 * - a DOM Node
 * - an array of DOM nodes (as would come from a jQuery selector)
 * - a W3C selector, a la `.mermaid`
 *
 * ```mermaid
 * graph LR;
 *  a(Find elements)-->b{Processed}
 *  b-->|Yes|c(Leave element)
 *  b-->|No |d(Transform)
 * ```
 * Renders the mermaid diagrams
 * @param nodes a css selector or an array of nodes
 */
declare function init(nodes: string | Node | NodeList): void;

declare function initialize(config: mermaidAPI.Config): void;

/**
 * ##contentLoaded
 * Callback function that is called when page is loaded. This functions fetches configuration for mermaid rendering and
 * calls init for rendering the mermaid diagrams on the page.
 */
declare function contentLoaded(): void;

export interface Mermaid {
    startOnLoad: boolean;
    htmlLabels: boolean;

    mermaidAPI: typeof mermaidAPI;
    parse: typeof mermaidAPI.parse;
    render: typeof mermaidAPI.render;

    init: typeof init;
    initialize: typeof initialize;

    contentLoaded: typeof contentLoaded;
}

declare const mermaid: Mermaid;

export default mermaid;

export as namespace mermaid;
