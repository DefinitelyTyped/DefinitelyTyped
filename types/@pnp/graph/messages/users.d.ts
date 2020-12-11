import { IMessages, IMailboxSettings, IMailFolders, IMessage } from "./types";
declare module "../users/types" {
    interface _User {
        readonly messages: IMessages;
        readonly mailboxSettings: IMailboxSettings;
        readonly mailFolders: IMailFolders;
        sendMail(message: IMessage): Promise<void>;
    }
    interface IUser {
        readonly messages: IMessages;
        readonly mailboxSettings: IMailboxSettings;
        readonly mailFolders: IMailFolders;
        sendMail(message: IMessage): Promise<void>;
    }
}
//# sourceMappingURL=users.d.ts.map