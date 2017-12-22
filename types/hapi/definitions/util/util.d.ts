export namespace Util {
    interface Dictionary<T> {
        [key: string]: T;
    }
    type HTTP_METHODS_PARTIAL_LOWERCASE = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options';
    type HTTP_METHODS_PARTIAL = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | HTTP_METHODS_PARTIAL_LOWERCASE;
    type HTTP_METHODS = 'HEAD' | 'head' | HTTP_METHODS_PARTIAL;
}
