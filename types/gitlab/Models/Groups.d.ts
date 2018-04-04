import { BaseModel, IDefParams } from "../BaseModel";

interface IAccessLevels {
    GUEST: number
    REPORTER: number
    DEVELOPER: number
    MASTER: number
    OWNER: number
}

export class Groups extends BaseModel {
    public readonly access_levels: IAccessLevels;

    public init(): object;
    public all(fn?: Function): any;
    public all(params?: IDefParams, fn?: Function): any;
    public show(groupId: number, fn?: Function): any;
    public listProjects(groupId: number, fn?: Function): any;
    public listMembers(groupId: number, fn?: Function): any;
    public addMember(groupId: number, userId: number, accessLevel: IAccessLevels[keyof IAccessLevels], fn?: Function): any;
    public editMember(groupId: number, userId: number, accessLevel: IAccessLevels[keyof IAccessLevels], fn?: Function): any;
    public removeMember(groupId: number, userId: number, fn?: Function): any;
    public create(params?: object, fn?: Function): any;
    public addProject(groupId: number, projectId: number, fn?: Function): any;
    public deleteGroup(groupId: number, fn?: Function): any;
    public search(nameOrPath: string, fn?: Function): any;
}
