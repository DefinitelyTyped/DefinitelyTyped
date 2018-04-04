import { BaseModel, TId, IDefParams } from '../BaseModel.d';

export class IssueNotes extends BaseModel{
    public all(projectId: TId, issueId: number, fn?: Function): any
    public all(projectId: TId, issueId: number, params?: IDefParams, fn?: Function): any
}
