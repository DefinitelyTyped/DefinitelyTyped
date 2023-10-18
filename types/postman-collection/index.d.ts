/// <reference types="node" />

export interface PropertyBaseDefinition {
    description?: string | DescriptionDefinition | undefined;
}

export class PropertyBase<TDefinition extends {}> implements PropertyBaseDefinition {
    description?: string | DescriptionDefinition | undefined;

    constructor(definition?: PropertyBaseDefinition | { info: PropertyBaseDefinition } | string);

    findInParents(
        property: string,
        customizer?: (item: PropertyBase<PropertyBaseDefinition>) => boolean,
    ): PropertyBase<PropertyBaseDefinition>;

    findParentContaining(
        property: any,
        customizer: (item: PropertyBase<PropertyBaseDefinition>) => boolean,
    ): PropertyBase<PropertyBaseDefinition>;

    forEachParent(iterator: (item: any) => void): void;
    forEachParent(options: { withRoot: boolean }, iterator: (item: any) => void): void;

    meta(): any;

    parent(): PropertyBase<PropertyBaseDefinition> | undefined;

    setParent(parent: PropertyBase<PropertyBaseDefinition>): void;

    toJSON(): TDefinition;

    static propertyIsMeta(_value: any, key: string): boolean;

    static propertyUnprefixMeta(_value: any, key: string): string;

    static toJSON(obj: any): any;
}

export interface PropertyDefinition extends PropertyBaseDefinition {
    id?: string | undefined;
    name?: string | undefined;
    disabled?: boolean | undefined;
}

export class Property<TDefinition extends {}> extends PropertyBase<TDefinition> implements PropertyDefinition {
    disabled: boolean;
    id: string;
    name: string;

    constructor(definition?: TDefinition | { info: TDefinition; disabled: boolean });

    describe(content: string, type?: string): void;

    toObjectResolved(
        scope: { variables: VariableList } | null,
        overrides: any[],
        options?: { ignoreOwnVariables: boolean },
    ): TDefinition;

    static replaceSubstitutions(str: string, variables: VariableList | VariableList[]): string;

    static replaceSubstitutionsIn<T>(obj: T, variables: VariableList[], mutate: boolean): T;
}

export interface CertificateDefinition extends PropertyDefinition {
    matches?: string[] | UrlMatchPatternList | undefined;
    key?: { src?: string | undefined } | string | undefined;
    cert?: { src?: string | undefined } | string | undefined;
    passphrase?: string | undefined;
}

export class Certificate extends Property<CertificateDefinition> implements CertificateDefinition {
    cert: { src?: string | undefined };
    key: { src?: string | undefined };
    matches: UrlMatchPatternList;
    passphrase: string;

    constructor(options: CertificateDefinition);

    canApplyTo(url: string | Url): boolean;

    update(options: CertificateDefinition): void;

    static isCertificate(obj: any): boolean;
}

export class PropertyList<TElement> extends PropertyBase<PropertyBaseDefinition> {
    constructor(type: string, parent: any, populate: TElement[]);

    add(item: TElement): void;

    all(): TElement[];

    append(item: TElement): void;

    assimilate(source: PropertyList<TElement> | TElement[], prune: boolean): void;

    clear(): void;

    count(): number;

    each(iterator: (item: TElement) => void, context?: any): void;

    eachParent(iterator: (item: any) => void, context?: any): void;

    filter(rule: (item: TElement) => boolean, context: any): TElement[];

    find(rule: (item: TElement) => boolean, context: any): TElement;

    get(key: string): any;

    has(item: string | TElement, value?: any): boolean;

    idx(index: number): TElement;

    indexOf(item: string): number;

    insert(item: TElement, before: TElement | string): void;

    insertAfter(item: TElement, after: TElement | string): void;

    map(iterator: (item: TElement) => any, context?: any): any;

    one(id: string): TElement;

    populate(items: TElement[]): void;

    prepend(item: TElement): void;

    remove(predicate: ((item: TElement) => boolean) | string | TElement, context: any): void;

    repopulate(items: any): void;

    toJSON(): any;

