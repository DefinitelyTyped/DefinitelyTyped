import { ApiBase } from './ApiBase';

export class ApiBaseHTTP extends ApiBase {
    prepare_opts<T>(opts: T): T;
    fn_wrapper<T extends Function>(fn: T): T;
    get(path: string, fn?: Function): any;
    get(path: string, query?: object, fn?: Function): any;
    delete(path: string, fn?: Function): any;
    post(path: string, data?: object, fn?: Function): any;
    put(path: string, data?: object, fn?: Function): any;
    patch(path: string, data?: object, fn?: Function): any;
}
