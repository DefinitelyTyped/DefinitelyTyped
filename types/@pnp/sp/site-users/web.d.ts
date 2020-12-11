import { ISiteUsers, ISiteUser, IWebEnsureUserResult } from "./types";
declare module "../webs/types" {
    interface _Web {
        readonly siteUsers: ISiteUsers;
        readonly currentUser: ISiteUser;
        ensureUser(loginName: string): Promise<IWebEnsureUserResult>;
        getUserById(id: number): ISiteUser;
    }
    interface IWeb {
        /**
         * The site users
         */
        readonly siteUsers: ISiteUsers;
        /**
         * Information on the current user
         */
        readonly currentUser: ISiteUser;
        /**
        * Checks whether the specified login name belongs to a valid user in the web. If the user doesn't exist, adds the user to the web.
        *
        * @param loginName The login name of the user (ex: i:0#.f|membership|user@domain.onmicrosoft.com)
        */
        ensureUser(loginName: string): Promise<IWebEnsureUserResult>;
        /**
         * Returns the user corresponding to the specified member identifier for the current site
         *
         * @param id The id of the user
         */
        getUserById(id: number): ISiteUser;
    }
}
//# sourceMappingURL=web.d.ts.map