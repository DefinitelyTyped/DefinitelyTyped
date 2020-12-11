import { TypedHash } from "@pnp/common";
import { SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
/**
 * Describes a collection of content types
 *
 */
export declare class ContentTypes extends SharePointQueryableCollection {
    /**
     * Adds an existing contenttype to a content type collection
     *
     * @param contentTypeId in the following format, for example: 0x010102
     */
    addAvailableContentType(contentTypeId: string): Promise<ContentTypeAddResult>;
    /**
     * Gets a ContentType by content type id
     */
    getById(id: string): ContentType;
    /**
     * Adds a new content type to the collection
     *
     * @param id The desired content type id for the new content type (also determines the parent content type)
     * @param name The name of the content type
     * @param description The description of the content type
     * @param group The group in which to add the content type
     * @param additionalSettings Any additional settings to provide when creating the content type
     *
     */
    add(id: string, name: string, description?: string, group?: string, additionalSettings?: TypedHash<string | number | boolean>): Promise<ContentTypeAddResult>;
}
/**
 * Describes a single ContentType instance
 *
 */
export declare class ContentType extends SharePointQueryableInstance {
    /**
     * Gets the column (also known as field) references in the content type.
    */
    readonly fieldLinks: FieldLinks;
    /**
     * Gets a value that specifies the collection of fields for the content type.
     */
    readonly fields: SharePointQueryableCollection;
    /**
     * Gets the parent content type of the content type.
     */
    readonly parent: ContentType;
    /**
     * Gets a value that specifies the collection of workflow associations for the content type.
     */
    readonly workflowAssociations: SharePointQueryableCollection;
    /**
     * Delete this content type
     */
    delete: () => Promise<void>;
}
export interface ContentTypeAddResult {
    contentType: ContentType;
    data: any;
}
/**
 * Represents a collection of field link instances
 */
export declare class FieldLinks extends SharePointQueryableCollection {
    /**
     * Gets a FieldLink by GUID id
     *
     * @param id The GUID id of the field link
     */
    getById(id: string): FieldLink;
}
/**
 * Represents a field link instance
 */
export declare class FieldLink extends SharePointQueryableInstance {
}
