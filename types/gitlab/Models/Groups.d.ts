import { BaseModel, DefParams } from "../BaseModel";

interface IAccessLevels {
    GUEST: number
    REPORTER: number
    DEVELOPER: number
    MASTER: number
    OWNER: number
}

export class Groups extends BaseModel {
    readonly access_levels: IAccessLevels;

    init(): object;
    all(fn?: Function): any;
    all(params?: DefParams, fn?: Function): any;
    show(groupId: number, fn?: Function): any;
    listProjects(groupId: number, fn?: Function): any;
    listMembers(groupId: number, fn?: Function): any;
    addMember(groupId: number, userId: number, accessLevel: IAccessLevels[keyof IAccessLevels], fn?: Function): any;
    editMember(groupId: number, userId: number, accessLevel: IAccessLevels[keyof IAccessLevels], fn?: Function): any;
    removeMember(groupId: number, userId: number, fn?: Function): any;
    create(params?: object, fn?: Function): any;
    addProject(groupId: number, projectId: number, fn?: Function): any;
    deleteGroup(groupId: number, fn?: Function): any;
    search(nameOrPath: string, fn?: Function): any;
}
