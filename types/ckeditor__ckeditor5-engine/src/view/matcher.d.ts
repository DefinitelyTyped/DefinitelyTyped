import Element from './element';

export default class Matcher {
    constructor(...pattern: MatcherPattern[]);
    add(...pattern: MatcherPattern[]): void;
    getElementName(): string | null;
    match(...element: Element[]): {
        element: Element;
        pattern: MatcherPattern;
        match: {
            name?: boolean | undefined;
            attribute?: string[] | undefined;
            classes?: string[] | undefined;
            styles?: Array<[string, string]> | undefined;
        };
    } | null;
    matchAll(...element: Element[]): Array<{
        element: Element;
        match: {
            name?: boolean | undefined;
            attribute?: string[] | undefined;
            classes?: string[] | undefined;
            styles?: Array<[string, string]> | undefined;
        };
    }> | null;
}

export type MatcherPattern =
    | ((element: Element) => void | {
          name?: boolean | undefined;
          attribute?: string[] | undefined;
          classes?: string[] | undefined;
          styles?: Array<[string, string]> | undefined;
      })
    | string
    | RegExp
    | {
          attributes?:
              | Array<{
                    key: string | RegExp;
                    value: string | RegExp | boolean;
                }>
              | boolean
              | string
              | RegExp
              | Array<string | RegExp>
              | Record<string, string | RegExp | boolean | number>
              | undefined;
          classes?:
              | Array<{
                    key: string | RegExp;
                    value: boolean | string | RegExp;
                }>
              | boolean
              | string
              | RegExp
              | Record<string, boolean>
              | Array<string | RegExp>
              | undefined;
          name?: string | RegExp | undefined;
          styles?: RegExp | string | boolean | Record<string, string | RegExp | boolean> | undefined;
      };
