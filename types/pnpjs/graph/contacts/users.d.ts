import { IContacts, IContactFolders } from "./types";
declare module "../users/types" {
    interface _User {
        readonly contacts: IContacts;
        readonly contactFolders: IContactFolders;
    }
    interface IUser {
        readonly contacts: IContacts;
        readonly contactFolders: IContactFolders;
    }
}
//# sourceMappingURL=users.d.ts.map