import { BaseModel, TId } from '../BaseModel.d';

type MilestonesCb = (milestones: any[]) => any;
type MilestoneCb = (milestones: any) => any;

export class ProjectMilestones extends BaseModel {
    public list(projectId: TId, fn?: MilestonesCb): any;
    public all(projectId: TId, fn?: MilestonesCb): any;
    public show(projectId: TId, milestoneId: number, fn?: MilestoneCb): any;
    public add(projectId: TId, title: string, description: string, due_date: any, fn?: Function): any;
    public update(projectId: TId, milestoneId: number, title: string, description: string, due_date: any, state_event: any, fn?: Function): any;
}
