import { BaseModel } from './../BaseModel.d';
export class ProjectIssues extends BaseModel {
    public list(projectId: number | string, params: { page?: number, per_page?: number, [key: string]: any }, fn?: Function): any;
}
