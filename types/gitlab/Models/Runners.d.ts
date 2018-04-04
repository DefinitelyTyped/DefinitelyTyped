import { BaseModel, IDefParams, TId} from '../BaseModel.d';

export class Runners extends BaseModel {
    public all(projectId?: TId, fn?: Function): any;
    public all(projectId?: TId, params?: object, fn?: Function): any;
    public show(runnerId: number, fn?: Function): any;
    public update(runnerId: number, attributes: any, fn?: Function): any;
    public remove(runnerId: number, projectId: any, enable: any, fn?: Function): any;
    public enable(projectId: TId, runnerId: number, fn?: Function): any;
    public disable(projectId: TId, runnerId: number, fn?: Function): any;
}
