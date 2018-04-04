import { BaseModel, TId, IDefParams } from '../BaseModel.d';

interface IShowBuildParam {
    projectId: TId;
    [key: string]: any;
}

export class ProjectBuilds extends BaseModel {
    public listBuilds(projectId: TId, fn?: Function): any;
    public listBuilds(projectId: TId, params?: IDefParams, fn?: Function): any;
    public showBuild(projectId: TId, buildId: string, fn?: Function): any;
    public triggerBuild(params?: IShowBuildParam, fn?: Function): any;
}