    toObject(excludeDisabled?: boolean, caseSensitive?: boolean, multiValue?: boolean, sanitizeKeys?: boolean): any;

    toString(): string;

    upsert(item: TElement): boolean | null;

    static isPropertyList(obj: any): boolean;
}

export class CertificateList extends PropertyList<Certificate> {
    constructor(parent: any, list: CertificateDefinition[]);

    resolveOne(url: string): CertificateDefinition;

    static isCertificateList(obj: any): boolean;
}

export interface ItemGroupDefinition extends PropertyDefinition {
    item?: Array<ItemDefinition | ItemGroupDefinition> | undefined;
    auth?: RequestAuthDefinition | undefined;
    event?: EventDefinition[] | undefined;
}

export class ItemGroup<TItem> extends Property<ItemGroupDefinition> {
    auth?: RequestAuth | undefined;
    items: PropertyList<TItem | ItemGroup<TItem>>;
    events: EventList;

    constructor(definition?: ItemGroupDefinition);

    authorizeRequestsUsing(type: string | RequestAuthDefinition, options?: VariableList): void;

    forEachItem(callback: (el: TItem) => void): void;

    forEachItemGroup(callback: (el: ItemGroup<TItem>) => void): void;

    oneDeep(idOrName: string): TItem;

    static isItemGroup(obj: any): boolean;
}

export interface CollectionDefinition extends ItemGroupDefinition {
    info?: {
        id?: string | undefined;
        name?: string | undefined;
        version?: string | undefined;
    } | undefined;
    variable?: VariableDefinition[] | undefined;
}

export class Collection extends ItemGroup<Item> {
    events: EventList;
    variables: VariableList;
    version?: Version | undefined;

    constructor(definition?: CollectionDefinition, environments?: any[]);

    syncVariablesFrom(
        obj: { [key: string]: VariableDefinition },
        track?: boolean,
        prune?: boolean,
    ): { created: string[]; updated: string[]; deleted: string[] } | undefined;

    syncVariablesTo(obj?: { [key: string]: VariableDefinition }): { [key: string]: VariableDefinition };

    toJSON(): CollectionDefinition;

    static isCollection(obj: any): boolean;
}

export interface CookieDefinition {
    key?: string | undefined;
    value?: string | undefined;
    expires?: string | Date | number | undefined;
    maxAge?: number | undefined;
    domain: string;
    path: string;
    secure?: boolean | undefined;
    httpOnly?: boolean | undefined;
    hostOnly?: boolean | undefined;
    session?: boolean | undefined;
    extensions?: Array<{ key: string; value: string }> | undefined;
}

export class Cookie extends PropertyBase<CookieDefinition> implements Exclude<CookieDefinition, "key"> {
    name?: string | undefined;
    domain: string;
    expires: Date;
    extensions?: Array<{ key: string; value: string }> | undefined;
    hostOnly?: boolean | undefined;
    httpOnly?: boolean | undefined;
    maxAge?: number | undefined;
    path: string;
    secure?: boolean | undefined;
    session?: boolean | undefined;
    value?: string | undefined;

    constructor(options?: CookieDefinition);

    update(options: CookieDefinition): void;

    valueOf(): string;

    /** Check whether an object is an instance of PostmanCookie. */
    static isCookie(obj: any): boolean;
    /** Unparses a single Cookie. */
    static unparseSingle(cookie: CookieDefinition): string;
    /** Stringifies an Array or {@link PropertyList} of Cookies into a single string. */
    static unparse(cookies: CookieDefinition[]): string;
    /**
     * Converts the Cookie to a single Set-Cookie header string.
     */
    static stringify(cookie: CookieDefinition): string;
    /** Cookie header parser */
    static parse(str: string): CookieDefinition;
}

export class CookieList extends PropertyList<Cookie> {
    constructor(parent: any, cookies: Cookie[]);

    static isCookieList(obj: any): boolean;
}

export interface DescriptionDefinition {
    content: string;
    type?: string | undefined;
}

export class Description implements DescriptionDefinition {
    content: string;
    type: string;

    constructor(definition?: DescriptionDefinition | string);

    toJSON(): DescriptionDefinition;

    toString(): string;

