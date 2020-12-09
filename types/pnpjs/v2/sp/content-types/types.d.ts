import { ITypedHash } from "@pnp/common";
import { _SharePointQueryableInstance, ISharePointQueryableCollection, _SharePointQueryableCollection, IDeleteable } from "../sharepointqueryable";
export declare class _ContentTypes extends _SharePointQueryableCollection<IContentTypeInfo[]> {
    /**
     * Adds an existing contenttype to a content type collection
     *
     * @param contentTypeId in the following format, for example: 0x010102
     */
    addAvailableContentType(contentTypeId: string): Promise<IContentTypeAddResult>;
    /**
     * Gets a ContentType by content type id
     * @param id The id of the content type to get, in the following format, for example: 0x010102
     */
    getById(id: string): IContentType;
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
    add(id: string, name: string, description?: string, group?: string, additionalSettings?: ITypedHash<string | number | boolean>): Promise<IContentTypeAddResult>;
}
export interface IContentTypes extends _ContentTypes {
}
export declare const ContentTypes: import("../sharepointqueryable").ISPInvokableFactory<IContentTypes>;
export declare class _ContentType extends _SharePointQueryableInstance<IContentTypeInfo> {
    delete: (this: import("../sharepointqueryable").ISharePointQueryable<any>) => Promise<void>;
    /**
     * Gets the column (also known as field) references in the content type.
     */
    readonly fieldLinks: IFieldLinks;
    /**
     * Gets a value that specifies the collection of fields for the content type.
     */
    readonly fields: ISharePointQueryableCollection;
    /**
     * Gets the parent content type of the content type.
     */
    readonly parent: IContentType;
    /**
     * Gets a value that specifies the collection of workflow associations for the content type.
     */
    readonly workflowAssociations: ISharePointQueryableCollection;
}
export interface IContentType extends _ContentType, IDeleteable {
}
export declare const ContentType: import("../sharepointqueryable").ISPInvokableFactory<IContentType>;
/**
 * Represents the output of adding a content type
 */
export interface IContentTypeAddResult {
    contentType: IContentType;
    data: Partial<IContentTypeInfo>;
}
export interface IContentTypeInfo {
    Description: string;
    DisplayFormTemplateName: string;
    DisplayFormUrl: string;
    DocumentTemplate: string;
    DocumentTemplateUrl: string;
    EditFormTemplateName: string;
    EditFormUrl: string;
    Group: string;
    Hidden: boolean;
    Id: {
        StringValue: string;
    };
    JSLink: string;
    MobileDisplayFormUrl: string;
    MobileEditFormUrl: string;
    MobileNewFormUrl: string;
    Name: string;
    NewFormTemplateName: string;
    NewFormUrl: string;
    ReadOnly: boolean;
    SchemaXml: string;
    Scope: string;
    Sealed: boolean;
    StringId: string;
}
export declare class _FieldLinks extends _SharePointQueryableCollection<IFieldLinkInfo[]> {
    /**
    *  Gets a FieldLink by GUID id
    *
    * @param id The GUID id of the field link
    */
    getById(id: string): IFieldLink;
}
export interface IFieldLinks extends _FieldLinks {
}
export declare const FieldLinks: import("../sharepointqueryable").ISPInvokableFactory<IFieldLinks>;
export declare class _FieldLink extends _SharePointQueryableInstance<IFieldLinkInfo> {
}
export interface IFieldLink extends _FieldLink {
}
export declare const FieldLink: import("../sharepointqueryable").ISPInvokableFactory<IFieldLink>;
export interface IFieldLinkInfo {
    FieldInternalName: string | null;
    Hidden: boolean;
    Id: string;
    Name: string;
    Required: boolean;
}
//# sourceMappingURL=types.d.ts.map