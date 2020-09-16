import { Quad, BaseQuad } from 'rdf-js';
import { Query, QueryInit } from '.';
import { ResultRow } from './ResultParser';

declare namespace ParsingQuery {
    type ParsingQuery<Q extends BaseQuad = Quad> = Query<boolean, Q[], ResultRow[], void>;
}

interface ParsingQuery<Q extends BaseQuad = Quad> extends ParsingQuery.ParsingQuery<Q> {}

// tslint:disable-next-line no-unnecessary-class
declare class ParsingQuery<Q extends BaseQuad = Quad> {
    constructor(options: QueryInit);
}

export = ParsingQuery;
