import { BaseModel, TId } from '../BaseModel';

export class Notes extends BaseModel {
    create(projectId: TId, issueId: number, params?: object, fn?: Function): any;
}
