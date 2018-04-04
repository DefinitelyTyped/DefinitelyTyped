import { BaseModel, TId } from '../BaseModel.d';

export class Notes extends BaseModel {
    public create(projectId: TId, issueId: number, params?: object, fn?: Function): any;
}
