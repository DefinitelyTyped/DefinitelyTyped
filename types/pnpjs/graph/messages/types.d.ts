import { Message as IMessageType, MailFolder as IMailFolderType, MailboxSettings as IMailboxSettingsType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable";
import { IGetById, IAddable, IUpdateable } from "../decorators";
/**
 * Message
 */
export declare class _Message extends _GraphQueryableInstance<IMessageType> {
}
export interface IMessage extends _Message {
}
export declare const Message: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IMessage;
/**
 * Messages
 */
export declare class _Messages extends _GraphQueryableCollection<IMessageType[]> {
}
export interface IMessages extends _Messages, IGetById<IMessage>, IAddable<IMessageType> {
}
export declare const Messages: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IMessages;
/**
 * MailFolder
 */
export declare class _MailFolder extends _GraphQueryableInstance<IMailFolderType> {
}
export interface IMailFolder extends _MailFolder {
}
export declare const MailFolder: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IMailFolder;
/**
 * MailFolders
 */
export declare class _MailFolders extends _GraphQueryableCollection<IMailFolderType[]> {
}
export interface IMailFolders extends _MailFolders, IGetById<IMailFolder>, IAddable<IMailFolderType> {
}
export declare const MailFolders: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IMailFolders;
/**
 * MailboxSettings
 */
export declare class _MailboxSettings extends _GraphQueryableInstance<IMailboxSettingsType> {
}
export interface IMailboxSettings extends _MailboxSettings, IUpdateable<IMailboxSettingsType> {
}
export declare const MailboxSettings: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IMailboxSettings;
//# sourceMappingURL=types.d.ts.map