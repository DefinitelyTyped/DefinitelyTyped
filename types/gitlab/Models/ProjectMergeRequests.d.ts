import { BaseModel, TId, IDefParams } from '../BaseModel.d';

export class ProjectMergeRequests extends BaseModel {
    public list(projectId: TId, fn?: Function): any;
    public list(projectId: TId, params?: IDefParams, fn?: Function): any;
    public show(projectId: TId, mergerequestId: number, fn?: Function): any;
    public add(projectId: TId, sourceBranch: string, targetBranch: string, assigneeId: number, title: string, fn?: Function): any;
    public update(projectId: TId, mergerequestId: number, params: object, fn?: Function): any;
    public comment(projectId: TId, mergerequestId: number, note: any, fn?: Function): any;
    public merge(projectId: TId, mergerequestId: number, params: object, fn?: Function): any;
}
