// Type definitions for feather-route-matcher 3.1
// Project: https://github.com/henrikjoreteg/feather-route-matcher
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RouteConfig<T> {
    [path: string]: T;
}

interface Match<T> {
    page: T;
    url: string;
    params: { [key: string]: string } | null;
}

interface Matcher<T> {
    (path: string): Match<T>;
}

declare function createMatcher<T>(config: RouteConfig<T>): Matcher<T>;

export { createMatcher as default };
