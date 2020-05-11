// Type definitions for ServiceNow Javascript Scoped API 10.x
// Project: https://docs.servicenow.com/bundle/jakarta-application-development/page/build/applications/concept/api-javascript.html, https://github.com/wa-ocio/servicenowrest
// Definitions by: Bryce Godfrey <https://github.com/bryceg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare const email: servicenow.GlideEmailOutbound;
declare const g_processor: servicenow.GlideScriptedProcessor;
declare const g_request: servicenow.GlideServletRequest;
declare const g_response: servicenow.GlideServletResponse;
declare const gs: servicenow.GlideSystem;
declare const GlideRecordSecure: servicenow.GlideRecord;
declare const GlideRecord: servicenow.GlideRecord;

declare namespace sn_ws {
    class RESTMessageV2 {
        constructor();
        constructor(name: string, methodName: servicenow.RestHTTPMethods);
        execute(): servicenow.RESTResponseV2;
        executeAsync(): servicenow.RESTResponseV2;
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
        constructor();
        constructor(soapMessage: string, soapFunction: string);
        execute(): servicenow.SOAPResponseV2;
        executeAsync(): servicenow.SOAPResponseV2;
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
    const GlideStringUtil: {
        base64Decode(value: string): string,
        base64DecodeAsBytes(value: string): any,
        escapeHTML(value: string): string,
        getStringFromStream(stream: object): string
    };

    const Class: {
        create(): any;
    };

    class Workflow {
        constructor();
        broadcastEvent(contextId: string, eventName: string): void;
        cancel(record: servicenow.GlideRecord): void;
        cancelContext(context: servicenow.GlideRecord): void;
        deleteWorkflow(current: servicenow.GlideRecord): void;
        fireEvent(eventRecord: servicenow.GlideRecord, eventName: string): void;
        fireEventById(eventRecordId: string, eventName: string): void;
        getContexts(record: servicenow.GlideRecord): servicenow.GlideRecord;
        getEstimatedDeliveryTime(workflowId: string): string;
        getEstimatedDeliveryTimeFromWFVersion(wfVersion: servicenow.GlideRecord): string;
        getReturnValue(workflowID: string, amount: number, result: boolean): {};
        getRunningFlows(record: servicenow.GlideRecord): servicenow.GlideRecord;
        getVersion(workflowId: string): void;
        getVersionFromName(workflowName: string): void;
        getWorkflowFromName(workflowName: string): void;
        hasWorkflow(record: servicenow.GlideRecord): boolean;
        restartWorkflow(record: servicenow.GlideRecord, maintainStateFlag: boolean): void;
        runFlows(record: servicenow.GlideRecord, operation: servicenow.GlideRecordOperation): void;
        startFlow(workflowId: string, current: servicenow.GlideRecord|null, operation: servicenow.GlideRecordOperation, vars?: object): string;
        startFlowFromContextInsert(context: servicenow.GlideRecord, operation: servicenow.GlideRecordOperation): void;
        startFlowRetroactive(
            workflowID: string, retroactiveMSecs: number, current: servicenow.GlideRecord, operation: servicenow.GlideRecordOperation, vars?: object, withSchedule?: any): servicenow.GlideRecord;
    }
}

declare class GlideTime {
    constructor(milliseconds: number);
    getByFormat(format: string): string;
    getDisplayValue(): string;
    getDisplayValueinternal(): string;
    getValue(): string;
    setDisplayValue(asDisplayed: string): void;
    setValue(o: string): void;
    subtract(start: GlideTime, end: GlideTime): GlideDuration;
}

declare class GlideDateTime {
    constructor(value?: string|GlideDateTime);

