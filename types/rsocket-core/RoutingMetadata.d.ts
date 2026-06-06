export class RoutingMetadata implements Iterable<string> {
    constructor(buffer: Buffer);

    [Symbol.iterator](): Iterator<string>;
}

/**
 * Encode given set of routes into {@link Buffer} following the <a href="https://github.com/rsocket/rsocket/blob/master/Extensions/Routing.md">Routing Metadata Layout</a>
 *
 * @param routes non-empty set of routes
 * @returns buffer with encoded content
 */
export function encodeRoutes(...routes: string[]): Buffer;

/**
 * Encode given route into {@link Buffer} following the <a href="https://github.com/rsocket/rsocket/blob/master/Extensions/Routing.md">Routing Metadata Layout</a>
 *
 * @param route
 * @returns buffer with encoded content
 */
export function encodeRoute(route: string): Buffer;

export function decodeRoutes(routeMetadataBuffer: Buffer): Iterator<string>;
