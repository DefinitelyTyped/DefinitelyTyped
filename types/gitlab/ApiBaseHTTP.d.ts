import { ApiBase } from './ApiBase.d';

export class ApiBaseHTTP extends ApiBase {
    public prepare_opts<T>(opts: T): T;
    public fn_wrapper(fn: Function): Function;
    public get(path: string, fn?: Function): any;
    public get(path: string, query?: object, fn?: Function): any;
    public delete(path: string, fn?: Function): any;
    public post(path: string, data?: object, fn?: Function): any;
    public put(path: string, data?: object, fn?: Function): any;
    public patch(path: string, data?: object, fn?: Function): any;
}
