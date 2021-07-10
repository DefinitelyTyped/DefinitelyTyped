// Type definitions for buble 0.20
// Project: https://github.com/bublejs/buble
// Definitions by: Hugo Alliaume <https://github.com/Kocal>
//                 Ye-hyoung Kang <https://github.com/pastelmind>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { SourceMap } from "magic-string";

export interface TransformOptions {
    // source: https://github.com/Rich-Harris/buble/blob/master/src/support.js
    target?: {
        chrome?: 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | undefined;
        firefox?: 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | undefined;
        safari?: 8 | 9 | 10 | 10.1 | 11 | 11.1 | 12 | undefined;
        ie?: 8 | 9 | 10 | 11 | undefined;
        edge?: 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | undefined;
        node?: 0.10 | 0.12 | 4 | 5 | 6 | 8 | 8.3 | 8.7 | 8.10 | undefined;
    } | undefined;

    // used for sourcemaps
    source?: string | undefined; // input
    file?: string | undefined;   // output
    includeContent?: boolean | undefined;

    // custom JSX pragma (https://buble.surge.sh/guide/#jsx)
    jsx?: string | undefined; // default: 'React.createElement'

    // custom `Object.assign` (https://buble.surge.sh/guide/#object-spread-and-rest)
    objectAssign?: string | boolean | undefined;

    // transforms
    transforms?: {
        arrow?: boolean | undefined;
        classes?: boolean | undefined;
        computedProperty?: boolean | undefined;
        conciseMethodProperty?: boolean | undefined;
        dangerousForOf?: boolean | undefined;
        dangerousTaggedTemplateString?: boolean | undefined;
        defaultParameter?: boolean | undefined;
        destructuring?: boolean | undefined;
        exponentiation?: boolean | undefined;
        forOf?: boolean | undefined;
        generator?: boolean | undefined;
        letConst?: boolean | undefined;
        modules?: boolean | undefined;
        numericLiteral?: boolean | undefined;
        objectRestSpread?: boolean | undefined;
        parameterDestructuring?: boolean | undefined;
        reservedProperties?: boolean | undefined;
        spreadRest?: boolean | undefined;
        templateString?: boolean | undefined;
        trailingFunctionCommas?: boolean | undefined;
        unicodeRegExp?: boolean | undefined;
    } | undefined;

    // others
    namedFunctionExpressions?: boolean | undefined;
}

export interface TransformOutput {
    code: string;
    map: SourceMap;
}

export function transform(content: string, options?: TransformOptions): TransformOutput;
