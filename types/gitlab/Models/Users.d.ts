import { BaseModel, DefParams, TId } from '../BaseModel';
import { UserKeys } from './UserKeys';

type UsersCb = (users: any[]) => any;
type UserCb = (user: any) => any;

export class Users extends BaseModel {
    readonly keys: UserKeys;

    all(fn?: UsersCb): any;
    all(params?: DefParams, fn?: UsersCb): any;
    current(fn?: Function): any;
    show(userId: number, fn?: UserCb): any;
    create(params?: DefParams, fn?: Function): any;
    session(email: string, password: string, fn?: Function): any;
    search(emailOrUsername: string, fn?: Function): any;
}
