import { BaseModel, TId } from './../BaseModel';

type ServiceCb = (service: any) => any;

export class ProjectServices extends BaseModel {
    show(projectId: TId, serviceName: string, fn?: ServiceCb): any;
    update(projectId: TId, serviceName: string, params: object, fn?: ServiceCb): any;
    remove(projectId: TId, serviceName: string, fn?: ServiceCb): any;
}
