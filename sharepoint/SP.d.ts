// Type definitions for SharePoint JSOM
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../microsoft-ajax/Microsoft.Ajax.d.ts"/>
/// <reference path="SP.Workflow.d.ts"/>
/// <reference path="SP.Utilities.d.ts"/>
/// <reference path="SP.BusinessData.d.ts"/>
/// <reference path="SP.WebParts.d.ts"/>

interface IEnumerator<T> {
    get_current(): T;
    moveNext(): boolean;
    reset(): void;
}

interface IEnumerable<T> {
    getEnumerator(): IEnumerator<T>;
}

declare namespace SP {
    export class ScriptUtility {
        static isNullOrEmptyString(str: string): boolean;
        static isNullOrUndefined(obj: any): boolean;
        static isUndefined(obj: any): boolean;
        static truncateToInt(n: number): number;
    }
    export class Guid {
        constructor(guidText: string);
        static get_empty(): SP.Guid;
        static newGuid(): SP.Guid;
        static isValid(uuid: string): boolean;
        toString(): string;
        toString(format: string): string;
        equals(uuid: SP.Guid): boolean;
        toSerialized(): string;
    }
    /** Specifies permissions that are used to define user roles. Represents SPBasePermissions class. */
    export enum PermissionKind {
        /** Has no permissions on the Web site. Not available through the user interface. */
        emptyMask,
        /** View items in lists, documents in document libraries, and view Web discussion comments. */
        viewListItems,
        /** Add items to lists, add documents to document libraries, and add Web discussion comments. */
        addListItems,
        /** Edit items in lists, edit documents in document libraries, edit Web discussion comments in documents, and customize Web Part Pages in document libraries. */
        editListItems,
        /** Delete items from a list, documents from a document library, and Web discussion comments in documents. */
        deleteListItems,
        /** Approve a minor version of a list item or document. */
        approveItems,
        /** View the source of documents with server-side file handlers. */
        openItems,
        /** View past versions of a list item or document. */
        viewVersions,
        /** Delete past versions of a list item or document. */
        deleteVersions,
        /** Discard or check in a document which is checked out to another user. */
        cancelCheckout,
        /** Create, change, and delete personal views of lists. */
        managePersonalViews,
        /** Create and delete lists, add or remove columns in a list, and add or remove public views of a list. */
        manageLists,
        /** View forms, views, and application pages, and enumerate lists. */
        viewFormPages,
        /** Make content of a list or document library retrieveable for anonymous users through SharePoint search. The list permissions in the site do not change.  */
        anonymousSearchAccessList,
        /** Allow users to open a Web site, list, or folder to access items inside that container. */
        open,
        /** View pages in a Web site. */
        viewPages,
        /** Add, change, or delete HTML pages or Web Part Pages, and edit the Web site using a SharePoint Foundation?compatible editor. */
        addAndCustomizePages,
        /** Apply a theme or borders to the entire Web site. */
        applyThemeAndBorder,
        /** Apply a style sheet (.css file) to the Web site. */
        applyStyleSheets,
        /** View reports on Web site usage. */
        viewUsageData,
        /** Create a Web site using Self-Service Site Creation. */
        createSSCSite,
        /** Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.  */
        manageSubwebs,
        /** Create a group of users that can be used anywhere within the site collection. */
        createGroups,
        /** Create and change permission levels on the Web site and assign permissions to users and groups. */
        managePermissions,
        /** Enumerate files and folders in a Web site using Microsoft Office SharePoint Designer 2007 and WebDAV interfaces. */
        browseDirectories,
        /** View information about users of the Web site. */
        browseUserInfo,
        /** Add or remove personal Web Parts on a Web Part Page. */
        addDelPrivateWebParts,
        /** Update Web Parts to display personalized information. */
        updatePersonalWebParts,
        /** Grant the ability to perform all administration tasks for the Web site as well as manage content. Activate, deactivate, or edit properties of Web site scoped Features through the object model or through the user interface (UI). When granted on the root Web site of a site collection, activate, deactivate, or edit properties of site collection scoped Features through the object model. To browse to the Site Collection Features page and activate or deactivate site collection scoped Features through the UI, you must be a site collection administrator. */
        manageWeb,
        /** Content of lists and document libraries in the Web site will be retrieveable for anonymous users through SharePoint search if the list or document library has AnonymousSearchAccessList set.  */
        anonymousSearchAccessWebLists,
        /** Use features that launch client applications; otherwise, users must work on documents locally and upload changes.  */
        useClientIntegration,
        /** Use SOAP, WebDAV, or Microsoft Office SharePoint Designer 2007 interfaces to access the Web site. */
        useRemoteAPIs,
        /** Manage alerts for all users of the Web site. */
        manageAlerts,
        /** Create e-mail alerts. */
        createAlerts,
        /** Allows a user to change his or her user information, such as adding a picture. */
        editMyUserInfo,
        /** Enumerate permissions on the Web site, list, folder, document, or list item. */
        enumeratePermissions,
        /** Has all permissions on the Web site. Not available through the user interface. */
        fullMask,
    }

