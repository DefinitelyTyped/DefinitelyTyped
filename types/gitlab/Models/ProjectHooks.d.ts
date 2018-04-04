import { BaseModel, TId } from '../BaseModel';

interface IAddParam {
    url: string;
    [key: string]: any;
}

type HooksCb = (hooks: any[]) => any;

export class ProjectHooks extends BaseModel {
    list(projectId: TId, fn?: HooksCb): any;
    show(projectId: TId, hookId: number, fn?: Function): any;
    add(projectId: TId, params: IAddParam | string, fn?: Function): any;
    update(projectId: TId, hookId: number, url: string, fn?: Function): any;
    remove(projectId: TId, hookId: number, fn?: Function): any;
}
