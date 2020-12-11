import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { Attachment as IAttachment } from "@microsoft/microsoft-graph-types";
export declare class Attachments extends GraphQueryableCollection<IAttachment[]> {
    /**
     * Gets a member of the group by id
     *
     * @param id Attachment id
     */
    getById(id: string): Attachment;
    /**
     * Add attachment to this collection
     *
     * @param name Name given to the attachment file
     * @param bytes File content
     */
    addFile(name: string, bytes: string | Blob): Promise<IAttachment>;
}
export declare class Attachment extends GraphQueryableInstance<IAttachment> {
}
