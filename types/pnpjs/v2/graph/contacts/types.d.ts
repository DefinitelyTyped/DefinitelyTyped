import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable";
import { ITypedHash } from "@pnp/common";
import { Contact as IContactType, ContactFolder as IContactFolderType, EmailAddress as IEmailAddressType } from "@microsoft/microsoft-graph-types";
import { IUpdateable, IDeleteable, IGetById } from "../decorators";
/**
 * Contact
 */
export declare class _Contact extends _GraphQueryableInstance<IContactType> {
}
export interface IContact extends _Contact, IUpdateable<IContactType>, IDeleteable {
}
export declare const Contact: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IContact;
/**
 * Contacts
 */
export declare class _Contacts extends _GraphQueryableCollection<IContactType[]> {
    /**
    * Create a new Contact for the user.
    *
    * @param givenName The contact's given name.
    * @param surName The contact's surname.
    * @param emailAddresses The contact's email addresses.
    * @param businessPhones The contact's business phone numbers.
    * @param additionalProperties A plain object collection of additional properties you want to set on the new contact
    */
    add(givenName: string, surName: string, emailAddresses: IEmailAddressType[], businessPhones: string[], additionalProperties?: ITypedHash<any>): Promise<IContactAddResult>;
}
export interface IContacts extends _Contacts, IGetById<IContact> {
}
export declare const Contacts: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IContacts;
/**
 * Contact Folder
 */
export declare class _ContactFolder extends _GraphQueryableInstance<IContactFolderType> {
    /**
     * Gets the contacts in this contact folder
     */
    readonly contacts: IContacts;
    /**
    * Gets the contacts in this contact folder
    */
    readonly childFolders: IContactFolders;
}
export interface IContactFolder extends _ContactFolder, IUpdateable, IDeleteable {
}
export declare const ContactFolder: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IContactFolder;
/**
 * Contact Folders
 */
export declare class _ContactFolders extends _GraphQueryableCollection<IContactFolderType[]> {
    /**
     * Create a new Contact Folder for the user.
     *
     * @param displayName The folder's display name.
     * @param parentFolderId The ID of the folder's parent folder.
     */
    add(displayName: string, parentFolderId?: string): Promise<IContactFolderAddResult>;
}
export interface IContactFolders extends _ContactFolders, IGetById<IContactFolder> {
}
export declare const ContactFolders: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IContactFolders;
/**
 * IContactFolderAddResult
 */
export interface IContactFolderAddResult {
    data: IContactFolderType;
    contactFolder: IContactFolder;
}
/**
 * IContactAddResult
 */
export interface IContactAddResult {
    data: IContactType;
    contact: IContact;
}
//# sourceMappingURL=types.d.ts.map