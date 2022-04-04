type maybe<T> = T | null | undefined;

// From
// https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm
export interface DescribeSObjectResult {
    activateable: boolean;
    actionOverrides?: maybe<ActionOverride[]> | undefined;
    childRelationships: ChildRelationship[];
    compactLayoutable: boolean;
    createable: boolean;
    custom: boolean;
    customSetting: boolean;
    deletable: boolean;
    deprecatedAndHidden: boolean;
    feedEnabled: boolean;
    fields: Field[];
    keyPrefix?: maybe<string> | undefined;
    label: string;
    labelPlural: string;
    layoutable: boolean;
    listviewable?: maybe<boolean> | undefined;
    lookupLayoutable?: maybe<boolean> | undefined;
    mergeable: boolean;
    mruEnabled: boolean;
    name: string;
    namedLayoutInfos: NamedLayoutInfo[];
    networkScopeFieldName?: maybe<string> | undefined;
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
    urlDetail?: string | undefined;
    urlEdit?: string | undefined;
    urlNew?: string | undefined;
    urls: Record<string, string>;
}

export interface ActionOverride {
    formFactor: string;
    isAvailableInTouch: boolean;
    name: string;
    pageId: string;
    url?: maybe<string> | undefined;
}

export interface ChildRelationship {
    cascadeDelete: boolean;
    childSObject: string;
    deprecatedAndHidden: boolean;
    field: string;
    junctionIdListNames: string[];
    junctionReferenceTo: string[];
    relationshipName?: maybe<string> | undefined;
    restrictedDelete: boolean;
}

export interface Field {
    aggregatable: boolean;
    // Not in documentation, but exists in data
    aiPredictionField?: maybe<boolean> | undefined;
    // Salesforce documentation is wrong, they show `autonumber` but true data returned is `autoNumber`
    autoNumber: boolean;
    byteLength: number;
    calculated: boolean;
    calculatedFormula?: maybe<string> | undefined;
    cascadeDelete: boolean;
    caseSensitive: boolean;
    compoundFieldName?: maybe<string> | undefined;
    controllerName?: maybe<string> | undefined;
    createable: boolean;
    custom: boolean;
    defaultValue?: maybe<string | boolean> | undefined;
    defaultValueFormula?: maybe<string> | undefined;
    defaultedOnCreate: boolean;
    dependentPicklist: boolean;
    deprecatedAndHidden: boolean;
    digits?: maybe<number> | undefined;
    displayLocationInDecimal?: maybe<boolean> | undefined;
    encrypted?: maybe<boolean> | undefined;
    externalId: boolean;
    extraTypeInfo?: maybe<ExtraTypeInfo> | undefined;
    filterable: boolean;
    filteredLookupInfo?: maybe<FilteredLookupInfo> | undefined;
    // Salesforce documentation is wrong, this field does not exist, calculatedFormula is correct
    formula?: maybe<string> | undefined;
    // Not in documentation, but exists in data
    formulaTreatNullNumberAsZero?: maybe<boolean> | undefined;
    groupable: boolean;
    highScaleNumber?: maybe<boolean> | undefined;
    htmlFormatted: boolean;
    idLookup: boolean;
    inlineHelpText?: maybe<string> | undefined;
    label: string;
    length: number;
    mask?: maybe<string> | undefined;
    maskType?: maybe<string> | undefined;
    name: string;
    nameField: boolean;
    namePointing: boolean;
    nillable: boolean;
    permissionable: boolean;
    picklistValues?: maybe<PicklistEntry[]> | undefined;
    polymorphicForeignKey: boolean;
    precision?: maybe<number> | undefined;
    queryByDistance: boolean;
    referenceTargetField?: maybe<string> | undefined;
    referenceTo?: maybe<string[]> | undefined;
    relationshipName?: maybe<string> | undefined;
    relationshipOrder?: maybe<number> | undefined;
    restrictedDelete?: maybe<boolean> | undefined;
    restrictedPicklist: boolean;
    scale: number;
    searchPrefilterable: boolean;
    soapType: SOAPType;
    sortable: boolean;
    type: FieldType;
    unique: boolean;
    updateable: boolean;
    writeRequiresMasterRead?: maybe<boolean> | undefined;
}

export type ExtraTypeInfo =
    | 'imageurl'
    | 'personname'
    | 'plaintextarea'
    | 'richtextarea'
    | 'switchablepersonname'
    | 'externallookup'
    | 'indirectlookup';

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
    | 'complexvalue';

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
    | 'urn:SearchLayoutFieldsDisplayed';

export interface PicklistEntry {
    active: boolean;
    validFor?: maybe<string> | undefined;
    defaultValue: boolean;
    label?: maybe<string> | undefined;
    value: string;
}

export interface RecordTypeInfo {
    available: boolean;
    defaultRecordTypeMapping: boolean;
    developerName?: maybe<string> | undefined;
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
    ifModifiedSince?: string | undefined;
}

export interface BatchDescribeSObjectOptions {
    types: string[];
    autofetch?: boolean | undefined;
    maxConcurrentRequests?: number | undefined;
}

export interface DescribeGlobalResult {
    encoding: string;
    maxBatchSize: number;
    sobjects: DescribeGlobalSObjectResult[];
}
