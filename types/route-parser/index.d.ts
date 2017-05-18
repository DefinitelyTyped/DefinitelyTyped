// Type definitions for route-parser 0.0
// Project: https://github.com/rcs/route-parser
// Definitions by: Ian Ker-Seymer <https://github.com/ianks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Route {
    /**
     * Represents a route
     * @example
     * var route = new Route('/:foo/:bar');
     * @example
     * var route = new Route('/:foo/:bar');
     */
    constructor(spec: string);

    /**
     * Match a path against this route, returning the matched parameters if
     * it matches, false if not.
     * @example
     * var route = new Route('/this/is/my/route')
     * route.match('/this/is/my/route') // -> {}
     * @example
     * var route = new Route('/:one/:two')
     * route.match('/foo/bar/') // -> {one: 'foo', two: 'bar'}
     */
    match(pathname: string): { [i: string]: string } | boolean;

    /**
     * Reverse a route specification to a path, returning false if it can't be
     * fulfilled
     * @example
     * var route = new Route('/:one/:two')
     * route.reverse({one: 'foo', two: 'bar'}) -> '/foo/bar'
     */
    reverse(params: { [i: string]: any } ): string | boolean;
}

declare namespace Route {}
export = Route;
