import { BaseModel } from './../BaseModel.d';
export class ProjectLabels extends BaseModel {
    public all(projectId: number | string, params: { page?: number, per_page?: number, [key: string]: any }, fn?: Function): any;
}
