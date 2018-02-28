// Type definitions for postman-collection 3.0
// Project: https://github.com/postmanlabs/postman-collection
// Definitions by: Kyle Buzby <https://github.com/kbuzby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export class PropertyBase {
    constructor(definition: any);

    findInParents(property: string, customizer?: any): any ; // TODO Update customizer function def

    findParentContaining(property: any, customizer: any): any; // TODO Update customizer function def

    forEachParent(iterator: (item: any) => void): void;
    forEachParent(options: any /* TODO | boolean*/, iterator: (item: any) => void): void;

    meta(): any;

    parent(): any;

    setParent(parent: any): void;

    toJSON(): any;

    static propertyIsMeta(value: any, key: any): any;

    static propertyUnprefixMeta(value: any, key: any): any;

    static toJSON(obj: any): any;
}

export interface PropertyDefinition {
    id?: string;
    name?: string;
    disabled?: boolean;
}

export class Property extends PropertyBase implements PropertyDefinition {
    auth: RequestAuth;
    disabled: boolean;
    id: string;
    name: string;

    constructor(definition?: PropertyDefinition);

    describe(content: string, type?: string): void;

    toObjectResolved(scope: any, overrides: any, options: any): any;

    static replaceSubstitutions(str: string, variables: VariableList | VariableList[]): string;

    static replaceSubstitutionsIn(obj: any, variables: VariableList[], mutate: boolean): any;
}

export interface CertificateDefinition extends PropertyDefinition {
    name?: string;
    matches?: any[];
    key?: any;
    cert?: any;
    passphrase?: string;
}

export class Certificate extends Property implements CertificateDefinition {
    cert: any;
    id: string;
    key: any;
    matches: any[];
    name: string;
    passphrase: string;

    constructor(options: any);

    canApplyTo(url: string | Url): any;

    toJSON(): CertificateDefinition;

    update(options: CertificateDefinition): void;

    static isCertificate(obj: any): boolean;
}

export class PropertyList<TElement> {
    constructor(type: any, parent: any, populate: any);

    add(item: TElement): void;

    all(): any;

    append(item: TElement): any;

    assimilate(source: PropertyList<TElement> | any[], prune: boolean): void;

    clear(): void;

    count(): number;

    each(iterator: any, context: any): void;

    eachParent(iterator: any, context?: any): void;

    filter(rule: any, context: any): any;

    find(rule: any, context?: any): Item | ItemGroup<TElement>;

    get(key: /*TODO string |*/ any): TElement;

    has(item: string | TElement, value?: any): boolean;

    idx(index: number): TElement;

    indexOf(item: /*TODO string |*/ any): number;

    insert(item: TElement, before: TElement | string): void;

    insertAfter(item: TElement, after: TElement | string): any;

    map(iterator: any, context: any): any;

    one(id: string): TElement;

    populate(items: any): void;

    prepend(item: TElement): any;

    remove(predicate: any /*TODO | string | TElement*/, context: any): any;

    repopulate(items: any): void;

    toJSON(): any;

    toObject(excludeDisabled?: any, caseSensitive?: any, multiValue?: any, sanitizeKeys?: any): any;

    toString(): string;

    upsert(item: TElement): boolean | null;

    static isPropertyList(obj: any): any;
}

export class CertificateList extends PropertyList<Certificate> {
    constructor(parent: any, list: CertificateDefinition[]);

    resolveOne(url: string): CertificateDefinition;

    static isCertificateList(obj: any): boolean;
}

export interface ItemGroupDefinition extends PropertyDefinition {
    item?: Array<ItemDefinition | ItemGroupDefinition>;
    auth?: RequestAuthDefinition;
    event?: EventDefinition[];
}

export class ItemGroup<TItem> extends Property {
    auth: RequestAuth;
    items: PropertyList<TItem>;

    constructor(definition?: ItemGroupDefinition);

    authorizeRequestsUsing(type: any, options: any): void; // TODO add better types for parameters

    forEachItem(callback: any): any;

    forEachItemGroup(callback: any): void;

    oneDeep(idOrName: string): TItem;

    static isItemGroup(obj: any): boolean;
}

export interface CollectionDefinition extends ItemGroupDefinition {
    info?: {
        id?: string;
        name?: string;
        version?: string;
    };
    item?: Array<ItemDefinition | ItemGroupDefinition>;
    variable?: VariableDefinition;
    auth?: RequestAuthDefinition;
    event?: EventDefinition[];
    version?: string | Version;
}

