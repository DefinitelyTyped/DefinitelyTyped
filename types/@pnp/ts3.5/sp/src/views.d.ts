import { SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
import { TypedHash } from "@pnp/common";
/**
 * Describes the views available in the current context
 *
 */
export declare class Views extends SharePointQueryableCollection {
    /**
     * Gets a view by guid id
     *
     * @param id The GUID id of the view
     */
    getById(id: string): View;
    /**
     * Gets a view by title (case-sensitive)
     *
     * @param title The case-sensitive title of the view
     */
    getByTitle(title: string): View;
    /**
     * Adds a new view to the collection
     *
     * @param title The new views's title
     * @param personalView True if this is a personal view, otherwise false, default = false
     * @param additionalSettings Will be passed as part of the view creation body
     */
    add(title: string, personalView?: boolean, additionalSettings?: TypedHash<any>): Promise<ViewAddResult>;
}
/**
 * Describes a single View instance
 *
 */
export declare class View extends SharePointQueryableInstance {
    readonly fields: ViewFields;
    /**
     * Updates this view intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the view
     */
    update: (props: TypedHash<any>) => Promise<ViewUpdateResult>;
    /**
     * Delete this view
     *
     */
    delete: () => Promise<void>;
    /**
     * Returns the list view as HTML.
     *
     */
    renderAsHtml(): Promise<string>;
    /**
     * Sets the view schema
     *
     * @param viewXml The view XML to set
     */
    setViewXml(viewXml: string): Promise<void>;
}
export declare class ViewFields extends SharePointQueryableCollection {
    /**
     * Gets a value that specifies the XML schema that represents the collection.
     */
    getSchemaXml(): Promise<string>;
    /**
     * Adds the field with the specified field internal name or display name to the collection.
     *
     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
     */
    add(fieldTitleOrInternalName: string): Promise<void>;
    /**
     * Moves the field with the specified field internal name to the specified position in the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to move.
     * @param index The zero-based index of the new position for the field.
     */
    move(fieldInternalName: string, index: number): Promise<void>;
    /**
     * Removes all the fields from the collection.
     */
    removeAll(): Promise<void>;
    /**
     * Removes the field with the specified field internal name from the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
     */
    remove(fieldInternalName: string): Promise<void>;
}
export interface ViewAddResult {
    view: View;
    data: any;
}
export interface ViewUpdateResult {
    view: View;
    data: any;
}
