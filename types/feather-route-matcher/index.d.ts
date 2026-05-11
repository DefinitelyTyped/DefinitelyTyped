interface RouteConfig<T> {
    [path: string]: T;
}

interface Match<T> {
    value: T;
    url: string;
    params: { [key: string]: string } | null;
}

interface Matcher<T> {
    (path: string): Match<T>;
}

declare function createMatcher<T>(config: RouteConfig<T>): Matcher<T>;

export { createMatcher as default };
