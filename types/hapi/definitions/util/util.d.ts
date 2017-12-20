export namespace Util {

    export interface Dictionary<T> {
        [key: string]: T;
    }

    export type HTTP_METHODS_PARTIAL_LOWERCASE = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options';
    export type HTTP_METHODS_PARTIAL = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | HTTP_METHODS_PARTIAL_LOWERCASE;
    export type HTTP_METHODS = 'HEAD' | 'head' | HTTP_METHODS_PARTIAL;

}
