import { Query, QueryInit } from ".";

declare namespace RawQuery {
    type RawQuery = Query<Response, Response, Response, Response>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RawQuery extends RawQuery.RawQuery {}

// tslint:disable-next-line no-unnecessary-class
declare class RawQuery {
    constructor(options: QueryInit);
}

export = RawQuery;