export class Collection extends ItemGroup<Request> implements CollectionDefinition {
    events: EventList;
    variables: VariableList;
    version: Version;

    constructor(definition?: CollectionDefinition, environments?: any[]);

    syncVariablesFrom(obj: any, track?: boolean): any;

    syncVariablesTo(obj?: any): any;

    toJSON(): any;

    static isCollection(obj: any): boolean;
}

export interface CookieDefinition {
    key?: string;
    value?: string;
    expires?: string | Date;
    maxAge?: number;
    domain?: string;
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
    hostOnly?: boolean;
    session?: boolean;
    extensions?: Array<{key: string; value: string}>;
}

export class Cookie extends PropertyBase implements CookieDefinition {
    domain: string;
    expires: Date | string;
    extensions: Array<{key: string; value: string}>;
    hostOnly: any;
    httpOnly: any;
    maxAge: number;
    name: string;
    path: string;
    secure: any;
    session: any;
    value: string;

    constructor(options?: CookieDefinition);

    update(options: any): void;

    valueOf(): string;

    static isCookie(obj: any): boolean;

    static parse(str: string): any;

    static splitParam(param: any): any;
}

export class CookieList extends PropertyList<Cookie> {
    constructor(parent: any, cookies: any[]);

    static isCookieList(obj: any): boolean;
}

export interface DescriptionDefinition {
    content: string;
    format: string;
}

export class Description implements DescriptionDefinition {
    format: string; // TODO huh?
    content: string;
    type: string;

    constructor(definition?: DescriptionDefinition);

    toJSON(): any;

    toString(): string;

    update(content: string | DescriptionDefinition, type?: string): void;

    static isDescription(obj: any): boolean;
}

export interface EventDefinition extends PropertyDefinition {
    listen: string;
    script: string | Script;
}

export class Event extends Property implements EventDefinition {
    listen: string;
    script: string;

    constructor(definition: EventDefinition);

    update(definition: EventDefinition): void;
}

export class EventList extends PropertyList<Event> {
    constructor(parent: any, populate: any[]);

    listeners(name: string): Event[];

    listenersOwn(name: string): Event[];

    static isEventList(obj: any): boolean;
}

export interface FormParamDefinition extends PropertyDefinition {
    key: string;
    value: string;
}

export class FormParam extends Property implements FormParamDefinition {
    key: string;
    value: string;

    static _postman_propertyAllowsMultipleValues: boolean;
    static _postman_propertyIndex: string;

    constructor(options: FormParamDefinition);

    toString(): string;

    valueOf(): any;

    // static parse(): void; // TODO not implemented yet
}

export interface HeaderDefinition extends PropertyDefinition {
    key: string;
    value: string;
}

export class Header extends Property implements HeaderDefinition {
    key: string;
    value: string;

    constructor(options: HeaderDefinition | string, name?: string);

    toString(): string;

    update(options: any): void;

    valueOf(): string;

    static create(value?: HeaderDefinition | string, name?: string): Header;

    static isHeader(obj: any): boolean;

    static parse(headerString: string): HeaderDefinition[];

    static parseSingle(header: string): HeaderDefinition;

    static unparse(headers: HeaderList | any[], separator?: string): string;

    static unparseSingle(header: Header): string;
}

export class HeaderList extends PropertyList<Header> {
    constructor(parent: any, headers: Header[]);

    contentSize(): number;

    static isHeaderList(obj: any): boolean;
}

export interface ItemDefinition extends PropertyDefinition {
    request?: RequestDefinition;
    responses?: ResponseDefinition[];
    events?: EventDefinition[];
}

export class Item extends Property implements ItemDefinition {
    events: EventDefinition[];
    request: Request;
    responses: ResponseDefinition[];

    constructor(definition?: ItemDefinition);

    authorizeRequestUsing(type: string | RequestAuthDefinition, options?: VariableList): any;

    getAuth(): RequestAuth;

    getEvents(name: string): Event[];

    static isItem(obj: any): boolean;
}

export interface ProxyConfigDefinition extends PropertyDefinition {
    match?: string;
    host?: string;
    port?: number;
    tunnel?: boolean;
    disabled?: boolean;
}

export class ProxyConfig extends Property implements ProxyConfigDefinition {
    static host: string;
    static match: string;
    static port: number;
    static tunnel: boolean;

