// forward declarations
declare global {
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ReadableStream {}
    }
}

import { ReactElement } from "react";

/**
 * Render a React element to its initial HTML. This should only be used on the server.
 * React will return an HTML string. You can use this method to generate HTML on the server
 * and send the markup down on the initial request for faster page loads and to allow search
 * engines to crawl your pages for SEO purposes.
 *
 * If you call `ReactDOM.hydrate()` on a node that already has this server-rendered markup,
 * React will preserve it and only attach event handlers, allowing you
 * to have a very performant first-load experience.
 */
export function renderToString(element: ReactElement): string;

/**
 * Render a React element to its initial HTML. Returns a Readable stream that outputs
 * an HTML string. The HTML output by this stream is exactly equal to what
 * `ReactDOMServer.renderToString()` would return.
 */
export function renderToNodeStream(element: ReactElement): NodeJS.ReadableStream;

/**
 * Similar to `renderToString`, except this doesn't create extra DOM attributes
 * such as `data-reactid`, that React uses internally. This is useful if you want
 * to use React as a simple static page generator, as stripping away the extra
 * attributes can save lots of bytes.
 */
export function renderToStaticMarkup(element: ReactElement): string;

/**
 * Similar to `renderToNodeStream`, except this doesn't create extra DOM attributes
 * such as `data-reactid`, that React uses internally. The HTML output by this stream
 * is exactly equal to what `ReactDOMServer.renderToStaticMarkup()` would return.
 */
export function renderToStaticNodeStream(element: ReactElement): NodeJS.ReadableStream;

export const version: string;

export as namespace ReactDOMServer;
