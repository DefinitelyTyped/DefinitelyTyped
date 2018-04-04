import { BaseModel, TId } from '../BaseModel.d';

export class ProjectKeys extends BaseModel {
    public listKeys(projectId: TId, fn?: Function): any;
    public getKey(projectId: TId, keyId: number, fn?: Function): any;
    public addKey(projectId: TId, params?: object, fn?: Function): any;
}