    constructor(options?: ProxyConfigDefinition);

    getProtocols(): string[];

    getProxyUrl(): string;

    test(urlStr?: string): any;

    update(options: ProxyConfigDefinition): void;

    updateProtocols(protocols: string[]): void;

    static isProxyConfig(obj: any): boolean;
}

export class ProxyConfigList extends PropertyList<ProxyConfig> {
    constructor(parent: any, populate: ProxyConfig[]);

    resolve(url?: Url): ProxyConfigDefinition;

    static isProxyConfigList(obj: any): boolean;
}

export interface QueryParamDefinition extends PropertyDefinition {
    key: string;
    value: string;
}

export class QueryParam extends Property implements QueryParamDefinition {
    static _postman_propertyAllowsMultipleValues: boolean;
    static _postman_propertyIndexKey: string;

    key: string;
    value: string;

    constructor(options: QueryParamDefinition | string);

    toString(): string;

    update(param: string | {key: string, value?: string}): void;

    valueOf(): any;

    static parse(query: string): any[];

    static parseSingle(param: string, idx: number, all: string[]): any;

    static unparse(params: any, options?: {encode?: boolean | null, ignoreDisabled?: boolean | null}): string;

    static unparseSingle(obj: any, encode: boolean): string;
}

export interface RequestDefinition extends PropertyDefinition {
    url: string | Url;
    method: string;
    header?: HeaderDefinition;
    body?: RequestBody;
    auth: RequestAuthDefinition;
    proxy: ProxyConfigDefinition;
    certificate?: CertificateDefinition;
}

export class Request extends Property implements RequestDefinition {
    auth: RequestAuth;
    body?: RequestBody;
    certificate?: Certificate;
    headers: HeaderList;
    method: string;
    proxy: ProxyConfig;
    url: Url;

    constructor(options: RequestDefinition);

    addHeader(header: Header | HeaderDefinition): void;

    addQueryParams(params: string | QueryParam[]): void;

    authorize(): Request;

    authorizeUsing(type: string | RequestAuthDefinition, options?: VariableList): void;

    clone(): Request;

    forEachHeader(callback: any): void;

    getHeaders(options?: {ignoreCase?: boolean, enabled?: boolean}): any;

    removeHeader(toRemove: string | Header, options: {ignoreCase: boolean}): any;

    removeQueryParams(params: string | string[]): void;

    toJSON(): any;

    update(options: RequestDefinition): void;

    upsertHeader(header: any): void;

    static isRequest(obj: any): boolean;
}

export interface RequestAuthDefinition extends PropertyDefinition {
    type?: string;
}

export class RequestAuth extends Property implements RequestAuthDefinition {
    type: string;

    constructor(options: RequestAuthDefinition, parent?: Property | PropertyList<RequestAuth>);

    clear(type: string): void;

    current(): any;

    parameters(): VariableList;

    update(options: /*TODO VariableList | any[] |*/ any, type?: string): void;

    use(type: string, options: VariableList): void;

    static isValidType(type: any): boolean;
}

export class RequestBody extends PropertyBase {
    static MODES: {
        raw: string;
        formadata: string;
        urlencoded: string;
        file: string;
    };

    file: string;
    formdata: PropertyList<FormParam>;
    mode: string;
    raw: string;
    urlencoded: PropertyList<QueryParam>;

    constructor(options: any);

    isEmpty(): boolean;

    toString(): string;

    update(options: any): void;
}

export interface ResponseDefinition extends PropertyDefinition {
    code: number;
    reason?: string;
    header?: HeaderDefinition[];
    cookie?: CookieDefinition[];
    body?: string;
    stream?: Buffer | Uint8Array;
    responseTime: number;
}

export class Response extends Property implements ResponseDefinition {
    body: string;
    code: number;
    cookies: CookieList;
    headers: HeaderList;
    originalRequest: Request;
    responseTime: number;
    status: string;
    reason?: string;

    constructor(options: ResponseDefinition);

    dataURI(): string;

    details(): any;

    encoding(): any;

    json(reviver?: any, strict?: boolean): any;

    mime(contentType: any, contentDisposition: any): any; // TODO ??

    size(): number;

    text(): string | undefined;

    toJSON(): any;

    update(options: any): void;

    static createFromNode(response: any, cookies: any): any;

    static isResponse(obj: any): boolean;

