import { Connection, Callback } from '../connection';
import { Query } from '../query';
import { Stream } from 'stream';

interface BatchRequestParams extends RequestParams {
    method: string;
    url: string;
    richInput?: string | undefined;
}

interface BatchRequestResult {
    statusCode: string;
    result: RequestResult;
}

interface BatchRequestResults {
    hasError: boolean;
    results: BatchRequestResult[];
}

interface RequestParams {
    method: string;
    url: string;
    body?: string | undefined;
}

export class RequestResult {}

export class Request<T> implements PromiseLike<T> {
    constructor(chatter: Chatter, params: RequestParams);

    batchParams(): BatchRequestParams;

    promise(): Promise<T>;

    stream(): Stream;

    then<TResult1, TResult2>(
        onfulfilled?: ((value: T) => PromiseLike<TResult1> | TResult1) | null,
        onrejected?: ((reason: any) => PromiseLike<TResult2> | TResult2) | null,
    ): Promise<TResult1 | TResult2>;

    finally(onfinally?: () => void): Promise<T>;

    thenCall(callback?: (err: Error, records: T) => void): Query<T>;
}

export class Resource<T> extends Request<T> {
    constructor(chatter: Chatter, url: string, queryParams?: object);

    create(data: object | string, callback?: Callback<T>): Request<T>;

    del(callback?: Callback<T>): Request<T>;

    delete(callback?: Callback<T>): Request<T>;

    retrieve(callback?: Callback<T>): Request<T>;

    update(data: object, callback?: Callback<T>): Request<T>;
}

export class Chatter {
    constructor(conn: Connection);

    batch(callback?: Callback<BatchRequestResults>): Promise<BatchRequestResults>;

    request(params: RequestParams, callback?: Callback<Request<RequestResult>>): Request<RequestResult>;

    resource(url: string, queryParams?: object): Resource<RequestResult>;
}
