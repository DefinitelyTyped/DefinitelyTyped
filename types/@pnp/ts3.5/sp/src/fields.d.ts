import { SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
import { TypedHash } from "@pnp/common";
import { XmlSchemaFieldCreationInformation, DateTimeFieldFormatType, DateTimeFieldFriendlyFormatType, FieldTypes, CalendarType, UrlFieldFormatType, FieldUserSelectionMode, FieldCreationProperties, ChoiceFieldFormatType } from "./types";
/**
 * Describes a collection of Field objects
 *
 */
export declare class Fields extends SharePointQueryableCollection {
    /**
     * Gets a field from the collection by id
     *
     * @param id The Id of the list
     */
    getById(id: string): Field;
    /**
     * Gets a field from the collection by title
     *
     * @param title The case-sensitive title of the field
     */
    getByTitle(title: string): Field;
    /**
     * Gets a field from the collection by using internal name or title
     *
     * @param name The case-sensitive internal name or title of the field
     */
    getByInternalNameOrTitle(name: string): Field;
    /**
     * Creates a field based on the specified schema
     */
    createFieldAsXml(xml: string | XmlSchemaFieldCreationInformation): Promise<FieldAddResult>;
    /**
     * Adds a new field to the collection
     *
     * @param title The new field's title
     * @param fieldType The new field's type (ex: SP.FieldText)
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    add(title: string, fieldType: string, properties: FieldCreationProperties & {
        FieldTypeKind: number;
    }): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldText to the collection
     *
     * @param title The field title
     * @param maxLength The maximum number of characters allowed in the value of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addText(title: string, maxLength?: number, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldCalculated to the collection
     *
     * @param title The field title.
     * @param formula The formula for the field.
     * @param dateFormat The date and time format that is displayed in the field.
     * @param outputType Specifies the output format for the field. Represents a FieldType value.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addCalculated(title: string, formula: string, dateFormat: DateTimeFieldFormatType, outputType?: FieldTypes, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldDateTime to the collection
     *
     * @param title The field title
     * @param displayFormat The format of the date and time that is displayed in the field.
     * @param calendarType Specifies the calendar type of the field.
     * @param friendlyDisplayFormat The type of friendly display format that is used in the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addDateTime(title: string, displayFormat?: DateTimeFieldFormatType, calendarType?: CalendarType, friendlyDisplayFormat?: DateTimeFieldFriendlyFormatType, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldNumber to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addNumber(title: string, minValue?: number, maxValue?: number, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldCurrency to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addCurrency(title: string, minValue?: number, maxValue?: number, currencyLocalId?: number, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldMultiLineText to the collection
     *
     * @param title The field title
     * @param numberOfLines Specifies the number of lines of text to display for the field.
     * @param richText Specifies whether the field supports rich formatting.
     * @param restrictedMode Specifies whether the field supports a subset of rich formatting.
     * @param appendOnly Specifies whether all changes to the value of the field are displayed in list forms.
     * @param allowHyperlink Specifies whether a hyperlink is allowed as a value of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     *
     */
    addMultilineText(title: string, numberOfLines?: number, richText?: boolean, restrictedMode?: boolean, appendOnly?: boolean, allowHyperlink?: boolean, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldUrl to the collection
     *
     * @param title The field title
     */
    addUrl(title: string, displayFormat?: UrlFieldFormatType, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /** Adds a user field to the colleciton
    *
    * @param title The new field's title
    * @param selectionMode The selection mode of the field
    * @param selectionGroup Value that specifies the identifier of the SharePoint group whose members can be selected as values of the field
    * @param properties
    */
    addUser(title: string, selectionMode: FieldUserSelectionMode, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a SP.FieldLookup to the collection
     *
     * @param title The new field's title
     * @param lookupListId The guid id of the list where the source of the lookup is found
     * @param lookupFieldName The internal name of the field in the source list
     * @param properties Set of additional properties to set on the new field
     */
    addLookup(title: string, lookupListId: string, lookupFieldName: string, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param format The display format of the available options for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addChoice(title: string, choices: string[], format?: ChoiceFieldFormatType, fillIn?: boolean, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldMultiChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addMultiChoice(title: string, choices: string[], fillIn?: boolean, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldBoolean to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addBoolean(title: string, properties?: FieldCreationProperties): Promise<FieldAddResult>;
    /**
    * Creates a secondary (dependent) lookup field, based on the Id of the primary lookup field.
    *
    * @param displayName The display name of the new field.
    * @param primaryLookupFieldId The guid of the primary Lookup Field.
    * @param showField Which field to show from the lookup list.
    */
    addDependentLookupField(displayName: string, primaryLookupFieldId: string, showField: string): Promise<FieldAddResult>;
    /**
     * Adds a new SP.FieldLocation to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addLocation(title: string, properties?: FieldCreationProperties): Promise<FieldAddResult>;
}
/**
 * Describes a single of Field instance
 *
 */
export declare class Field extends SharePointQueryableInstance {
    /**
     * Delete this fields
     *
     */
    delete: () => Promise<void>;
    /**
     * Updates this field intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param fieldType The type value, required to update child field type properties
     */
    update(properties: TypedHash<string | number | boolean>, fieldType?: string): Promise<FieldUpdateResult>;
    /**
     * Sets the value of the ShowInDisplayForm property for this field.
     */
    setShowInDisplayForm(show: boolean): Promise<void>;
    /**
     * Sets the value of the ShowInEditForm property for this field.
     */
    setShowInEditForm(show: boolean): Promise<void>;
    /**
     * Sets the value of the ShowInNewForm property for this field.
     */
    setShowInNewForm(show: boolean): Promise<void>;
}
/**
 * This interface defines the result of adding a field
 */
export interface FieldAddResult {
    data: any;
    field: Field;
}
export interface FieldUpdateResult {
    data: any;
    field: Field;
}
