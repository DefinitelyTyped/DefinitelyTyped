import { BaseModel } from './../BaseModel.d';
export class ProjectRepository extends BaseModel {
    public listBranches(projectId: number | string, fn?: Function): any;
    public showBranch(projectId: number | string, branchId: string, fn?: Function): any;
    public protectBranch(projectId: number | string, branchId: string, params: object, fn?: Function): any;
    public unprotectBranch(projectId: number | string, branchId: string, fn?: Function): any;
    public createBranch(params: object, fn?: Function): any;
    public deleteBranch(projectId: number | string, branchId: string, fn?: Function): any;
    public addTag(params: object, fn?: Function): any;
    public deleteTag(projectId: number | string, tagName: string, fn?: Function): any;
    public showTag(projectId: number | string, tagName: string, fn?: Function): any;
    public listTags(projectId: number | string, fn?: Function): any;
    public listCommits(projectId: number | string, fn?: Function): any;
    public showCommit(projectId: number | string, sha: string, fn?: Function): any;
    public diffCommit(projectId: number | string, sha: string, fn?: Function): any;
    public listTree(projectId: number | string, params?: object, fn?: Function): any;
    public showFile(projectId: number | string, params?: object, fn?: Function): any;
    public createFile(params?: object, fn?: Function): any;
    public updateFile(params?: object, fn?: Function): any;
    public compare(params?: object, fn?: Function): any;
}
