import { BaseModel, TId } from '../BaseModel';

export class Issues extends BaseModel {
    all(fn?: Function): any;
    all(params?: object, fn?: Function): any;
    show(projectId: TId, issueId: TId, fn?: Function): any;
    create(projectId: TId, params?: object, fn?: Function): any;
    edit(projectId: TId, issueId: TId, params?: object, fn?: Function): any;
    remove(projectId: TId, issueId: TId, fn?: Function): any;
    subscribe(projectId: TId, issueId: TId, params?: object, fn?: Function): any;
    unsubscribe(projectId: TId, issueId: TId, fn?: Function): any;
}
