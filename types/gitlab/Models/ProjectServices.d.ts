import { BaseModel, TId } from './../BaseModel.d';

type ServiceCb = (service: any) => any;

export class ProjectServices extends BaseModel {
    public show(projectId: TId, serviceName: string, fn?: ServiceCb): any;
    public update(projectId: TId, serviceName: string, params: object, fn?: ServiceCb): any;
    public remove(projectId: TId, serviceName: string, fn?: ServiceCb): any;
}
