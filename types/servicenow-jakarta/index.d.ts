declare const email: servicenow.IGlideEmailOutbound;
declare const g_processor: servicenow.IGlideScriptedProcessor;
declare const g_request: servicenow.IGlideServletRequest;
declare const g_response: servicenow.IGlideServletResponse;
declare const gs: servicenow.IGlideSystem;
declare const GlideRecordSecure: servicenow.IGlideRecord;
declare const GlideRecord: servicenow.IGlideRecord;

declare namespace sn_ws {
    class RESTMessageV2 {
        constructor();
        constructor (name: string, methodName: servicenow.RestHTTPMethods);
        execute(): servicenow.IRESTResponseV2;
        executeAsync(): servicenow.IRESTResponseV2;
        getEndpoint(): string;
        getRequestBody(): string;
        getRequestHeader(headerName: string): string;
        getRequestHeaders(): object;
        saveResponseBodyAsAttachment(tableName: string, recordSysId: string, fileName: string, encryptContext?: string): void;
        setAuthenticationProfile(type: string, profileId: string): void;
        setBasicAuth(userName: string, userPass: string): void;
        setEccCorrelator(correlator: string): void;
        setEccParameter(name: string, value: string): void;
        setEndpoint(endpoint: string): void;
        setHttpMethod(method: servicenow.RestHTTPMethods): void;
        setHttpTimeout(timeoutMs: number): void;
        setLogLevel(level: 'basic'|'elevated'|'all'): void;
        setMIDServer(midServer: string): void;
        setMutualAuth(profileName: string): void;
        setQueryParameter(name: string, value: string): void;
        setRequestBody(body: string): void;
        setRequestBodyFromAttachment(sys_id: string): void;
        setRequestBodyFromStream(stream: object): void;
        setRequestHeader(name: string, value: string): void;
        setRequestorProfile(requestorContext: string, requestorId: string): void;
        setStringParameter(name: string, value: string): void;
        setStringParameterNoEscape(name: string, value: string): void;
    }

    class SOAPMessageV2 {
        constructor ();
        constructor (soapMessage: string, soapFunction: string);
        execute(): servicenow.ISOAPResponseV2;
        executeAsync(): servicenow.ISOAPResponseV2;
        setHttpMethod(method: string): void;
        setHttpTimeout(timeoutMs: number): void;
        setBasicAuth(userName: string, userPass: string): void;
        setMutualAuth(profileName: string): void;
        setEccCorrelator(correlator: string): void;
        setEccParameter(name: string, value: string): void;
        setEndpoint(endpoint: string): void;
        setMIDServer(midServer: string): void;
        setRequestBody(body: string): void;
        setRequestHeader(name: string, value: string): void;
        setStringParameter(name: string, value: string): void;
        setStringParameterNoEscape(name: string, value: string): void;
        setWSSecurity(keystoreId: string, keystoreAlias: string, keystorePassword: string, certificateId: string): void;
        getRequestBody(): string;
        getEndpoint(): string;
        getRequestHeader(headerName: string): string;
        getRequestHeaders(): object;
    }
}

declare namespace global {
    class GlideStringUtil {
        static base64Decode(value: string): string;
        static base64DecodeAsBytes(value: string): any;
        static escapeHTML(value: string): string;
        static getStringFromStream(stream: object): string;
    }

    class Class {
        static create(): any;
    }

    class Workflow {
        constructor();
        broadcastEvent(contextId: string, eventName: string): void;
        cancel(record: servicenow.IGlideRecord): void;
        cancelContext(context: servicenow.IGlideRecord): void;
        deleteWorkflow(current: servicenow.IGlideRecord): void;
        fireEvent(eventRecord: servicenow.IGlideRecord, eventName: string): void;
        fireEventById(eventRecordId: string, eventName: string): void;
        getContexts(record: servicenow.IGlideRecord): servicenow.IGlideRecord;
        getEstimatedDeliveryTime(workflowId: string): string;
        getEstimatedDeliveryTimeFromWFVersion(wfVersion: servicenow.IGlideRecord): string;
        getReturnValue(workflowID: string, amount: number, result: boolean): any|null;
        getRunningFlows(record: servicenow.IGlideRecord): servicenow.IGlideRecord;
        getVersion(workflowId: string): void;
        getVersionFromName(workflowName: string): void;
        getWorkflowFromName(workflowName: string): void;
        hasWorkflow(record: servicenow.IGlideRecord): boolean;
        restartWorkflow(record: servicenow.IGlideRecord, maintainStateFlag: boolean): void;
        runFlows(record: servicenow.IGlideRecord, operation: servicenow.GlideRecordOperation): void;
        startFlow(workflowId: string, current: servicenow.IGlideRecord|null, operation: servicenow.GlideRecordOperation, vars?: object) : string;
        startFlowFromContextInsert(context: servicenow.IGlideRecord, operation: servicenow.GlideRecordOperation): void;
        startFlowRetroactive(workflowID: string, retroactiveMSecs: number, current: servicenow.IGlideRecord, operation: servicenow.GlideRecordOperation, vars?: object, withSchedule?: any): servicenow.IGlideRecord;
   
    }
}

