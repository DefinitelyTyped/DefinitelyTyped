type maybe<T> = (T | null | undefined)

// From
// https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm
export interface DescribeSObjectResult {
    activateable: boolean;
    actionOverrides?: maybe<ActionOverride[]>;
    childRelationships: ChildRelationship[];
    compactLayoutable: boolean;
    createable: boolean;
    custom: boolean;
    customSetting: boolean;
    deletable: boolean;
    deprecatedAndHidden: boolean;
    feedEnabled: boolean;
    fields: Field[];
    keyPrefix?: maybe<string>;
    label: string;
    labelPlural: string;
    layoutable: boolean;
    listviewable?: maybe<boolean>;
    lookupLayoutable?: maybe<boolean>;
    mergeable: boolean;
    mruEnabled: boolean;
    name: string;
    namedLayoutInfos: NamedLayoutInfo[];
    networkScopeFieldName?: maybe<string>;
    queryable: boolean;
    recordTypeInfos: RecordTypeInfo[];
    replicateable: boolean;
    retrieveable: boolean;
    searchable: boolean;
    searchLayoutable: boolean;
    supportedScopes: ScopeInfo[];
    triggerable: boolean;
    undeletable: boolean;
    updateable: boolean;
    urlDetail?: string;
    urlEdit?: string;
    urlNew?: string;
    urls: Record<string, string>;
}

export interface ActionOverride {
    formFactor: string;
    isAvailableInTouch: boolean;
    name: string;
    pageId: string;
    url?: maybe<string>;
}

export interface ChildRelationship {
    cascadeDelete: boolean;
    childSObject: string;
    deprecatedAndHidden: boolean;
    field: string;
    junctionIdListNames: string[];
    junctionReferenceTo: string[];
    relationshipName?: maybe<string>;
    restrictedDelete: boolean;
}

export interface Field {
    aggregatable: boolean;
    autonumber: boolean;
    byteLength: number;
    calculated: boolean;
    calculatedFormula?: maybe<string>;
    cascadeDelete: boolean;
    caseSensitive: boolean;
    compoundFieldName?: maybe<string>;
    controllerName?: maybe<string>;
    createable: boolean;
    custom: boolean;
    defaultValue?: maybe<string | boolean>;
    defaultValueFormula?: maybe<string>;
    defaultedOnCreate: boolean;
    dependentPicklist: boolean;
    deprecatedAndHidden: boolean;
    digits?: maybe<number>;
    displayLocationInDecimal?: maybe<boolean>;
    encrypted?: maybe<true>;
    externalId: boolean;
    extraTypeInfo?: maybe<ExtraTypeInfo>;
    filterable: boolean;
    filteredLookupInfo?: maybe<FilteredLookupInfo>;
    formula?: maybe<string>;
    groupable: boolean;
    highScaleNumber?: maybe<boolean>;
    htmlFormatted :boolean;
    idLookup: boolean;
    inlineHelpText?: maybe<string>;
    label: string;
    length: number;
    mask?: maybe<string>;
    maskType?: maybe<string>;
    name: string;
    nameField: boolean;
    namePointing: boolean;
    nillable: boolean;
    permissionable: boolean;
    picklistValues?: maybe<PicklistEntry[]>;
    polymorphicForeignKey: boolean;
    precision?: maybe<number>;
    queryByDistance: boolean;
    relationshipName?: maybe<string>;
    relationshipOrder?: maybe<number>;
    referenceTargetField?: maybe<string>;
    referenceTo?: maybe<string[]>;
    restrictedPicklist: boolean;
    scale: number;
    searchPrefilterable: boolean;
    soapType: SOAPType;
    sortable: boolean;
    type: FieldType;
    unique: boolean;
    updateable: boolean;
    writeRequiresMasterRead?: maybe<boolean>;
}

export type ExtraTypeInfo =
    | 'imageurl'
    | 'personname'
    | 'plaintextarea'
    | 'richtextarea'
    | 'switchablepersonname'
    | 'externallookup'
    | 'indirectlookup'

export type FieldType =
    | 'string'
    | 'boolean'
    | 'int'
    | 'double'
    | 'date'
    | 'datetime'
    | 'base64'
    | 'id'
    | 'reference'
    | 'currency'
    | 'textarea'
    | 'percent'
    | 'phone'
    | 'url'
    | 'email'
    | 'combobox'
    | 'picklist'
    | 'multipicklist'
    | 'anyType'
    | 'location'
    // the following are not found in official documentation, but still occur when describing an sobject
    | 'time'
    | 'encryptedstring'
    | 'address'
    | 'complexvalue'

export interface FilteredLookupInfo {
    controllingFields: string[];
    dependent: boolean;
    optionalFilter: boolean;
}

export type SOAPType =
    | 'tns:ID'
    | 'xsd:anyType'
    | 'xsd:base64Binary'
    | 'xsd:boolean'
    | 'xsd:date'
    | 'xsd:dateTime'
    | 'xsd:double'
    | 'xsd:int'
    | 'xsd:string'
    // the following are not found in official documentation, but still occur when describing an sobject
    | 'xsd:time'
    | 'urn:address'
    | 'urn:JunctionIdListNames'
    | 'urn:location'
    | 'urn:RecordTypesSupported'
    | 'urn:RelationshipReferenceTo'
    | 'urn:SearchLayoutButtonsDisplayed'
    | 'urn:SearchLayoutFieldsDisplayed'

export interface PicklistEntry {
    active: boolean;
    validFor?: maybe<string>;
    defaultValue: boolean;
    label?: maybe<string>;
    value: string;
}

export interface RecordTypeInfo {
    available: boolean;
    defaultRecordTypeMapping: boolean;
    developerName?: maybe<string>;
    master: boolean;
    name: string;
    recordTypeId: string;
    urls: Record<string, string>;
}

export interface NamedLayoutInfo {
    name: string;
    urls: Record<string, string>;
}

export interface ScopeInfo {
    label: string;
    name: string;
}

// From
// https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm#!

export interface DescribeGlobalSObjectResult {
    activateable: boolean;
    createable: boolean;
    custom: boolean;
    customSetting: boolean;
    deletable: boolean;
    deprecatedAndHidden: boolean;
    feedEnabled: boolean;
    hasSubtypes: boolean;
    isSubtype: boolean;
    keyPrefix: string | null;
    label: string;
    labelPlural: string;
    layoutable: boolean;
    mergeable: boolean;
    mruEnabled: boolean;
    name: string;
    queryable: boolean;
    replicateable: boolean;
    retrieveable: boolean;
    searchable: boolean;
    triggerable: boolean;
    undeletable: boolean;
    updateable: boolean;
    urls: Record<string, string>;
}

export interface DescribeSObjectOptions {
    type: string;
    ifModifiedSince?: string;
}

export interface BatchDescribeSObjectOptions {
    types: string[];
    autofetch?: boolean;
    maxConcurrentRequests?: number;
}

export interface DescribeGlobalResult {
    encoding: string;
    maxBatchSize: number;
    sobjects: DescribeGlobalSObjectResult[];
}
