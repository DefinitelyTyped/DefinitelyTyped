import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { Message as IMessage, MailFolder as IMailFolder, MailboxSettings as IMailboxSettings } from "@microsoft/microsoft-graph-types";
export declare class Messages extends GraphQueryableCollection<IMessage[]> {
    /**
     * Gets a member of the group by id
     *
     * @param id Attachment id
     */
    getById(id: string): Message;
    /**
     * Add a message to this collection
     *
     * @param message The message details
     */
    add(message: IMessage): Promise<IMessage>;
}
export declare class Message extends GraphQueryableInstance<IMessage> {
}
export declare class MailFolders extends GraphQueryableCollection<IMailFolder[]> {
    /**
     * Gets a member of the group by id
     *
     * @param id Attachment id
     */
    getById(id: string): MailFolder;
    /**
     * Add a mail folder to this collection
     *
     * @param message The message details
     */
    add(mailFolder: IMailFolder): Promise<IMailFolder>;
}
export declare class MailFolder extends GraphQueryableInstance<IMailFolder> {
}
export declare class MailboxSettings extends GraphQueryableInstance<IMailboxSettings> {
    update(settings: IMailboxSettings): Promise<void>;
}
