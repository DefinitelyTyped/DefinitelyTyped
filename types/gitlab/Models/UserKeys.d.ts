import { BaseModel, PageDefualtParams, TypeNumOrStrId} from './../BaseModel.d';
export class UserKeys extends BaseModel {
    public all(userId?: TypeNumOrStrId, fn?: Function): any;
    public addKey(userId: string, title: any, key: any, fn?: Function): any;
}
