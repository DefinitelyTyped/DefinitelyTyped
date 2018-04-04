import { BaseModel, TId } from '../BaseModel.d';

export class Pipelines extends BaseModel {
    public all(projectId: TId, fn?: Function): any;
}
