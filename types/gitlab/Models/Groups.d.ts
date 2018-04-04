import { BaseModel } from "../BaseModel";

export class Groups extends BaseModel {
    public init(): object;
    public all(params?: object, fn?: Function): any;
    public show(groupId: number, fn?: Function): any;
    public listProjects(groupId: number, fn?: Function): any;
    public listMembers(groupId: number, fn?: Function): any;
    public editMember(groupId: number, userId: number, accessLevel: number, fn?: Function): any;
    public removeMember(groupId: number, userId: number, fn?: Function): any;
    public create(params?: object, fn?: Function): any;
    public addProject(groupId: number, projectId: number, fn?: Function): any;
    public deleteGroup(groupId: number, fn?: Function): any;
    public search(nameOrPath: string, fn?: Function): any;
}
