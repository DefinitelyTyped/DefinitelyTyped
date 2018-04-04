import { BaseModel } from './../BaseModel.d';
export class IssueNotes extends BaseModel{
    public all(projectId: number | string, issueId: number, params?: object, fn?: Function): any
}
