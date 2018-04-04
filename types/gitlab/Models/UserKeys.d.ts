import { BaseModel, IDefParams, TId } from '../BaseModel.d';

export class UserKeys extends BaseModel {
    public all(userId?: TId, fn?: Function): any;
    public addKey(userId: string, title: string, key: any, fn?: Function): any;
}