    update(content: DescriptionDefinition): void;
    update(content: string, type?: string): void;

    static isDescription(obj: any): boolean;
}

export interface EventDefinition extends PropertyDefinition {
    listen?: string | undefined;
    script: string | string[] | ScriptDefinition | Script;
}

export class Event extends Property<EventDefinition> implements EventDefinition {
    listen?: string | undefined;
    script: Script;

    constructor(definition: EventDefinition);

    update(definition: EventDefinition): void;
}

export class EventList extends PropertyList<Event> {
    constructor(parent: any, populate: Event[]);

    listeners(name: string): Event[];

    listenersOwn(name: string): Event[];

    static isEventList(obj: any): boolean;
}

export interface FormParamDefinition extends PropertyDefinition {
    key?: string | undefined;
    value?: any;
}

export class FormParam extends Property<FormParamDefinition> implements FormParamDefinition {
    key: string;
    value: any;

    constructor(options: FormParamDefinition);

    toString(): string;

    valueOf(): any;

    // static parse(): void; // TODO not implemented yet
}

export interface HeaderDefinition extends PropertyDefinition {
    key?: string | undefined;
    value?: string | undefined;
    system?: boolean | undefined;
}

export class Header extends Property<HeaderDefinition> implements HeaderDefinition {
    key: string;
    value: string;

    constructor(options: string | HeaderDefinition, name?: string);

    toString(): string;

    update(options: HeaderDefinition): void;

    valueOf(): string;

    static create(value?: HeaderDefinition | string, name?: string): Header;

    static isHeader(obj: any): boolean;

    static parse(headerString: string): HeaderDefinition[];

    static parseSingle(header: string): HeaderDefinition;

    static unparse(headers: HeaderList | HeaderDefinition[], separator?: string): string;

    static unparseSingle(header: HeaderDefinition): string;
}

export class HeaderList extends PropertyList<Header> {
    constructor(parent: any, headers: Header[]);

    contentSize(): number;

    static isHeaderList(obj: any): boolean;
}

export interface ItemDefinition extends PropertyDefinition {
    request?: RequestDefinition | undefined;
    response?: ResponseDefinition[] | undefined;
    events?: EventDefinition[] | undefined;
}

export class Item extends Property<ItemDefinition> {
    events: EventList;
    request: Request;
    responses: PropertyList<Response>;

    constructor(definition?: ItemDefinition);

    authorizeRequestUsing(type: string | RequestAuthDefinition, options?: VariableList): void;

    getAuth(): RequestAuth;

    getEvents(name?: string): Event[];

    static isItem(obj: any): boolean;
}

export interface ProxyConfigDefinition extends PropertyDefinition {
    match?: string | { pattern: string } | UrlMatchPattern | undefined;
    host?: string | undefined;
    port?: number | undefined;
    tunnel?: boolean | undefined;
}

export class ProxyConfig extends Property<ProxyConfigDefinition> implements ProxyConfigDefinition {
    host: string;
    match: UrlMatchPattern;
    port: number;
    tunnel: boolean;

    constructor(options?: ProxyConfigDefinition);

    getProtocols(): string[];

    getProxyUrl(): string;

    test(urlStr?: string): boolean;

    update(options: ProxyConfigDefinition): void;

    updateProtocols(protocols: string[]): void;

    static isProxyConfig(obj: any): boolean;
}

export class ProxyConfigList extends PropertyList<ProxyConfig> {
    constructor(parent: any, populate: ProxyConfig[]);

    resolve(url: string | Url): ProxyConfig;

    static isProxyConfigList(obj: any): boolean;
}

export interface QueryParamDefinition extends PropertyDefinition {
    key: string | null;
    value: string | null;
    system?: boolean | undefined;
}

export class QueryParam extends Property<QueryParamDefinition> implements QueryParamDefinition {
    static _postman_propertyAllowsMultipleValues: boolean;
    static _postman_propertyIndexKey: string;

    key: string | null;
    value: string | null;
    system?: boolean | undefined;

    constructor(options: QueryParamDefinition | string);

    toString(): string;

    update(param: string | { key: string; value?: string | undefined }): void;

    valueOf(): string;

