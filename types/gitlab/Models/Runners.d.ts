import { BaseModel, PageDefualtParams, TypeNumOrStrId} from './../BaseModel.d';
export class Runners extends BaseModel {
    public all(projectId?: TypeNumOrStrId, fn?: Function): any;
    public all(projectId?: TypeNumOrStrId, params?: object, fn?: Function): any;
    public show(runnerId: number, fn?: Function): any;
    public update(runnerId: number, attributes: any, fn?: Function): any;
    public remove(runnerId: number, projectId: any, enable: any, fn?: Function): any;
    public enable(projectId: TypeNumOrStrId, runnerId: number, fn?: Function): any;
    public disable(projectId: TypeNumOrStrId, runnerId: number, fn?: Function): any;
}
