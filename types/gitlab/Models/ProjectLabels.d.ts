import { BaseModel, TId, IDefParams } from '../BaseModel.d';

export class ProjectLabels extends BaseModel {
    public all(projectId: TId, fn?: Function): any;
    public all(projectId: TId, params?: IDefParams, fn?: Function): any;
}
