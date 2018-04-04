import { BaseModel, TId } from '../BaseModel.d';

interface IShowFileParams {
    file_path: string;
    ref?: any;
    file_id?: any;
    [key: string]: any;
}

interface IAddTagParams {
    id: TId;
    tag_name: string;
    ref: string;
    message?: string;
    release_description?: string;
}

export class ProjectRepository extends BaseModel {
    public listBranches(projectId: TId, fn?: Function): any;
    public showBranch(projectId: TId, branchId: string, fn?: Function): any;
    public protectBranch(projectId: TId, branchId: string, params: object, fn?: Function): any;
    public unprotectBranch(projectId: TId, branchId: string, fn?: Function): any;
    public createBranch(params: object, fn?: Function): any;
    public deleteBranch(projectId: TId, branchId: string, fn?: Function): any;
    public addTag(params: IAddTagParams, fn?: Function): any;
    public deleteTag(projectId: TId, tagName: string, fn?: Function): any;
    public showTag(projectId: TId, tagName: string, fn?: Function): any;
    public listTags(projectId: TId, fn?: Function): any;
    public listCommits(projectId: TId, fn?: Function): any;
    public showCommit(projectId: TId, sha: string, fn?: Function): any;
    public diffCommit(projectId: TId, sha: string, fn?: Function): any;
    public listTree(projectId: TId, fn?: Function): any;
    public listTree(projectId: TId, params?: object, fn?: Function): any;
    public showFile(projectId: TId, fn?: Function): any;
    public showFile(projectId: TId, params?: IShowFileParams, fn?: Function): any;
    public createFile(params?: object, fn?: Function): any;
    public updateFile(params?: object, fn?: Function): any;
    public compare(params?: object, fn?: Function): any;
}
