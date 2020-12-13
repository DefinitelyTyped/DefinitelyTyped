import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { User as IMember } from "@microsoft/microsoft-graph-types";
export declare class Members extends GraphQueryableCollection<IMember[]> {
    /**
     * Use this API to add a member to an Office 365 group, a security group or a mail-enabled security group through
     * the members navigation property. You can add users or other groups.
     * Important: You can add only users to Office 365 groups.
     *
     * @param id Full @odata.id of the directoryObject, user, or group object you want to add (ex: https://graph.microsoft.com/v1.0/directoryObjects/${id})
     */
    add(id: string): Promise<any>;
    /**
     * Gets a member of the group by id
     *
     * @param id Group member's id
     */
    getById(id: string): Member;
}
export declare class Member extends GraphQueryableInstance<IMember> {
    /**
     * Removes this Member
     */
    remove(): Promise<void>;
}
export declare class Owners extends Members {
}