    export class BaseCollection<T> implements IEnumerable<T> {
        getEnumerator(): IEnumerator<T>;
        get_count(): number;
        itemAtIndex(index: number): T;
        constructor();
    }
    export interface IFromJson {
        fromJson(initValue: any): void;
        customFromJson(initValue: any): boolean;
    }
    export class Base64EncodedByteArray {
        constructor();
        constructor(base64Str: string);
        get_length(): number;
        toBase64String(): string;
        append(b: any): void;
        getByteAt(index: number): any;
        setByteAt(index: number, b: any): void;
    }
    export class ConditionalScopeBase {
        startScope(): any;
        startIfTrue(): any;
        startIfFalse(): any;
        get_testResult(): boolean;
        fromJson(initValue: any): void;
        customFromJson(initValue: any): boolean;
    }
    export class ClientObjectPropertyConditionalScope extends SP.ConditionalScopeBase {
        constructor(clientObject: SP.ClientObject, propertyName: string, comparisonOperator: string, valueToCompare: any);
        constructor(clientObject: SP.ClientObject, propertyName: string, comparisonOperator: string, valueToCompare: any, allowAllActions: boolean);
    }
    //export class ClientResult {
    //    get_value(): any;
    //    setValue(value: any): void;
    //    constructor();
    //}
    export class ClientResult<T> {
        get_value(): T;
        setValue(value: T): void;
        constructor();
    }
    export class BooleanResult {
        get_value(): boolean;
        constructor();
    }
    export class CharResult {
        get_value(): any;
        constructor();
    }
    export class IntResult {
        get_value(): number;
        constructor();
    }
    export class DoubleResult {
        get_value(): number;
        constructor();
    }
    export class StringResult {
        get_value(): string;
        constructor();
    }
    export class DateTimeResult {
        get_value(): Date;
        constructor();
    }
    export class GuidResult {
        get_value(): SP.Guid;
        constructor();
    }
    export class JsonObjectResult {
        get_value(): any;
        constructor();
    }
    export class ClientDictionaryResultHandler<T> {
        constructor(dict: SP.ClientResult<T>);
    }
    export class ClientUtility {
        static urlPathEncodeForXmlHttpRequest(url: string): string;
        static getOrCreateObjectPathForConstructor(context: SP.ClientRuntimeContext, typeId: string, args: any[]): SP.ObjectPath;
    }
    export class XElement {
        get_name(): string;
        set_name(value: string): void;
        get_attributes(): any;
        set_attributes(value: any): void;
        get_children(): any;
        set_children(value: any): void;
        constructor();
    }
    export class ClientXElement {
        get_element(): SP.XElement;
        set_element(value: SP.XElement): void;
        constructor();
    }
    export class ClientXDocument {
        get_root(): SP.XElement;
        set_root(value: SP.XElement): void;
        constructor();
    }
    export class DataConvert {
        static writePropertiesToXml(writer: SP.XmlWriter, obj: any, propNames: string[], serializationContext: SP.SerializationContext): void;
        static populateDictionaryFromObject(dict: any, parentNode: any): void;
        static fixupTypes(context: SP.ClientRuntimeContext, dict: any): void;
        static populateArray(context: SP.ClientRuntimeContext, dest: any, jsonArrayFromServer: any): void;
        static fixupType(context: SP.ClientRuntimeContext, obj: any): any;
        static writeDictionaryToXml(writer: SP.XmlWriter, dict: any, topLevelElementTagName: string, keys: any, serializationContext: SP.SerializationContext): void;
        static writeValueToXmlElement(writer: SP.XmlWriter, objValue: any, serializationContext: SP.SerializationContext): void;
        static invokeSetProperty(obj: any, propName: string, propValue: any): void;
        static invokeGetProperty(obj: any, propName: string): any;
        static specifyDateTimeKind(datetime: Date, kind: SP.DateTimeKind): void;
        static getDateTimeKind(datetime: Date): SP.DateTimeKind;
        static createUnspecifiedDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number, milliseconds: number): Date;
        static createUtcDateTime(milliseconds: number): Date;
        static createLocalDateTime(milliseconds: number): Date;
    }
    export interface IWebRequestExecutorFactory {
        createWebRequestExecutor(): Sys.Net.WebRequestExecutor;
    }
    export class PageRequestFailedEventArgs extends Sys.EventArgs {
        get_executor(): Sys.Net.WebRequestExecutor;
        get_errorMessage(): string;
        get_isErrorPage(): boolean;
    }
    export class PageRequestSucceededEventArgs extends Sys.EventArgs {
        get_executor(): Sys.Net.WebRequestExecutor;
    }
    export class PageRequest {
        get_request(): Sys.Net.WebRequest;
        get_url(): string;
        set_url(value: string): void;
        get_expectedContentType(): string;
        set_expectedContentType(value: string): void;
        post(body: string): void;
        get(): void;
        static doPost(url: string, body: string, expectedContentType: string, succeededHandler: (sender: any, args: SP.PageRequestSucceededEventArgs) => void, failedHandler: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
        static doGet(url: string, expectedContentType: string, succeededHandler: (sender: any, args: SP.PageRequestSucceededEventArgs) => void, failedHandler: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
        add_succeeded(value: (sender: any, args: SP.PageRequestSucceededEventArgs) => void): void;
        remove_succeeded(value: (sender: any, args: SP.PageRequestSucceededEventArgs) => void): void;
        add_failed(value: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
        remove_failed(value: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
        constructor();
    }
    export class ResResources {
        static getString(resourceId: string, args: any[]): string;
    }
    /** Defines a writer that provides a set of methods to append text in XML format. Use the static SP.XmlWriter.create(sb) Method to create an SP.XmlWriter object with the Sys.StringBuilder object you pass in. */
    export class XmlWriter {
        /** Creates a new instance of the XmlWriter class with the specified string builder. */
        static create(sb: Sys.StringBuilder): SP.XmlWriter;
        /** Appends a start element tag with the specified name in XML format to the object?s string builder. */
        writeStartElement(tagName: string): void;
        /** Appends an element with the specified tag name and value in XML format to the string builder. */
        writeElementString(tagName: string, value: string): void;
        /** Appends an end element tag in XML format to the object?s string builder. This method appends the end element tag ?/>? if the start element tag is not closed; otherwise, it appends a full end element tag ?</tagName>? to the string builder. */
        writeEndElement(): void;
        /** Appends an attribute with the specified name and value in XML format to the object?s string builder. */
        writeAttributeString(localName: string, value: string): void;
        /** This method only appends the name of the attribute. You can append the value of the attribute by calling the SP.XmlWriter.writeString(value) Method, and close the attribute by calling the SP.XmlWriter.writeEndAttribute() Method. */
        writeStartAttribute(localName: string): void;
        /** Appends an end of an attribute in XML format to the object?s string builder. */
        writeEndAttribute(): void;
        /** Appends the specified value for an element tag or attribute to the object?s string builder. */
        writeString(value: string): void;
        /** Appends the specified text to the object?s string builder. */
        writeRaw(xml: string): void;
        /** This member is reserved for internal use and is not intended to be used directly from your code. */
        close(): void;
    }

    export class ClientConstants {
        AddExpandoFieldTypeSuffix: string;
        Actions: string;
        ApplicationName: string;
        Body: string;
        CatchScope: string;
        ChildItemQuery: string;
        ChildItems: string;
        ConditionalScope: string;
        Constructor: string;
        Context: string;
        ErrorInfo: string;
        ErrorMessage: string;
        ErrorStackTrace: string;
        ErrorCode: string;
        ErrorTypeName: string;
        ErrorValue: string;
        ErrorDetails: string;
        ErrorTraceCorrelationId: string;
        ExceptionHandlingScope: string;
        ExceptionHandlingScopeSimple: string;
        QueryableExpression: string;
        FinallyScope: string;
        HasException: string;
        Id: string;
        Identity: string;
        IfFalseScope: string;
        IfTrueScope: string;
        IsNull: string;
        LibraryVersion: string;
        TraceCorrelationId: string;
        Count: string;
        Method: string;
        Methods: string;
        Name: string;
        Object: string;
        ObjectPathId: string;
        ObjectPath: string;
        ObjectPaths: string;
        ObjectType: string;
        ObjectIdentity: string;
        ObjectIdentityQuery: string;
        ObjectVersion: string;
        Parameter: string;
        Parameters: string;
        ParentId: string;
        Processed: string;
        Property: string;
        Properties: string;
        Query: string;
        QueryResult: string;
        Request: string;
        Results: string;
        ScalarProperty: string;
        SchemaVersion: string;
        ScopeId: string;
        SelectAll: string;
        SelectAllProperties: string;
        SetProperty: string;
        SetStaticProperty: string;
        StaticMethod: string;
        StaticProperty: string;
        SuffixChar: string;
        SuffixByte: string;
        SuffixInt16: string;
        SuffixUInt16: string;
        SuffixInt32: string;
        SuffixUInt32: string;
        SuffixInt64: string;
        SuffixUInt64: string;
        SuffixSingle: string;
        SuffixDouble: string;
        SuffixDecimal: string;
        SuffixTimeSpan: string;
        SuffixArray: string;
        Test: string;
        TryScope: string;
        Type: string;
        TypeId: string;
        Update: string;
        Version: string;
        XmlElementName: string;
        XmlElementAttributes: string;
        XmlElementChildren: string;
        XmlNamespace: string;
        FieldValuesMethodName: string;
        RequestTokenHeader: string;
        FormDigestHeader: string;
        useWebLanguageHeader: string;
        useWebLanguageHeaderValue: string;
        ClientTagHeader: string;
        TraceCorrelationIdRequestHeader: string;
        TraceCorrelationIdResponseHeader: string;
        greaterThan: string;
        lessThan: string;
        equal: string;
        notEqual: string;
        greaterThanOrEqual: string;
        lessThanOrEqual: string;
        andAlso: string;
        orElse: string;
        not: string;
        expressionParameter: string;
        expressionProperty: string;
        expressionStaticProperty: string;
        expressionMethod: string;
        expressionStaticMethod: string;
        expressionConstant: string;
        expressionConvert: string;
        expressionTypeIs: string;
        ofType: string;
        take: string;
        where: string;
        orderBy: string;
        orderByDescending: string;
        thenBy: string;
        thenByDescending: string;
        queryableObject: string;
        ServiceFileName: string;
        ServiceMethodName: string;
        fluidApplicationInitParamUrl: string;
        fluidApplicationInitParamViaUrl: string;
        fluidApplicationInitParamRequestToken: string;
        fluidApplicationInitParamFormDigestTimeoutSeconds: string;
        fluidApplicationInitParamFormDigest: string;

    }
    export class ClientSchemaVersions {
        version14: string;
        version15: string;
        currentVersion: string;
    }
    export class ClientErrorCodes {
        genericError: number;
        accessDenied: number;
        docAlreadyExists: number;
        versionConflict: number;
        listItemDeleted: number;
        invalidFieldValue: number;
        notSupported: number;
        redirect: number;
        notSupportedRequestVersion: number;
        fieldValueFailedValidation: number;
        itemValueFailedValidation: number;
    }
    export class ClientAction {
        get_id(): number;
        get_path(): SP.ObjectPath;
        get_name(): string;
    }
    export class ClientActionSetProperty extends SP.ClientAction {
        constructor(obj: SP.ClientObject, propName: string, propValue: any);
    }
    export class ClientActionSetStaticProperty extends SP.ClientAction {
        constructor(context: SP.ClientRuntimeContext, typeId: string, propName: string, propValue: any);
    }
    export class ClientActionInvokeMethod extends SP.ClientAction {
        constructor(obj: SP.ClientObject, methodName: string, parameters: any[]);
    }
    export class ClientActionInvokeStaticMethod extends SP.ClientAction {
        constructor(context: SP.ClientRuntimeContext, typeId: string, methodName: string, parameters: any[]);
    }
    export class ClientObject {
        get_context(): SP.ClientRuntimeContext;
        get_path(): SP.ObjectPath;
        get_objectVersion(): string;
        set_objectVersion(value: string): void;
        fromJson(initValue: any): void;
        customFromJson(initValue: any): boolean;
        retrieve(): void;
        refreshLoad(): void;
        retrieve(propertyNames: string[]): void;
        isPropertyAvailable(propertyName: string): boolean;
        isObjectPropertyInstantiated(propertyName: string): boolean;
        get_serverObjectIsNull(): boolean;
        get_typedObject(): SP.ClientObject;
    }
    export class ClientObjectData {
        get_properties(): any;
        get_clientObjectProperties(): any;
        get_methodReturnObjects(): any;
        constructor();
    }
    /** Provides a base class for a collection of objects on a remote client. */
    export class ClientObjectCollection<T> extends SP.ClientObject implements IEnumerable<T> {
        get_areItemsAvailable(): boolean;
        /** Gets the data for all of the items in the collection. */
        retrieveItems(): SP.ClientObjectPrototype;
        /** Returns an enumerator that iterates through the collection. */
        getEnumerator(): IEnumerator<T>;
        /** Returns number of items in the collection. */
        get_count(): number;
        get_data(): T[];
        addChild(obj: T): void;
        getItemAtIndex(index: number): T;
        fromJson(obj: any): void;
    }
    export class ClientObjectList<T> extends SP.ClientObjectCollection<T> {
        constructor(context: SP.ClientRuntimeContext, objectPath: SP.ObjectPath, childItemType: any);
        fromJson(initValue: any): void;
        customFromJson(initValue: any): boolean;
    }
    export class ClientObjectPrototype {
        retrieve(): void;
        retrieve(propertyNames: string[]): void;
        retrieveObject(propertyName: string): SP.ClientObjectPrototype;
        retrieveCollectionObject(propertyName: string): SP.ClientObjectCollectionPrototype;
    }
    export class ClientObjectCollectionPrototype extends SP.ClientObjectPrototype {
        retrieveItems(): SP.ClientObjectPrototype;
    }
    export enum ClientRequestStatus {
        active,
        inProgress,
        completedSuccess,
        completedException,
    }
    export class WebRequestEventArgs extends Sys.EventArgs {
        constructor(webRequest: Sys.Net.WebRequest);
        get_webRequest(): Sys.Net.WebRequest;
    }
    export class ClientRequest {
        static get_nextSequenceId(): number;
        get_webRequest(): Sys.Net.WebRequest;
        add_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        remove_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        add_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        remove_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        get_navigateWhenServerRedirect(): boolean;
        set_navigateWhenServerRedirect(value: boolean): void;
    }
    export class ClientRequestEventArgs extends Sys.EventArgs {
        get_request(): SP.ClientRequest;
    }
    export class ClientRequestFailedEventArgs extends SP.ClientRequestEventArgs {
        constructor(request: SP.ClientRequest, message: string, stackTrace: string, errorCode: number, errorValue: string, errorTypeName: string, errorDetails: any);
        constructor(request: SP.ClientRequest, message: string, stackTrace: string, errorCode: number, errorValue: string, errorTypeName: string, errorDetails: any, errorTraceCorrelationId: string);
        get_message(): string;
        get_stackTrace(): string;
        get_errorCode(): number;
        get_errorValue(): string;
        get_errorTypeName(): string;
        get_errorDetails(): any;
        get_errorTraceCorrelationId(): string;
    }
    export class ClientRequestSucceededEventArgs extends SP.ClientRequestEventArgs {
    }
    export class ClientRuntimeContext implements Sys.IDisposable {
        constructor(serverRelativeUrlOrFullUrl: string);
        get_url(): string;
        get_viaUrl(): string;
        set_viaUrl(value: string): void;
        get_formDigestHandlingEnabled(): boolean;
        set_formDigestHandlingEnabled(value: boolean): void;
        get_applicationName(): string;
        set_applicationName(value: string): void;
        get_clientTag(): string;
        set_clientTag(value: string): void;
        get_webRequestExecutorFactory(): SP.IWebRequestExecutorFactory;
        set_webRequestExecutorFactory(value: SP.IWebRequestExecutorFactory): void;
        get_pendingRequest(): SP.ClientRequest;
        get_hasPendingRequest(): boolean;
        add_executingWebRequest(value: (sender: any, args: SP.WebRequestEventArgs) => void): void;
        remove_executingWebRequest(value: (sender: any, args: SP.WebRequestEventArgs) => void): void;
        add_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        remove_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        add_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        remove_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        add_beginningRequest(value: (sender: any, args: SP.ClientRequestEventArgs) => void): void;
        remove_beginningRequest(value: (sender: any, args: SP.ClientRequestEventArgs) => void): void;
        get_requestTimeout(): number;
        set_requestTimeout(value: number): void;
        executeQueryAsync(succeededCallback: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void, failedCallback: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        executeQueryAsync(succeededCallback: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        executeQueryAsync(succeededCallback: Function, failedCallback: Function): void;
        executeQueryAsync(succeededCallback: Function): void;
        executeQueryAsync(): void;
        get_staticObjects(): any;
        castTo(obj: SP.ClientObject, type: any): SP.ClientObject;
        addQuery(query: SP.ClientAction): void;
        addQueryIdAndResultObject(id: number, obj: any): void;
        parseObjectFromJsonString(json: string): any;
        parseObjectFromJsonString(json: string, skipTypeFixup: boolean): any;
        load(clientObject: SP.ClientObject): void;
        loadQuery<T>(clientObjectCollection: SP.ClientObjectCollection<T>, exp: string): any;
        load(clientObject: SP.ClientObject, ...exps: string[]): void;
        loadQuery<T>(clientObjectCollection: SP.ClientObjectCollection<T>): any;
        get_serverSchemaVersion(): string;
        get_serverLibraryVersion(): string;
        get_traceCorrelationId(): string;
        set_traceCorrelationId(value: string): void;
        dispose(): void;
    }
    export class SimpleDataTable {
        get_rows(): any[];
        constructor();
    }
    export class ClientValueObject {
        fromJson(obj: any): void;
        customFromJson(obj: any): boolean;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        customWriteToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): boolean;
        get_typeId(): string;
    }
    export class ClientValueObjectCollection<T> extends SP.ClientValueObject implements IEnumerable<T> {
        get_count(): number;
        getEnumerator(): IEnumerator<T>;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
    }
    export class ExceptionHandlingScope {
        constructor(context: SP.ClientRuntimeContext);
        startScope(): any;
        startTry(): any;
        startCatch(): any;
        startFinally(): any;
        get_processed(): boolean;
        get_hasException(): boolean;
        get_errorMessage(): string;
        get_serverStackTrace(): string;
        get_serverErrorCode(): number;
        get_serverErrorValue(): string;
        get_serverErrorTypeName(): string;
        get_serverErrorDetails(): any;
    }
    export class ObjectIdentityQuery extends SP.ClientAction {
        constructor(objectPath: SP.ObjectPath);
    }
    export class ObjectPath {
        setPendingReplace(): void;
    }
    export class ObjectPathProperty extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, parent: SP.ObjectPath, propertyName: string);
    }
    export class ObjectPathStaticProperty extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, typeId: string, propertyName: string);
    }
    export class ObjectPathMethod extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, parent: SP.ObjectPath, methodName: string, parameters: any[]);
    }
    export class ObjectPathStaticMethod extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, typeId: string, methodName: string, parameters: any[]);
    }
    export class ObjectPathConstructor extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, typeId: string, parameters: any[]);
    }
    export class SerializationContext {
        addClientObject(obj: SP.ClientObject): void;
        addObjectPath(path: SP.ObjectPath): void;
    }
    export class ResourceStrings {
        argumentExceptionMessage: string;
        argumentNullExceptionMessage: string;
        cC_AppIconAlt: string;
        cC_AppWebUrlNotSet: string;
        cC_ArrowImageAlt: string;
        cC_BackToSite: string;
        cC_ErrorGettingThemeInfo: string;
        cC_HelpLinkToolTip: string;
        cC_HostSiteUrlNotSet: string;
        cC_InvalidArgument: string;
        cC_InvalidJSON: string;
        cC_InvalidOperation: string;
        cC_PlaceHolderElementNotFound: string;
        cC_RequiredScriptNotLoaded: string;
        cC_SendFeedback: string;
        cC_SettingsLinkToolTip: string;
        cC_TimeoutGettingThemeInfo: string;
        cC_Welcome: string;
        cannotFindContextWebServerRelativeUrl: string;
        collectionHasNotBeenInitialized: string;
        collectionModified: string;
        invalidUsageOfConditionalScope: string;
        invalidUsageOfConditionalScopeNowAllowedAction: string;
        invalidUsageOfExceptionHandlingScope: string;
        namedPropertyHasNotBeenInitialized: string;
        namedServerObjectIsNull: string;
        noObjectPathAssociatedWithObject: string;
        notSameClientContext: string;
        notSupportedQueryExpressionWithExpressionDetail: string;
        objectNameIdentity: string;
        objectNameMethod: string;
        objectNameProperty: string;
        objectNameType: string;
        propertyHasNotBeenInitialized: string;
        rE_BrowserBinaryDataNotSupported: string;
        rE_BrowserNotSupported: string;
        rE_CannotAccessSite: string;
        rE_CannotAccessSiteCancelled: string;
        rE_CannotAccessSiteOpenWindowFailed: string;
        rE_DismissOpenWindowMessageLinkText: string;
        rE_DomainDoesNotMatch: string;
        rE_FixitHelpMessage: string;
        rE_InvalidArgumentOrField: string;
        rE_InvalidOperation: string;
        rE_NoTrustedOrigins: string;
        rE_OpenWindowButtonText: string;
        rE_OpenWindowMessage: string;
        rE_RequestAbortedOrTimedout: string;
        rE_RequestUnexpectedResponse: string;
        rE_RequestUnexpectedResponseWithContentTypeAndStatus: string;
        requestAbortedOrTimedOut: string;
        requestEmptyQueryName: string;
        requestHasBeenExecuted: string;
        requestUnexpectedResponse: string;
        requestUnexpectedResponseWithContentTypeAndStatus: string;
        requestUnexpectedResponseWithStatus: string;
        requestUnknownResponse: string;
        serverObjectIsNull: string;
        unknownError: string;
        unknownResponseData: string;
    }
    export class RuntimeRes {
        cC_PlaceHolderElementNotFound: string;
        rE_CannotAccessSiteOpenWindowFailed: string;
        noObjectPathAssociatedWithObject: string;
        cC_TimeoutGettingThemeInfo: string;
        unknownResponseData: string;
        requestUnexpectedResponseWithStatus: string;
        objectNameProperty: string;
        requestUnknownResponse: string;
        rE_RequestUnexpectedResponseWithContentTypeAndStatus: string;
        rE_BrowserNotSupported: string;
        argumentExceptionMessage: string;
        namedServerObjectIsNull: string;
        objectNameType: string;
        requestUnexpectedResponseWithContentTypeAndStatus: string;
        cC_InvalidJSON: string;
        invalidUsageOfExceptionHandlingScope: string;
        serverObjectIsNull: string;
        cC_AppWebUrlNotSet: string;
        rE_OpenWindowMessage: string;
        argumentNullExceptionMessage: string;
        cC_HelpLinkToolTip: string;
        propertyHasNotBeenInitialized: string;
        rE_RequestAbortedOrTimedout: string;
        invalidUsageOfConditionalScope: string;
        cC_ErrorGettingThemeInfo: string;
        rE_DismissOpenWindowMessageLinkText: string;
        rE_CannotAccessSiteCancelled: string;
        objectNameIdentity: string;
        cC_HostSiteUrlNotSet: string;
        rE_FixitHelpMessage: string;
        notSupportedQueryExpressionWithExpressionDetail: string;
        rE_RequestUnexpectedResponse: string;
        rE_DomainDoesNotMatch: string;
        cC_BackToSite: string;
        rE_NoTrustedOrigins: string;
        rE_InvalidOperation: string;
        collectionModified: string;
        cC_Welcome: string;
        cC_AppIconAlt: string;
        cC_SendFeedback: string;
        cC_ArrowImageAlt: string;
        cC_InvalidOperation: string;
        requestAbortedOrTimedOut: string;
        invalidUsageOfConditionalScopeNowAllowedAction: string;
        cannotFindContextWebServerRelativeUrl: string;
        rE_OpenWindowButtonText: string;
        unknownError: string;
        cC_InvalidArgument: string;
        rE_InvalidArgumentOrField: string;
        cC_SettingsLinkToolTip: string;
        requestEmptyQueryName: string;
        cC_RequiredScriptNotLoaded: string;
        rE_CannotAccessSite: string;
        notSameClientContext: string;
        requestUnexpectedResponse: string;
        rE_BrowserBinaryDataNotSupported: string;
        collectionHasNotBeenInitialized: string;
        namedPropertyHasNotBeenInitialized: string;
        requestHasBeenExecuted: string;
        objectNameMethod: string;
    }
    export class ParseJSONUtil {
        static parseObjectFromJsonString(json: string): any;
        static validateJson(text: string): boolean;
    }
    export enum DateTimeKind {
        unspecified,
        utc,
        local,
    }
    export class OfficeVersion {
        majorBuildVersion: number;
        previousMajorBuildVersion: number;
        majorVersion: string;
        previousVersion: string;
        majorVersionDotZero: string;
        previousVersionDotZero: string;
        assemblyVersion: string;
        wssMajorVersion: string;
    }
    export class ClientContext extends SP.ClientRuntimeContext {
        constructor(serverRelativeUrlOrFullUrl: string);
        static get_current(): SP.ClientContext;
        constructor();
        get_web(): SP.Web;
        get_site(): SP.Site;
        get_serverVersion(): string;
    }
    export enum ULSTraceLevel {
        verbose,
    }
    /** Provides a Unified Logging Service (ULS) that monitors log messages. */
    export class ULS {
        /** Gets a value that indicates whether the Unified Logging Service (ULS) is enabled. */
        static get_enabled(): boolean;
        /** Sets a value that indicates whether the Unified Logging Service (ULS) is enabled. */
        static set_enabled(value: boolean): void;
        /** Logs the specified debug message.
            This method logs the message with a time stamp. If any log messages are pending, this method also logs them. If the message cannot be logged, the message is added to the list of pending log messages. */
        static log(debugMessage: string): void;
        /** Increases the indentation for subsequent log messages. */
        static increaseIndent(): void;
        /** Decreases the indentation for subsequent log messages. */
        static decreaseIndent(): void;
        /** Traces when the function was entered. */
        static traceApiEnter(functionName: string, args: any[]): void;
        /** Traces when the function was entered. */
        static traceApiEnter(functionName: string): void;
        /** Traces when the function has finished. */
        static traceApiLeave(): void;
    }
    export class AccessRequests {
        static changeRequestStatus(context: SP.ClientRuntimeContext, itemId: number, newStatus: number, convStr: string, permType: string, permissionLevel: number): void;
        static changeRequestStatusBulk(context: SP.ClientRuntimeContext, requestIds: number[], newStatus: number): void;
    }
    export enum AddFieldOptions {
        defaultValue,
        addToDefaultContentType,
        addToNoContentType,
        addToAllContentTypes,
        addFieldInternalNameHint,
        addFieldToDefaultView,
        addFieldCheckDisplayName,
    }
    export class AlternateUrl extends SP.ClientObject {
        get_uri(): string;
        get_urlZone(): SP.UrlZone;
    }
    export class App extends SP.ClientObject {
        get_assetId(): string;
        get_contentMarket(): string;
        get_versionString(): string;
    }
    export class AppCatalog {
        static getAppInstances(context: SP.ClientRuntimeContext, web: SP.Web): SP.ClientObjectList<SP.AppInstance>;
        static getDeveloperSiteAppInstancesByIds(context: SP.ClientRuntimeContext, site: SP.Site, appInstanceIds: SP.Guid[]): SP.ClientObjectList<SP.AppInstance>;
        static isAppSideloadingEnabled(context: SP.ClientRuntimeContext): SP.BooleanResult;
    }
    export class AppContextSite extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext, siteUrl: string);
        get_site(): SP.Site;
        get_web(): SP.Web;
        static newObject(context: SP.ClientRuntimeContext, siteUrl: string): SP.AppContextSite;
    }
    export class AppInstance extends SP.ClientObject {
        get_appPrincipalId(): string;
        get_appWebFullUrl(): string;
        get_id(): SP.Guid;
        get_inError(): boolean;
        get_startPage(): string;
        get_remoteAppUrl(): string;
        get_settingsPageUrl(): string;
        get_siteId(): SP.Guid;
        get_status(): SP.AppInstanceStatus;
        get_title(): string;
        get_webId(): SP.Guid;
        getErrorDetails(): SP.ClientObjectList<SP.AppInstanceErrorDetails>;
        uninstall(): SP.GuidResult;
        upgrade(appPackageStream: SP.Base64EncodedByteArray): void;
        cancelAllJobs(): SP.BooleanResult;
        install(): SP.GuidResult;
        getPreviousAppVersion(): SP.App;
        retryAllJobs(): void;
    }
    export class AppInstanceErrorDetails extends SP.ClientObject {
        get_correlationId(): SP.Guid;
        set_correlationId(value: SP.Guid): void;
        get_errorDetail(): string;
        get_errorType(): SP.AppInstanceErrorType;
        set_errorType(value: SP.AppInstanceErrorType): void;
        get_errorTypeName(): string;
        get_exceptionMessage(): string;
        get_source(): SP.AppInstanceErrorSource;
        set_source(value: SP.AppInstanceErrorSource): void;
        get_sourceName(): string;
    }
    export enum AppInstanceErrorSource {
        common,
        appWeb,
        parentWeb,
        remoteWebSite,
        database,
        officeExtension,
        eventCallouts,
        finalization,
    }
    export enum AppInstanceErrorType {
        transient,
        configuration,
        app,
    }
    export enum AppInstanceStatus {
        invalidStatus,
        installing,
        canceling,
        uninstalling,
        installed,
        upgrading,
        initialized,
        upgradeCanceling,
        disabling,
        disabled,
    }
    export class AppLicense extends SP.ClientValueObject {
        get_rawXMLLicenseToken(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class AppLicenseCollection extends SP.ClientValueObjectCollection<AppLicense> {
        add(item: SP.AppLicense): void;
        get_item(index: number): SP.AppLicense;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum AppLicenseType {
        perpetualMultiUser,
        perpetualAllUsers,
        trialMultiUser,
        trialAllUsers,
    }
    export class Attachment extends SP.ClientObject {
        get_fileName(): string;
        get_serverRelativeUrl(): string;
        deleteObject(): void;
    }
    export class AttachmentCollection extends SP.ClientObjectCollection<Attachment> {
        itemAt(index: number): SP.Attachment;
        get_item(index: number): SP.Attachment;
        getByFileName(fileName: string): SP.Attachment;
    }
    export class AttachmentCreationInformation extends SP.ClientValueObject {
        get_contentStream(): SP.Base64EncodedByteArray;
        set_contentStream(value: SP.Base64EncodedByteArray): void;
        get_fileName(): string;
        set_fileName(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class BasePermissions extends SP.ClientValueObject {
        set(perm: SP.PermissionKind): void;
        clear(perm: SP.PermissionKind): void;
        clearAll(): void;
        has(perm: SP.PermissionKind): boolean;
        equals(perm: SP.BasePermissions): boolean;
        hasPermissions(high: number, low: number): boolean;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    /** Specifies the base type for a list. */
    export enum BaseType {
        none,
        genericList,
        documentLibrary,
        unused,
        discussionBoard,
        survey,
        issue,
    }
    export enum BrowserFileHandling {
        permissive,
        strict,
    }
    export enum CalendarType {
        none,
        gregorian,
        japan,
        taiwan,
        korea,
        hijri,
        thai,
        hebrew,
        gregorianMEFrench,
        gregorianArabic,
        gregorianXLITEnglish,
        gregorianXLITFrench,
        koreaJapanLunar,
        chineseLunar,
        sakaEra,
        umAlQura,
    }
    /** Specifies a Collaborative Application Markup Language (CAML) query on a list. */
    export class CamlQuery extends SP.ClientValueObject {
        constructor();
        /** This method creates a Collaborative Application Markup Language (CAML) string 
            that can be used to recursively get all of the items in a list, including 
            the items in the subfolders. */
        static createAllItemsQuery(): SP.CamlQuery;
        /** This method creates a Collaborative Application Markup Language (CAML) string 
            that can be used to recursively get all of the folders in a list, including 
            the subfolders. */
        static createAllFoldersQuery(): SP.CamlQuery;
        /** Returns true if the query returns dates in Coordinated Universal Time (UTC) format. */
        get_datesInUtc(): boolean;
        /** Sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format. */
        set_datesInUtc(value: boolean): void;
        /** Server relative URL of a list folder from which results will be returned. */
        get_folderServerRelativeUrl(): string;
        /** Sets a value that specifies the server relative URL of a list folder from which results will be returned. */
        set_folderServerRelativeUrl(value: string): void;
        get_listItemCollectionPosition(): SP.ListItemCollectionPosition;
        /** Sets a value that specifies the information required to get the next page of data for the list view. */
        set_listItemCollectionPosition(value: SP.ListItemCollectionPosition): void;
        /** Gets value that specifies the XML schema that defines the list view. */
        get_viewXml(): string;
        /** Sets value that specifies the XML schema that defines the list view. It must be null, empty, or an XML fragment that conforms to the ViewDefinition type.  */
        set_viewXml(value: string): void;
        /** This member is reserved for internal use and is not intended to be used directly from your code. */
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
    }
    export class Change extends SP.ClientObject {
        get_changeToken(): SP.ChangeToken;
        get_changeType(): SP.ChangeType;
        get_siteId(): SP.Guid;
        get_time(): Date;
    }
    export class ChangeAlert extends SP.Change {
        get_alertId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeCollection extends SP.ClientObjectCollection<Change> {
        itemAt(index: number): SP.Change;
        get_item(index: number): SP.Change;
    }
    export class ChangeContentType extends SP.Change {
        get_contentTypeId(): SP.ContentTypeId;
        get_webId(): SP.Guid;
    }
    export class ChangeField extends SP.Change {
        get_fieldId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeFile extends SP.Change {
        get_uniqueId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeFolder extends SP.Change {
        get_uniqueId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeGroup extends SP.Change {
        get_groupId(): number;
    }
    export class ChangeItem extends SP.Change {
        get_itemId(): number;
        get_listId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeList extends SP.Change {
        get_listId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeLogItemQuery extends SP.ClientValueObject {
        get_changeToken(): string;
        set_changeToken(value: string): void;
        get_contains(): string;
        set_contains(value: string): void;
        get_query(): string;
        set_query(value: string): void;
        get_queryOptions(): string;
        set_queryOptions(value: string): void;
        get_rowLimit(): string;
        set_rowLimit(value: string): void;
        get_viewFields(): string;
        set_viewFields(value: string): void;
        get_viewName(): string;
        set_viewName(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ChangeQuery extends SP.ClientValueObject {
        constructor();
        constructor(allChangeObjectTypes: boolean, allChangeTypes: boolean);
        get_add(): boolean;
        set_add(value: boolean): void;
        get_alert(): boolean;
        set_alert(value: boolean): void;
        get_changeTokenEnd(): SP.ChangeToken;
        set_changeTokenEnd(value: SP.ChangeToken): void;
        get_changeTokenStart(): SP.ChangeToken;
        set_changeTokenStart(value: SP.ChangeToken): void;
        get_contentType(): boolean;
        set_contentType(value: boolean): void;
        get_deleteObject(): boolean;
        set_deleteObject(value: boolean): void;
        get_field(): boolean;
        set_field(value: boolean): void;
        get_file(): boolean;
        set_file(value: boolean): void;
        get_folder(): boolean;
        set_folder(value: boolean): void;
        get_group(): boolean;
        set_group(value: boolean): void;
        get_groupMembershipAdd(): boolean;
        set_groupMembershipAdd(value: boolean): void;
        get_groupMembershipDelete(): boolean;
        set_groupMembershipDelete(value: boolean): void;
        get_item(): boolean;
        set_item(value: boolean): void;
        get_list(): boolean;
        set_list(value: boolean): void;
        get_move(): boolean;
        set_move(value: boolean): void;
        get_navigation(): boolean;
        set_navigation(value: boolean): void;
        get_rename(): boolean;
        set_rename(value: boolean): void;
        get_restore(): boolean;
        set_restore(value: boolean): void;
        get_roleAssignmentAdd(): boolean;
        set_roleAssignmentAdd(value: boolean): void;
        get_roleAssignmentDelete(): boolean;
        set_roleAssignmentDelete(value: boolean): void;
        get_roleDefinitionAdd(): boolean;
        set_roleDefinitionAdd(value: boolean): void;
        get_roleDefinitionDelete(): boolean;
        set_roleDefinitionDelete(value: boolean): void;
        get_roleDefinitionUpdate(): boolean;
        set_roleDefinitionUpdate(value: boolean): void;
        get_securityPolicy(): boolean;
        set_securityPolicy(value: boolean): void;
        get_site(): boolean;
        set_site(value: boolean): void;
        get_systemUpdate(): boolean;
        set_systemUpdate(value: boolean): void;
        get_update(): boolean;
        set_update(value: boolean): void;
        get_user(): boolean;
        set_user(value: boolean): void;
        get_view(): boolean;
        set_view(value: boolean): void;
        get_web(): boolean;
        set_web(value: boolean): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
    }
    export class ChangeSite extends SP.Change {
    }
    export class ChangeToken extends SP.ClientValueObject {
        get_stringValue(): string;
        set_stringValue(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum ChangeType {
        noChange,
        add,
        update,
        deleteObject,
        rename,
        moveAway,
        moveInto,
        restore,
        roleAdd,
        roleDelete,
        roleUpdate,
        assignmentAdd,
        assignmentDelete,
        memberAdd,
        memberDelete,
        systemUpdate,
        navigation,
        scopeAdd,
        scopeDelete,
        listContentTypeAdd,
        listContentTypeDelete,
    }
    export class ChangeUser extends SP.Change {
        get_activate(): boolean;
        get_userId(): number;
    }
    export class ChangeView extends SP.Change {
        get_viewId(): SP.Guid;
        get_listId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeWeb extends SP.Change {
        get_webId(): SP.Guid;
    }
    export enum CheckinType {
        minorCheckIn,
        majorCheckIn,
        overwriteCheckIn,
    }
    export enum CheckOutType {
        online,
        offline,
        none,
    }
    export enum ChoiceFormatType {
        dropdown,
        radioButtons,
    }
    export class CompatibilityRange extends SP.ClientObject {
    }
    export class ContentType extends SP.ClientObject {
        get_description(): string;
        set_description(value: string): void;
        get_displayFormTemplateName(): string;
        set_displayFormTemplateName(value: string): void;
        get_displayFormUrl(): string;
        set_displayFormUrl(value: string): void;
        get_documentTemplate(): string;
        set_documentTemplate(value: string): void;
        get_documentTemplateUrl(): string;
        get_editFormTemplateName(): string;
        set_editFormTemplateName(value: string): void;
        get_editFormUrl(): string;
        set_editFormUrl(value: string): void;
        get_fieldLinks(): SP.FieldLinkCollection;
        get_fields(): SP.FieldCollection;
        get_group(): string;
        set_group(value: string): void;
        get_hidden(): boolean;
        set_hidden(value: boolean): void;
        get_id(): SP.ContentTypeId;
        get_jsLink(): string;
        set_jsLink(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_newFormTemplateName(): string;
        set_newFormTemplateName(value: string): void;
        get_newFormUrl(): string;
        set_newFormUrl(value: string): void;
        get_parent(): SP.ContentType;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        get_schemaXml(): string;
        get_schemaXmlWithResourceTokens(): string;
        set_schemaXmlWithResourceTokens(value: string): void;
        get_scope(): string;
        get_sealed(): boolean;
        set_sealed(value: boolean): void;
        get_stringId(): string;
        get_workflowAssociations(): SP.Workflow.WorkflowAssociationCollection;
        update(updateChildren: boolean): void;
        deleteObject(): void;
    }
    export class ContentTypeCollection extends SP.ClientObjectCollection<ContentType> {
        itemAt(index: number): SP.ContentType;
        get_item(index: number): SP.ContentType;
        getById(contentTypeId: string): SP.ContentType;
        addExistingContentType(contentType: SP.ContentType): SP.ContentType;
        add(parameters: SP.ContentTypeCreationInformation): SP.ContentType;
    }
    export class ContentTypeCreationInformation extends SP.ClientValueObject {
        get_description(): string;
        set_description(value: string): void;
        get_group(): string;
        set_group(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_parentContentType(): SP.ContentType;
        set_parentContentType(value: SP.ContentType): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ContentTypeId extends SP.ClientValueObject {
        toString(): string;
        get_stringValue(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum CustomizedPageStatus {
        none,
        uncustomized,
        customized,
    }
    export enum DateTimeFieldFormatType {
        dateOnly,
        dateTime,
    }
    export enum DateTimeFieldFriendlyFormatType {
        unspecified,
        disabled,
        relative,
    }
    export enum DraftVisibilityType {
        reader,
        author,
        approver,
    }
    export class EventReceiverDefinition extends SP.ClientObject {
        get_receiverAssembly(): string;
        get_receiverClass(): string;
        get_receiverId(): SP.Guid;
        get_receiverName(): string;
        get_sequenceNumber(): number;
        get_synchronization(): SP.EventReceiverSynchronization;
        get_eventType(): SP.EventReceiverType;
        get_receiverUrl(): string;
        update(): void;
        deleteObject(): void;
    }
    export class EventReceiverDefinitionCollection extends SP.ClientObjectCollection<EventReceiverDefinition> {
        itemAt(index: number): SP.EventReceiverDefinition;
        get_item(index: number): SP.EventReceiverDefinition;
        getById(eventReceiverId: SP.Guid): SP.EventReceiverDefinition;
        add(eventReceiverCreationInformation: SP.EventReceiverDefinitionCreationInformation): SP.EventReceiverDefinition;
    }
    export class EventReceiverDefinitionCreationInformation extends SP.ClientValueObject {
        get_receiverAssembly(): string;
        set_receiverAssembly(value: string): void;
        get_receiverClass(): string;
        set_receiverClass(value: string): void;
        get_receiverName(): string;
        set_receiverName(value: string): void;
        get_sequenceNumber(): number;
        set_sequenceNumber(value: number): void;
        get_synchronization(): SP.EventReceiverSynchronization;
        set_synchronization(value: SP.EventReceiverSynchronization): void;
        get_eventType(): SP.EventReceiverType;
        set_eventType(value: SP.EventReceiverType): void;
        get_receiverUrl(): string;
        set_receiverUrl(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum EventReceiverSynchronization {
        defaultSynchronization,
        synchronous,
        asynchronous,
    }
    export enum EventReceiverType {
        invalidReceiver,
        itemAdding,
        itemUpdating,
        itemDeleting,
        itemCheckingIn,
        itemCheckingOut,
        itemUncheckingOut,
        itemAttachmentAdding,
        itemAttachmentDeleting,
        itemFileMoving,
        itemVersionDeleting,
        fieldAdding,
        fieldUpdating,
        fieldDeleting,
        listAdding,
        listDeleting,
        siteDeleting,
        webDeleting,
        webMoving,
        webAdding,
        groupAdding,
        groupUpdating,
        groupDeleting,
        groupUserAdding,
        groupUserDeleting,
        roleDefinitionAdding,
        roleDefinitionUpdating,
        roleDefinitionDeleting,
        roleAssignmentAdding,
        roleAssignmentDeleting,
        inheritanceBreaking,
        inheritanceResetting,
        workflowStarting,
        itemAdded,
        itemUpdated,
        itemDeleted,
        itemCheckedIn,
        itemCheckedOut,
        itemUncheckedOut,
        itemAttachmentAdded,
        itemAttachmentDeleted,
        itemFileMoved,
        itemFileConverted,
        itemVersionDeleted,
        fieldAdded,
        fieldUpdated,
        fieldDeleted,
        listAdded,
        listDeleted,
        siteDeleted,
        webDeleted,
        webMoved,
        webProvisioned,
        groupAdded,
        groupUpdated,
        groupDeleted,
        groupUserAdded,
        groupUserDeleted,
        roleDefinitionAdded,
        roleDefinitionUpdated,
        roleDefinitionDeleted,
        roleAssignmentAdded,
        roleAssignmentDeleted,
        inheritanceBroken,
        inheritanceReset,
        workflowStarted,
        workflowPostponed,
        workflowCompleted,
        entityInstanceAdded,
        entityInstanceUpdated,
        entityInstanceDeleted,
        appInstalled,
        appUpgraded,
        appUninstalling,
        emailReceived,
        contextEvent,
    }
    export class Feature extends SP.ClientObject {
        get_definitionId(): SP.Guid;
    }
    export class FeatureCollection extends SP.ClientObjectCollection<Feature> {
        itemAt(index: number): SP.Feature;
        get_item(index: number): SP.Feature;
        getById(featureId: SP.Guid): SP.Feature;
        add(featureId: SP.Guid, force: boolean, featdefScope: SP.FeatureDefinitionScope): SP.Feature;
        remove(featureId: SP.Guid, force: boolean): void;
    }
    export enum FeatureDefinitionScope {
        none,
        farm,
        site,
        web,
    }
    export class Field extends SP.ClientObject {
        get_canBeDeleted(): boolean;
        get_defaultValue(): string;
        set_defaultValue(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_direction(): string;
        set_direction(value: string): void;
        get_enforceUniqueValues(): boolean;
        set_enforceUniqueValues(value: boolean): void;
        get_entityPropertyName(): string;
        get_filterable(): boolean;
        get_fromBaseType(): boolean;
        get_group(): string;
        set_group(value: string): void;
        get_hidden(): boolean;
        set_hidden(value: boolean): void;
        get_id(): SP.Guid;
        get_indexed(): boolean;
        set_indexed(value: boolean): void;
        get_internalName(): string;
        get_jsLink(): string;
        set_jsLink(value: string): void;
        get_readOnlyField(): boolean;
        set_readOnlyField(value: boolean): void;
        get_required(): boolean;
        set_required(value: boolean): void;
        get_schemaXml(): string;
        set_schemaXml(value: string): void;
        get_schemaXmlWithResourceTokens(): string;
        get_scope(): string;
        get_sealed(): boolean;
        get_sortable(): boolean;
        get_staticName(): string;
        set_staticName(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_fieldTypeKind(): SP.FieldType;
        set_fieldTypeKind(value: SP.FieldType): void;
        get_typeAsString(): string;
        set_typeAsString(value: string): void;
        get_typeDisplayName(): string;
        get_typeShortDescription(): string;
        get_validationFormula(): string;
        set_validationFormula(value: string): void;
        get_validationMessage(): string;
        set_validationMessage(value: string): void;
        validateSetValue(item: SP.ListItem, value: string): void;
        updateAndPushChanges(pushChangesToLists: boolean): void;
        update(): void;
        deleteObject(): void;
        setShowInDisplayForm(value: boolean): void;
        setShowInEditForm(value: boolean): void;
        setShowInNewForm(value: boolean): void;
    }
    export class FieldCalculated extends SP.Field {
        get_dateFormat(): SP.DateTimeFieldFormatType;
        set_dateFormat(value: SP.DateTimeFieldFormatType): void;
        get_formula(): string;
        set_formula(value: string): void;
        get_outputType(): SP.FieldType;
        set_outputType(value: SP.FieldType): void;
    }
    export class FieldCalculatedErrorValue extends SP.ClientValueObject {
        get_errorMessage(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldMultiChoice extends SP.Field {
        get_fillInChoice(): boolean;
        set_fillInChoice(value: boolean): void;
        get_mappings(): string;
        get_choices(): string[];
        set_choices(value: string[]): void;
    }
    export class FieldChoice extends SP.FieldMultiChoice {
        get_editFormat(): SP.ChoiceFormatType;
        set_editFormat(value: SP.ChoiceFormatType): void;
    }
    export class FieldCollection extends SP.ClientObjectCollection<Field> {
        itemAt(index: number): SP.Field;
        get_item(index: number): SP.Field;
        get_schemaXml(): string;
        getByTitle(title: string): SP.Field;
        getById(id: SP.Guid): SP.Field;
        add(field: SP.Field): SP.Field;
        addDependentLookup(displayName: string, primaryLookupField: SP.Field, lookupField: string): SP.Field;
        addFieldAsXml(schemaXml: string, addToDefaultView: boolean, options: SP.AddFieldOptions): SP.Field;
        getByInternalNameOrTitle(strName: string): SP.Field;
    }
    export class FieldComputed extends SP.Field {
        get_enableLookup(): boolean;
        set_enableLookup(value: boolean): void;
    }
    export class FieldNumber extends SP.Field {
        get_maximumValue(): number;
        set_maximumValue(value: number): void;
        get_minimumValue(): number;
        set_minimumValue(value: number): void;
    }
    export class FieldCurrency extends SP.FieldNumber {
        get_currencyLocaleId(): number;
        set_currencyLocaleId(value: number): void;
    }
    export class FieldDateTime extends SP.Field {
        get_dateTimeCalendarType(): SP.CalendarType;
        set_dateTimeCalendarType(value: SP.CalendarType): void;
        get_displayFormat(): SP.DateTimeFieldFormatType;
        set_displayFormat(value: SP.DateTimeFieldFormatType): void;
        get_friendlyDisplayFormat(): SP.DateTimeFieldFriendlyFormatType;
        set_friendlyDisplayFormat(value: SP.DateTimeFieldFriendlyFormatType): void;
    }
    export class FieldGeolocation extends SP.Field {
    }
    export class FieldGeolocationValue extends SP.ClientValueObject {
        get_altitude(): number;
        set_altitude(value: number): void;
        get_latitude(): number;
        set_latitude(value: number): void;
        get_longitude(): number;
        set_longitude(value: number): void;
        get_measure(): number;
        set_measure(value: number): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldGuid extends SP.Field {
    }
    export class FieldLink extends SP.ClientObject {
        get_hidden(): boolean;
        set_hidden(value: boolean): void;
        get_id(): SP.Guid;
        get_name(): string;
        get_required(): boolean;
        set_required(value: boolean): void;
        deleteObject(): void;
    }
    export class FieldLinkCollection extends SP.ClientObjectCollection<FieldLink> {
        itemAt(index: number): SP.FieldLink;
        get_item(index: number): SP.FieldLink;
        getById(id: SP.Guid): SP.FieldLink;
        add(parameters: SP.FieldLinkCreationInformation): SP.FieldLink;
        reorder(internalNames: string[]): void;
    }
    export class FieldLinkCreationInformation extends SP.ClientValueObject {
        get_field(): SP.Field;
        set_field(value: SP.Field): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldLookup extends SP.Field {
        get_allowMultipleValues(): boolean;
        set_allowMultipleValues(value: boolean): void;
        get_isRelationship(): boolean;
        set_isRelationship(value: boolean): void;
        get_lookupField(): string;
        set_lookupField(value: string): void;
        get_lookupList(): string;
        set_lookupList(value: string): void;
        get_lookupWebId(): SP.Guid;
        set_lookupWebId(value: SP.Guid): void;
        get_primaryFieldId(): string;
        set_primaryFieldId(value: string): void;
        get_relationshipDeleteBehavior(): SP.RelationshipDeleteBehaviorType;
        set_relationshipDeleteBehavior(value: SP.RelationshipDeleteBehaviorType): void;
    }
    export class FieldLookupValue extends SP.ClientValueObject {
        get_lookupId(): number;
        set_lookupId(value: number): void;
        get_lookupValue(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldMultiLineText extends SP.Field {
        get_allowHyperlink(): boolean;
        set_allowHyperlink(value: boolean): void;
        get_appendOnly(): boolean;
        set_appendOnly(value: boolean): void;
        get_numberOfLines(): number;
        set_numberOfLines(value: number): void;
        get_restrictedMode(): boolean;
        set_restrictedMode(value: boolean): void;
        get_richText(): boolean;
        set_richText(value: boolean): void;
        get_wikiLinking(): boolean;
    }
    export class FieldRatingScale extends SP.FieldMultiChoice {
        get_gridEndNumber(): number;
        set_gridEndNumber(value: number): void;
        get_gridNAOptionText(): string;
        set_gridNAOptionText(value: string): void;
        get_gridStartNumber(): number;
        set_gridStartNumber(value: number): void;
        get_gridTextRangeAverage(): string;
        set_gridTextRangeAverage(value: string): void;
        get_gridTextRangeHigh(): string;
        set_gridTextRangeHigh(value: string): void;
        get_gridTextRangeLow(): string;
        set_gridTextRangeLow(value: string): void;
        get_rangeCount(): number;
    }
    export class FieldRatingScaleQuestionAnswer extends SP.ClientValueObject {
        get_answer(): number;
        set_answer(value: number): void;
        get_question(): string;
        set_question(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldStringValues extends SP.ClientObject {
        get_fieldValues(): any;
        get_item(fieldName: string): string;
        refreshLoad(): void;
    }
    export class FieldText extends SP.Field {
        get_maxLength(): number;
        set_maxLength(value: number): void;
    }
    export enum FieldType {
        invalid,
        integer,
        text,
        note,
        dateTime,
        counter,
        choice,
        lookup,
        boolean,
        number,
        currency,
        URL,
        computed,
        threading,
        guid,
        multiChoice,
        gridChoice,
        calculated,
        file,
        attachments,
        user,
        recurrence,
        crossProjectLink,
        modStat,
        error,
        contentTypeId,
        pageSeparator,
        threadIndex,
        workflowStatus,
        allDayEvent,
        workflowEventType,
        geolocation,
        outcomeChoice,
        maxItems,
    }
    export class FieldUrl extends SP.Field {
        get_displayFormat(): SP.UrlFieldFormatType;
        set_displayFormat(value: SP.UrlFieldFormatType): void;
    }
    export class FieldUrlValue extends SP.ClientValueObject {
        get_description(): string;
        set_description(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldUser extends SP.FieldLookup {
        get_allowDisplay(): boolean;
        set_allowDisplay(value: boolean): void;
        get_presence(): boolean;
        set_presence(value: boolean): void;
        get_selectionGroup(): number;
        set_selectionGroup(value: number): void;
        get_selectionMode(): SP.FieldUserSelectionMode;
        set_selectionMode(value: SP.FieldUserSelectionMode): void;
    }
    export enum FieldUserSelectionMode {
        peopleOnly,
        peopleAndGroups,
    }
    export class FieldUserValue extends SP.FieldLookupValue {
        static fromUser(userName: string): SP.FieldUserValue;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    /** Represents a file in a SharePoint Web site that can be a Web Part Page, an item in a document library, or a file in a folder. */
    export class File extends SP.ClientObject {
        get_author(): SP.User;
        /** Returns the user who has checked out the file. */
        get_checkedOutByUser(): SP.User;
        /** Returns the comment that was specified when the document was checked into the document library. */
        get_checkInComment(): string;
        /** The type of checkout that exists on the document. */
        get_checkOutType(): SP.CheckOutType;
        get_contentTag(): string;
        /** Gets the customization(ghost) status of the SPFile. */
        get_customizedPageStatus(): SP.CustomizedPageStatus;
        /** Gets the ETag of the file  */
        get_eTag(): string;
        /** Specifies whether the file exists  */
        get_exists(): boolean;
        get_length(): number;
        get_level(): SP.FileLevel;
        /** Specifies the SPListItem corresponding to this file if this file belongs to a doclib. Values for all fields are returned also. */
        get_listItemAllFields(): SP.ListItem;
        /** Returns the user that owns the current lock on the file. MUST return null if there is no lock. */
        get_lockedByUser(): SP.User;
        /** Specifies the major version of the file. */
        get_majorVersion(): number;
        /** Specifies the minor version of the file. */
        get_minorVersion(): number;
        get_modifiedBy(): SP.User;
        get_name(): string;
        get_serverRelativeUrl(): string;
        /** Specifies when the file was created. */
        get_timeCreated(): Date;
        /** Specifies when the file was created. */
        get_timeLastModified(): Date;
        get_title(): string;
        /** Specifies the implementation-specific version identifier of the file. */
        get_uIVersion(): number;
        /** Specifies the implementation-specific version identifier of the file. */
        get_uIVersionLabel(): string;
        /** Returns a collection of file version objects that represent the versions of the file. */
        get_versions(): SP.FileVersionCollection;
        /** Reverts an existing online or offline checkout for the file. */
        undoCheckOut(): void;
        checkIn(comment: string, checkInType: SP.CheckinType): void;
        publish(comment: string): void;
        /** Removes the file from content approval with the specified comment. */
        unPublish(comment: string): void;
        /** Approves the file submitted for content approval with the specified comment.  */
        approve(comment: string): void;
        /** Denies the file submitted for content approval. */
        deny(comment: string): void;
        static getContentVerFromTag(context: SP.ClientRuntimeContext, contentTag: string): SP.IntResult;
        getLimitedWebPartManager(scope: SP.WebParts.PersonalizationScope): SP.WebParts.LimitedWebPartManager;
        moveTo(newUrl: string, flags: SP.MoveOperations): void;
        copyTo(strNewUrl: string, bOverWrite: boolean): void;
        saveBinary(parameters: SP.FileSaveBinaryInformation): void;
        deleteObject(): void;
        /** Moves the file to the recycle bin. MUST return the identifier of the new Recycle Bin item */
        recycle(): SP.GuidResult;
        checkOut(): void;
    }
    export class FileCollection extends SP.ClientObjectCollection<File> {
        itemAt(index: number): SP.File;
        get_item(index: number): SP.File;
        getByUrl(url: string): SP.File;
        add(parameters: SP.FileCreationInformation): SP.File;
        addTemplateFile(urlOfFile: string, templateFileType: SP.TemplateFileType): SP.File;
    }
    export class FileCreationInformation extends SP.ClientValueObject {
        get_content(): SP.Base64EncodedByteArray;
        set_content(value: SP.Base64EncodedByteArray): void;
        get_overwrite(): boolean;
        set_overwrite(value: boolean): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum FileLevel {
        published,
        draft,
        checkout,
    }
    export class FileSaveBinaryInformation extends SP.ClientValueObject {
        get_checkRequiredFields(): boolean;
        set_checkRequiredFields(value: boolean): void;
        get_content(): SP.Base64EncodedByteArray;
        set_content(value: SP.Base64EncodedByteArray): void;
        get_eTag(): string;
        set_eTag(value: string): void;
        get_fieldValues(): any;
        set_fieldValues(value: any): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum FileSystemObjectType {
        invalid,
        file,
        folder,
        web,
    }
    export class FileVersion extends SP.ClientObject {
        get_checkInComment(): string;
        get_created(): Date;
        get_createdBy(): SP.User;
        get_iD(): number;
        get_isCurrentVersion(): boolean;
        get_size(): number;
        get_url(): string;
        get_versionLabel(): string;
        deleteObject(): void;
    }
    export class FileVersionCollection extends SP.ClientObjectCollection<FileVersion> {
        itemAt(index: number): SP.FileVersion;
        get_item(index: number): SP.FileVersion;
        getById(versionid: number): SP.FileVersion;
        deleteByID(vid: number): void;
        deleteByLabel(versionlabel: string): void;
        deleteAll(): void;
        restoreByLabel(versionlabel: string): void;
    }
    export class Folder extends SP.ClientObject {
        get_contentTypeOrder(): SP.ContentTypeId[];
        get_files(): SP.FileCollection;
        get_listItemAllFields(): SP.ListItem;
        get_itemCount(): number;
        get_name(): string;
        get_parentFolder(): SP.Folder;
        get_properties(): SP.PropertyValues;
        get_serverRelativeUrl(): string;
        get_folders(): SP.FolderCollection;
        get_uniqueContentTypeOrder(): SP.ContentTypeId[];
        set_uniqueContentTypeOrder(value: SP.ContentTypeId[]): void;
        get_welcomePage(): string;
        set_welcomePage(value: string): void;
        update(): void;
        deleteObject(): void;
        recycle(): SP.GuidResult;
    }
    export class FolderCollection extends SP.ClientObjectCollection<Folder> {
        itemAt(index: number): SP.Folder;
        get_item(index: number): SP.Folder;
        getByUrl(url: string): SP.Folder;
        add(url: string): SP.Folder;
    }
    export class Form extends SP.ClientObject {
        get_id(): SP.Guid;
        get_serverRelativeUrl(): string;
        get_formType(): SP.PageType;
    }
    export class FormCollection extends SP.ClientObjectCollection<Form> {
        itemAt(index: number): SP.Form;
        get_item(index: number): SP.Form;
        getByPageType(formType: SP.PageType): SP.Form;
        getById(id: SP.Guid): SP.Form;
    }
    export class Principal extends SP.ClientObject {
        get_id(): number;
        get_isHiddenInUI(): boolean;
        get_loginName(): string;
        get_title(): string;
        set_title(value: string): void;
        get_principalType(): SP.Utilities.PrincipalType;
    }
    export class Group extends SP.Principal {
        get_allowMembersEditMembership(): boolean;
        set_allowMembersEditMembership(value: boolean): void;
        get_allowRequestToJoinLeave(): boolean;
        set_allowRequestToJoinLeave(value: boolean): void;
        get_autoAcceptRequestToJoinLeave(): boolean;
        set_autoAcceptRequestToJoinLeave(value: boolean): void;
        get_canCurrentUserEditMembership(): boolean;
        get_canCurrentUserManageGroup(): boolean;
        get_canCurrentUserViewMembership(): boolean;
        get_description(): string;
        set_description(value: string): void;
        get_onlyAllowMembersViewMembership(): boolean;
        set_onlyAllowMembersViewMembership(value: boolean): void;
        get_owner(): SP.Principal;
        set_owner(value: SP.Principal): void;
        get_ownerTitle(): string;
        get_requestToJoinLeaveEmailSetting(): string;
        set_requestToJoinLeaveEmailSetting(value: string): void;
        get_users(): SP.UserCollection;
        update(): void;
    }
    export class GroupCollection extends SP.ClientObjectCollection<Group> {
        itemAt(index: number): SP.Group;
        get_item(index: number): SP.Group;
        getByName(name: string): SP.Group;
        getById(id: number): SP.Group;
        add(parameters: SP.GroupCreationInformation): SP.Group;
        removeByLoginName(loginName: string): void;
        removeById(id: number): void;
        remove(group: SP.Group): void;
    }
    export class GroupCreationInformation extends SP.ClientValueObject {
        get_description(): string;
        set_description(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class InformationRightsManagementSettings extends SP.ClientObject {
        get_allowPrint(): boolean;
        set_allowPrint(value: boolean): void;
        get_allowScript(): boolean;
        set_allowScript(value: boolean): void;
        get_allowWriteCopy(): boolean;
        set_allowWriteCopy(value: boolean): void;
        get_disableDocumentBrowserView(): boolean;
        set_disableDocumentBrowserView(value: boolean): void;
        get_documentAccessExpireDays(): number;
        set_documentAccessExpireDays(value: number): void;
        get_documentLibraryProtectionExpireDate(): Date;
        set_documentLibraryProtectionExpireDate(value: Date): void;
        get_enableDocumentAccessExpire(): boolean;
        set_enableDocumentAccessExpire(value: boolean): void;
        get_enableDocumentBrowserPublishingView(): boolean;
        set_enableDocumentBrowserPublishingView(value: boolean): void;
        get_enableGroupProtection(): boolean;
        set_enableGroupProtection(value: boolean): void;
        get_enableLicenseCacheExpire(): boolean;
        set_enableLicenseCacheExpire(value: boolean): void;
        get_groupName(): string;
        set_groupName(value: string): void;
        get_licenseCacheExpireDays(): number;
        set_licenseCacheExpireDays(value: number): void;
        get_policyDescription(): string;
        set_policyDescription(value: string): void;
        get_policyTitle(): string;
        set_policyTitle(value: string): void;
        reset(): void;
        update(): void;
    }
    export class Language extends SP.ClientValueObject {
        get_displayName(): string;
        get_languageTag(): string;
        get_lcid(): number;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class SecurableObject extends SP.ClientObject {
        get_firstUniqueAncestorSecurableObject(): SP.SecurableObject;
        get_hasUniqueRoleAssignments(): boolean;
        get_roleAssignments(): SP.RoleAssignmentCollection;
        resetRoleInheritance(): void;
        breakRoleInheritance(copyRoleAssignments: boolean, clearSubscopes: boolean): void;
    }
    /** Represents display mode for a control or form */
    export enum ControlMode {
        invalid,
        displayMode,
        editMode,
        newMode
    }
    /** Represents a list on a SharePoint Web site. */
    export class List extends SP.SecurableObject {
        /** Gets item by id. */
        getItemById(id: number): SP.ListItem;
        /** Gets a value that specifies whether the list supports content types. */
        get_allowContentTypes(): boolean;
        /** Gets the list definition type on which the list is based. For lists based on OOTB list definitions, return value corresponds the SP.ListTemplateType enumeration. */
        get_baseTemplate(): number;
        /** Gets base type for the list. */
        get_baseType(): SP.BaseType;
        /** Gets a value that specifies the override of the web application�s BrowserFileHandling property at the list level. */
        get_browserFileHandling(): SP.BrowserFileHandling;
        /** Gets the content types that are associated with the list. */
        get_contentTypes(): SP.ContentTypeCollection;
        /** Gets a value that specifies whether content types are enabled for the list. */
        get_contentTypesEnabled(): boolean;
        /** Sets a value that specifies whether content types are enabled for the list. */
        set_contentTypesEnabled(value: boolean): void;
        /** Gets a value that specifies when the list was created. */
        get_created(): Date;
        /** Gets the data source associated with the list, or null if the list is not a virtual list. */
        get_dataSource(): SP.ListDataSource;
        /** Gets a value that specifies the default workflow identifier for content approval on the list. */
        get_defaultContentApprovalWorkflowId(): SP.Guid;
        /** Sets a value that specifies the default workflow identifier for content approval on the list. */
        set_defaultContentApprovalWorkflowId(value: SP.Guid): void;
        /** Gets a value that specifies the location of the default display form for the list. */
        get_defaultDisplayFormUrl(): string;
        /** Sets a value that specifies the location of the default display form for the list. */
        set_defaultDisplayFormUrl(value: string): void;
        /** Gets a value that specifies the URL of the edit form to use for list items in the list. */
        get_defaultEditFormUrl(): string;
        /** Sets a value that specifies the URL of the edit form to use for list items in the list. */
        set_defaultEditFormUrl(value: string): void;
        /** Gets a value that specifies the location of the default new form for the list. */
        get_defaultNewFormUrl(): string;
        /** Sets a value that specifies the location of the default new form for the list. */
        set_defaultNewFormUrl(value: string): void;
        /** Gets default view for the list. */
        get_defaultView(): SP.View;
        /** Get URL of the default view for the list. */
        get_defaultViewUrl(): string;
        /** Gets a value that specifies the description of the list. */
        get_description(): string;
        /** Sets a value that specifies the description of the list. */
        set_description(value: string): void;
        /** Gets a value that specifies the reading order of the list. */
        get_direction(): string;
        /** Sets a value that specifies the reading order of the list. */
        set_direction(value: string): void;
        /** Gets a value that specifies the server-relative URL of the document template for the list */
        get_documentTemplateUrl(): string;
        /** Sets a value that specifies the server-relative URL of the document template for the list */
        set_documentTemplateUrl(value: string): void;
        /** Gets a value that specifies the minimum permission required to view minor versions and drafts within the list. */
        get_draftVersionVisibility(): SP.DraftVisibilityType;
        /** Sets a value that specifies the minimum permission required to view minor versions and drafts within the list. */
        set_draftVersionVisibility(value: SP.DraftVisibilityType): void;
        /** Gets a value that specifies the effective permissions on the list that are assigned to the current user. */
        get_effectiveBasePermissions(): SP.BasePermissions;
        /** Gets the effective base permissions for the current user, as they should be displayed in UI. This will only differ from EffectiveBasePermissions if ReadOnlyUI is set to true, and in all cases will be a subset of EffectiveBasePermissions. To put it another way, EffectiveBasePermissionsForUI will always be as or more restrictive than EffectiveBasePermissions. */
        get_effectiveBasePermissionsForUI(): SP.BasePermissions;
        /** Gets a value that specifies whether list item attachments are enabled for the list. */
        get_enableAttachments(): boolean;
        /** Sets a value that specifies whether list item attachments are enabled for the list. */
        set_enableAttachments(value: boolean): void;
        /** Gets a value that specifies whether new list folders can be added to the list. */
        get_enableFolderCreation(): boolean;
        /** Sets a value that specifies whether new list folders can be added to the list. */
        set_enableFolderCreation(value: boolean): void;
        /** Gets a value that specifies whether minor versions are enabled for the list. */
        get_enableMinorVersions(): boolean;
        /** Sets a value that specifies whether minor versions are enabled for the list. */
        set_enableMinorVersions(value: boolean): void;
        /** Gets a value that specifies whether content approval is enabled for the list. */
        get_enableModeration(): boolean;
        /** Sets a value that specifies whether content approval is enabled for the list */
        set_enableModeration(value: boolean): void;
        /** Gets a value that specifies whether historical versions of list items and documents can be created in the list */
        get_enableVersioning(): boolean;
        /** Sets a value that specifies whether historical versions of list items and documents can be created in the list */
        set_enableVersioning(value: boolean): void;
        /** The entity type name. */
        get_entityTypeName(): string;
        /** Gets collection of event receiver objects associated with the list. */
        get_eventReceivers(): SP.EventReceiverDefinitionCollection;
        /** Gets a value that specifies the collection of all fields in the list. */
        get_fields(): SP.FieldCollection;
        /** Gets a value that indicates whether forced checkout is enabled for the document library. */
        get_forceCheckout(): boolean;
        /** Sets a value that indicates whether forced checkout is enabled for the document library */
        set_forceCheckout(value: boolean): void;
        /** Gets collections of forms associated with the list. */
        get_forms(): SP.FormCollection;
        /** Returns true if this is external list. */
        get_hasExternalDataSource(): boolean;
        /** Gets wherever the list is hidden */
        get_hidden(): boolean;
        /** Sets if the list is hidden from "All site contents" or not. */
        set_hidden(value: boolean): void;
        /** Gets id of the list */
        get_id(): SP.Guid;
        /** Gets a value that specifies the URI for the icon of the list */
        get_imageUrl(): string;
        /** Sets a value that specifies the URI for the icon of the list */
        set_imageUrl(value: string): void;
        /** Settings of document library Information Rights Management (IRM)  */
        get_informationRightsManagementSettings(): SP.InformationRightsManagementSettings;
        /** Gets a value that specifies whether Information Rights Management (IRM) is enabled for the list.  */
        get_irmEnabled(): boolean;
        /** Sets a value that specifies whether Information Rights Management (IRM) is enabled for the list.  */
        set_irmEnabled(value: boolean): void;
        /** Gets a value that specifies whether Information Rights Management (IRM) expiration is enabled for the list.  */
        get_irmExpire(): boolean;
        /** Sets a value that specifies whether Information Rights Management (IRM) expiration is enabled for the list.  */
        set_irmExpire(value: boolean): void;
        /** Gets a value that specifies whether Information Rights Management (IRM) rejection is enabled for the list.  */
        get_irmReject(): boolean;
        /** Sets a value that specifies whether Information Rights Management (IRM) rejection is enabled for the list.  */
        set_irmReject(value: boolean): void;
        /** Indicates whether this list should be treated as a top level navigation object or not.  */
        get_isApplicationList(): boolean;
        /** Sets a value that indicates whether this list should be treated as a top level navigation object or not.  */
        set_isApplicationList(value: boolean): void;
        /** Gets a value that specifies whether the list is a gallery. */
        get_isCatalog(): boolean;
        /** Gets a value that indicates whether the document library is a private list with restricted permissions, such as for Solutions.  */
        get_isPrivate(): boolean;
        /** Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages. */
        get_isSiteAssetsLibrary(): boolean;
        /** Gets a value that specifies the number of list items in the list */
        get_itemCount(): number;
        /** Gets a value that specifies the last time a list item was deleted from the list. */
        get_lastItemDeletedDate(): Date;
        /** Gets a value that specifies the last time a list item, field, or property of the list was modified. */
        get_lastItemModifiedDate(): Date;
        /** Sets a value that specifies the last time the list was modified. */
        set_lastItemModifiedDate(value: Date): void;
        /** The entity type full name of the list item in the list. */
        get_listItemEntityTypeFullName(): string;
        /** Gets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site */
        get_multipleDataList(): boolean;
        /** Sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site */
        set_multipleDataList(value: boolean): void;
        /** Gets a value that specifies that the crawler must not crawl the list */
        get_noCrawl(): boolean;
        /** Sets a value that specifies that the crawler must not crawl the list */
        set_noCrawl(value: boolean): void;
        /** Gets a value that specifies whether the list appears on the Quick Launch of the site */
        get_onQuickLaunch(): boolean;
        /** Sets a value that specifies whether the list appears on the Quick Launch of the site */
        set_onQuickLaunch(value: boolean): void;
        /** Gets a value that specifies the site that contains the list. */
        get_parentWeb(): SP.Web;
        /** Gets a value that specifies the server-relative URL of the site that contains the list. */
        get_parentWebUrl(): string;
        /** Gets the root folder that contains the files in the list and any related files. */
        get_rootFolder(): SP.Folder;
        /** Gets a value that specifies the list schema of the list. */
        get_schemaXml(): string;
        /** Gets a value that indicates whether folders can be created within the list. */
        get_serverTemplateCanCreateFolders(): boolean;
        /** Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. */
        get_templateFeatureId(): SP.Guid;
        /** Gets the list title. You can determine list URL from it's root folder URL. */
        get_title(): string;
        /** Sets the list title. To change list URL you should change name of the root folder. */
        set_title(value: string): void;
        /** Gets collection of custom actions associated with the list. */
        get_userCustomActions(): SP.UserCustomActionCollection;
        /** Gets a value that specifies the data validation criteria for a list item. */
        get_validationFormula(): string;
        /** Sets a value that specifies the data validation criteria for a list item. */
        set_validationFormula(value: string): void;
        /** Gets a value that specifies the error message returned when data validation fails for a list item. */
        get_validationMessage(): string;
        /** Sets a value that specifies the error message returned when data validation fails for a list item. */
        set_validationMessage(value: string): void;
        /** Returns collection of views added to the list */
        get_views(): SP.ViewCollection;
        /** Gets the collection of workflow association objects that represents all the workflows that are associated with the list. */
        get_workflowAssociations(): SP.Workflow.WorkflowAssociationCollection;
        /** Returns the collection of changes from the change log that have occurred within the list, based on the specified query. */
        getChanges(query: SP.ChangeQuery): SP.ChangeCollection;
        /** Returns array of items describing changes since time specified in the query */
        getListItemChangesSinceToken(query: SP.ChangeLogItemQuery): any[];
        /** Gets the effective permissions that a specified user has on the list. */
        getUserEffectivePermissions(userName: string): SP.BasePermissions;
        /** First tries to find if the view already exists. Overwrite it if yes, add a new view if no. Then extract all the adhoc filter/sort info from the URL and build and update the view's xml Returns the url of the new/overwritten view.
            @param oldName The name of the view the user did the adhoc filter on (is currently on).
            @param newName The desired name the user typed
            @param privateView Boolean true when the user wants make a new view that's personal
            @param uri Url that keeps all the adhoc filter/sort inforatmion */
        saveAsNewView(oldName: string, newName: string, privateView: boolean, uri: string): SP.StringResult;
        /** Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true. */
        getRelatedFields(): SP.RelatedFieldCollection;
        /** This member is reserved for internal use and is not intended to be used directly from your code. */
        getRelatedFieldsExtendedData(): SP.RelatedFieldExtendedDataCollection;
        /** Returns json string which contains all information necessary for rendering the specified list form for the specified itemId. Mode is SP.ControlMode */
        renderListFormData(itemId: number, formId: string, mode: SP.ControlMode): SP.StringResult;
        /** Returns the data for the specified query view. */
        renderListData(viewXml: string): SP.StringResult;
        /** This member is reserved for internal use and is not intended to be used directly from your code. */
        reserveListItemId(): SP.IntResult;
        /** Updates the database with changes that are made to the list object. */
        update(): void;
        /** Returns the list view with the specified view identifier. */
        getView(viewGuid: SP.Guid): SP.View;
        /** Deletes the list. */
        deleteObject(): void;
        /** Sends the list to the site recycle bin. */
        recycle(): SP.GuidResult;
        /** Returns collection of list items based on the specified CAML query. */
        getItems(query: SP.CamlQuery): SP.ListItemCollection;
        /** Creates a new list item in the list. */
        addItem(parameters: SP.ListItemCreationInformation): SP.ListItem;
    }
    /** Represents a collection of SP.List objects */
    export class ListCollection extends SP.ClientObjectCollection<List> {
        /** Gets the list at the specified index in the collection. */
        itemAt(index: number): SP.List;
        /** Gets the list at the specified index in the collection. */
        get_item(index: number): SP.List;
        /** Returns the list with the specified title from the collection. */
        getByTitle(title: string): SP.List;
        /** Returns the list with the specified list identifier. */
        getById(id: SP.Guid): SP.List;
        /** Returns the list with the specified list identifier. */
        getById(id: string): SP.List;
        /** Creates a new list or a document library. */
        add(parameters: SP.ListCreationInformation): SP.List;
        /** Gets a list that is the default location for wiki pages. */
        ensureSitePagesLibrary(): SP.List;
        /** Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages. */
        ensureSiteAssetsLibrary(): SP.List;
    }
    export class ListCreationInformation extends SP.ClientValueObject {
        get_customSchemaXml(): string;
        set_customSchemaXml(value: string): void;
        get_dataSourceProperties(): any;
        set_dataSourceProperties(value: any): void;
        get_description(): string;
        set_description(value: string): void;
        get_documentTemplateType(): number;
        set_documentTemplateType(value: number): void;
        get_quickLaunchOption(): SP.QuickLaunchOptions;
        set_quickLaunchOption(value: SP.QuickLaunchOptions): void;
        get_templateFeatureId(): SP.Guid;
        set_templateFeatureId(value: SP.Guid): void;
        get_templateType(): number;
        set_templateType(value: number): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListDataSource extends SP.ClientValueObject {
        get_properties(): any;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListDataValidationExceptionValue extends SP.ClientValueObject {
        get_fieldFailures(): SP.ListDataValidationFailure[];
        get_itemFailure(): SP.ListDataValidationFailure;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListDataValidationFailure extends SP.ClientValueObject {
        get_displayName(): string;
        get_message(): string;
        get_name(): string;
        get_reason(): SP.ListDataValidationFailureReason;
        get_validationType(): SP.ListDataValidationType;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum ListDataValidationFailureReason {
        dataFailure,
        formulaError,
    }
    export enum ListDataValidationType {
        userFormulaField,
        userFormulaItem,
        requiredField,
        choiceField,
        minMaxField,
        textField,
    } 
    /** Represents an item or row in a list. */
    export class ListItem extends SP.SecurableObject {
        get_fieldValues(): any;
        /** Gets the specified field value for the list item. Field value is returned as string, but it can be casted to a specific field value type, e.g. SP.LookupFieldValue, etc. */
        get_item(fieldInternalName: string): any;
        /** Sets the specified field value for the list item. Consider using parseAndSetFieldValue instead. */
        set_item(fieldInternalName: string, value: any): void;
        /** Gets collection of objects that represent attachments for the list item. */
        get_attachmentFiles(): SP.AttachmentCollection;
        /** Gets the content type of the item. */
        get_contentType(): SP.ContentType;
        /** Gets a value that specifies the display name of the list item.
            This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string. */
        get_displayName(): string;
        /** Gets a value that specifies the effective permissions on the list item that are assigned to the current user.
            This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string. */
        get_effectiveBasePermissions(): SP.BasePermissions;
        /** Gets the effective base permissions for the current user, as they should be displayed in UI.
            This will only differ from EffectiveBasePermissions if ReadOnlyUI is set to true on the item's parent list, and in all cases will be a subset of EffectiveBasePermissions. To put it another way, EffectiveBasePermissionsForUI will always be as or more restrictive than EffectiveBasePermissions.
            This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string.  */
        get_effectiveBasePermissionsForUI(): SP.BasePermissions;
        get_fieldValuesAsHtml(): SP.FieldStringValues;
        get_fieldValuesAsText(): SP.FieldStringValues;
        get_fieldValuesForEdit(): SP.FieldStringValues;
        /** Gets the file that is represented by the item from a document library. Only for document libraries. */
        get_file(): SP.File;
        /** Gets or sets the file system object type for the item (file, folder or invalid). */
        get_fileSystemObjectType(): SP.FileSystemObjectType;
        /** Gets the parent folder for the list item */
        get_folder(): SP.Folder;
        /** Gets id of the item */
        get_id(): number;
        /** Get the list in which the item resides. */
        get_parentList(): SP.List;
        refreshLoad(): void;
        getWOPIFrameUrl(action: SP.Utilities.SPWOPIFrameAction): SP.StringResult;
        /** Commits changed properties of the list item. The actual update is performed during context.executeQueryAsync method call. */
        update(): void;
        /** Deletes the list item */
        deleteObject(): void;
        /** Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item. */
        recycle(): SP.GuidResult;
        /** Gets effective permissions for the specified user. */
        getUserEffectivePermissions(userName: string): SP.BasePermissions;
        /** Sets the value of the field for the list item based on an implementation specific transformation of the value. */
        parseAndSetFieldValue(fieldInternalName: string, value: string): void;
        /** Validates form values specified for the list item. Errors are returned through hasException and errorMessage properties of the ListItemFormUpdateValue objects */
        validateUpdateListItem(formValues: SP.ListItemFormUpdateValue[], bNewDocumentUpdate: boolean): SP.ListItemFormUpdateValue[];
    }
    export class ListItemCollection extends SP.ClientObjectCollection<ListItem> {
        itemAt(index: number): SP.ListItem;
        get_item(index: number): SP.ListItem;
        getById(id: number): SP.ListItem;
        getById(id: string): SP.ListItem;
        get_listItemCollectionPosition(): SP.ListItemCollectionPosition;
    }
    export class ListItemCollectionPosition extends SP.ClientValueObject {
        get_pagingInfo(): string;
        set_pagingInfo(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    /** Specifies the properties of the new list item. */
    export class ListItemCreationInformation extends SP.ClientValueObject {
        get_folderUrl(): string;
        /** Sets a value that specifies the folder for the new list item. */
        set_folderUrl(value: string): void;
        get_leafName(): string;
        /** Sets a value that specifies the name of the new list item. It must be the name of the file if the parent list of the list item is a document library. */
        set_leafName(value: string): void;
        get_underlyingObjectType(): SP.FileSystemObjectType;
        /** Sets a value that specifies whether the new list item is a file or a folder. */
        set_underlyingObjectType(value: SP.FileSystemObjectType): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListItemEntityCollection extends SP.ClientObjectCollection<ListItem> {
        itemAt(index: number): SP.ListItem;
        get_item(index: number): SP.ListItem;
    }
    export class ListItemFormUpdateValue extends SP.ClientValueObject {
        get_errorMessage(): string;
        set_errorMessage(value: string): void;
        get_fieldName(): string;
        set_fieldName(value: string): void;
        get_fieldValue(): string;
        set_fieldValue(value: string): void;
        get_hasException(): boolean;
        set_hasException(value: boolean): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListTemplate extends SP.ClientObject {
        get_allowsFolderCreation(): boolean;
        get_baseType(): SP.BaseType;
        get_description(): string;
        get_featureId(): SP.Guid;
        get_hidden(): boolean;
        get_imageUrl(): string;
        get_internalName(): string;
        get_isCustomTemplate(): boolean;
        get_name(): string;
        get_onQuickLaunch(): boolean;
        get_listTemplateTypeKind(): number;
        get_unique(): boolean;
    }
    export class ListTemplateCollection extends SP.ClientObjectCollection<ListTemplate> {
        itemAt(index: number): SP.ListTemplate;
        get_item(index: number): SP.ListTemplate;
        getByName(name: string): SP.ListTemplate;
    }
    export enum ListTemplateType {
        invalidType,
        noListTemplate,
        genericList,
        documentLibrary,
        survey,
        links,
        announcements,
        contacts,
        events,
        tasks,
        discussionBoard,
        pictureLibrary,
        dataSources,
        webTemplateCatalog,
        userInformation,
        webPartCatalog,
        listTemplateCatalog,
        xMLForm,
        masterPageCatalog,
        noCodeWorkflows,
        workflowProcess,
        webPageLibrary,
        customGrid,
        solutionCatalog,
        noCodePublic,
        themeCatalog,
        designCatalog,
        appDataCatalog,
        dataConnectionLibrary,
        workflowHistory,
        ganttTasks,
        helpLibrary,
        accessRequest,
        tasksWithTimelineAndHierarchy,
        maintenanceLogs,
        meetings,
        agenda,
        meetingUser,
        decision,
        meetingObjective,
        textBox,
        thingsToBring,
        homePageLibrary,
        posts,
        comments,
        categories,
        facility,
        whereabouts,
        callTrack,
        circulation,
        timecard,
        holidays,
        iMEDic,
        externalList,
        mySiteDocumentLibrary,
        issueTracking,
        adminTasks,
        healthRules,
        healthReports,
        developerSiteDraftApps,
    }
    export enum MoveOperations {
        none,
        overwrite,
        allowBrokenThickets,
        bypassApprovePermission,
    }
    export class Navigation extends SP.ClientObject {
        get_quickLaunch(): SP.NavigationNodeCollection;
        get_topNavigationBar(): SP.NavigationNodeCollection;
        get_useShared(): boolean;
        set_useShared(value: boolean): void;
        getNodeById(id: number): SP.NavigationNode;
    }
    export class NavigationNode extends SP.ClientObject {
        get_children(): SP.NavigationNodeCollection;
        get_id(): number;
        get_isDocLib(): boolean;
        get_isExternal(): boolean;
        get_isVisible(): boolean;
        set_isVisible(value: boolean): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        update(): void;
        deleteObject(): void;
    }
    export class NavigationNodeCollection extends SP.ClientObjectCollection<NavigationNode> {
        itemAt(index: number): SP.NavigationNode;
        get_item(index: number): SP.NavigationNode;
        add(parameters: SP.NavigationNodeCreationInformation): SP.NavigationNode;
    }
    export class NavigationNodeCreationInformation extends SP.ClientValueObject {
        get_asLastNode(): boolean;
        set_asLastNode(value: boolean): void;
        get_isExternal(): boolean;
        set_isExternal(value: boolean): void;
        get_previousNode(): SP.NavigationNode;
        set_previousNode(value: SP.NavigationNode): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ObjectSharingInformation extends SP.ClientObject {
        get_anonymousEditLink(): string;
        get_anonymousViewLink(): string;
        get_canManagePermissions(): boolean;
        get_hasPendingAccessRequests(): boolean;
        get_hasPermissionLevels(): boolean;
        get_isSharedWithCurrentUser(): boolean;
        get_isSharedWithGuest(): boolean;
        get_isSharedWithMany(): boolean;
        get_isSharedWithSecurityGroup(): boolean;
        get_pendingAccessRequestsLink(): string;
        getSharedWithUsers(): SP.ClientObjectList<SP.ObjectSharingInformationUser>;
        static getListItemSharingInformation(context: SP.ClientRuntimeContext, listID: SP.Guid, itemID: number, excludeCurrentUser: boolean, excludeSiteAdmin: boolean, excludeSecurityGroups: boolean, retrieveAnonymousLinks: boolean, retrieveUserInfoDetails: boolean, checkForAccessRequests: boolean): SP.ObjectSharingInformation;
        static getWebSharingInformation(context: SP.ClientRuntimeContext, excludeCurrentUser: boolean, excludeSiteAdmin: boolean, excludeSecurityGroups: boolean, retrieveAnonymousLinks: boolean, retrieveUserInfoDetails: boolean, checkForAccessRequests: boolean): SP.ObjectSharingInformation;
        static getObjectSharingInformation(context: SP.ClientRuntimeContext, securableObject: SP.SecurableObject, excludeCurrentUser: boolean, excludeSiteAdmin: boolean, excludeSecurityGroups: boolean, retrieveAnonymousLinks: boolean, retrieveUserInfoDetails: boolean, checkForAccessRequests: boolean, retrievePermissionLevels: boolean): SP.ObjectSharingInformation;
    }
    export class ObjectSharingInformationUser extends SP.ClientObject {
        get_customRoleNames(): string;
        get_department(): string;
        get_email(): string;
        get_hasEditPermission(): boolean;
        get_hasViewPermission(): boolean;
        get_id(): number;
        get_isSiteAdmin(): boolean;
        get_jobTitle(): string;
        get_loginName(): string;
        get_name(): string;
        get_picture(): string;
        get_principal(): SP.Principal;
        get_sipAddress(): string;
        get_user(): SP.User;
    }
    export enum OpenWebOptions {
        none,
        initNavigationCache,
    }
    export enum PageType {
        invalid,
        defaultView,
        normalView,
        dialogView,
        view,
        displayForm,
        displayFormDialog,
        editForm,
        editFormDialog,
        newForm,
        newFormDialog,
        solutionForm,
        pAGE_MAXITEMS,
    }
    export class PropertyValues extends SP.ClientObject {
        get_fieldValues(): any;
        get_item(fieldName: string): any;
        set_item(fieldName: string, value: any): void;
        refreshLoad(): void;
    }
    export class PushNotificationSubscriber extends SP.ClientObject {
        get_customArgs(): string;
        set_customArgs(value: string): void;
        get_deviceAppInstanceId(): SP.Guid;
        get_lastModifiedTimeStamp(): Date;
        get_registrationTimeStamp(): Date;
        get_serviceToken(): string;
        set_serviceToken(value: string): void;
        get_subscriberType(): string;
        set_subscriberType(value: string): void;
        get_user(): SP.User;
        update(): void;
    }
    export class PushNotificationSubscriberCollection extends SP.ClientObjectCollection<PushNotificationSubscriber> {
        itemAt(index: number): SP.PushNotificationSubscriber;
        get_item(index: number): SP.PushNotificationSubscriber;
        getByStoreId(id: string): SP.PushNotificationSubscriber;
    }
    export enum QuickLaunchOptions {
        off,
        on,
        defaultValue,
    }
    export class RecycleBinItem extends SP.ClientObject {
        get_author(): SP.User;
        get_deletedBy(): SP.User;
        get_deletedDate(): Date;
        get_dirName(): string;
        get_id(): SP.Guid;
        get_itemState(): SP.RecycleBinItemState;
        get_itemType(): SP.RecycleBinItemType;
        get_leafName(): string;
        get_size(): number;
        get_title(): string;
        deleteObject(): void;
        restore(): void;
    }
    export class RecycleBinItemCollection extends SP.ClientObjectCollection<RecycleBinItem> {
        itemAt(index: number): SP.RecycleBinItem;
        get_item(index: number): SP.RecycleBinItem;
        getById(id: SP.Guid): SP.RecycleBinItem;
        deleteAll(): void;
        restoreAll(): void;
    }
    export enum RecycleBinItemState {
        none,
        firstStageRecycleBin,
        secondStageRecycleBin,
    }
    export enum RecycleBinItemType {
        none,
        file,
        fileVersion,
        listItem,
        list,
        folder,
        folderWithLists,
        attachment,
        listItemVersion,
        cascadeParent,
        web,
    }
    export class RegionalSettings extends SP.ClientObject {
        get_adjustHijriDays(): number;
        get_alternateCalendarType(): number;
        get_aM(): string;
        get_calendarType(): number;
        get_collation(): number;
        get_collationLCID(): number;
        get_dateFormat(): number;
        get_dateSeparator(): string;
        get_decimalSeparator(): string;
        get_digitGrouping(): string;
        get_firstDayOfWeek(): number;
        get_firstWeekOfYear(): number;
        get_isEastAsia(): boolean;
        get_isRightToLeft(): boolean;
        get_isUIRightToLeft(): boolean;
        get_listSeparator(): string;
        get_localeId(): number;
        get_negativeSign(): string;
        get_negNumberMode(): number;
        get_pM(): string;
        get_positiveSign(): string;
        get_showWeeks(): boolean;
        get_thousandSeparator(): string;
        get_time24(): boolean;
        get_timeMarkerPosition(): number;
        get_timeSeparator(): string;
        get_timeZone(): SP.TimeZone;
        get_timeZones(): SP.TimeZoneCollection;
        get_workDayEndHour(): number;
        get_workDays(): number;
        get_workDayStartHour(): number;
    }
    export class RelatedField extends SP.ClientObject {
        get_fieldId(): SP.Guid;
        get_listId(): SP.Guid;
        get_lookupList(): SP.List;
        get_relationshipDeleteBehavior(): SP.RelationshipDeleteBehaviorType;
        get_webId(): SP.Guid;
    }
    export class RelatedFieldCollection extends SP.ClientObjectCollection<RelatedField> {
        itemAt(index: number): SP.RelatedField;
        get_item(index: number): SP.RelatedField;
    }
    export class RelatedFieldExtendedData extends SP.ClientObject {
        get_fieldId(): SP.Guid;
        get_listId(): SP.Guid;
        get_listImageUrl(): string;
        get_resolvedListTitle(): string;
        get_toolTipDescription(): string;
        get_webId(): SP.Guid;
    }
    export class RelatedFieldExtendedDataCollection extends SP.ClientObjectCollection<RelatedFieldExtendedData> {
        itemAt(index: number): SP.RelatedFieldExtendedData;
        get_item(index: number): SP.RelatedFieldExtendedData;
    }
    export class RelatedItem extends SP.ClientValueObject {
        get_iconUrl(): string;
        set_iconUrl(value: string): void;
        get_itemId(): number;
        set_itemId(value: number): void;
        get_listId(): string;
        set_listId(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_webId(): string;
        set_webId(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class RelatedItemManager extends SP.ClientObject {
        static getRelatedItems(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number): SP.RelatedItem[];
        static getPageOneRelatedItems(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number): SP.RelatedItem[];
        static addSingleLink(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number, SourceWebUrl: string, TargetListName: string, TargetItemID: number, TargetWebUrl: string, TryAddReverseLink: boolean): void;
        static addSingleLinkToUrl(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number, TargetItemUrl: string, TryAddReverseLink: boolean): void;
        static addSingleLinkFromUrl(context: SP.ClientRuntimeContext, SourceItemUrl: string, TargetListName: string, TargetItemID: number, TryAddReverseLink: boolean): void;
        static deleteSingleLink(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number, SourceWebUrl: string, TargetListName: string, TargetItemID: number, TargetWebUrl: string, TryDeleteReverseLink: boolean): void;
    }
    export enum RelationshipDeleteBehaviorType {
        none,
        cascade,
        restrict,
    }
    export class RequestVariable extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext);
        get_value(): string;
        static newObject(context: SP.ClientRuntimeContext): SP.RequestVariable;
        append(value: string): void;
        set(value: string): void;
    }
    export class RoleAssignment extends SP.ClientObject {
        get_member(): SP.Principal;
        get_principalId(): number;
        get_roleDefinitionBindings(): SP.RoleDefinitionBindingCollection;
        importRoleDefinitionBindings(roleDefinitionBindings: SP.RoleDefinitionBindingCollection): void;
        update(): void;
        deleteObject(): void;
    }
    export class RoleAssignmentCollection extends SP.ClientObjectCollection<RoleAssignment> {
        itemAt(index: number): SP.RoleAssignment;
        get_item(index: number): SP.RoleAssignment;
        get_groups(): SP.GroupCollection;
        getByPrincipal(principalToFind: SP.Principal): SP.RoleAssignment;
        getByPrincipalId(principalId: number): SP.RoleAssignment;
        add(principal: SP.Principal, roleBindings: SP.RoleDefinitionBindingCollection): SP.RoleAssignment;
    }
    export class RoleDefinition extends SP.ClientObject {
        get_basePermissions(): SP.BasePermissions;
        set_basePermissions(value: SP.BasePermissions): void;
        get_description(): string;
        set_description(value: string): void;
        get_hidden(): boolean;
        get_id(): number;
        get_name(): string;
        set_name(value: string): void;
        get_order(): number;
        set_order(value: number): void;
        get_roleTypeKind(): SP.RoleType;
        update(): void;
        deleteObject(): void;
    }
    export class RoleDefinitionBindingCollection extends SP.ClientObjectCollection<RoleDefinition> {
        itemAt(index: number): SP.RoleDefinition;
        get_item(index: number): SP.RoleDefinition;
        constructor(context: SP.ClientRuntimeContext);
        static newObject(context: SP.ClientRuntimeContext): SP.RoleDefinitionBindingCollection;
        add(roleDefinition: SP.RoleDefinition): void;
        remove(roleDefinition: SP.RoleDefinition): void;
        removeAll(): void;
    }
    export class RoleDefinitionCollection extends SP.ClientObjectCollection<RoleDefinition> {
        itemAt(index: number): SP.RoleDefinition;
        get_item(index: number): SP.RoleDefinition;
        getByName(name: string): SP.RoleDefinition;
        add(parameters: SP.RoleDefinitionCreationInformation): SP.RoleDefinition;
        getById(id: number): SP.RoleDefinition;
        getByType(roleType: SP.RoleType): SP.RoleDefinition;
    }
    export class RoleDefinitionCreationInformation extends SP.ClientValueObject {
        get_basePermissions(): SP.BasePermissions;
        set_basePermissions(value: SP.BasePermissions): void;
        get_description(): string;
        set_description(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_order(): number;
        set_order(value: number): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum RoleType {
        none,
        guest,
        reader,
        contributor,
        webDesigner,
        administrator,
        editor,
    }
    export class ServerSettings {
        static getAlternateUrls(context: SP.ClientRuntimeContext): SP.ClientObjectList<SP.AlternateUrl>;
        static getGlobalInstalledLanguages(context: SP.ClientRuntimeContext, compatibilityLevel: number): SP.Language[];
    }
    export class Site extends SP.ClientObject {
        get_allowDesigner(): boolean;
        set_allowDesigner(value: boolean): void;
        get_allowMasterPageEditing(): boolean;
        set_allowMasterPageEditing(value: boolean): void;
        get_allowRevertFromTemplate(): boolean;
        set_allowRevertFromTemplate(value: boolean): void;
        get_allowSelfServiceUpgrade(): boolean;
        set_allowSelfServiceUpgrade(value: boolean): void;
        get_allowSelfServiceUpgradeEvaluation(): boolean;
        set_allowSelfServiceUpgradeEvaluation(value: boolean): void;
        get_canUpgrade(): boolean;
        get_compatibilityLevel(): number;
        get_eventReceivers(): SP.EventReceiverDefinitionCollection;
        get_features(): SP.FeatureCollection;
        get_id(): SP.Guid;
        get_lockIssue(): string;
        get_maxItemsPerThrottledOperation(): number;
        get_owner(): SP.User;
        set_owner(value: SP.User): void;
        get_primaryUri(): string;
        get_readOnly(): boolean;
        get_recycleBin(): SP.RecycleBinItemCollection;
        get_rootWeb(): SP.Web;
        get_serverRelativeUrl(): string;
        get_shareByLinkEnabled(): boolean;
        get_showUrlStructure(): boolean;
        set_showUrlStructure(value: boolean): void;
        get_uIVersionConfigurationEnabled(): boolean;
        set_uIVersionConfigurationEnabled(value: boolean): void;
        get_upgradeInfo(): SP.UpgradeInfo;
        get_upgradeReminderDate(): Date;
        get_upgrading(): boolean;
        get_url(): string;
        get_usage(): SP.UsageInfo;
        get_userCustomActions(): SP.UserCustomActionCollection;
        updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs: boolean): void;
        needsUpgradeByType(versionUpgrade: boolean, recursive: boolean): SP.BooleanResult;
        runHealthCheck(ruleId: SP.Guid, bRepair: boolean, bRunAlways: boolean): SP.SiteHealth.SiteHealthSummary;
        createPreviewSPSite(upgrade: boolean, sendemail: boolean): void;
        runUpgradeSiteSession(versionUpgrade: boolean, queueOnly: boolean, sendEmail: boolean): void;
        getChanges(query: SP.ChangeQuery): SP.ChangeCollection;
        openWeb(strUrl: string): SP.Web;
        openWebById(gWebId: SP.Guid): SP.Web;
        getWebTemplates(LCID: number, overrideCompatLevel: number): SP.WebTemplateCollection;
        getCustomListTemplates(web: SP.Web): SP.ListTemplateCollection;
        getCatalog(typeCatalog: number): SP.List;
        extendUpgradeReminderDate(): void;
        invalidate(): void;
    }
    export class SiteUrl extends SP.ClientObject {
    }
    export class SubwebQuery extends SP.ClientValueObject {
        get_configurationFilter(): number;
        set_configurationFilter(value: number): void;
        get_webTemplateFilter(): number;
        set_webTemplateFilter(value: number): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum TemplateFileType {
        standardPage,
        wikiPage,
        formPage,
    }
    export class ThemeInfo extends SP.ClientObject {
        get_accessibleDescription(): string;
        get_themeBackgroundImageUri(): string;
        getThemeShadeByName(name: string): SP.StringResult;
        getThemeFontByName(name: string, lcid: number): SP.StringResult;
    }
    export class TimeZone extends SP.ClientObject {
        get_description(): string;
        get_id(): number;
        get_information(): SP.TimeZoneInformation;
        localTimeToUTC(date: Date): SP.DateTimeResult;
        utcToLocalTime(date: Date): SP.DateTimeResult;
    }
    export class TimeZoneCollection extends SP.ClientObjectCollection<TimeZone> {
        itemAt(index: number): SP.TimeZone;
        get_item(index: number): SP.TimeZone;
        getById(id: number): SP.TimeZone;
    }
    export class TimeZoneInformation extends SP.ClientValueObject {
        get_bias(): number;
        get_daylightBias(): number;
        get_standardBias(): number;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class UpgradeInfo extends SP.ClientValueObject {
        get_errorFile(): string;
        get_errors(): number;
        get_lastUpdated(): Date;
        get_logFile(): string;
        get_requestDate(): Date;
        get_retryCount(): number;
        get_startTime(): Date;
        get_status(): SP.UpgradeStatus;
        get_upgradeType(): SP.UpgradeType;
        get_warnings(): number;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum UpgradeStatus {
        none,
        inProgress,
        failed,
        completed,
    }
    export enum UpgradeType {
        buildUpgrade,
        versionUpgrade,
    }
    export enum UrlFieldFormatType {
        hyperlink,
        image,
    }
    export enum UrlZone {
        defaultZone,
        intranet,
        internet,
        custom,
        extranet,
    }
    export class UsageInfo extends SP.ClientValueObject {
        get_bandwidth(): number;
        get_discussionStorage(): number;
        get_hits(): number;
        get_storage(): number;
        get_storagePercentageUsed(): number;
        get_visits(): number;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class User extends SP.Principal {
        get_email(): string;
        set_email(value: string): void;
        get_groups(): SP.GroupCollection;
        get_isSiteAdmin(): boolean;
        set_isSiteAdmin(value: boolean): void;
        get_userId(): SP.UserIdInfo;
        update(): void;
    }
    export class UserCollection extends SP.ClientObjectCollection<User> {
        itemAt(index: number): SP.User;
        get_item(index: number): SP.User;
        getByLoginName(loginName: string): SP.User;
        getById(id: number): SP.User;
        getByEmail(emailAddress: string): SP.User;
        removeByLoginName(loginName: string): void;
        removeById(id: number): void;
        remove(user: SP.User): void;
        add(parameters: SP.UserCreationInformation): SP.User;
        addUser(user: SP.User): SP.User;
    }
    export class UserCreationInformation extends SP.ClientValueObject {
        get_email(): string;
        set_email(value: string): void;
        get_loginName(): string;
        set_loginName(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class UserCustomAction extends SP.ClientObject {
        get_commandUIExtension(): string;
        set_commandUIExtension(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_group(): string;
        set_group(value: string): void;
        get_id(): SP.Guid;
        get_imageUrl(): string;
        set_imageUrl(value: string): void;
        get_location(): string;
        set_location(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_registrationId(): string;
        set_registrationId(value: string): void;
        get_registrationType(): SP.UserCustomActionRegistrationType;
        set_registrationType(value: SP.UserCustomActionRegistrationType): void;
        get_rights(): SP.BasePermissions;
        set_rights(value: SP.BasePermissions): void;
        get_scope(): SP.UserCustomActionScope;
        get_scriptBlock(): string;
        set_scriptBlock(value: string): void;
        get_scriptSrc(): string;
        set_scriptSrc(value: string): void;
        get_sequence(): number;
        set_sequence(value: number): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_versionOfUserCustomAction(): string;
        update(): void;
        deleteObject(): void;
    }
    export class UserCustomActionCollection extends SP.ClientObjectCollection<UserCustomAction> {
        itemAt(index: number): SP.UserCustomAction;
        get_item(index: number): SP.UserCustomAction;
        getById(id: SP.Guid): SP.UserCustomAction;
        clear(): void;
        add(): SP.UserCustomAction;
    }
    export enum UserCustomActionRegistrationType {
        none,
        list,
        contentType,
        progId,
        fileType,
    }
    export enum UserCustomActionScope {
        unknown,
        site,
        web,
        list,
    }
    export class UserIdInfo extends SP.ClientValueObject {
        get_nameId(): string;
        get_nameIdIssuer(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class View extends SP.ClientObject {
        get_aggregations(): string;
        set_aggregations(value: string): void;
        get_aggregationsStatus(): string;
        set_aggregationsStatus(value: string): void;
        get_baseViewId(): string;
        get_contentTypeId(): SP.ContentTypeId;
        set_contentTypeId(value: SP.ContentTypeId): void;
        get_defaultView(): boolean;
        set_defaultView(value: boolean): void;
        get_defaultViewForContentType(): boolean;
        set_defaultViewForContentType(value: boolean): void;
        get_editorModified(): boolean;
        set_editorModified(value: boolean): void;
        get_formats(): string;
        set_formats(value: string): void;
        get_hidden(): boolean;
        set_hidden(value: boolean): void;
        get_htmlSchemaXml(): string;
        get_id(): SP.Guid;
        get_imageUrl(): string;
        get_includeRootFolder(): boolean;
        set_includeRootFolder(value: boolean): void;
        get_viewJoins(): string;
        set_viewJoins(value: string): void;
        get_jsLink(): string;
        set_jsLink(value: string): void;
        get_listViewXml(): string;
        set_listViewXml(value: string): void;
        get_method(): string;
        set_method(value: string): void;
        get_mobileDefaultView(): boolean;
        set_mobileDefaultView(value: boolean): void;
        get_mobileView(): boolean;
        set_mobileView(value: boolean): void;
        get_moderationType(): string;
        get_orderedView(): boolean;
        get_paged(): boolean;
        set_paged(value: boolean): void;
        get_personalView(): boolean;
        get_viewProjectedFields(): string;
        set_viewProjectedFields(value: string): void;
        get_viewQuery(): string;
        set_viewQuery(value: string): void;
        get_readOnlyView(): boolean;
        get_requiresClientIntegration(): boolean;
        get_rowLimit(): number;
        set_rowLimit(value: number): void;
        get_scope(): SP.ViewScope;
        set_scope(value: SP.ViewScope): void;
        get_serverRelativeUrl(): string;
        get_styleId(): string;
        get_threaded(): boolean;
        get_title(): string;
        set_title(value: string): void;
        get_toolbar(): string;
        set_toolbar(value: string): void;
        get_toolbarTemplateName(): string;
        get_viewType(): string;
        get_viewData(): string;
        set_viewData(value: string): void;
        get_viewFields(): SP.ViewFieldCollection;
        deleteObject(): void;
        renderAsHtml(): SP.StringResult;
        update(): void;
    }
    export class ViewCollection extends SP.ClientObjectCollection<View> {
        itemAt(index: number): SP.View;
        get_item(index: number): SP.View;
        getByTitle(strTitle: string): SP.View;
        getById(guidId: SP.Guid): SP.View;
        add(parameters: SP.ViewCreationInformation): SP.View;
    }
    export class ViewCreationInformation extends SP.ClientValueObject {
        get_paged(): boolean;
        set_paged(value: boolean): void;
        get_personalView(): boolean;
        set_personalView(value: boolean): void;
        get_query(): string;
        set_query(value: string): void;
        get_rowLimit(): number;
        set_rowLimit(value: number): void;
        get_setAsDefaultView(): boolean;
        set_setAsDefaultView(value: boolean): void;
        get_title(): string;
        set_title(value: string): void;
        get_viewFields(): string[];
        set_viewFields(value: string[]): void;
        get_viewTypeKind(): SP.ViewType;
        set_viewTypeKind(value: SP.ViewType): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ViewFieldCollection extends SP.ClientObjectCollection<string> {
        itemAt(index: number): string;
        get_item(index: number): string;
        get_schemaXml(): string;
        moveFieldTo(field: string, index: number): void;
        add(strField: string): void;
        remove(strField: string): void;
        removeAll(): void;
    }
    export enum ViewScope {
        defaultValue,
        recursive,
        recursiveAll,
        filesOnly,
    }
    export enum ViewType {
        none,
        html,
        grid,
        calendar,
        recurrence,
        chart,
        gantt,
    }
    export class Web extends SP.SecurableObject {
        get_allowDesignerForCurrentUser(): boolean;
        get_allowMasterPageEditingForCurrentUser(): boolean;
        get_allowRevertFromTemplateForCurrentUser(): boolean;
        get_allowRssFeeds(): boolean;
        get_allProperties(): SP.PropertyValues;
        get_appInstanceId(): SP.Guid;
        get_associatedMemberGroup(): SP.Group;
        set_associatedMemberGroup(value: SP.Group): void;
        get_associatedOwnerGroup(): SP.Group;
        set_associatedOwnerGroup(value: SP.Group): void;
        get_associatedVisitorGroup(): SP.Group;
        set_associatedVisitorGroup(value: SP.Group): void;
        get_availableContentTypes(): SP.ContentTypeCollection;
        get_availableFields(): SP.FieldCollection;
        get_configuration(): number;
        get_contentTypes(): SP.ContentTypeCollection;
        get_created(): Date;
        get_currentUser(): SP.User;
        get_customMasterUrl(): string;
        set_customMasterUrl(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_documentLibraryCalloutOfficeWebAppPreviewersDisabled(): boolean;
        get_effectiveBasePermissions(): SP.BasePermissions;
        get_enableMinimalDownload(): boolean;
        set_enableMinimalDownload(value: boolean): void;
        get_eventReceivers(): SP.EventReceiverDefinitionCollection;
        get_features(): SP.FeatureCollection;
        get_fields(): SP.FieldCollection;
        get_folders(): SP.FolderCollection;
        get_id(): SP.Guid;
        get_language(): number;
        get_lastItemModifiedDate(): Date;
        get_lists(): SP.ListCollection;
        get_listTemplates(): SP.ListTemplateCollection;
        get_masterUrl(): string;
        set_masterUrl(value: string): void;
        get_navigation(): SP.Navigation;
        get_parentWeb(): SP.WebInformation;
        get_pushNotificationSubscribers(): SP.PushNotificationSubscriberCollection;
        get_quickLaunchEnabled(): boolean;
        set_quickLaunchEnabled(value: boolean): void;
        get_recycleBin(): SP.RecycleBinItemCollection;
        get_recycleBinEnabled(): boolean;
        get_regionalSettings(): SP.RegionalSettings;
        get_roleDefinitions(): SP.RoleDefinitionCollection;
        get_rootFolder(): SP.Folder;
        get_saveSiteAsTemplateEnabled(): boolean;
        set_saveSiteAsTemplateEnabled(value: boolean): void;
        get_serverRelativeUrl(): string;
        set_serverRelativeUrl(value: string): void;
        get_showUrlStructureForCurrentUser(): boolean;
        get_siteGroups(): SP.GroupCollection;
        get_siteUserInfoList(): SP.List;
        get_siteUsers(): SP.UserCollection;
        get_supportedUILanguageIds(): number[];
        get_syndicationEnabled(): boolean;
        set_syndicationEnabled(value: boolean): void;
        get_themeInfo(): SP.ThemeInfo;
        get_title(): string;
        set_title(value: string): void;
        get_treeViewEnabled(): boolean;
        set_treeViewEnabled(value: boolean): void;
        get_uIVersion(): number;
        set_uIVersion(value: number): void;
        get_uIVersionConfigurationEnabled(): boolean;
        set_uIVersionConfigurationEnabled(value: boolean): void;
        get_url(): string;
        get_userCustomActions(): SP.UserCustomActionCollection;
        get_webs(): SP.WebCollection;
        get_webTemplate(): string;
        get_workflowAssociations(): SP.Workflow.WorkflowAssociationCollection;
        get_workflowTemplates(): SP.Workflow.WorkflowTemplateCollection;
        doesUserHavePermissions(permissionMask: SP.BasePermissions): SP.BooleanResult;
        getUserEffectivePermissions(userName: string): SP.BasePermissions;
        mapToIcon(fileName: string, progId: string, size: SP.Utilities.IconSize): SP.StringResult;
        registerPushNotificationSubscriber(deviceAppInstanceId: SP.Guid, serviceToken: string): SP.PushNotificationSubscriber;
        unregisterPushNotificationSubscriber(deviceAppInstanceId: SP.Guid): void;
        getPushNotificationSubscribersByArgs(customArgs: string): SP.PushNotificationSubscriberCollection;
        getPushNotificationSubscribersByUser(userName: string): SP.PushNotificationSubscriberCollection;
        doesPushNotificationSubscriberExist(deviceAppInstanceId: SP.Guid): SP.BooleanResult;
        getPushNotificationSubscriber(deviceAppInstanceId: SP.Guid): SP.PushNotificationSubscriber;
        getUserById(userId: number): SP.User;
        getAvailableWebTemplates(lcid: number, doIncludeCrossLanguage: boolean): SP.WebTemplateCollection;
        getCatalog(typeCatalog: number): SP.List;
        getChanges(query: SP.ChangeQuery): SP.ChangeCollection;
        applyWebTemplate(webTemplate: string): void;
        deleteObject(): void;
        update(): void;
        getFileByServerRelativeUrl(serverRelativeUrl: string): SP.File;
        getFolderByServerRelativeUrl(serverRelativeUrl: string): SP.Folder;
        getEntity(namespace: string, name: string): SP.BusinessData.Entity;
        getAppBdcCatalogForAppInstance(appInstanceId: SP.Guid): SP.BusinessData.AppBdcCatalog;
        getAppBdcCatalog(): SP.BusinessData.AppBdcCatalog;
        getSubwebsForCurrentUser(query: SP.SubwebQuery): SP.WebCollection;
        getAppInstanceById(appInstanceId: SP.Guid): SP.AppInstance;
        getAppInstancesByProductId(productId: SP.Guid): SP.ClientObjectList<SP.AppInstance>;
        loadAndInstallAppInSpecifiedLocale(appPackageStream: SP.Base64EncodedByteArray, installationLocaleLCID: number): SP.AppInstance;
        loadApp(appPackageStream: SP.Base64EncodedByteArray, installationLocaleLCID: number): SP.AppInstance;
        loadAndInstallApp(appPackageStream: SP.Base64EncodedByteArray): SP.AppInstance;
        ensureUser(logonName: string): SP.User;
        applyTheme(colorPaletteUrl: string, fontSchemeUrl: string, backgroundImageUrl: string, shareGenerated: boolean): void;

        /** Available after March 2015 CU for SharePoint 2013*/
        getList(url: string): List;
    }
    export class WebCollection extends SP.ClientObjectCollection<Web> {
        itemAt(index: number): SP.Web;
        get_item(index: number): SP.Web;
        add(parameters: SP.WebCreationInformation): SP.Web;
    }
    export class WebCreationInformation extends SP.ClientValueObject {
        get_description(): string;
        set_description(value: string): void;
        get_language(): number;
        set_language(value: number): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_useSamePermissionsAsParentSite(): boolean;
        set_useSamePermissionsAsParentSite(value: boolean): void;
        get_webTemplate(): string;
        set_webTemplate(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class WebInformation extends SP.ClientObject {
        get_configuration(): number;
        get_created(): Date;
        get_description(): string;
        get_id(): SP.Guid;
        get_language(): number;
        get_lastItemModifiedDate(): Date;
        get_serverRelativeUrl(): string;
        get_title(): string;
        get_webTemplate(): string;
        get_webTemplateId(): number;
    }
    export class WebProxy {
        static invoke(context: SP.ClientRuntimeContext, requestInfo: SP.WebRequestInfo): SP.WebResponseInfo;
    }
    export class WebRequestInfo extends SP.ClientValueObject {
        get_body(): string;
        set_body(value: string): void;
        get_headers(): any;
        set_headers(value: any): void;
        get_method(): string;
        set_method(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class WebResponseInfo extends SP.ClientValueObject {
        get_body(): string;
        set_body(value: string): void;
        get_headers(): any;
        set_headers(value: any): void;
        get_statusCode(): number;
        set_statusCode(value: number): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class WebTemplate extends SP.ClientObject {
        get_description(): string;
        get_displayCategory(): string;
        get_id(): number;
        get_imageUrl(): string;
        get_isHidden(): boolean;
        get_isRootWebOnly(): boolean;
        get_isSubWebOnly(): boolean;
        get_lcid(): number;
        get_name(): string;
        get_title(): string;
    }
    export class WebTemplateCollection extends SP.ClientObjectCollection<WebTemplate> {
        itemAt(index: number): SP.WebTemplate;
        get_item(index: number): SP.WebTemplate;
        getByName(name: string): SP.WebTemplate;
    }

    export namespace Application {
        export namespace UI {
            export interface DefaultFormsInformationRequestor {
                onDefaultFormsInformationRetrieveSuccess(defaultForms: SP.Application.UI.DefaultFormsInformation): void;
                onDefaultFormsInformationRetrieveFailure(): void;
            }
            export class FormsInfo {
                ContentTypeName: string;
                NewFormUrl: string;
                DisplayFormUrl: string;
                EditFormUrl: string;
                constructor();
            }
            export class DefaultFormsInformation {
                DefaultForms: SP.Application.UI.FormsInfo;
                OtherForms: any;
                constructor();
            }
            export class DefaultFormsMenuBuilder {
                static getDefaultFormsInformation(requestor: SP.Application.UI.DefaultFormsInformationRequestor, listId: SP.Guid): void;
            }
            export class ViewSelectorMenuOptions {
                showRepairView: boolean;
                showMergeView: boolean;
                showEditView: boolean;
                showCreateView: boolean;
                showApproverView: boolean;
                listId: string;
                viewId: string;
                viewParameters: string;
                constructor();
            }
            export interface ViewInformationRequestor {
                onViewInformationReturned(viewGroups: SP.Application.UI.ViewSelectorGroups): void;
            }
            export class ViewSelectorGroups {
                ModeratedViews: any;
                PublicViews: any;
                PersonalViews: any;
                OtherViews: any;
                DefaultView: SP.Application.UI.ViewSelectorMenuItem;
                ViewCreation: any;
                constructor();
            }
            export class ViewSelectorMenuItem {
                Text: string;
                ActionScriptText: string;
                NavigateUrl: string;
                ImageSourceUrl: string;
                Description: string;
                Id: string;
                Sequence: number;
                ItemType: string;
                GroupId: number;
                constructor();
            }
            export class ViewSelectorSubMenu {
                Text: string;
                ImageSourceUrl: string;
                SubMenuItems: any;
                constructor();
            }
            export class ViewSelectorMenuBuilder {
                static get_filterMenuItemsCallback(): (menuItems: any) => any;
                static set_filterMenuItemsCallback(value: (menuItems: any) => any): void;
                static showMenu(elem: HTMLElement, options: SP.Application.UI.ViewSelectorMenuOptions): void;
                static getViewInformation(requestor: SP.Application.UI.ViewInformationRequestor, options: SP.Application.UI.ViewSelectorMenuOptions): void;
            }
            export class MoreColorsPicker extends Sys.UI.Control {
                constructor(e: HTMLElement);
                initialize(): void;
                dispose(): void;
                get_colorValue(): string;
                set_colorValue(value: string): void;
            }
            export class MoreColorsPage extends Sys.UI.Control {
                constructor(e: HTMLElement);
                initialize(): void;
                dispose(): void;
                get_moreColorsPicker(): SP.Application.UI.MoreColorsPicker;
                set_moreColorsPicker(value: SP.Application.UI.MoreColorsPicker): void;
            }
            export class ThemeWebPage extends Sys.UI.Control {
                add_themeDisplayUpdated(value: (sender: any, e: Sys.EventArgs) => void): void;
                remove_themeDisplayUpdated(value: (sender: any, e: Sys.EventArgs) => void): void;
                constructor(e: HTMLElement);
                initialize(): void;
                dispose(): void;
                onThemeSelectionChanged(evt: Sys.UI.DomEvent): void;
                updateThemeDisplay(): void;
                get_thmxThemes(): any;
                set_thmxThemes(value: any): void;
            }
            export class WikiPageNameInPlaceEditor {
                constructor(ownerDoc: any, displayElemId: string, editElemId: string, editTextBoxId: string);
                editingPageCallback(): void;
                savingPageCallback(): void;
            }
        }
    }


    export namespace Analytics {
        export class AnalyticsUsageEntry extends SP.ClientObject {
            static logAnalyticsEvent(context: SP.ClientRuntimeContext, eventTypeId: number, itemId: string): void;
            static logAnalyticsEvent2(context: SP.ClientRuntimeContext, eventTypeId: number, itemId: string, rollupScopeId: SP.Guid, siteId: SP.Guid, userId: string): void;
            static logAnalyticsAppEvent(context: SP.ClientRuntimeContext, appEventTypeId: SP.Guid, itemId: string): void;
            static logAnalyticsAppEvent2(context: SP.ClientRuntimeContext, appEventTypeId: SP.Guid, itemId: string, rollupScopeId: SP.Guid, siteId: SP.Guid, userId: string): void;
        }
        export enum EventTypeId {
            none,
            first,
            view,
            recommendationView,
            recommendationClick,
            last,
        }
    }

    export namespace SiteHealth {
        export class SiteHealthResult extends SP.ClientValueObject {
            get_messageAsText(): string;
            get_ruleHelpLink(): string;
            get_ruleId(): SP.Guid;
            get_ruleIsRepairable(): boolean;
            get_ruleName(): string;
            get_status(): SP.SiteHealth.SiteHealthStatusType;
            set_status(value: SP.SiteHealth.SiteHealthStatusType): void;
            get_timeStamp(): Date;
            set_timeStamp(value: Date): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export enum SiteHealthStatusType {
            passed,
            failedWarning,
            failedError,
        }
        export class SiteHealthSummary extends SP.ClientObject {
            get_failedErrorCount(): number;
            get_failedWarningCount(): number;
            get_passedCount(): number;
            get_results(): SP.SiteHealth.SiteHealthResult[];
        }
    }

}


