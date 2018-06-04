import { BaseModel, TId, DefParams } from '../BaseModel';

export class IssueNotes extends BaseModel{
    all(projectId: TId, issueId: number, fn?: Function): any
    all(projectId: TId, issueId: number, params?: DefParams, fn?: Function): any
}