declare class GlideDateTime {
    constructor ();
    constructor (value: string);
    constructor (g: GlideDateTime);

    add(gd: servicenow.IGlideTime): void;
    add(milliseconds: number): void;
    addDaysLocalTime(amount: number): void;
    addDaysUTC(amount: number): void;
    addMonthsLocalTime(amount: number): void;
    addMonthsUTC(amount: number): void;
    addSeconds(value: number): void;
    addWeeksLocalTime(amount: number): void;
    addWeeksUTC(amount: number): void;
    addYearsLocalTime(amount: number): void;
    addYearsUTC(amount: number): void;
    compareTo(o: object): number;
    equals(o: object): boolean;
    getDSTOffset(): number;
    getDate(): servicenow.IGlideTime;
    getDayOfMonthLocalTime(): number;
    getDayOfMonthUTC(): number;
    getDayOfWeekLocalTime(): number;
    getDayOfWeekUTC(): number;
    getDaysInMonthUTC(): number;
    getDisplayValue(): string;
    getDisplayValueInternal(): string;
    getDSTOffset(): number;
    getErrorMsg(): string;
    getLocalDate(): servicenow.IGlideTime;
    getLocalTime(): servicenow.IGlideTime;
    getMonthLocalTime(): number;
    getMonthUTC(): number;
    getNumericValue(): number;
    getTZOffset(): number;
    getTime(): servicenow.IGlideTime;
    getValue(): string;
    getWeekOfYearLocalTime(): number;
    getWeekOfYearUTC(): number;
    getYearLocalTime(): number;
    getYearUTC(): number;
    hasDate(): boolean;
    isDST(): boolean;
    isValid(): boolean;
    setDayOfMonthLocalTime(day: number): void;
    setDayOfMonthUTC(day: number): void;
    setDisplayValue(asDisplayed: string): void;
    setDisplayValue(value: string, format: string): void;
    setDisplayValueInternal(value: string): void;
    setGlideDateTime(g: GlideDateTime): void;
    setMonthLocalTime(month: number): void;
    setMonthUTC(month: number): void;
    setNumericValue(milliseconds: number): void;
    setValue(o: string|number|GlideDateTime): void;
    setValueUTC(dt: string, format: string): void;
    setYearLocalTime(year: number): void;
    setYearUTC(year: number): void;
    subtract(gd: servicenow.IGlideTime): void;
    subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration;
    subtract(value: number): void;
    subtract(time: servicenow.IGlideTime): void;
    toString(): string;
}

declare class RP {
    static getReferringURL(): string;
    static isDialog(): boolean;
    static isHomePage(): boolean;
    static isPrint(): boolean;
    static isMobile(): boolean;
    static getParameterValue(value: string): string;
    static getParameters(): Array<string>;
    static getViewID(): string;
}

declare class XMLDocument2 {
    constructor ();
    parseXML(xmlDoc: string): void;
    getNodeText(xpath: string): string;
    getNode(xpath: string): servicenow.IXMLNode;
    getFirstNode(xpath: string): servicenow.IXMLNode;
    getNextNode(prev: object): servicenow.IXMLNode;
    createElement(name: string): servicenow.IXMLNode;
    createElementWithTextValue(name: string, value: string): servicenow.IXMLNode;
    setCurrentElement(element: servicenow.IXMLNode): void;
    getDocumentElement(): servicenow.IXMLNode;
    toString(): string;
}

declare class GlideDuration {
    constructor ();
    constructor (another: GlideDuration);
    constructor (ms: number);
    constructor (displayValue: string);
    add(value: GlideDuration): GlideDuration;
    getByFormat(format: string): string;
    getDayPart(): number;
    getRoundedDayPart(): number;
    getDisplayValue(): string;
    getDurationValue(): string;
    getValue(): string;
    setDisplayValue(asDisplayed: string): void;
    setValue(o: object): void;
    subtract(value: GlideDuration): GlideDuration;
    getNumericValue(): number;
}

