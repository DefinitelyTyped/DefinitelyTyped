export class BaseModel {
    load(model: string): object;
    get(path: string, fn?: Function): any;
    get(path: string, query?: object, fn?: Function): any;
    delete(path: string, fn?: Function): any;
    post(path: string, data?: object, fn?: Function): any;
    put(path: string, data?: object, fn?: Function): any;
    patch(path: string, data?: object, fn?: Function): any;
}

export interface DefParams {
    page?: number;
    per_page?: number;
    [key: string]: any;
}

export type TId = number | string;
