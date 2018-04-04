import { BaseModel } from './../BaseModel.d';
export class ProjectKeys extends BaseModel {
    public listKeys(projectId: number | string, fn?: Function): any;
    public getKey(projectId: number | string, keyId: number, fn?: Function): any;
    public addKey(projectId: number | string, params?: object, fn?: Function): any;
}
