import { User as IMemberType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable";
import { IGetById } from "../decorators";
/**
 * Member
 */
export declare class _Member extends _GraphQueryableInstance<IMemberType> {
    /**
     * Removes this Member
     */
    remove(): Promise<void>;
}
export interface IMember extends _Member {
}
export declare const Member: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IMember;
/**
 * Members
 */
export declare class _Members extends _GraphQueryableCollection<IMemberType[]> {
    /**
     * Use this API to add a member to an Office 365 group, a security group or a mail-enabled security group through
     * the members navigation property. You can add users or other groups.
     * Important: You can add only users to Office 365 groups.
     *
     * @param id Full @odata.id of the directoryObject, user, or group object you want to add (ex: `https://graph.microsoft.com/v1.0/directoryObjects/${id}`)
     */
    add(id: string): Promise<any>;
}
export interface IMembers extends _Members, IGetById<IMember> {
}
export declare const Members: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IMembers;
//# sourceMappingURL=types.d.ts.map