import { BaseModel, PageDefualtParams, TypeNumOrStrId} from './../BaseModel.d';
export class Projects extends BaseModel {
    public all(fn?: Function): any;
    public all(params?: PageDefualtParams, fn?: Function): any;
    public allAdmin(fn: Function): any;
    public allAdmin(params?: PageDefualtParams, fn?: Function): any;
    public show(projectId: TypeNumOrStrId, fn?: Function): any;
    public create(params: object, fn?: Function): any;
    public create_for_user(params: object, fn?: Function): any;
    public edit(projectId: TypeNumOrStrId, params: object, fn?: Function): any;
    public addMember(params?: object, fn?: Function): any;
    public editMember(params?: object, fn?: Function): any;
    public listMembers(params?: object, fn?: Function): any;
    public listCommits(params?: object, fn?: Function): any;
    public listTags(params?: object, fn?: Function): any;
    public remove(projectId: TypeNumOrStrId, fn?: Function): any;
    public fork(params?: object, fn?: Function): any;
    public share(params?: object, fn?: Function): any;
    public search(projectName: string, fn?: Function): any;
    public search(projectName: string, params?: object, fn?: Function): any;
    public listTriggers(projectId: TypeNumOrStrId, fn?: Function): any;
    public showTrigger(projectId: TypeNumOrStrId, token: string, fn?: Function): any;
    public createTrigger(params?: object, fn?: Function): any;
    public removeTrigger(projectId: TypeNumOrStrId, token: string, fn?: Function): any;
}
