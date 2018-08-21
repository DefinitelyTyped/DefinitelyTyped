import { BaseModel, DefParams, TId } from '../BaseModel';

export class UserKeys extends BaseModel {
    all(userId?: TId, fn?: Function): any;
    addKey(userId: string, title: string, key: any, fn?: Function): any;
}
