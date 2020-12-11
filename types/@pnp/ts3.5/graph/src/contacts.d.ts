import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { TypedHash } from "@pnp/common";
import { Contact as IContact, ContactFolder as IContactFolder, EmailAddress } from "@microsoft/microsoft-graph-types";
export declare class Contacts extends GraphQueryableCollection<IContact[]> {
    getById(id: string): Contact;
    /**
    * Create a new Contact for the user.
    *
    * @param givenName The contact's given name.
    * @param surName The contact's surname.
    * @param emailAddresses The contact's email addresses.
    * @param businessPhones The contact's business phone numbers.
    * @param additionalProperties A plain object collection of additional properties you want to set on the new contact
    */
    add(givenName: string, surName: string, emailAddresses: EmailAddress[], businessPhones: string[], additionalProperties?: TypedHash<any>): Promise<ContactAddResult>;
}
export declare class Contact extends GraphQueryableInstance<IContact> {
    /**
     * Deletes this contact
     */
    delete(): Promise<void>;
    /**
     * Update the properties of a contact object
     *
     * @param properties Set of properties of this contact to update
     */
    update(properties: TypedHash<string | number | boolean | string[]>): Promise<void>;
}
export declare class ContactFolders extends GraphQueryableCollection<IContactFolder[]> {
    getById(id: string): ContactFolder;
    /**
     * Create a new Contact Folder for the user.
     *
     * @param displayName The folder's display name.
     * @param parentFolderId The ID of the folder's parent folder.
     */
    add(displayName: string, parentFolderId?: string): Promise<ContactFolderAddResult>;
}
export declare class ContactFolder extends GraphQueryableInstance<IContactFolder> {
    /**
     * Gets the contacts in this contact folder
     */
    readonly contacts: Contacts;
    /**
    * Gets the contacts in this contact folder
    */
    readonly childFolders: ContactFolders;
    /**
     * Deletes this contact folder
     */
    delete(): Promise<void>;
    /**
     * Update the properties of a contact folder
     *
     * @param properties Set of properties of this contact folder to update
     */
    update(properties: IContactFolder): Promise<void>;
}
export interface ContactFolderAddResult {
    data: IContactFolder;
    contactFolder: ContactFolder;
}
export interface ContactAddResult {
    data: IContact;
    contact: Contact;
}
