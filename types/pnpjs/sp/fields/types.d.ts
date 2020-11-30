import { _SharePointQueryableInstance, _SharePointQueryableCollection, IDeleteable } from "../sharepointqueryable";
import { ITypedHash } from "../../common";
export declare class _Fields extends _SharePointQueryableCollection<IFieldInfo[]> {
    /**
     * Gets a field from the collection by id
     *
     * @param id The Id of the list
     */
    getById(id: string): IField;
    /**
     * Gets a field from the collection by title
     *
     * @param title The case-sensitive title of the field
     */
    getByTitle(title: string): IField;
    /**
     * Gets a field from the collection by using internal name or title
     *
     * @param name The case-sensitive internal name or title of the field
     */
    getByInternalNameOrTitle(name: string): IField;
    /**
     * Creates a field based on the specified schema
     *
     * @param xml A string or XmlSchemaFieldCreationInformation instance descrbing the field to create
     */
    createFieldAsXml(xml: string | IXmlSchemaFieldCreationInformation): Promise<IFieldAddResult>;
    /**
     * Adds a new field to the collection
     *
     * @param title The new field's title
     * @param fieldType The new field's type (ex: SP.FieldText)
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    add(title: string, fieldType: string, properties: IFieldCreationProperties & {
        FieldTypeKind: number;
    }): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldText to the collection
     *
     * @param title The field title
     * @param maxLength The maximum number of characters allowed in the value of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addText(title: string, maxLength?: number, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldCalculated to the collection
     *
     * @param title The field title.
     * @param formula The formula for the field.
     * @param dateFormat The date and time format that is displayed in the field.
     * @param outputType Specifies the output format for the field. Represents a FieldType value.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addCalculated(title: string, formula: string, dateFormat: DateTimeFieldFormatType, outputType?: FieldTypes, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldDateTime to the collection
     *
     * @param title The field title
     * @param displayFormat The format of the date and time that is displayed in the field.
     * @param calendarType Specifies the calendar type of the field.
     * @param friendlyDisplayFormat The type of friendly display format that is used in the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addDateTime(title: string, displayFormat?: DateTimeFieldFormatType, calendarType?: CalendarType, friendlyDisplayFormat?: DateTimeFieldFriendlyFormatType, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldNumber to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addNumber(title: string, minValue?: number, maxValue?: number, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldCurrency to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addCurrency(title: string, minValue?: number, maxValue?: number, currencyLocalId?: number, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
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
    addMultilineText(title: string, numberOfLines?: number, richText?: boolean, restrictedMode?: boolean, appendOnly?: boolean, allowHyperlink?: boolean, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldUrl to the collection
     *
     * @param title The field title
     */
    addUrl(title: string, displayFormat?: UrlFieldFormatType, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /** Adds a user field to the colleciton
    *
    * @param title The new field's title
    * @param selectionMode The selection mode of the field
    * @param selectionGroup Value that specifies the identifier of the SharePoint group whose members can be selected as values of the field
    * @param properties
    */
    addUser(title: string, selectionMode: FieldUserSelectionMode, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a SP.FieldLookup to the collection
     *
     * @param title The new field's title
     * @param lookupListId The guid id of the list where the source of the lookup is found
     * @param lookupFieldName The internal name of the field in the source list
     * @param properties Set of additional properties to set on the new field
     */
    addLookup(title: string, lookupListId: string, lookupFieldName: string, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param format The display format of the available options for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addChoice(title: string, choices: string[], format?: ChoiceFieldFormatType, fillIn?: boolean, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldMultiChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addMultiChoice(title: string, choices: string[], fillIn?: boolean, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldBoolean to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addBoolean(title: string, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
    /**
    * Creates a secondary (dependent) lookup field, based on the Id of the primary lookup field.
    *
    * @param displayName The display name of the new field.
    * @param primaryLookupFieldId The guid of the primary Lookup Field.
    * @param showField Which field to show from the lookup list.
    */
    addDependentLookupField(displayName: string, primaryLookupFieldId: string, showField: string): Promise<IFieldAddResult>;
    /**
     * Adds a new SP.FieldLocation to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    addLocation(title: string, properties?: IFieldCreationProperties): Promise<IFieldAddResult>;
}
export interface IFields extends _Fields {
}
export declare const Fields: import("../sharepointqueryable").ISPInvokableFactory<IFields>;
export declare class _Field extends _SharePointQueryableInstance<IFieldInfo> {
    delete: (this: import("../sharepointqueryable").ISharePointQueryable<any>) => Promise<void>;
    /**
     * Updates this field instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param fieldType The type value such as SP.FieldLookup. Optional, looked up from the field if not provided
     */
    update(properties: any, fieldType?: string): Promise<IFieldUpdateResult>;
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
export interface IField extends _Field, IDeleteable {
}
export declare const Field: import("../sharepointqueryable").ISPInvokableFactory<IField>;
/**
 * This interface defines the result of adding a field
 */
export interface IFieldAddResult {
    data: Partial<IFieldInfo>;
    field: IField;
}
/**
 * This interface defines the result of updating a field
 */
export interface IFieldUpdateResult {
    data: Partial<IFieldInfo>;
    field: IField;
}
/**
 * Specifies the type of the field.
 */
export declare enum FieldTypes {
    Invalid = 0,
    Integer = 1,
    Text = 2,
    Note = 3,
    DateTime = 4,
    Counter = 5,
    Choice = 6,
    Lookup = 7,
    Boolean = 8,
    Number = 9,
    Currency = 10,
    URL = 11,
    Computed = 12,
    Threading = 13,
    Guid = 14,
    MultiChoice = 15,
    GridChoice = 16,
    Calculated = 17,
    File = 18,
    Attachments = 19,
    User = 20,
    Recurrence = 21,
    CrossProjectLink = 22,
    ModStat = 23,
    Error = 24,
    ContentTypeId = 25,
    PageSeparator = 26,
    ThreadIndex = 27,
    WorkflowStatus = 28,
    AllDayEvent = 29,
    WorkflowEventType = 30
}
export declare enum DateTimeFieldFormatType {
    DateOnly = 0,
    DateTime = 1
}
export declare enum DateTimeFieldFriendlyFormatType {
    Unspecified = 0,
    Disabled = 1,
    Relative = 2
}
/**
 * Specifies the control settings while adding a field.
 */
export declare enum AddFieldOptions {
    /**
     *  Specify that a new field added to the list must also be added to the default content type in the site collection
     */
    DefaultValue = 0,
    /**
     * Specify that a new field added to the list must also be added to the default content type in the site collection.
     */
    AddToDefaultContentType = 1,
    /**
     * Specify that a new field must not be added to any other content type
     */
    AddToNoContentType = 2,
    /**
     *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
     */
    AddToAllContentTypes = 4,
    /**
     * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
     */
    AddFieldInternalNameHint = 8,
    /**
     * Specify that a new field that is added to the specified list must also be added to the default list view
     */
    AddFieldToDefaultView = 16,
    /**
     * Specify to confirm that no other field has the same display name
     */
    AddFieldCheckDisplayName = 32
}
export interface IXmlSchemaFieldCreationInformation {
    Options?: AddFieldOptions;
    SchemaXml: string;
}
export declare enum CalendarType {
    Gregorian = 1,
    Japan = 3,
    Taiwan = 4,
    Korea = 5,
    Hijri = 6,
    Thai = 7,
    Hebrew = 8,
    GregorianMEFrench = 9,
    GregorianArabic = 10,
    GregorianXLITEnglish = 11,
    GregorianXLITFrench = 12,
    KoreaJapanLunar = 14,
    ChineseLunar = 15,
    SakaEra = 16,
    UmAlQura = 23
}
export declare enum UrlFieldFormatType {
    Hyperlink = 0,
    Image = 1
}
export declare enum FieldUserSelectionMode {
    PeopleAndGroups = 1,
    PeopleOnly = 0
}
export interface IFieldCreationProperties extends ITypedHash<string | number | boolean> {
    DefaultFormula?: string;
    Description?: string;
    EnforceUniqueValues?: boolean;
    FieldTypeKind?: number;
    Group?: string;
    Hidden?: boolean;
    Indexed?: boolean;
    Required?: boolean;
    Title?: string;
    ValidationFormula?: string;
    ValidationMessage?: string;
}
export declare enum ChoiceFieldFormatType {
    Dropdown = 0,
    RadioButtons = 1
}
export interface IFieldInfo {
    DefaultFormula: string | null;
    DefaultValue: string | null;
    Description: string;
    Direction: string;
    EnforceUniqueValues: boolean;
    EntityPropertyName: string;
    FieldTypeKind: FieldTypes;
    Filterable: boolean;
    FromBaseType: boolean;
    Group: string;
    Hidden: boolean;
    Id: string;
    Indexed: boolean;
    IndexStatus: number;
    InternalName: string;
    JSLink: string;
    PinnedToFiltersPane: boolean;
    ReadOnlyField: boolean;
    Required: boolean;
    SchemaXml: string;
    Scope: string;
    Sealed: boolean;
    ShowInFiltersPane: number;
    Sortable: boolean;
    StaticName: string;
    Title: string;
    TypeAsString: string;
    TypeDisplayName: string;
    TypeShortDescription: string;
    ValidationFormula: string | null;
    ValidationMessage: string | null;
}
//# sourceMappingURL=types.d.ts.map