    add(gd: GlideTime|number): void;
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
    getDate(): GlideTime;
    getDayOfMonthLocalTime(): number;
    getDayOfMonthUTC(): number;
    getDayOfWeekLocalTime(): number;
    getDayOfWeekUTC(): number;
    getDaysInMonthUTC(): number;
    getDisplayValue(): string;
    getDisplayValueInternal(): string;
    getDSTOffset(): number;
    getErrorMsg(): string;
    getLocalDate(): GlideTime;
    getLocalTime(): GlideTime;
    getMonthLocalTime(): number;
    getMonthUTC(): number;
    getNumericValue(): number;
    getTime(): GlideTime;
    getTZOffset(): number;
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
    setDisplayValue(value: string, format?: string): void;
    setDisplayValueInternal(value: string): void;
    setGlideDateTime(g: GlideDateTime): void;
    setMonthLocalTime(month: number): void;
    setMonthUTC(month: number): void;
    setNumericValue(milliseconds: number): void;
    setValue(o: string|number|GlideDateTime): void;
    setValueUTC(dt: string, format: string): void;
    setYearLocalTime(year: number): void;
    setYearUTC(year: number): void;
    subtract(start: GlideDateTime, end?: GlideDateTime): GlideDuration;
    subtract(time: GlideTime|number): void;
    toString(): string;
}

declare const RP: {
    getParameters(): string[];
    getParameterValue(value: string): string;
    getReferringURL(): string;
    getViewID(): string;
    isDialog(): boolean;
    isHomePage(): boolean;
    isMobile(): boolean;
    isPrint(): boolean;
};

declare class XMLDocument2 {
    constructor();
    createElement(name: string): servicenow.XMLNode;
    createElementWithTextValue(name: string, value: string): servicenow.XMLNode;
    getDocumentElement(): servicenow.XMLNode;
    getFirstNode(xpath: string): servicenow.XMLNode;
    getNextNode(prev: object): servicenow.XMLNode;
    getNode(xpath: string): servicenow.XMLNode;
    getNodeText(xpath: string): string;
    parseXML(xmlDoc: string): void;
    setCurrentElement(element: servicenow.XMLNode): void;
    toString(): string;
}

declare class GlideDuration {
    constructor(value?: GlideDuration|number|string);
    add(value: GlideDuration): GlideDuration;
    getByFormat(format: string): string;
    getDayPart(): number;
    getDisplayValue(): string;
    getDurationValue(): string;
    getNumericValue(): number;
    getRoundedDayPart(): number;
    getValue(): string;
    setDisplayValue(asDisplayed: string): void;
    setValue(o: object): void;
    subtract(value: GlideDuration): GlideDuration;
}

declare const GlideFilter: {
    checkRecord(gr: servicenow.GlideRecord, filter: string, matchAll?: object): boolean;
};

declare const GlideGuid: {
    generate(): string;
};

declare class GlideLocale {
    static get(): GlideLocale;
    getGroupingSeparator(): string;
    getDecimalSeparator(): string;
}

declare const GlidePluginManager: {
    isActive(pluginId: string): boolean;
};

declare class GlideSchedule {
    constructor();
    constructor(sysId: string, timeZone: string);
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
    constructor();
    evaluateScript(grObj: servicenow.GlideRecord, scriptField?: string, variables?: object): object;
    getVariable(name: string): {};
    putVariable(name: string, value: {}): void;
}

declare const GlideSecureRandomUtil: {
    getSecureRandomInt(): number,
    getSecureRandomIntBound(bound: number): number,
    getSecureRandomLong(): number,
    getSecureRandomString(length: number): string
};

declare class GlideSysAttachment {
    constructor();
    copy(sourceTable: string, sourceSysId: string, destinationTable: string, destinationSysId: string): void;
    deleteAttachment(sysId: string): void;
    getContent(record: servicenow.GlideRecord): any;
    getContentBase64(record: servicenow.GlideRecord): string;
    getContentStream(sysId: string): object;
    write(record: servicenow.GlideRecord, fileName: string, contentType: string, data: any): string;
    writeBase64(record: servicenow.GlideRecord, fileName: string, contentType: string, base64Content: string): string;
    writeContentStream(record: servicenow.GlideRecord, fileName: string, contentType: string, inputStream: object): string;
}

declare namespace servicenow {
    interface GlideRecord {
        readonly sys_created_by: string & GlideElement;
        readonly sys_created_on: GlideDateTime & GlideElement;
        readonly sys_id: string;
        readonly sys_mod_count: number & GlideElement;
        readonly sys_updated_by: string & GlideElement;
        readonly sys_updated_on: GlideDateTime & GlideElement;
        new (type: string): GlideRecord;
        addActiveQuery(): GlideQueryCondition;
        addEncodedQuery(query: string): void;
        addJoinQuery(joinTable: string, primaryField?: string, joinTableField?: string): GlideQueryCondition;
        addNotNullQuery(fieldName: string): GlideQueryCondition;
        addNullQuery(fieldName: string): GlideQueryCondition;
        addQuery(fieldName: string, operator: QueryOperator, value: object|string|number): GlideQueryCondition;
        addQuery(fieldName: string, value?: object|string|number): GlideQueryCondition;
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
        getED(): GlideElementDescriptor;
        getElement(columnName: string): GlideElement;
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
        operation(): GlideRecordOperation;
        orderBy(name: string): void;
        orderByDesc(name: string): void;
        query(field?: string, value?: object): void;
        _query(field?: string, value?: object): void;
        setAbortAction(b: boolean): void;
        setNewGuidValue(guid: string): void;
        setLimit(limit: number): void;
        setValue(name: string, value: object): void;
        setWorkflow(enable: boolean): void;
        update(reason?: string): string;
        updateMultiple(): void;
    }

    interface GlideEmailOutbound {
        getSubject(): string;
        setSubject(subject: string): void;
        setFrom(address: string): void;
        setReplyTo(address: string): void;
        addAddress(type: string, address: string, displayName: string): void;
        setBody(bodyText: string): void;
    }

    interface GlideQueryCondition {
        addCondition(name: string, value: object|string|number): GlideQueryCondition;
        addCondition(name: string, oper: QueryOperator, value: object|string|number): GlideQueryCondition;
        addOrCondition(name: string, oper: QueryOperator, value: object|string|number): GlideQueryCondition;
        addOrCondition(name: string, value: object|string|number): GlideQueryCondition;
    }

