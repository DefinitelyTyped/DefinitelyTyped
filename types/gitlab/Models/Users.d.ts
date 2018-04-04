import { BaseModel, IDefParams, TId} from '../BaseModel.d';
import { UserKeys } from './UserKeys.d';

type UsersCb = (users: any[]) => any;
type UserCb = (user: any) => any;

export class Users extends BaseModel {
    public readonly keys: UserKeys;

    public all(fn?: UsersCb): any;
    public all(params?: IDefParams, fn?: UsersCb): any;
    public current(fn?: Function): any;
    public show(userId: number, fn?: UserCb): any;
    public create(params?: IDefParams, fn?: Function): any;
    public session(email: string, password: string, fn?: Function): any;
    public search(emailOrUsername: string, fn?: Function): any;
}
