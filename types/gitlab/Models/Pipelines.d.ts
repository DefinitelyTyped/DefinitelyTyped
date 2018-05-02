import { BaseModel, TId } from '../BaseModel';

export class Pipelines extends BaseModel {
    all(projectId: TId, fn?: Function): any;
}
