import { BaseQuad, Quad } from 'rdf-js';
import * as SparqlHttp from '.';

interface BaseClient<TQuery extends SparqlHttp.Query, Q extends BaseQuad, TStore extends SparqlHttp.Store<Q>> extends SparqlHttp.Client<TQuery, Q, TStore> {}

// tslint:disable-next-line no-unnecessary-class
declare class BaseClient<TQuery extends SparqlHttp.Query, Q extends BaseQuad = Quad, TStore extends SparqlHttp.Store<Q> = never> {
    constructor(options: SparqlHttp.ClientOptions<TQuery, Q, TStore>);
}

export = BaseClient;
