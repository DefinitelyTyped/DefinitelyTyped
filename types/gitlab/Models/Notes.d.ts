import { BaseModel } from './../BaseModel.d';
export class Notes extends BaseModel {
    public create(projectId: number | string, issueId: number, params?: object, fn?: Function): any;
}