    static parse(query: string): QueryParamDefinition[];

    static parseSingle(param: string, idx: number, all: string[]): QueryParamDefinition;

    static unparse(
        params: QueryParamDefinition[],
        options?: { encode?: boolean | undefined; ignoreDisabled?: boolean | undefined },
    ): string;

    static unparseSingle(obj: QueryParamDefinition, encode: boolean): string;
}

export interface RequestDefinition extends PropertyDefinition {
    url: string | UrlDefinition;
    method?: string | undefined;
    header?: HeaderDefinition[] | undefined;
    body?: RequestBodyDefinition | undefined;
    auth?: RequestAuthDefinition | undefined;
    proxy?: ProxyConfigDefinition | undefined;
    certificate?: CertificateDefinition | undefined;
}

export class Request extends Property<RequestDefinition> implements RequestDefinition {
    auth?: RequestAuth | undefined;
    body?: RequestBody | undefined;
    certificate?: Certificate | undefined;
    headers: HeaderList;
    method: string;
    proxy?: ProxyConfig | undefined;
    url: Url;

    constructor(options: RequestDefinition | string);

    addHeader(header: Header | HeaderDefinition): void;

    addQueryParams(params: string | QueryParamDefinition[]): void;

    authorizeUsing(type: string | RequestAuthDefinition | null, options?: VariableList): void;

    clone(): Request;

    forEachHeader(callback: (header: Header, context: Request) => void): void;

    getHeaders(options?: { ignoreCase?: boolean | undefined; enabled?: boolean | undefined }): any;

    removeHeader(toRemove: string | Header, options?: { ignoreCase: boolean }): void;

    removeQueryParams(params: string | string[] | QueryParamDefinition[] | QueryParamDefinition): void;

    toJSON(): RequestDefinition;

    update(options: RequestDefinition): void;

    upsertHeader(header: HeaderDefinition): void;

    static isRequest(obj: any): boolean;
}

export interface RequestAuthDefinition extends PropertyDefinition {
    type?:
        | "oauth2"
        | "hawk"
        | "noauth"
        | "basic"
        | "oauth1"
        | "apikey"
        | "digest"
        | "bearer"
        | "awsv4"
        | "edgegrid"
        | "ntlm"
        | undefined;
    oauth2?: VariableDefinition[] | undefined;
    hawk?: VariableDefinition[] | undefined;
    basic?: VariableDefinition[] | undefined;
    oauth1?: VariableDefinition[] | undefined;
    apikey?: VariableDefinition[] | undefined;
    digest?: VariableDefinition[] | undefined;
    bearer?: VariableDefinition[] | undefined;
    awsv4?: VariableDefinition[] | undefined;
    edgegrid?: VariableDefinition[] | undefined;
    ntlm?: VariableDefinition[] | undefined;
}

export class RequestAuth extends Property<RequestAuthDefinition> implements RequestAuthDefinition {
    type: NonNullable<RequestAuthDefinition["type"]>;

    constructor(options: RequestAuthDefinition, parent?: Property<PropertyDefinition> | PropertyList<RequestAuth>);

    clear(type: string): void;

    current(): any;

    parameters(): VariableList;

    update(
        options: VariableList | Array<{ key: string; value: string }> | { key: string; value: string },
        type?: string,
    ): void;

    use(
        type: string,
        options: VariableList | Array<{ key: string; value: string }> | { key: string; value: string },
    ): void;

    static isValidType(type: any): boolean;
}

export interface RequestBodyDefinition extends PropertyBaseDefinition {
    mode: string;
    raw?: string | undefined;
    urlencoded?: QueryParamDefinition[] | PropertyList<QueryParam> | string | undefined;
    file?: string | { src: string } | undefined;
    formdata?: FormParamDefinition[] | PropertyList<FormParam> | undefined;
}

export class RequestBody extends PropertyBase<RequestBodyDefinition> implements RequestBodyDefinition {
    static MODES: {
        raw: string;
        formdata: string;
        urlencoded: string;
        file: string;
    };

    file?: { src: string } | undefined;
    formdata?: PropertyList<FormParam> | undefined;
    mode: string;
    raw?: string | undefined;
    urlencoded?: PropertyList<QueryParam> | undefined;

