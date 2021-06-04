export interface IHTTP_METHODS {
    get?: string | string[];
    head?: string | string[];
    post?: string | string[];
    put?: string | string[];
    delete?: string | string[];
    connect?: string | string[];
    options?: string | string[];
    trace?: string | string[];
    patch?: string | string[];
}
export interface ICors {
    get: Function;
    head: Function;
    post: Function;
    put: Function;
    delete: Function;
    connect: Function;
    options: Function;
    trace: Function;
    patch: Function;
}
