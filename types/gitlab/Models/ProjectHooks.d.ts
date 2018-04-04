import { BaseModel, TId } from '../BaseModel.d';

interface IAddParam {
    url: string;
    [key: string]: any;
}

export class ProjectHooks extends BaseModel {
    public list(projectId: TId, fn?: Function): any;
    public show(projectId: TId, hookId: number, fn?: Function): any;
    public add(projectId: TId, params: IAddParam | string, fn?: Function): any;
    public update(projectId: TId, hookId: number, url: any, fn?: Function): any;
    public remove(projectId: TId, hookId: number, fn?: Function): any;
}
