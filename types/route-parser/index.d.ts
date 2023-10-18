declare class Route<TParams extends {} = { [i: string]: any }> {
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
    match(pathname: string): { [k in keyof TParams]: string } | false;

    /**
     * Reverse a route specification to a path, returning false if it can't be
     * fulfilled
     * @example
     * var route = new Route('/:one/:two')
     * route.reverse({one: 'foo', two: 'bar'}) -> '/foo/bar'
     */
    reverse(params: TParams): string | false;
}

declare namespace Route {}
export = Route;
