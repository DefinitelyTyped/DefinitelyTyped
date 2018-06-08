import { IssueNotes } from './IssueNotes';
import { BaseModel, TId, DefParams } from '../BaseModel';

export class ProjectIssues extends BaseModel {
    readonly notes: IssueNotes;

    list(projectId: TId, fn?: Function): any;
    list(projectId: TId, params?: DefParams, fn?: Function): any;
}