declare class GlideFilter {
    static checkRecord(gr: servicenow.IGlideRecord, filter: string, matchAll?: object): boolean;
}

declare class GlideGuid {
    static generate(): string;
}

declare class GlideLocale {
    static get(): GlideLocale;
    getGroupingSeparator(): string;
    getDecimalSeparator(): string;
}

declare class GlidePluginManager {
    static isActive(pluginId: string): boolean;
}

declare class GlideSchedule {
    constructor ();
    constructor (sysId: string, timeZone: string);
    add(startDate: GlideDateTime, offset: GlideDuration): GlideDateTime;
    duration(startDate: GlideDateTime, endDate: GlideDateTime): GlideDuration;
    getName(): string;
    isInSchedule(time: GlideDateTime): string;
    isValid(): boolean;
    load(sysId: string, timeZone: string, excludeSpanId: string): void;
    setTimeZone(tz: string): void;
    whenNext(time: GlideDateTime, timeZone: string): number;
}

declare class GlideEvaluator {
    constructor ();
    evaluateScript(grObj: servicenow.IGlideRecord, scriptField?: string, variables?: object): object;
    getVariable<T>(name: string): T;
    putVariable<T>(name: string, value: T): void;
}

declare class GlideSecureRandomUtil {
    static getSecureRandomInt(): number;
    static getSecureRandomIntBound(bound: number): number;
    static getSecureRandomLong(): number;
    static getSecureRandomString(length: number): string;
}

declare class GlideSysAttachment {
    constructor ();
    copy(sourceTable: string, sourceSysId: string, destinationTable: string, destinationSysId: string): void;
    deleteAttachment(sysId: string): void;
    getContent(record: servicenow.IGlideRecord): any;
    getContentBase64(record: servicenow.IGlideRecord): string;
    getContentStream(sysId: string): object;
    write(record: servicenow.IGlideRecord, fileName: string, contentType: string, data: any): string;
    writeBase64(record: servicenow.IGlideRecord, fileName: string, contentType: string, base64Content: string): string;
    writeContentStream(record: servicenow.IGlideRecord, fileName: string, contentType: string, inputStream: object): string;
}

declare namespace servicenow {
    export interface IGlideRecord {
        readonly sys_created_by: string & IGlideElement;
        readonly sys_created_on: GlideDateTime & IGlideElement;
        readonly sys_id: string;
        readonly sys_mod_count: number & IGlideElement;
        readonly sys_updated_by: string & IGlideElement;
        readonly sys_updated_on: GlideDateTime & IGlideElement;
        
        new (type: string) : IGlideRecord;

