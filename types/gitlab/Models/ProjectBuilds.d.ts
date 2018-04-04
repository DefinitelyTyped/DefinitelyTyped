import { BaseModel } from './../BaseModel.d';
export class ProjectBuilds extends BaseModel {
    public listBuilds(projectId: number | string, params?: { page?: number, per_page?: number, [key: string]: any }, fn?: Function): any;
    public showBuild(projectId: number | string, buildId: string, fn?: Function): any;
    public showBuild(params?: { projectId: number | string}, fn?: Function): any;
}
