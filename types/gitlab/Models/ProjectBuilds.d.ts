import { BaseModel, TId, DefParams } from '../BaseModel';

interface IShowBuildParam {
    projectId: TId;
    [key: string]: any;
}

export class ProjectBuilds extends BaseModel {
    listBuilds(projectId: TId, fn?: Function): any;
    listBuilds(projectId: TId, params?: DefParams, fn?: Function): any;
    showBuild(projectId: TId, buildId: string, fn?: Function): any;
    triggerBuild(params?: IShowBuildParam, fn?: Function): any;
}
