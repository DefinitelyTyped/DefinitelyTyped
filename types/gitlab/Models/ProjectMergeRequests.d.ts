import { BaseModel } from './../BaseModel.d';
export class ProjectMergeRequests extends BaseModel {
    public list(projectId: number | string, params: { page?: number, per_page?: number, [key: string]: any }, fn?: Function): any;
    public show(projectId: number | string, mergerequestId: number, fn?: Function): any;
    public add(projectId: number | string, sourceBranch: any, targetBranch: any, assigneeId: number, title: any, fn?: Function): any;
    public update(projectId: number | string, mergerequestId: number, params: object, fn?: Function): any;
    public comment(projectId: number | string, mergerequestId: number, note: any, fn?: Function): any;
    public merge(projectId: number | string, mergerequestId: number, params: object, fn?: Function): any;
}
