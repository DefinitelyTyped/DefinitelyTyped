import { BaseModel, TId, DefParams } from '../BaseModel';

export class ProjectLabels extends BaseModel {
    all(projectId: TId, fn?: Function): any;
    all(projectId: TId, params?: DefParams, fn?: Function): any;
}
