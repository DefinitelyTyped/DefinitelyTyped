import { IssueNotes } from './IssueNotes.d';
import { BaseModel, TId, IDefParams } from '../BaseModel.d';

export class ProjectIssues extends BaseModel {
    public readonly notes: IssueNotes;

    public list(projectId: TId, fn?: Function): any;
    public list(projectId: TId, params?: IDefParams, fn?: Function): any;
}
