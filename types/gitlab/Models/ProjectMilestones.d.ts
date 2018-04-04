import { BaseModel } from './../BaseModel.d';
export class ProjectMilestones extends BaseModel {
    public list(projectId: number | string, fn?: Function): any;
    public all(projectId: number | string, fn?: Function): any;
    public show(projectId: number | string, milestoneId: number, fn?: Function): any;
    public add(projectId: number | string, title: any, description: any, due_date: any, fn?: Function): any;
    public update(projectId: number | string, milestoneId: number, title: any, description: any, due_date: any, state_event: any, fn?: Function): any;
}
