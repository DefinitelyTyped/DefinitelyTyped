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
        chrome?: 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71;
        firefox?: 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64;
        safari?: 8 | 9 | 10 | 10.1 | 11 | 11.1 | 12;
        ie?: 8 | 9 | 10 | 11;
        edge?: 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;
        node?: 0.10 | 0.12 | 4 | 5 | 6 | 8 | 8.3 | 8.7 | 8.10;
    };

    // used for sourcemaps
    source?: string; // input
    file?: string;   // output
    includeContent?: boolean;

    // custom JSX pragma (https://buble.surge.sh/guide/#jsx)
    jsx?: string; // default: 'React.createElement'

    // custom `Object.assign` (https://buble.surge.sh/guide/#object-spread-and-rest)
    objectAssign?: string | boolean;

    // transforms
    transforms?: {
        arrow?: boolean;
        classes?: boolean;
        computedProperty?: boolean;
        conciseMethodProperty?: boolean;
        dangerousForOf?: boolean;
        dangerousTaggedTemplateString?: boolean;
        defaultParameter?: boolean;
        destructuring?: boolean;
        exponentiation?: boolean;
        forOf?: boolean;
        generator?: boolean;
        letConst?: boolean;
        modules?: boolean;
        numericLiteral?: boolean;
        objectRestSpread?: boolean;
        parameterDestructuring?: boolean;
        reservedProperties?: boolean;
        spreadRest?: boolean;
        templateString?: boolean;
        trailingFunctionCommas?: boolean;
        unicodeRegExp?: boolean;
    };

    // others
    namedFunctionExpressions?: boolean;
}

export interface TransformOutput {
    code: string;
    map: SourceMap;
}

export function transform(content: string, options?: TransformOptions): TransformOutput;
