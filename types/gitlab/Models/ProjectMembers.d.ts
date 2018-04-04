import { BaseModel, TId } from '../BaseModel.d';

type MenberCb = (menber: any) => any;
type MenbersCb = (menbers: any[]) => any;

export class ProjectMembers extends BaseModel {
    public list(projectId: TId, fn?: MenbersCb): any;
    public show(projectId: TId, userId: number, fn?: MenberCb): any;
    public add(projectId: TId, userId: number, accessLevel: number,fn?: Function): any;
    public update(projectId: TId, userId: number, accessLevel: number, fn?: Function): any;
    public remove(projectId: TId, userId: number, fn?: Function): any;
}
