import { BaseModel } from './../BaseModel.d';
export class ProjectServices extends BaseModel {
    public show(projectId: number | string, serviceName: string, fn?: Function): any;
    public update(projectId: number | string, serviceName: string, params: object, fn?: Function): any;
    public remove(projectId: number | string, serviceName: string, fn?: Function): any;
}
