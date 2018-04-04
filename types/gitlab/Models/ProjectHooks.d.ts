import { BaseModel } from './../BaseModel.d';
export class ProjectHooks extends BaseModel {
    public list(projectId: number | string, fn?: Function): any;
    public show(projectId: number | string, hookId: number, fn?: Function): any;
    public add(projectId: number | string, params: object|string, fn?: Function): any;
    public update(projectId: number | string, hookId: number, url: any, fn?: Function): any;
    public remove(projectId: number | string, hookId: number, fn?: Function): any;
}
