import { ResourceType, ResourceTiming } from './';
import { Response } from './response';
import { Frame } from './frame';

/**
 * Request class represents requests which are sent by a page.
 */
export class Request {
    /**
     * An object with HTTP headers associated with the request. All header names are
     * lower-case.
     * @returns The headers object.
     */
    allHeaders(): Record<string, string>;

    /**
     * @returns the Frame that initiated this request
     */
    frame(): Frame;

    /**
     * An object with HTTP headers associated with the request. All header names are
     * lower-case.
     * @returns An object with HTTP headers associated with the request.
     */
    headers(): Record<string, string>;

    /**
     * An array with all the request HTTP headers. Unlike `Request.allHeaders()`,
     * header names are not lower-cased. Headers with multiple entries, such as
     * `Set-Cookie`, appear in the array multiple times.
     * @returns An array of all the request HTTP headers.
     */
    headersArray(): Array<{ name: string; value: string }>;

    /**
     * Retuns the value of the header matching the name. The name is case insensitive.
     * @param name Header name to retrieve value for.
     * @returns The value of the header matching the name.
     */
    headerValue(name: string): string | null;

    /**
     * @returns a boolean stating whether the request is for a navigation
     */
    isNavigationRequest(): boolean;

    /**
     * Request's method (GET, POST, etc.)
     * @returns request's method name
     */
    method(): string;

    /**
     * Contains the request's post body, if any.
     * @returns request's post body
     */
    postData(): string;

    /**
     * Request's post body in a binary form, if any.
     * @returns an ArrayBuffer with request's post data
     */
    postDataBuffer(): ArrayBuffer | null;

    /**
     * Contains the request's resource type as it was perceived by the rendering engine.
     * ResourceType will be one of the following: `document`, `stylesheet`, `image`,
     * `media`, `font`, `script`, `texttrack`, `xhr`, `fetch`, `eventsource`,
     * `websocket`, `manifest`, `other`.
     * @returns resource type name
     */
    resourceType(): ResourceType;

    /**
     * Returns the matching `Response` object, or `null` if the response was not received
     * due to error.
     * @returns The `Response` object, or `null` if the response was not received due to error.
     */
    response(): Response | null;

    /**
     * Returns resource size information for given request.
     * @returns Resource size information for given request.
     */
    size(): { body: number; headers: number };

    /**
     * Returns resource timing information for given request. Most of the timing values
     * become available upon the response, `responseEnd` becomes available when request
     * finishes.
     * @returns Resource timing information for given request.
     */
    timing(): ResourceTiming;

    /**
     * URL of the request.
     * @returns request URL
     */
    url(): string;
}
