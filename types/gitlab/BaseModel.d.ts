export class BaseModel {
    public load(model: string): object;
    public get(path: string, fn?: Function): any;
    public get(path: string, query?: object, fn?: Function): any;
    public delete(path: string, fn?: Function): any;
    public post(path: string, data?: object, fn?: Function): any;
    public put(path: string, data?: object, fn?: Function): any;
    public patch(path: string, data?: object, fn?: Function): any;
}

export interface IDefParams {
    page?: number;
    per_page?: number;
    [key: string]: any;
}

export type TId = number | string;
