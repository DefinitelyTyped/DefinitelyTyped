import { ISharingEmailData, ISharingResult, SharingRole } from "./types";
import { RoleType } from "./types";
/**
 * Extend _Web
 */
declare module "../webs/types" {
    interface _Web {
        shareWith: (loginNames: string | string[], role?: SharingRole, emailData?: ISharingEmailData) => Promise<ISharingResult>;
        shareObject: (url: string, loginNames: string | string[], role: SharingRole, emailData?: ISharingEmailData, group?: RoleType, propagateAcl?: boolean, includeAnonymousLinkInEmail?: boolean, useSimplifiedRoles?: boolean) => Promise<ISharingResult>;
        shareObjectRaw(options: any): Promise<ISharingResult>;
        unshareObject(url: string): Promise<ISharingResult>;
    }
    interface IWeb {
        shareWith: (loginNames: string | string[], role?: SharingRole, emailData?: ISharingEmailData) => Promise<ISharingResult>;
        shareObject: (url: string, loginNames: string | string[], role: SharingRole, emailData?: ISharingEmailData, group?: RoleType, propagateAcl?: boolean, includeAnonymousLinkInEmail?: boolean, useSimplifiedRoles?: boolean) => Promise<ISharingResult>;
        shareObjectRaw(options: any): Promise<ISharingResult>;
        unshareObject(url: string): Promise<ISharingResult>;
    }
}
//# sourceMappingURL=web.d.ts.map