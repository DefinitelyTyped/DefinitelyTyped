import { _GraphQueryableCollection } from "../graphqueryable";
import { User as IUserType, Person as IPersonType } from "@microsoft/microsoft-graph-types";
import { _DirectoryObject, IDirectoryObjects } from "../directory-objects/types";
import { IUpdateable, IDeleteable, IGetById } from "../decorators";
export declare class _User extends _DirectoryObject<IUserType> {
    /**
    * The groups and directory roles associated with the user
    */
    readonly memberOf: IDirectoryObjects;
    /**
     * Retrieve a collection of person objects ordered by their relevance to the user
     */
    readonly people: IPeople;
}
export interface IUser extends _User, IUpdateable<IUserType>, IDeleteable {
}
export declare const User: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IUser;
export declare class _Users extends _GraphQueryableCollection<IUserType[]> {
}
export interface IUsers extends _Users, IGetById<IUser> {
}
export declare const Users: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IUsers;
export declare class _People extends _GraphQueryableCollection<IPersonType[]> {
}
export interface IPeople extends _People {
}
export declare const People: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IPeople;
//# sourceMappingURL=types.d.ts.map