        addActiveQuery(): IGlideQueryCondition;
        addEncodedQuery(query: string): void;
        addJoinQuery(joinTable: string, primaryField?: string, joinTableField?: string): IGlideQueryCondition;
        addNotNullQuery(fieldName: string): IGlideQueryCondition;
        addNullQuery(fieldName: string): IGlideQueryCondition;
        addQuery(encodedQuery: string): IGlideQueryCondition;
        addQuery(fieldName: string, operator: QueryOperator, value: object|string|number): IGlideQueryCondition;
        addQuery(fieldName: string, value: object|string|number): IGlideQueryCondition;
        canCreate(): boolean;
        canDelete(): boolean;
        canRead(): boolean;
        canWrite(): boolean;
        chooseWindow(firstRow: number, lastRow: number, forceCount?: boolean): void;
        deleteMultiple(): void;
        deleteRecord(): boolean;
        get(name: string, value?: string): boolean;
        getAttribute(fieldName: string): string;
        getClassDisplayValue(): string;
        getDisplayValue(field?: string): string;
        getED(): IGlideElementDescriptor;
        getElement(columnName: string): IGlideElement;
        getEncodedQuery(): string;
        getLabel(): string;
        getLastErrorMessage(): string;
        getLink(noStack: boolean): string;
        getRecordClassName(): string;
        getRowCount(): number;
        getTableName(): string;
        getUniqueValue(): string;
        getValue(name: string): string;
        hasNext(): boolean;
        initialize(): void;
        insert(): string;
        isActionAborted(): boolean;
        isNewRecord(): boolean;
        isValid(): boolean;
        isValidField(columnName: string): boolean;
        isValidRecord(): boolean;
        newRecord(): void;
        next(): boolean;
        _next(): boolean;
        operation(): servicenow.GlideRecordOperation;
        orderBy(name: string): void;
        orderByDesc(name: string): void;
        query(): void;
        query(field: string, value: object): void;
        query(query: string): void;
        _query(field: string, value: object): void;
        setAbortAction(b: boolean): void;
        setNewGuidValue(guid: string): void;
        setLimit(limit: number): void;
        setValue(name: string, value: object): void;
        setWorkflow(enable: boolean): void;
        update(reason?: string): string;
        updateMultiple(): void;
    }
export interface IGlideEmailOutbound {
    getSubject(): string;
    setSubject(subject: string): void;
    setFrom(address: string): void;
    setReplyTo(address: string): void;
    addAddress(type: string, address: string, displayName: string): void;
    setBody(bodyText: string): void;
}

export interface IGlideQueryCondition {
    addCondition(name: string, value: object|string|number): IGlideQueryCondition;
    addCondition(name: string, oper: QueryOperator, value: object|string|number): IGlideQueryCondition;
    addOrCondition(name: string, oper: QueryOperator, value: object|string|number): IGlideQueryCondition;
    addOrCondition(name: string, value: object|string|number): IGlideQueryCondition;
}

export interface IGlideElement {
    changes(): boolean;
    changesFrom(value: object): boolean;
    changesTo(value: object): boolean;
    getChoices(name?: string): Array<any>;
    getDecryptedValue(): string;
    getDisplayValue(maxCharacters?: number): string;
    getED(): IGlideElementDescriptor
    getReferenceTable(): string;
    getRefRecord(): IGlideRecord;
    nil(): boolean;
    setDisplayValue(value: object): void;
    setError(value: string): void;
    setValue(value: object|string): void;
    toString(): string;
}

export interface IGlideElementDescriptor {
    getAttachmentEncryptionType(): string;
    getEncryptionType(): string;
    getInternalType(): string;
    getLabel(): string;
    getLength(): number;
    getName(): string;
    getPlural(): boolean;
    hasAttachmentsEncrypted(): boolean;
    isAutoOrSysID(): boolean;
    isChoiceTable(): boolean;
    isEdgeEncrypted(): boolean;
    isVirtual(): boolean;
}

export interface IGlideScriptedProcessor {
    redirect(url: string): void;
    writeOutput(s: string): void;
    writeOutput(contentType: string, s: string): void;
    writeJSON(o: object): void;
}

export interface IGlideServletRequest {
    getContentType(): string;
    getHeader(name: string): string;
    getParameter(name: string): string;
    writeOutput(mimeType: string, output: string): void;
    toString(): string;
}

export interface IGlideServletResponse {
    setContentType(type: string): void;
    setHeader(name: string, value: string): void;
    setStatus(value: number): void;
}

export interface IGlideSession {
    isInteractive(): boolean;
    isLoggedIn(): boolean;
    getClientData(paramName: string): string;
    getClientIP(): string;
    getCurrentApplicationId(): string;
    getLanguage(): string;
    getTimeZoneName(): string;
    getSessionToken(): string;
    getUrlOnStack(): string;
    putClientData(paramName: string, paramValue: string): void;
}



export interface IGlideTime {
    new (milliseconds: number): IGlideTime;
    getByFormat(format: string): string;
    getDisplayValue(): string;
    getDisplayValueinternal(): string;
    getValue(): string;
    setDisplayValue(asDisplayed: string): void;
    setValue(o: string): void;
    subtract(start: IGlideTime, end: IGlideTime): GlideDuration;
}

export interface IGlideSystem {
    addErrorMessage(message: string): void;
    addInfoMessage(message: string): void;
    base64Decode(source: string): string;
    base64Encode(source: string): string;
    beginningOfLastMonth(): string;
    beginningOfLastWeek(): string;
    beginningOfNextWeek(): string;
    beginningOfNextMonth(): string;
    beginningOfNextYear(): string;
    beginningOfThisMonth(): string;
    beginningOfThisQuarter(): string;
    beginningOfThisWeek(): string;
    beginningOfThisYear(): string;
    dateGenerate(date: string): string;
    daysAgo(days: number): string;
    daysAgoEnd(days: number): string;
    daysAgoStart(days: number): string;
    debug(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    endOfLastMonth(): string;
    endOfLastWeek(): string;
    endOfLastYear(): string;
    endOfNextMonth(): string;
    endOfNextWeek(): string;
    endOfNextYear(): string;
    endOfThisMonth(): string;
    endOfThisQuarter(): string;
    endOfThisWeek(): string;
    endOfThisYear(): string;
    error(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    eventQueue(eventName: string, gr: IGlideRecord, optionalParam1: string, optionalParam2: string, eventQueue?: string): void;
    eventQueueScheduled(name: string, instance: IGlideRecord, parm1: string, parm2: string, expiration: object): void;
    executeNow(job: IGlideRecord): string;
    generateGUID(): string;
    getCallerScopeName(): string;
    getCssCacheVersionString(): string;
    getCurrentApplicationId(): string;
    getCurrentScopeName(): string;
    getErrorMessages(id: string, args?: Array<string>): string;
    getMessage(id: string, object?: any): string;
    getProperty<T>(key: string, altobject?: T): T;
    getSession(): string | IGlideSession;
    getSessionID(): string;
    getSessionToken(): string;
    getTimeZoneName(): string;
    getUrlOnStack(): string;
    getUser(): IGlideUser;
    getUserDisplayName(): string;
    getUserID(): string;
    getUserName(): string;
    getUserNameByUserID(id: string): string;
    hasRole(roleName: string): boolean;
    include(include: string): void;
    info(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    isDebugging(): boolean;
    isInteractive(): boolean;
    isLoggedIn(): boolean;
    isMobile(): boolean;
    minutesAgoEnd(num: number): string;
    minutesAgoStart(num: number): string;
    monthsAgo(num: number): string;
    monthsAgoEnd(num: number): string;
    monthsAgoStart(num: number): string;
    nil(object: any): boolean;
    quartersAgoEnd(num: number): string;
    quartersAgoStart(num: number): string;
    setRedirect(uri: string): void;
    tableExists(table: string): boolean;
    warn(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;
    xmlToJSON(xml: string): any;
    yearsAgo(years: number): string;
    yesterday(): string;
}

export interface IGlideUser {
    getCompanyID(): string;
    getDisplayName(): string;
    getID(): string;
    getName(): string;
    getPreference(name: string): string;
    hasRole(role: string): boolean;
    isMemberOf(group: string): boolean;
    savePreference(name: string, value: string): void;
}

export interface IXMLNode {
    getLastChild(): IXMLNode;
    getFirstChild(): IXMLNode;
    getNodeValue(): string;
    getNodeName(): string;
    hasAttribute(name: string): boolean;
    getAttribute(attribute: string): string;
    getChildNodeIterator(): IXMLNodeIterator;
    getTextContent(): string;
    toString(): string;
}

export interface IXMLNodeIterator {
    hasNext(): Boolean;
    next(): IXMLNode;
}

export interface ISOAPResponseV2 {
    waitForResponse(timeoutSecs: number): void;
    getStatusCode(): number;
    getHeader(name: string): string;
    getHeaders(): object;
    getBody(): string;
    haveError(): boolean;
    getErrorCode(): number;
    getErrorMessage(): string;
}

export interface IRESTResponseV2 {
    getBody(): string;
    getCookies(): {size: ()=>number, get: (index: number)=>string};
    getErrorCode(): number;
    getErrorMessage(): string;
    getHeader(name: string): string;
    getHeaders(): object;
    getQueryString(): string;
    getResponseAttachmentSysid(): string;
    getStatusCode(): number;
    haveError(): boolean;
    waitForResponse(timeoutSecs: number): void;
}

export interface IRESTAPIRequest<T> {
    body: IRESTAPIRequestBody<T>;
    pathParams: { [paramName: string]: string };
    queryParams: { [paramName: string]: Array<string> };
    queryString: string;
    uri: string;
    url: string;
    headers: { [paramName: string]: string };
    getHeader(header: string): string;
    getSupportedResponseContentTypes(): Array<string>;
}

export interface IRESTAPIRequestBody<T> {
    data: T;
    dataStream: any;
    dataString: string;
    hasNext(): boolean;
    nextEntry(): any;
}

export interface IRESTAPIResponse {
    getStreamWriter(): IRESTAPIResponseStream;
    setBody(body: any): void;
    setHeaders(headers: any): void;
    setLocation(location: string): void;
    setStatus(status: number): void;
    setHeader(header: string, value: string): void;
    setContentType(contentType: string): void;
    setError(error: any): void;
}

export interface IRESTAPIResponseStream {
    writeStream(stream: object): void;
    writeString(data: string): void;
}

export type QueryOperator = "="|"!="|">"|">="|"<"|"<="|"IN"|"STARTSWITH"|"ENDSWITH"|"CONTAINS"|"DOESNOTCONTAIN"|"INSTANCEOF"
export type RestHTTPMethods = "get"|"post"|"delete"|"patch"|"put"|"head"|"delete"|"options";
export type GlideRecordOperation = "insert"|"update"|"delete";
}