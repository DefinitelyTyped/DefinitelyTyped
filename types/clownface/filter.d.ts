import { Literal } from 'rdf-js';
import { FilterCallback } from './';

declare function taggedLiteral(language: string | string[]): FilterCallback<any, any, Literal | Literal[]>;

declare const filters: {
    taggedLiteral: typeof taggedLiteral
};

export = filters;