    interface GlideElement {
        canCreate(): boolean;
        canRead(): boolean;
        canWrite(): boolean;
        changes(): boolean;
        changesFrom(value: object): boolean;
        changesTo(value: object): boolean;
        getAttribute(attributeName: string): string;
        getChoices(name?: string): any[];
        getDecryptedValue(): string;
        getDisplayValue(maxCharacters?: number): string;
        getED(): GlideElementDescriptor;
        getReferenceTable(): string;
        getRefRecord(): GlideRecord;
        nil(): boolean;
        setDisplayValue(value: object): void;
        setError(value: string): void;
        setValue(value: object|string): void;
        toString(): string;
    }

    interface GlideElementDescriptor {
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

    interface GlideScriptedProcessor {
        redirect(url: string): void;
        writeOutput(contentType: string, s?: string): void;
        writeJSON(o: object): void;
    }

    interface GlideServletRequest {
        getContentType(): string;
        getHeader(name: string): string;
        getParameter(name: string): string;
        writeOutput(mimeType: string, output: string): void;
        toString(): string;
    }

    interface GlideServletResponse {
        setContentType(type: string): void;
        setHeader(name: string, value: string): void;
        setStatus(value: number): void;
    }

    interface GlideSession {
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

    interface GlideSystem {
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
        eventQueue(eventName: string, gr: GlideRecord, optionalParam1: string, optionalParam2: string, eventQueue?: string): void;
        eventQueueScheduled(name: string, instance: GlideRecord, parm1: string, parm2: string, expiration: object): void;
        executeNow(job: GlideRecord): string;
        generateGUID(): string;
        getCallerScopeName(): string;
        getCssCacheVersionString(): string;
        getCurrentApplicationId(): string;
        getCurrentScopeName(): string;
        getErrorMessages(id: string, args?: string[]): string;
        getMessage(id: string, object?: any): string;
        getProperty(key: string, altobject?: {}): {};
        getSession(): string | GlideSession;
        getSessionID(): string;
        getSessionToken(): string;
        getTimeZoneName(): string;
        getUrlOnStack(): string;
        getUser(): GlideUser;
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

    interface GlideUser {
        getCompanyID(): string;
        getDisplayName(): string;
        getID(): string;
        getName(): string;
        getPreference(name: string): string;
        hasRole(role: string): boolean;
        isMemberOf(group: string): boolean;
        savePreference(name: string, value: string): void;
    }

    interface XMLNode {
        getLastChild(): XMLNode;
        getFirstChild(): XMLNode;
        getNodeValue(): string;
        getNodeName(): string;
        hasAttribute(name: string): boolean;
        getAttribute(attribute: string): string;
        getChildNodeIterator(): XMLNodeIterator;
        getTextContent(): string;
        toString(): string;
    }

    interface XMLNodeIterator {
        hasNext(): boolean;
        next(): XMLNode;
    }

    interface SOAPResponseV2 {
        waitForResponse(timeoutSecs: number): void;
        getStatusCode(): number;
        getHeader(name: string): string;
        getHeaders(): object;
        getBody(): string;
        haveError(): boolean;
        getErrorCode(): number;
        getErrorMessage(): string;
    }

    interface RESTResponseV2 {
        getBody(): string;
        getCookies(): { size: () => number, get: (index: number) => string };
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

    interface RESTAPIRequest<T> {
        readonly body: RESTAPIRequestBody<T>;
        readonly pathParams: { [paramName: string]: string };
        readonly queryParams: { [paramName: string]: string[] };
        readonly queryString: string;
        readonly url: string;
        readonly headers: { [paramName: string]: string };
        getHeader(header: string): string;
        getSupportedResponseContentTypes(): string[];
    }

    interface RESTAPIRequestBody<T> {
        readonly data: T;
        readonly dataStream: object;
        readonly dataString: string;
        hasNext(): boolean;
        nextEntry(): any;
    }

    interface RESTAPIResponse {
        getStreamWriter(): RESTAPIResponseStream;
        setBody(body: any): void;
        setHeaders(headers: any): void;
        setLocation(location: string): void;
        setStatus(status: number): void;
        setHeader(header: string, value: string): void;
        setContentType(contentType: string): void;
        setError(error: any): void;
    }

    interface RESTAPIResponseStream {
        writeStream(stream: object): void;
        writeString(data: string): void;
    }

    type QueryOperator = "="|"!="|">"|">="|"<"|"<="|"IN"|"STARTSWITH"|"ENDSWITH"|"CONTAINS"|"DOESNOTCONTAIN"|"INSTANCEOF";
    type RestHTTPMethods = "get"|"post"|"delete"|"patch"|"put"|"head"|"delete"|"options";
    type GlideRecordOperation = "insert"|"update"|"delete";
}
