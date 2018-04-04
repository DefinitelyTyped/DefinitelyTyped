import { BaseModel } from './../BaseModel.d';
export class Issues extends BaseModel {
    public all(params?: object, fn?: Function): any;
    public show(projectId: number | string, issueId: number | string, fn?: Function): any;
    public create(projectId: number | string, params?: object, fn?: Function): any;
    public edit(projectId: number | string, issueId: number | string, params?: object, fn?: Function): any;
    public remove(projectId: number | string, issueId: number | string, fn?: Function): any;
    public subscribe(projectId: number | string, issueId: number | string, params?: object, fn?: Function): any;
    public unsubscribe(projectId: number | string, issueId: number | string, fn?: Function): any;
}
