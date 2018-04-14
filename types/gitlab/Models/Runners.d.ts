import { BaseModel, DefParams, TId } from '../BaseModel';

export class Runners extends BaseModel {
    all(projectId?: TId, fn?: Function): any;
    all(projectId?: TId, params?: object, fn?: Function): any;
    show(runnerId: number, fn?: Function): any;
    update(runnerId: number, attributes: any, fn?: Function): any;
    remove(runnerId: number, projectId: any, enable: any, fn?: Function): any;
    enable(projectId: TId, runnerId: number, fn?: Function): any;
    disable(projectId: TId, runnerId: number, fn?: Function): any;
}
