export interface StringRoute {
    parse: (url: string) => Record<string, string> | null;
    stringify: (params: Record<string, string>) => string;
}

export interface RegExpRoute {
    parse: (url: string) => { captures: Array<string | undefined> } | null;
}

export type StringRouteRule = RegExp | ((value: string) => boolean);
export type StringRouteRules = Record<string, StringRouteRule>;

export function routeMatcher(route: string, rules?: StringRouteRules): StringRoute;
export function routeMatcher(route: RegExp): RegExpRoute;
