import { BaseModel, TId } from '../BaseModel.d';

export class Labels extends BaseModel {
    public create(projectId: TId, params?: object, fn?: Function): any;
}
