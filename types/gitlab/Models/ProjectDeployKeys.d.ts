import { BaseModel, TId } from '../BaseModel';

export class ProjectKeys extends BaseModel {
    listKeys(projectId: TId, fn?: Function): any;
    getKey(projectId: TId, keyId: number, fn?: Function): any;
    addKey(projectId: TId, params?: object, fn?: Function): any;
}
