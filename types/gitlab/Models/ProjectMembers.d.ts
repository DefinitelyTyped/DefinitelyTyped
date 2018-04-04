import { BaseModel } from './../BaseModel.d';
export class ProjectMembers extends BaseModel {
    public list(projectId: number | string, fn?: Function): any;
    public show(projectId: number | string, userId: number, fn?: Function): any;
    public add(projectId: number | string, userId: number, accessLevel: number,fn?: Function): any;
    public update(projectId: number | string, userId: number, accessLevel: number, fn?: Function): any;
    public remove(projectId: number | string, userId: number, fn?: Function): any;
}
