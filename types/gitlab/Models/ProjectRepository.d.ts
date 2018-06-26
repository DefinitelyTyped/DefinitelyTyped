import { BaseModel, TId } from '../BaseModel';

interface ShowFileParams {
    file_path: string;
    ref?: any;
    file_id?: any;
    [key: string]: any;
}

interface AddTagParams {
    id: TId;
    tag_name: string;
    ref: string;
    message?: string;
    release_description?: string;
}

export class ProjectRepository extends BaseModel {
    listBranches(projectId: TId, fn?: Function): any;
    showBranch(projectId: TId, branchId: string, fn?: Function): any;
    protectBranch(projectId: TId, branchId: string, params: object, fn?: Function): any;
    unprotectBranch(projectId: TId, branchId: string, fn?: Function): any;
    createBranch(params: object, fn?: Function): any;
    deleteBranch(projectId: TId, branchId: string, fn?: Function): any;
    addTag(params: AddTagParams, fn?: Function): any;
    deleteTag(projectId: TId, tagName: string, fn?: Function): any;
    showTag(projectId: TId, tagName: string, fn?: Function): any;
    listTags(projectId: TId, fn?: Function): any;
    listCommits(projectId: TId, fn?: Function): any;
    showCommit(projectId: TId, sha: string, fn?: Function): any;
    diffCommit(projectId: TId, sha: string, fn?: Function): any;
    listTree(projectId: TId, fn?: Function): any;
    listTree(projectId: TId, params?: object, fn?: Function): any;
    showFile(projectId: TId, fn?: Function): any;
    showFile(projectId: TId, params?: ShowFileParams, fn?: Function): any;
    createFile(params?: object, fn?: Function): any;
    updateFile(params?: object, fn?: Function): any;
    compare(params?: object, fn?: Function): any;
}