    constructor(options: RequestBodyDefinition);

    isEmpty(): boolean;

    toString(): string;

    update(options: RequestBodyDefinition): void;
}

export interface ResponseDefinition extends PropertyDefinition {
    code: number;
    header?: HeaderDefinition[] | undefined;
    cookie?: CookieDefinition[] | undefined;
    body?: string | undefined;
    stream?: Buffer | Uint8Array | undefined;
    responseTime: number;
    originalRequest?: RequestDefinition | undefined;
}

export class Response extends Property<ResponseDefinition> implements ResponseDefinition {
    body?: string | undefined;
    code: number;
    cookies: CookieList;
    headers: HeaderList;
    originalRequest?: Request | undefined;
    responseTime: number;
    status: string;
    stream?: Buffer | Uint8Array | undefined;
    responseSize?: number | undefined;

    constructor(options: ResponseDefinition);

    dataURI(): string;

    details(): { name: string; detail: string; code: number; standardName: string } | undefined;

    encoding(): { format: string; source: string };

    json(reviver?: any, strict?: boolean): any;

    reason(): string;

    size(): number;

    text(): string | undefined;

    toJSON(): any;

    update(options: ResponseDefinition): void;

    static createFromNode(
        response: {
            body: string | Buffer | Uint8Array;
            headers?: HeaderDefinition[] | undefined;
            statusCode: number;
            statusMessage?: string | undefined;
            elapsedTime: number;
        },
        cookies: CookieDefinition[],
    ): Response;

    static isResponse(obj: any): boolean;
}

export interface ScriptDefinition extends PropertyDefinition {
    type?: string | undefined;
    src?: string | Url | undefined;
    exec?: string | string[] | undefined;
}

export class Script extends Property<ScriptDefinition> implements ScriptDefinition {
    exec?: string[] | undefined;
    src?: Url | undefined;
    type: string;

    constructor(options?: ScriptDefinition | string | string[]);

    toSource(): string | undefined;

    update(options: ScriptDefinition | string | string[]): void;

    static isScript(obj: any): boolean;
}

export interface UrlDefinition extends PropertyBaseDefinition {
    auth?: { user: string; password: string } | undefined;
    hash?: string | undefined;
    host?: string[] | string | undefined;
    path?: string[] | string | undefined;
    port?: string | undefined;
    query?: QueryParamDefinition[] | PropertyList<QueryParam> | string | undefined;
    variable?: VariableDefinition[] | undefined;
    protocol?: string | undefined;
}

export class Url extends PropertyBase<UrlDefinition> implements UrlDefinition {
    auth?: { user: string; password: string } | undefined;
    hash?: string | undefined;
    host?: string[] | undefined;
    path?: string[] | undefined;
    port?: string | undefined;
    protocol?: string | undefined;
    query: PropertyList<QueryParam>;
    variables: VariableList;

    constructor(options: UrlDefinition | string);

    addQueryParams(params: QueryParamDefinition[] | string): void;

    getHost(): string;

    getOAuth1BaseUrl(): string;

    getPath(options?: { unresolved: boolean }): string;

    getPathWithQuery(): string;

    getQueryString(options?: { encode?: boolean | undefined; ignoredDisabled?: boolean | undefined }): string;

    getRaw(): string;

    getRemote(options?: { forcePort: boolean }): string;

    removeQueryParams(params: QueryParamDefinition[] | QueryParamDefinition | string[] | string): void;

    toString(forceProtocol?: boolean): string;

    update(url: UrlDefinition | string): void;

    static isUrl(obj: any): boolean;

    static parse(url: string): UrlDefinition;
}

export class UrlMatchPattern {
    pattern?: string | undefined;

    constructor(options: string | { pattern: string });

    createMatchPattern(): { protocols: string[]; host: string; path: RegExp } | undefined;

    getProtocols(): string[];

    globPatternToRegexp(pattern: string): RegExp;

    matchAbsoluteHostPattern(
        matchRegexObject: { protocols: string[]; host: string; path: RegExp },
        remote: string,
    ): boolean;