    static mimeInfo(type: any, disposition: any): any; // TODO ??
}

export class Script extends Property {
    exec: string[];
    src: Url;
    type: string;

    constructor(options: any);

    toSource(): string;

    update(options?: {type?: string, src?: string, exec?: string | string[]}): void;

    static isScript(obj: any): boolean;
}

export class Url extends PropertyBase {
    auth: string;
    hash: string;
    host: string[];
    path: string[];
    port: string;
    protocol: string;
    query: PropertyList<QueryParam>;
    variables: VariableList;

    constructor(options: any /*TODO| string*/);

    addQueryParams(params: any /*TODO | string*/): void;

    getHost(): string;

    getOAuth1BaseUrl(): any;

    getPath(options?: {unresolved: boolean}): string;

    getPathWithQuery(): any /*TODO | string*/;

    getQueryString(options?: {encode: boolean | null, ignoredDisabled: boolean | null} | null): string;

    getRaw(): string;

    getRemote(options: {forcePort: boolean}): string;

    removeQueryParams(params: QueryParam[] | string[] | string): void;

    toString(forceProtocol?: boolean): string;

    update(url: /*TODO string |*/ any): void;

    static isUrl(obj: any): boolean;

    static parse(url: string): any;
}

/* No documentation for this right now?
export class UrlMatchPattern {
    constructor(options: any, ...args: any[]);

    createMatchPattern(): any;

    getProtocols(): any;

    globPatternToRegexp(pattern: any): any;

    matchAbsoluteHostPattern(matchRegexObject: any, remote: any): any;

    matchAnyHost(matchRegexObject: any): any;

    matchSuffixHostPattern(matchRegexObject: any, remote: any): any;

    test(urlStr: any): any;

    testHost(host: any): any;

    testPath(path: any): any;

    testProtocol(protocol: any): any;

    toJSON(): any;

    toString(): any;

    update(options: any): void;

    static MATCH_ALL_URLS: string;

    static PROTOCOL_DELIMITER: string;

}

export class UrlMatchPatternList extends PropertyList<UrlMatchPattern> {
    constructor(parent: any, list: any);

    test(urlStr: any): any;

}*/

export interface VariableDefinition extends PropertyDefinition {
    value?: any;
    type?: VariableTypes;
}

export enum VariableTypes {
    string = 'string',
    boolean = 'boolean',
    number = 'number',
    json = 'json',
    any = 'any'
}

export class Variable extends Property implements VariableDefinition {
    key: string;
    type: VariableTypes;
    value: any;

    constructor(definition?: VariableDefinition);

    cast(value: any): any;

    castIn(value: any): any;

    castOut(value: any): any;

    get(): any;

    set(value: any): void;

    toString(): string;

    update(options: VariableDefinition): void;

    valueOf(value?: any): any;

    valueType(typeName: string, _noCast: boolean): string;

    static isVariable(obj: any): boolean;
}

export class VariableList extends PropertyList<Variable> {
    constructor(parent: Property, populate: any);

    replace(str: string, overrides?: any): string;

    substitute(obj: any, overrides?: any[] | null, mutate?: boolean): any;

    syncFromObject(obj: any, track?: boolean, prune?: boolean): any;

    syncToObject(obj?: any): any;

    static isVariableList(obj: any): boolean;
}

export interface VariableScopeDefinition extends PropertyDefinition {
    id?: string;
    name?: string;
    values?: VariableDefinition[];
}

export class VariableScope extends Property implements VariableScopeDefinition {
    values?: VariableDefinition[];

    constructor(definition: VariableScopeDefinition, layers?: VariableList[]);

    addLayer(list: any): void;

    clear(): void;

    get(key: string): any;

    has(variableName: string): boolean;

    set(key: string, value: any, type: VariableTypes): void;

    syncVariablesFrom(obj: any, track: any): any;

    syncVariablesTo(obj: any): any;

    toJSON(): any;

    toObject(excludeDisabled: boolean, caseSensitive: boolean): any;

    unset(key: string): void;

    variables(): any;

    static isVariableScope(obj: any): boolean;
}

export class Version extends PropertyBase {
    build: string;
    major: string;
    minor: string;
    patch: string;
    prerelease: string;
    raw: string;
    string: string;

    constructor(options: any /*TODO | string*/);

    set(value: any /*TODO | string*/): void;

    toString(): string;
}
