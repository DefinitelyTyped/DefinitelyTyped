import { SharePointQueryable, SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
export declare class LimitedWebPartManager extends SharePointQueryable {
    /**
     * Gets the set of web part definitions contained by this web part manager
     *
     */
    readonly webparts: WebPartDefinitions;
    /**
     * Exports a webpart definition
     *
     * @param id the GUID id of the definition to export
     */
    export(id: string): Promise<string>;
    /**
     * Imports a webpart
     *
     * @param xml webpart definition which must be valid XML in the .dwp or .webpart format
     */
    import(xml: string): Promise<any>;
}
export declare class WebPartDefinitions extends SharePointQueryableCollection {
    /**
     * Gets a web part definition from the collection by id
     *
     * @param id The storage ID of the SPWebPartDefinition to retrieve
     */
    getById(id: string): WebPartDefinition;
    /**
     * Gets a web part definition from the collection by storage id
     *
     * @param id The WebPart.ID of the SPWebPartDefinition to retrieve
     */
    getByControlId(id: string): WebPartDefinition;
}
export declare class WebPartDefinition extends SharePointQueryableInstance {
    /**
     * Gets the webpart information associated with this definition
     */
    readonly webpart: WebPart;
    /**
     * Saves changes to the Web Part made using other properties and methods on the SPWebPartDefinition object
     */
    saveChanges(): Promise<any>;
    /**
     * Moves the Web Part to a different location on a Web Part Page
     *
     * @param zoneId The ID of the Web Part Zone to which to move the Web Part
     * @param zoneIndex A Web Part zone index that specifies the position at which the Web Part is to be moved within the destination Web Part zone
     */
    moveTo(zoneId: string, zoneIndex: number): Promise<void>;
    /**
     * Closes the Web Part. If the Web Part is already closed, this method does nothing
     */
    close(): Promise<void>;
    /**
     * Opens the Web Part. If the Web Part is already closed, this method does nothing
     */
    open(): Promise<void>;
    /**
     * Removes a webpart from a page, all settings will be lost
     */
    delete(): Promise<void>;
}
export declare class WebPart extends SharePointQueryableInstance {
}
