import { BaseModel, TId } from '../BaseModel';

type MenberCb = (menber: any) => any;
type MenbersCb = (menbers: any[]) => any;

export class ProjectMembers extends BaseModel {
    list(projectId: TId, fn?: MenbersCb): any;
    show(projectId: TId, userId: number, fn?: MenberCb): any;
    add(projectId: TId, userId: number, accessLevel: number,fn?: Function): any;
    update(projectId: TId, userId: number, accessLevel: number, fn?: Function): any;
    remove(projectId: TId, userId: number, fn?: Function): any;
}
