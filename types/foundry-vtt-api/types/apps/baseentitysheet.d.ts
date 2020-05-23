declare interface BaseEntitySheetData {
    entity?: Entity;
    owner?: boolean;
    limited?: boolean;
    options?: any;
    editable?: boolean;
    cssClass?: string;
}

/**
 * A simple implementation of the FormApplication pattern which is specialized in editing Entity instances
 */
declare class BaseEntitySheet extends FormApplication {
    constructor(...args: any);

    /**
     * A convenience accessor for the object property of the inherited FormApplication instance
     */
    get entity(): Entity;

    /**
     * The BaseEntitySheet requires that the form itself be editable as well as the entity be owned
     */
    get isEditable(): boolean;

    /**
     * Assign the default options which are supported by the entity edit sheet
     */
    static get defaultOptions(): any;

    /**
     * The displayed window title for the sheet - the entity name by default
     */
    get title(): string;

    /**
     * Default data preparation logic for the entity sheet
     */
    getData(): BaseEntitySheetData;

    /**
     * Implement the _updateObject method as required by the parent class spec
     * This defines how to update the subject of the form when the form is submitted
     */
    protected _updateObject(event: Event | JQuery.Event, formData: any): Promise<any>;
}
