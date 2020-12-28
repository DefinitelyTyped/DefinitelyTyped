// Type definitions for classify-poetry 0.2
// Project: https://github.com/ChristianMurphy/classify-poetry#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8
export interface ClassifierFunction {
    (str: string): boolean;
}
export const all: ClassifierFunction[];
export function classifyPoetry(str: string): string[];
export import abc = require('./classifiers/abc');
export import couplet = require('./classifiers/couplet');
export import haiku = require('./classifiers/haiku');
export import limerick = require('./classifiers/limerick');
export import quatrain = require('./classifiers/quatrain');
export import sonnet = require('./classifiers/sonnet');
export import tanka = require('./classifiers/tanka');
export import terzaRima = require('./classifiers/terzaRima');
