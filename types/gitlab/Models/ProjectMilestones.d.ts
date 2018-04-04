import { BaseModel, TId } from '../BaseModel';

type MilestonesCb = (milestones: any[]) => any;
type MilestoneCb = (milestones: any) => any;

export class ProjectMilestones extends BaseModel {
    list(projectId: TId, fn?: MilestonesCb): any;
    all(projectId: TId, fn?: MilestonesCb): any;
    show(projectId: TId, milestoneId: number, fn?: MilestoneCb): any;
    add(projectId: TId, title: string, description: string, due_date: any, fn?: Function): any;
    update(projectId: TId, milestoneId: number, title: string, description: string, due_date: any, state_event: any, fn?: Function): any;
}
