import { BaseModel, PageDefualtParams, TypeNumOrStrId} from './../BaseModel.d';
export class Users extends BaseModel {
    public all(fn?: Function): any;
    public all(params?: PageDefualtParams, fn?: Function): any;
    public current(fn?: Function): any;
    public show(userId: number, fn?: Function): any;
    public create(params?: PageDefualtParams, fn?: Function): any;
    public session(email: string, password: string, fn?: Function): any;
    public search(emailOrUsername: string, fn?: Function): any;
}
