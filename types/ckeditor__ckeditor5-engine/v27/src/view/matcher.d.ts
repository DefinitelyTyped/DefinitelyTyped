import Element from "./element";

export default class Matcher {
    constructor(
        pattern:
            | string
            | RegExp
            | {
                  attributes?: Record<string, string | RegExp | boolean> | undefined;
                  classes?: string | RegExp | Array<string | RegExp> | undefined;
                  name?: string | RegExp | undefined;
                  styles: Record<string, string>;
              },
    );
    add(
        ...pattern: Array<{
            attributes?: Record<string, string | RegExp | boolean> | undefined;
            classes?: string | RegExp | Array<string | RegExp> | undefined;
            name?: string | RegExp | undefined;
            styles: Record<string, string>;
        }>
    ): void;
    getElementName(): string | null;
    match(
        element: Element,
    ): {
        element: Element;
        match: { name?: boolean | undefined; attribute?: string[] | undefined; classes?: string[] | undefined; styles?: Array<[string, string]> | undefined };
    } | null;
    matchAll(
        element: Element,
    ): Array<{
        element: Element;
        match: { name?: boolean | undefined; attribute?: string[] | undefined; classes?: string[] | undefined; styles?: Array<[string, string]> | undefined };
    }> | null;
}

export type MatcherPattern =
    | ((
          element: Element,
      ) => null | { name?: boolean | undefined; attribute?: string[] | undefined; classes?: string[] | undefined; styles?: Array<[string, string]> | undefined })
    | string
    | RegExp
    | {
          attributes?: Record<string, string | RegExp | boolean> | undefined;
          classes?: string | RegExp | Array<string | RegExp> | undefined;
          name?: string | RegExp | undefined;
          styles?: Record<string, string | RegExp> | undefined;
      };
