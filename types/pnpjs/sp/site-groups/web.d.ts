import { ISiteGroups, ISiteGroup } from "./types";
import "../security/web";
declare module "../webs/types" {
    interface _Web {
        readonly siteGroups: ISiteGroups;
        readonly associatedOwnerGroup: ISiteGroup;
        readonly associatedMemberGroup: ISiteGroup;
        readonly associatedVisitorGroup: ISiteGroup;
        createDefaultAssociatedGroups(groupNameSeed: string, siteOwner: string, copyRoleAssignments?: boolean, clearSubscopes?: boolean, siteOwner2?: string): Promise<void>;
    }
    interface IWeb {
        /**
         * Returns the site groups of this web
         */
        readonly siteGroups: ISiteGroups;
        /**
         * The web's owner group
         */
        readonly associatedOwnerGroup: ISiteGroup;
        /**
         * The web's member group
         */
        readonly associatedMemberGroup: ISiteGroup;
        /**
         * The web's visitor group
         */
        readonly associatedVisitorGroup: ISiteGroup;
        /**
         * Creates the default associated groups (Members, Owners, Visitors) and gives them the default permissions on the site.
         * The target site must have unique permissions and no associated members / owners / visitors groups
         *
         * @param groupNameSeed The base group name. E.g. 'TestSite' would produce 'TestSite Members' etc.
         * @param siteOwner The user login name to be added to the site Owners group. Default is the current user
         * @param copyRoleAssignments Optional. If true the permissions are copied from the current parent scope
         * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
         * @param siteOwner2 Optional. The second user login name to be added to the site Owners group. Default is empty
         */
        createDefaultAssociatedGroups(groupNameSeed: string, siteOwner: string, copyRoleAssignments?: boolean, clearSubscopes?: boolean, siteOwner2?: string): Promise<void>;
    }
}
//# sourceMappingURL=web.d.ts.map