    matchAnyHost(matchRegexObject: { protocols: string[]; host: string; path: RegExp }): boolean;

    matchSuffixHostPattern(
        matchRegexObject: { protocols: string[]; host: string; path: RegExp },
        remote: string,
    ): boolean;

    test(urlStr: string): boolean;

    testHost(host: string): boolean;

    testPath(path: string): boolean;

    testProtocol(protocol: string): boolean;

    toJSON(): { pattern: string };

    toString(): string;

    update(options: { pattern: string }): void;

    static MATCH_ALL_URLS: string;

    static PROTOCOL_DELIMITER: string;
}

export class UrlMatchPatternList extends PropertyList<UrlMatchPattern> {
    constructor(parent: Property<PropertyDefinition>, list: string[]);

    test(urlStr: string): boolean;
}

export interface VariableDefinition extends PropertyDefinition {
    value?: any;
    type?: string | undefined;
    key?: string | undefined;
}

export class Variable extends Property<VariableDefinition> implements VariableDefinition {
    key?: string | undefined;
    type: string;
    value: any;

    constructor(definition?: VariableDefinition | { [index: string]: VariableDefinition });

    cast(value: any): any;

    castIn(value: any): any;

    castOut(value: any): any;

    get(): any;

    set(value: any): void;

    toString(): string;

    update(options: VariableDefinition): void;

    valueOf(value: any): any;

    valueType(typeName: string, _noCast: boolean): string;

    static isVariable(obj: any): boolean;

    static types: {
        string: StringConstructor;
        boolean: BooleanConstructor;
        number: NumberConstructor;
        json: { in: (val: any) => string; out: (val: string) => any };
        any: { in: <T>(val: T) => T; out: <T>(val: T) => T };
    };
}

export class VariableList extends PropertyList<Variable> {
    constructor(parent: Property<PropertyDefinition>, populate: Variable[]);

    replace(str: string, overrides?: VariableList): string;

    substitute<T>(obj: T, overrides?: VariableList, mutate?: boolean): T;

    syncFromObject(
        obj: { [key: string]: VariableDefinition },
        track?: boolean,
        prune?: boolean,
    ): { created: string[]; updated: string[]; deleted: string[] } | undefined;

    syncToObject(obj?: { [key: string]: VariableDefinition }): { [key: string]: VariableDefinition };

    static isVariableList(obj: any): boolean;
}

export interface VariableScopeDefinition extends PropertyDefinition {
    values?: VariableDefinition[] | undefined;
}

export class VariableScope extends Property<VariableScopeDefinition> implements VariableScopeDefinition {
    values?: VariableDefinition[] | undefined;

    constructor(
        definition: VariableScopeDefinition | VariableList | VariableDefinition[],
        layers?: VariableList[] | VariableList,
    );

    addLayer(list: VariableList): void;

    clear(): void;

    get(key: string): any;

    has(variableName: string): boolean;

    set(key: string, value: any, type: string): void;

    syncVariablesFrom(
        obj: { [key: string]: VariableDefinition },
        track?: boolean,
        prune?: boolean,
    ): { created: string[]; updated: string[]; deleted: string[] } | undefined;

    syncVariablesTo(obj?: { [key: string]: VariableDefinition }): { [key: string]: VariableDefinition };

    toJSON(): any;

    toObject(excludeDisabled: boolean, caseSensitive: boolean): any;

    unset(key: string): void;

    variables(): { [key: string]: VariableDefinition };

    static isVariableScope(obj: any): boolean;
}

export interface VersionDefinition extends PropertyBaseDefinition {
    build?: string | undefined;
    major?: string | undefined;
    minor?: string | undefined;
    patch?: string | undefined;
    prerelease?: string | undefined;
    raw?: string | undefined;
    version?: string | undefined;
}

export class Version extends PropertyBase<VersionDefinition> implements VersionDefinition {
    build?: string | undefined;
    major?: string | undefined;
    minor?: string | undefined;
    patch?: string | undefined;
    prerelease?: string | undefined;
    raw?: string | undefined;
    string?: string | undefined;

    constructor(options?: VersionDefinition | string);

    set(value?: VersionDefinition | string): void;

    toString(): string;
}
