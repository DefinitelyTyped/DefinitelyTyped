import Element from "./element";

export default class Matcher {
    constructor(
        pattern:
            | string
            | RegExp
            | {
                  attributes?: Record<string, string | RegExp | boolean>;
                  classes?: string | RegExp | Array<string | RegExp>;
                  name?: string | RegExp;
                  styles: Record<string, string>;
              },
    );
    add(
        ...pattern: Array<{
            attributes?: Record<string, string | RegExp | boolean>;
            classes?: string | RegExp | Array<string | RegExp>;
            name?: string | RegExp;
            styles: Record<string, string>;
        }>
    ): void;
    getElementName(): string | null;
    match(
        element: Element,
    ): {
        element: Element;
        match: { name?: boolean; attribute?: string[]; classes?: string[]; styles?: Array<[string, string]> };
    } | null;
    matchAll(
        element: Element,
    ): Array<{
        element: Element;
        match: { name?: boolean; attribute?: string[]; classes?: string[]; styles?: Array<[string, string]> };
    }> | null;
}

export type MatcherPattern =
    | ((
          element: Element,
      ) => null | { name?: boolean; attribute?: string[]; classes?: string[]; styles?: Array<[string, string]> })
    | string
    | RegExp
    | {
          attributes?: Record<string, string | RegExp | boolean>;
          classes?: string | RegExp | Array<string | RegExp>;
          name?: string | RegExp;
          styles?: Record<string, string | RegExp>;
      };
