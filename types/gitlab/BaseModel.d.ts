export class BaseModel {
    public load(model: string): object;
    public get(): any
    public post(): any
    public put(): any
    public delete(): any
    public debug(): any
}
export interface PageDefualtParams {
    page?: number
    per_page?: number
    [key: string]: any
}
export type TypeNumOrStrId = number | string;
