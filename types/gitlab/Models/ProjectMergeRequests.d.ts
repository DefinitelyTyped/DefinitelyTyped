import { BaseModel, TId, DefParams } from '../BaseModel';

export class ProjectMergeRequests extends BaseModel {
    list(projectId: TId, fn?: Function): any;
    list(projectId: TId, params?: DefParams, fn?: Function): any;
    show(projectId: TId, mergerequestId: number, fn?: Function): any;
    add(projectId: TId, sourceBranch: string, targetBranch: string, assigneeId: number, title: string, fn?: Function): any;
    update(projectId: TId, mergerequestId: number, params: object, fn?: Function): any;
    comment(projectId: TId, mergerequestId: number, note: any, fn?: Function): any;
    merge(projectId: TId, mergerequestId: number, params: object, fn?: Function): any;
}
