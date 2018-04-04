import { BaseModel, TId } from '../BaseModel.d';

export class Issues extends BaseModel {
    public all(fn?: Function): any;
    public all(params?: object, fn?: Function): any;
    public show(projectId: TId, issueId: TId, fn?: Function): any;
    public create(projectId: TId, params?: object, fn?: Function): any;
    public edit(projectId: TId, issueId: TId, params?: object, fn?: Function): any;
    public remove(projectId: TId, issueId: TId, fn?: Function): any;
    public subscribe(projectId: TId, issueId: TId, params?: object, fn?: Function): any;
    public unsubscribe(projectId: TId, issueId: TId, fn?: Function): any;
}
