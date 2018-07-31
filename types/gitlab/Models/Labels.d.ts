import { BaseModel, TId } from '../BaseModel';

export class Labels extends BaseModel {
    create(projectId: TId, params?: object, fn?: Function): any;
}
