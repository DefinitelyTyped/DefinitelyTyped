declare module Match {
    interface Matcher<T> { _meteorCheckMatcherBrand: void }
    export type Pattern =
        typeof String |
        typeof Number |
        typeof Boolean |
        typeof Object |
        typeof Function |
        (new (...args: any[]) => any) |
        undefined | null | string | number | boolean |
        [Pattern] |
        {[key: string]: Pattern} |
        Matcher<any>;
    export type PatternMatch<T extends Pattern> =
        T extends Matcher<infer U> ? U :
        T extends typeof String ? string :
        T extends typeof Number ? number :
        T extends typeof Boolean ? boolean :
        T extends typeof Object ? object :
        T extends typeof Function ? Function :
        T extends undefined | null | string | number | boolean ? T :
        T extends new (...args: any) => infer U ? U :
        T extends [Pattern] ? PatternMatch<T[0]>[] :
        T extends {[key: string]: Pattern} ? {[K in keyof T]: PatternMatch<T[K]>} :
        unknown;

    var Any: Matcher<any>;
    var Integer: Matcher<number>;

    function Maybe<T extends Pattern>(pattern: T): Matcher<PatternMatch<T> | undefined | null>;

    function Optional<T extends Pattern>(pattern: T): Matcher<PatternMatch<T> | undefined>;

    function ObjectIncluding<T extends {[key: string]: Pattern}>(dico: T): Matcher<PatternMatch<T>>;

    function OneOf<T extends Pattern>(...patterns: T[]): Matcher<PatternMatch<T>>;

    function Where(condition: (val: any) => boolean): Matcher<any>;

    function test<T extends Pattern>(value: any, pattern: T): value is PatternMatch<T>;
}

declare function check<T extends Match.Pattern>(value: any, pattern: T): asserts value is Match.PatternMatch<T>;
