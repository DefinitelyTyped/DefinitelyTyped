// Type definitions for postman-collection 3.0
// Project: https://github.com/postmanlabs/postman-collection#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Certificate {
    constructor(options: any, ...args: any[]);

    canApplyTo(url: any): any;

    toJSON(): any;

    update(options: any): void;

    static isCertificate(obj: any): any;

}

export class CertificateList {
    constructor(parent: any, list: any);

    resolveOne(url: any): any;

    static isCertificateList(obj: any): any;

}

export class Collection {
    constructor(definition: any, environments: any);

    syncVariablesFrom(obj: any, track: any): any;

    syncVariablesTo(obj: any): any;

    toJSON(): any;

    static isCollection(obj: any): any;

}

export class Cookie {
    constructor(options: any);

    update(options: any): void;

    valueOf(): any;

    static isCookie(obj: any): any;

    static parse(str: any): any;

    static splitParam(param: any): any;

}

export class Description {
    constructor(definition: any);

    toJSON(): any;

    toString(): any;

    update(content: any, type: any): void;

    static isDescription(obj: any): any;

}

export class Event {
    constructor(definition: any);

    update(definition: any): void;

}

export class EventList {
    constructor(parent: any, populate: any);

    listeners(name: any): any;

    listenersOwn(name: any): any;

    static isEventList(obj: any): any;

}

export class FormParam {
    constructor(options: any, ...args: any[]);

    toString(): any;

    valueOf(): any;

    static parse(): void;

}

export class Header {
    constructor(options: any, name: any, ...args: any[]);

    toString(): any;

    update(options: any): void;

    valueOf(): any;

    static create(...args: any[]): any;

    static isHeader(obj: any): any;

    static parse(headerString: any): any;

    static parseSingle(header: any): any;

    static unparse(headers: any, separator: any): any;

    static unparseSingle(header: any): any;

}

export class HeaderList {
    constructor(parent: any, headers: any);

    contentSize(): any;

    static isHeaderList(obj: any): any;

}

export class Item {
    constructor(definition: any, ...args: any[]);

    authorizeRequestUsing(type: any, options: any): any;

    getAuth(): any;

    getEvents(name: any): any;

    static isItem(obj: any): any;

}

export class ItemGroup {
    constructor(definition: any, ...args: any[]);

    authorizeRequestsUsing(type: any, options: any): void;

    forEachItem(callback: any): any;

    forEachItemGroup(callback: any): void;

    oneDeep(idOrName: any): any;

    static isItemGroup(obj: any): any;

}

export class Property {
    constructor(definition: any, ...args: any[]);

    describe(content: any, type: any): void;

    toObjectResolved(scope: any, overrides: any, options: any): any;

    static replaceSubstitutions(str: any, variables: any, ...args: any[]): any;

    static replaceSubstitutionsIn(obj: any, variables: any, mutate: any): any;

}

export class PropertyBase {
    constructor(definition: any);

    findInParents(property: any, customizer: any): any;

    findParentContaining(property: any, customizer: any): any;

    forEachParent(options: any, iterator: any): void;

    meta(...args: any[]): any;

    parent(): any;

    setParent(parent: any): void;

    toJSON(): any;

    static propertyIsMeta(value: any, key: any): any;

    static propertyUnprefixMeta(value: any, key: any): any;

    static toJSON(obj: any): any;

}

export class PropertyList {
    constructor(type: any, parent: any, populate: any);

    add(item: any, ...args: any[]): void;

    all(): any;

    append(item: any): any;

    assimilate(source: any, prune: any): void;

    clear(): void;

    count(): any;

    each(iterator: any, context: any): void;

    eachParent(iterator: any, context: any): void;

    filter(rule: any, context: any): any;

    find(rule: any, context: any): any;

    get(key: any): any;

    has(item: any, value: any, ...args: any[]): any;

    idx(index: any): any;

    indexOf(item: any): any;

    insert(item: any, before: any): void;

    insertAfter(item: any, after: any): any;

    map(iterator: any, context: any): any;

    one(id: any): any;

    populate(items: any): void;

    prepend(item: any): any;

    remove(predicate: any, context: any, ...args: any[]): any;

    repopulate(items: any): void;

    toJSON(): any;

    toObject(excludeDisabled: any, caseSensitive: any, multiValue: any, sanitizeKeys: any): any;

    toString(): any;

    upsert(item: any): any;

    static isPropertyList(obj: any): any;

}

export class ProxyConfig {
    constructor(options: any);

    getProtocols(): any;

    getProxyUrl(): any;

    test(urlStr: any): any;

    update(options: any): void;

    updateProtocols(protocols: any): void;

    static isProxyConfig(obj: any): any;

}

export class ProxyConfigList {
    constructor(parent: any, populate: any);

    resolve(url: any): any;

    static isProxyConfigList(obj: any): any;

}

export class QueryParam {
    constructor(options: any, ...args: any[]);

    toString(): any;

    update(param: any): void;

    valueOf(): any;

    static parse(query: any): any;

    static parseSingle(param: any, idx: any, all: any): any;

    static unparse(params: any, options: any): any;

    static unparseSingle(obj: any, encode: any): any;

}

export class Request {
    constructor(options: any, ...args: any[]);

    addHeader(header: any): void;

    addQueryParams(params: any): void;

    authorize(): void;

    authorizeUsing(type: any, options: any): void;

    clone(): any;

    forEachHeader(callback: any): any;

    getHeaders(options: any): any;

    removeHeader(toRemove: any, options: any): any;

    removeQueryParams(params: any): void;

    toJSON(): any;

    update(options: any): void;

    upsertHeader(header: any): any;

    static isRequest(obj: any): any;

}

export class RequestAuth {
    constructor(options: any, parent: any);

    clear(type: any): void;

    current(): any;

    parameters(): any;

    update(options: any, type: any): void;

    use(type: any, options: any): void;

    static isValidType(type: any): any;

}

export class RequestBody {
    constructor(options: any, ...args: any[]);

    isEmpty(): any;

    toString(): any;

    update(options: any): void;

    static MODES: {
        file: string;
        formdata: string;
        raw: string;
        urlencoded: string;
    };

}

export class Response {
    constructor(options: any, ...args: any[]);

    dataURI(): any;

    details(): any;

    encoding(): any;

    json(reviver: any, strict: any): any;

    mime(contentType: any, contentDisposition: any): any;

    reason(): any;

    size(): any;

    text(): any;

    toJSON(): any;

    update(options: any): void;

    static createFromNode(response: any, cookies: any): any;

    static isResponse(obj: any): any;

    static mimeInfo(type: any, disposition: any): any;

}

export class Script {
    constructor(options: any, ...args: any[]);

    toSource(): any;

    update(options: any): void;

    static isScript(obj: any): any;

}

export class Url {
    constructor(options: any, ...args: any[]);

    addQueryParams(params: any): void;

    getHost(): any;

    getOAuth1BaseUrl(): any;

    getPath(options: any): any;

    getPathWithQuery(): any;

    getQueryString(options: any): any;

    getRaw(): any;

    getRemote(options: any): any;

    removeQueryParams(params: any): any;

    toString(forceProtocol: any): any;

    update(url: any): any;

    static isUrl(obj: any): any;

    static parse(url: any): any;

}

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

export class UrlMatchPatternList {
    constructor(parent: any, list: any);

    test(urlStr: any): any;

}

export class Variable {
    constructor(definition: any, ...args: any[]);

    cast(value: any): any;

    castIn(value: any): any;

    castOut(value: any): any;

    get(): any;

    set(value: any): void;

    toString(): any;

    update(options: any): void;

    valueOf(value: any, ...args: any[]): any;

    valueType(typeName: any, _noCast: any): any;

    static isVariable(obj: any): any;

}

export class VariableList {
    constructor(parent: any, populate: any);

    replace(str: any, overrides: any): any;

    substitute(obj: any, overrides: any, mutate: any): any;

    syncFromObject(obj: any, track: any, prune: any): any;

    syncToObject(obj: any): any;

    static isVariableList(obj: any): any;

}

export class VariableScope {
    constructor(definition: any, layers: any);

    addLayer(list: any): void;

    clear(): void;

    get(key: any): any;

    has(variableName: any): any;

    set(key: any, value: any, type: any): any;

    syncVariablesFrom(obj: any, track: any): any;

    syncVariablesTo(obj: any): any;

    toJSON(): any;

    toObject(excludeDisabled: any, caseSensitive: any): any;

    unset(key: any): void;

    variables(): any;

    static isVariableScope(obj: any): any;

}

export class Version {
    constructor(options: any);

    set(value: any): void;

    toString(): any;

}

export function CookieList(parent: any, cookies: any): void;

export namespace Certificate {
    namespace isCertificate {
        const prototype: {
        };

    }

    namespace prototype {
        function canApplyTo(url: any): any;

        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function update(options: any): void;

        namespace canApplyTo {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

    }

}

export namespace CertificateList {
    namespace isCertificateList {
        const prototype: {
        };

    }

    namespace prototype {
        function add(item: any, ...args: any[]): void;

        function all(): any;

        function append(item: any): any;

        function assimilate(source: any, prune: any): void;

        function clear(): void;

        function count(): any;

        function each(iterator: any, context: any): void;

        function eachParent(iterator: any, context: any): void;

        function filter(rule: any, context: any): any;

        function find(rule: any, context: any): any;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(key: any): any;

        function has(item: any, value: any, ...args: any[]): any;

        function idx(index: any): any;

        function indexOf(item: any): any;

        function insert(item: any, before: any): void;

        function insertAfter(item: any, after: any): any;

        function map(iterator: any, context: any): any;

        function meta(...args: any[]): any;

        function one(id: any): any;

        function parent(): any;

        function populate(items: any): void;

        function prepend(item: any): any;

        function remove(predicate: any, context: any, ...args: any[]): any;

        function repopulate(items: any): void;

        function resolveOne(url: any): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObject(excludeDisabled: any, caseSensitive: any, multiValue: any, sanitizeKeys: any): any;

        function toString(): any;

        function upsert(item: any): any;

        namespace add {
            const prototype: {
            };

        }

        namespace all {
            const prototype: {
            };

        }

        namespace append {
            const prototype: {
            };

        }

        namespace assimilate {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace each {
            const prototype: {
            };

        }

        namespace eachParent {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace idx {
            const prototype: {
            };

        }

        namespace indexOf {
            const prototype: {
            };

        }

        namespace insert {
            const prototype: {
            };

        }

        namespace insertAfter {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace one {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace populate {
            const prototype: {
            };

        }

        namespace prepend {
            const prototype: {
            };

        }

        namespace remove {
            const prototype: {
            };

        }

        namespace repopulate {
            const prototype: {
            };

        }

        namespace resolveOne {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObject {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace upsert {
            const prototype: {
            };

        }

    }

}

export namespace Collection {
    namespace isCollection {
        const prototype: {
        };

    }

    namespace prototype {
        function authorizeRequestsUsing(type: any, options: any): void;

        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachItem(callback: any): any;

        function forEachItemGroup(callback: any): void;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function oneDeep(idOrName: any): any;

        function parent(): any;

        function setParent(parent: any): void;

        function syncVariablesFrom(obj: any, track: any): any;

        function syncVariablesTo(obj: any): any;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        namespace authorizeRequestsUsing {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachItem {
            const prototype: {
            };

        }

        namespace forEachItemGroup {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace oneDeep {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace syncVariablesFrom {
            const prototype: {
            };

        }

        namespace syncVariablesTo {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

    }

}

export namespace Cookie {
    namespace isCookie {
        const prototype: {
        };

    }

    namespace parse {
        const prototype: {
        };

    }

    namespace prototype {
        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function update(options: any): void;

        function valueOf(): any;

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

        namespace valueOf {
            const prototype: {
            };

        }

    }

    namespace splitParam {
        const prototype: {
        };

    }

}

export namespace CookieList {
    function isCookieList(obj: any): any;

    namespace isCookieList {
        const prototype: {
        };

    }

    namespace prototype {
        function add(item: any, ...args: any[]): void;

        function all(): any;

        function append(item: any): any;

        function assimilate(source: any, prune: any): void;

        function clear(): void;

        function count(): any;

        function each(iterator: any, context: any): void;

        function eachParent(iterator: any, context: any): void;

        function filter(rule: any, context: any): any;

        function find(rule: any, context: any): any;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(key: any): any;

        function has(item: any, value: any, ...args: any[]): any;

        function idx(index: any): any;

        function indexOf(item: any): any;

        function insert(item: any, before: any): void;

        function insertAfter(item: any, after: any): any;

        function map(iterator: any, context: any): any;

        function meta(...args: any[]): any;

        function one(id: any): any;

        function parent(): any;

        function populate(items: any): void;

        function prepend(item: any): any;

        function remove(predicate: any, context: any, ...args: any[]): any;

        function repopulate(items: any): void;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObject(excludeDisabled: any, caseSensitive: any, multiValue: any, sanitizeKeys: any): any;

        function toString(): any;

        function upsert(item: any): any;

        namespace add {
            const prototype: {
            };

        }

        namespace all {
            const prototype: {
            };

        }

        namespace append {
            const prototype: {
            };

        }

        namespace assimilate {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace each {
            const prototype: {
            };

        }

        namespace eachParent {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace idx {
            const prototype: {
            };

        }

        namespace indexOf {
            const prototype: {
            };

        }

        namespace insert {
            const prototype: {
            };

        }

        namespace insertAfter {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace one {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace populate {
            const prototype: {
            };

        }

        namespace prepend {
            const prototype: {
            };

        }

        namespace remove {
            const prototype: {
            };

        }

        namespace repopulate {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObject {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace upsert {
            const prototype: {
            };

        }

    }

}

export namespace Description {
    namespace format {
    }

    namespace isDescription {
        const prototype: {
        };

    }

    namespace prototype {
        function toJSON(): any;

        function toString(): any;

        function update(content: any, type: any): void;

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

    }

}

export namespace Event {
    namespace prototype {
        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function update(definition: any): void;

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

    }

}

export namespace EventList {
    namespace isEventList {
        const prototype: {
        };

    }

    namespace prototype {
        function add(item: any, ...args: any[]): void;

        function all(): any;

        function append(item: any): any;

        function assimilate(source: any, prune: any): void;

        function clear(): void;

        function count(): any;

        function each(iterator: any, context: any): void;

        function eachParent(iterator: any, context: any): void;

        function filter(rule: any, context: any): any;

        function find(rule: any, context: any): any;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(key: any): any;

        function has(item: any, value: any, ...args: any[]): any;

        function idx(index: any): any;

        function indexOf(item: any): any;

        function insert(item: any, before: any): void;

        function insertAfter(item: any, after: any): any;

        function listeners(name: any): any;

        function listenersOwn(name: any): any;

        function map(iterator: any, context: any): any;

        function meta(...args: any[]): any;

        function one(id: any): any;

        function parent(): any;

        function populate(items: any): void;

        function prepend(item: any): any;

        function remove(predicate: any, context: any, ...args: any[]): any;

        function repopulate(items: any): void;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObject(excludeDisabled: any, caseSensitive: any, multiValue: any, sanitizeKeys: any): any;

        function toString(): any;

        function upsert(item: any): any;

        namespace add {
            const prototype: {
            };

        }

        namespace all {
            const prototype: {
            };

        }

        namespace append {
            const prototype: {
            };

        }

        namespace assimilate {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace each {
            const prototype: {
            };

        }

        namespace eachParent {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace idx {
            const prototype: {
            };

        }

        namespace indexOf {
            const prototype: {
            };

        }

        namespace insert {
            const prototype: {
            };

        }

        namespace insertAfter {
            const prototype: {
            };

        }

        namespace listeners {
            const prototype: {
            };

        }

        namespace listenersOwn {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace one {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace populate {
            const prototype: {
            };

        }

        namespace prepend {
            const prototype: {
            };

        }

        namespace remove {
            const prototype: {
            };

        }

        namespace repopulate {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObject {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace upsert {
            const prototype: {
            };

        }

    }

}

export namespace FormParam {
    namespace parse {
        const prototype: {
        };

    }

    namespace prototype {
        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function toString(): any;

        function valueOf(): any;

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace valueOf {
            const prototype: {
            };

        }

    }

}

export namespace Header {
    namespace create {
        const prototype: {
        };

    }

    namespace isHeader {
        const prototype: {
        };

    }

    namespace parse {
        const prototype: {
        };

    }

    namespace parseSingle {
        const prototype: {
        };

    }

    namespace prototype {
        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function toString(): any;

        function update(options: any): void;

        function valueOf(): any;

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

        namespace valueOf {
            const prototype: {
            };

        }

    }

    namespace unparse {
        const prototype: {
        };

    }

    namespace unparseSingle {
        const prototype: {
        };

    }

}

export namespace HeaderList {
    namespace isHeaderList {
        const prototype: {
        };

    }

    namespace prototype {
        function add(item: any, ...args: any[]): void;

        function all(): any;

        function append(item: any): any;

        function assimilate(source: any, prune: any): void;

        function clear(): void;

        function contentSize(): any;

        function count(): any;

        function each(iterator: any, context: any): void;

        function eachParent(iterator: any, context: any): void;

        function filter(rule: any, context: any): any;

        function find(rule: any, context: any): any;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(key: any): any;

        function has(item: any, value: any, ...args: any[]): any;

        function idx(index: any): any;

        function indexOf(item: any): any;

        function insert(item: any, before: any): void;

        function insertAfter(item: any, after: any): any;

        function map(iterator: any, context: any): any;

        function meta(...args: any[]): any;

        function one(id: any): any;

        function parent(): any;

        function populate(items: any): void;

        function prepend(item: any): any;

        function remove(predicate: any, context: any, ...args: any[]): any;

        function repopulate(items: any): void;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObject(excludeDisabled: any, caseSensitive: any, multiValue: any, sanitizeKeys: any): any;

        function toString(): any;

        function upsert(item: any): any;

        namespace add {
            const prototype: {
            };

        }

        namespace all {
            const prototype: {
            };

        }

        namespace append {
            const prototype: {
            };

        }

        namespace assimilate {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace contentSize {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace each {
            const prototype: {
            };

        }

        namespace eachParent {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace idx {
            const prototype: {
            };

        }

        namespace indexOf {
            const prototype: {
            };

        }

        namespace insert {
            const prototype: {
            };

        }

        namespace insertAfter {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace one {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace populate {
            const prototype: {
            };

        }

        namespace prepend {
            const prototype: {
            };

        }

        namespace remove {
            const prototype: {
            };

        }

        namespace repopulate {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObject {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace upsert {
            const prototype: {
            };

        }

    }

}

export namespace Item {
    namespace isItem {
        const prototype: {
        };

    }

    namespace prototype {
        function authorizeRequestUsing(type: any, options: any): any;

        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function getAuth(): any;

        function getEvents(name: any): any;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        namespace authorizeRequestUsing {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace getAuth {
            const prototype: {
            };

        }

        namespace getEvents {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

    }

}

export namespace ItemGroup {
    namespace isItemGroup {
        const prototype: {
        };

    }

    namespace prototype {
        function authorizeRequestsUsing(type: any, options: any): void;

        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachItem(callback: any): any;

        function forEachItemGroup(callback: any): void;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function oneDeep(idOrName: any): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        namespace authorizeRequestsUsing {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachItem {
            const prototype: {
            };

        }

        namespace forEachItemGroup {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace oneDeep {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

    }

}

export namespace Property {
    namespace prototype {
        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

    }

    namespace replaceSubstitutions {
        const prototype: {
        };

    }

    namespace replaceSubstitutionsIn {
        const prototype: {
        };

    }

}

export namespace PropertyBase {
    namespace propertyIsMeta {
        const prototype: {
        };

    }

    namespace propertyUnprefixMeta {
        const prototype: {
        };

    }

    namespace prototype {
        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

    }

    namespace toJSON {
        const prototype: {
        };

    }

}

export namespace PropertyList {
    namespace isPropertyList {
        const prototype: {
        };

    }

    namespace prototype {
        function add(item: any, ...args: any[]): void;

        function all(): any;

        function append(item: any): any;

        function assimilate(source: any, prune: any): void;

        function clear(): void;

        function count(): any;

        function each(iterator: any, context: any): void;

        function eachParent(iterator: any, context: any): void;

        function filter(rule: any, context: any): any;

        function find(rule: any, context: any): any;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(key: any): any;

        function has(item: any, value: any, ...args: any[]): any;

        function idx(index: any): any;

        function indexOf(item: any): any;

        function insert(item: any, before: any): void;

        function insertAfter(item: any, after: any): any;

        function map(iterator: any, context: any): any;

        function meta(...args: any[]): any;

        function one(id: any): any;

        function parent(): any;

        function populate(items: any): void;

        function prepend(item: any): any;

        function remove(predicate: any, context: any, ...args: any[]): any;

        function repopulate(items: any): void;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObject(excludeDisabled: any, caseSensitive: any, multiValue: any, sanitizeKeys: any): any;

        function toString(): any;

        function upsert(item: any): any;

        namespace add {
            const prototype: {
            };

        }

        namespace all {
            const prototype: {
            };

        }

        namespace append {
            const prototype: {
            };

        }

        namespace assimilate {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace each {
            const prototype: {
            };

        }

        namespace eachParent {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace idx {
            const prototype: {
            };

        }

        namespace indexOf {
            const prototype: {
            };

        }

        namespace insert {
            const prototype: {
            };

        }

        namespace insertAfter {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace one {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace populate {
            const prototype: {
            };

        }

        namespace prepend {
            const prototype: {
            };

        }

        namespace remove {
            const prototype: {
            };

        }

        namespace repopulate {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObject {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace upsert {
            const prototype: {
            };

        }

    }

}

export namespace ProxyConfig {
    namespace isProxyConfig {
        const prototype: {
        };

    }

    namespace prototype {
        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function getProtocols(): any;

        function getProxyUrl(): any;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function test(urlStr: any): any;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function update(options: any): void;

        function updateProtocols(protocols: any): void;

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace getProtocols {
            const prototype: {
            };

        }

        namespace getProxyUrl {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace test {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

        namespace updateProtocols {
            const prototype: {
            };

        }

    }

}

export namespace ProxyConfigList {
    namespace isProxyConfigList {
        const prototype: {
        };

    }

    namespace prototype {
        function add(item: any, ...args: any[]): void;

        function all(): any;

        function append(item: any): any;

        function assimilate(source: any, prune: any): void;

        function clear(): void;

        function count(): any;

        function each(iterator: any, context: any): void;

        function eachParent(iterator: any, context: any): void;

        function filter(rule: any, context: any): any;

        function find(rule: any, context: any): any;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(key: any): any;

        function has(item: any, value: any, ...args: any[]): any;

        function idx(index: any): any;

        function indexOf(item: any): any;

        function insert(item: any, before: any): void;

        function insertAfter(item: any, after: any): any;

        function map(iterator: any, context: any): any;

        function meta(...args: any[]): any;

        function one(id: any): any;

        function parent(): any;

        function populate(items: any): void;

        function prepend(item: any): any;

        function remove(predicate: any, context: any, ...args: any[]): any;

        function repopulate(items: any): void;

        function resolve(url: any): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObject(excludeDisabled: any, caseSensitive: any, multiValue: any, sanitizeKeys: any): any;

        function toString(): any;

        function upsert(item: any): any;

        namespace add {
            const prototype: {
            };

        }

        namespace all {
            const prototype: {
            };

        }

        namespace append {
            const prototype: {
            };

        }

        namespace assimilate {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace each {
            const prototype: {
            };

        }

        namespace eachParent {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace idx {
            const prototype: {
            };

        }

        namespace indexOf {
            const prototype: {
            };

        }

        namespace insert {
            const prototype: {
            };

        }

        namespace insertAfter {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace one {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace populate {
            const prototype: {
            };

        }

        namespace prepend {
            const prototype: {
            };

        }

        namespace remove {
            const prototype: {
            };

        }

        namespace repopulate {
            const prototype: {
            };

        }

        namespace resolve {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObject {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace upsert {
            const prototype: {
            };

        }

    }

}

export namespace QueryParam {
    namespace parse {
        const prototype: {
        };

    }

    namespace parseSingle {
        const prototype: {
        };

    }

    namespace prototype {
        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function toString(): any;

        function update(param: any): void;

        function valueOf(): any;

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

        namespace valueOf {
            const prototype: {
            };

        }

    }

    namespace unparse {
        const prototype: {
        };

    }

    namespace unparseSingle {
        const prototype: {
        };

    }

}

export namespace Request {
    namespace isRequest {
        const prototype: {
        };

    }

    namespace prototype {
        function addHeader(header: any): void;

        function addQueryParams(params: any): void;

        function authorize(): void;

        function authorizeUsing(type: any, options: any): void;

        function clone(): any;

        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachHeader(callback: any): any;

        function forEachParent(options: any, iterator: any): void;

        function getHeaders(options: any): any;

        function meta(...args: any[]): any;

        function parent(): any;

        function removeHeader(toRemove: any, options: any): any;

        function removeQueryParams(params: any): void;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function update(options: any): void;

        function upsertHeader(header: any): any;

        namespace addHeader {
            const prototype: {
            };

        }

        namespace addQueryParams {
            const prototype: {
            };

        }

        namespace authorize {
            const prototype: {
            };

        }

        namespace authorizeUsing {
            const prototype: {
            };

        }

        namespace clone {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachHeader {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace getHeaders {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace removeHeader {
            const prototype: {
            };

        }

        namespace removeQueryParams {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

        namespace upsertHeader {
            const prototype: {
            };

        }

    }

}

export namespace RequestAuth {
    namespace isValidType {
        const prototype: {
        };

    }

    namespace prototype {
        function clear(type: any): void;

        function current(): any;

        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parameters(): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function update(options: any, type: any): void;

        function use(type: any, options: any): void;

        namespace clear {
            const prototype: {
            };

        }

        namespace current {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parameters {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

        namespace use {
            const prototype: {
            };

        }

    }

}

export namespace RequestBody {
    namespace prototype {
        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function isEmpty(): any;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toString(): any;

        function update(options: any): void;

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace isEmpty {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

    }

}

export namespace Response {
    namespace createFromNode {
        const prototype: {
        };

    }

    namespace isResponse {
        const prototype: {
        };

    }

    namespace mimeInfo {
        const prototype: {
        };

    }

    namespace prototype {
        function dataURI(): any;

        function describe(content: any, type: any): void;

        function details(): any;

        function encoding(): any;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function json(reviver: any, strict: any): any;

        function meta(...args: any[]): any;

        function mime(contentType: any, contentDisposition: any): any;

        function parent(): any;

        function reason(): any;

        function setParent(parent: any): void;

        function size(): any;

        function text(): any;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function update(options: any): void;

        namespace dataURI {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace details {
            const prototype: {
            };

        }

        namespace encoding {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace json {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace mime {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace reason {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace size {
            const prototype: {
            };

        }

        namespace text {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

    }

}

export namespace Script {
    namespace isScript {
        const prototype: {
        };

    }

    namespace prototype {
        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function toSource(): any;

        function update(options: any): void;

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace toSource {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

    }

}

export namespace Url {
    namespace isUrl {
        const prototype: {
        };

    }

    namespace parse {
        const prototype: {
        };

    }

    namespace prototype {
        function addQueryParams(params: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function getHost(): any;

        function getOAuth1BaseUrl(): any;

        function getPath(options: any): any;

        function getPathWithQuery(): any;

        function getQueryString(options: any): any;

        function getRaw(): any;

        function getRemote(options: any): any;

        function meta(...args: any[]): any;

        function parent(): any;

        function removeQueryParams(params: any): any;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toString(forceProtocol: any): any;

        function update(url: any): any;

        namespace addQueryParams {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace getHost {
            const prototype: {
            };

        }

        namespace getOAuth1BaseUrl {
            const prototype: {
            };

        }

        namespace getPath {
            const prototype: {
            };

        }

        namespace getPathWithQuery {
            const prototype: {
            };

        }

        namespace getQueryString {
            const prototype: {
            };

        }

        namespace getRaw {
            const prototype: {
            };

        }

        namespace getRemote {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace removeQueryParams {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

    }

}

export namespace UrlMatchPattern {
    namespace prototype {
        function createMatchPattern(): any;

        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function getProtocols(): any;

        function globPatternToRegexp(pattern: any): any;

        function matchAbsoluteHostPattern(matchRegexObject: any, remote: any): any;

        function matchAnyHost(matchRegexObject: any): any;

        function matchSuffixHostPattern(matchRegexObject: any, remote: any): any;

        function meta(...args: any[]): any;

        function parent(): any;

        function setParent(parent: any): void;

        function test(urlStr: any): any;

        function testHost(host: any): any;

        function testPath(path: any): any;

        function testProtocol(protocol: any): any;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function toString(): any;

        function update(options: any): void;

        namespace createMatchPattern {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace getProtocols {
            const prototype: {
            };

        }

        namespace globPatternToRegexp {
            const prototype: {
            };

        }

        namespace matchAbsoluteHostPattern {
            const prototype: {
            };

        }

        namespace matchAnyHost {
            const prototype: {
            };

        }

        namespace matchSuffixHostPattern {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace test {
            const prototype: {
            };

        }

        namespace testHost {
            const prototype: {
            };

        }

        namespace testPath {
            const prototype: {
            };

        }

        namespace testProtocol {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

    }

}

export namespace UrlMatchPatternList {
    namespace prototype {
        function add(item: any, ...args: any[]): void;

        function all(): any;

        function append(item: any): any;

        function assimilate(source: any, prune: any): void;

        function clear(): void;

        function count(): any;

        function each(iterator: any, context: any): void;

        function eachParent(iterator: any, context: any): void;

        function filter(rule: any, context: any): any;

        function find(rule: any, context: any): any;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(key: any): any;

        function has(item: any, value: any, ...args: any[]): any;

        function idx(index: any): any;

        function indexOf(item: any): any;

        function insert(item: any, before: any): void;

        function insertAfter(item: any, after: any): any;

        function map(iterator: any, context: any): any;

        function meta(...args: any[]): any;

        function one(id: any): any;

        function parent(): any;

        function populate(items: any): void;

        function prepend(item: any): any;

        function remove(predicate: any, context: any, ...args: any[]): any;

        function repopulate(items: any): void;

        function setParent(parent: any): void;

        function test(urlStr: any): any;

        function toJSON(): any;

        function toObject(excludeDisabled: any, caseSensitive: any, multiValue: any, sanitizeKeys: any): any;

        function toString(): any;

        function upsert(item: any): any;

        namespace add {
            const prototype: {
            };

        }

        namespace all {
            const prototype: {
            };

        }

        namespace append {
            const prototype: {
            };

        }

        namespace assimilate {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace each {
            const prototype: {
            };

        }

        namespace eachParent {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace idx {
            const prototype: {
            };

        }

        namespace indexOf {
            const prototype: {
            };

        }

        namespace insert {
            const prototype: {
            };

        }

        namespace insertAfter {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace one {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace populate {
            const prototype: {
            };

        }

        namespace prepend {
            const prototype: {
            };

        }

        namespace remove {
            const prototype: {
            };

        }

        namespace repopulate {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace test {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObject {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace upsert {
            const prototype: {
            };

        }

    }

}

export namespace Variable {
    namespace isVariable {
        const prototype: {
        };

    }

    namespace prototype {
        function cast(value: any): any;

        function castIn(value: any): any;

        function castOut(value: any): any;

        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(): any;

        function meta(...args: any[]): any;

        function parent(): any;

        function set(value: any): void;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function toString(): any;

        function update(options: any): void;

        function valueOf(value: any, ...args: any[]): any;

        function valueType(typeName: any, _noCast: any): any;

        namespace cast {
            const prototype: {
            };

        }

        namespace castIn {
            const prototype: {
            };

        }

        namespace castOut {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace set {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

        namespace valueOf {
            const prototype: {
            };

        }

        namespace valueType {
            const prototype: {
            };

        }

    }

    namespace types {
        class number {
            constructor(p0: any);

            // Native method; no parameter or return type inference available
            toExponential(p0: any): any;

            // Native method; no parameter or return type inference available
            toFixed(p0: any): any;

            // Native method; no parameter or return type inference available
            toLocaleString(): any;

            // Native method; no parameter or return type inference available
            toPrecision(p0: any): any;

            // Native method; no parameter or return type inference available
            toString(p0: any): any;

            // Native method; no parameter or return type inference available
            valueOf(): any;

            static EPSILON: number;

            static MAX_SAFE_INTEGER: number;

            static MAX_VALUE: number;

            static MIN_SAFE_INTEGER: number;

            static MIN_VALUE: number;

            static NEGATIVE_INFINITY: number;

            static NaN: number;

            static POSITIVE_INFINITY: number;

            static isFinite(p0: any): any;

            static isInteger(p0: any): any;

            static isNaN(p0: any): any;

            static isSafeInteger(p0: any): any;

            static parseFloat(p0: any): any;

            static parseInt(p0: any, p1: any): any;

        }

        class string {
            constructor(p0: any);

            // Native method; no parameter or return type inference available
            anchor(p0: any): any;

            // Native method; no parameter or return type inference available
            big(): any;

            // Native method; no parameter or return type inference available
            blink(): any;

            // Native method; no parameter or return type inference available
            bold(): any;

            // Native method; no parameter or return type inference available
            charAt(p0: any): any;

            // Native method; no parameter or return type inference available
            charCodeAt(p0: any): any;

            // Native method; no parameter or return type inference available
            codePointAt(p0: any): any;

            // Native method; no parameter or return type inference available
            concat(p0: any): any;

            // Native method; no parameter or return type inference available
            endsWith(p0: any): any;

            // Native method; no parameter or return type inference available
            fixed(): any;

            // Native method; no parameter or return type inference available
            fontcolor(p0: any): any;

            // Native method; no parameter or return type inference available
            fontsize(p0: any): any;

            // Native method; no parameter or return type inference available
            includes(p0: any): any;

            // Native method; no parameter or return type inference available
            indexOf(p0: any): any;

            // Native method; no parameter or return type inference available
            italics(): any;

            // Native method; no parameter or return type inference available
            lastIndexOf(p0: any): any;

            // Native method; no parameter or return type inference available
            link(p0: any): any;

            // Native method; no parameter or return type inference available
            localeCompare(p0: any): any;

            // Native method; no parameter or return type inference available
            match(p0: any): any;

            // Native method; no parameter or return type inference available
            normalize(): any;

            // Native method; no parameter or return type inference available
            padEnd(p0: any): any;

            // Native method; no parameter or return type inference available
            padStart(p0: any): any;

            // Native method; no parameter or return type inference available
            repeat(p0: any): any;

            // Native method; no parameter or return type inference available
            replace(p0: any, p1: any): any;

            // Native method; no parameter or return type inference available
            search(p0: any): any;

            // Native method; no parameter or return type inference available
            slice(p0: any, p1: any): any;

            // Native method; no parameter or return type inference available
            small(): any;

            // Native method; no parameter or return type inference available
            split(p0: any, p1: any): any;

            // Native method; no parameter or return type inference available
            startsWith(p0: any): any;

            // Native method; no parameter or return type inference available
            strike(): any;

            // Native method; no parameter or return type inference available
            sub(): any;

            // Native method; no parameter or return type inference available
            substr(p0: any, p1: any): any;

            // Native method; no parameter or return type inference available
            substring(p0: any, p1: any): any;

            // Native method; no parameter or return type inference available
            sup(): any;

            // Native method; no parameter or return type inference available
            toLocaleLowerCase(): any;

            // Native method; no parameter or return type inference available
            toLocaleUpperCase(): any;

            // Native method; no parameter or return type inference available
            toLowerCase(): any;

            // Native method; no parameter or return type inference available
            toString(): any;

            // Native method; no parameter or return type inference available
            toUpperCase(): any;

            // Native method; no parameter or return type inference available
            trim(): any;

            // Native method; no parameter or return type inference available
            trimLeft(): any;

            // Native method; no parameter or return type inference available
            trimRight(): any;

            // Native method; no parameter or return type inference available
            valueOf(): any;

            static fromCharCode(p0: any): any;

            static fromCodePoint(p0: any): any;

            static raw(p0: any): any;

        }

        namespace any {
            function out(val: any): any;

            namespace out {
                // Too-deep object hierarchy from postman_collection.Variable.types.any.out
                const prototype: any;

            }

        }

        namespace json {
            function out(val: any): any;

            namespace out {
                // Too-deep object hierarchy from postman_collection.Variable.types.json.out
                const prototype: any;

            }

        }

        namespace number {
            namespace prototype {
                // Too-deep object hierarchy from postman_collection.Variable.types.number.prototype
                const toExponential: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.number.prototype
                const toFixed: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.number.prototype
                const toLocaleString: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.number.prototype
                const toPrecision: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.number.prototype
                const toString: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.number.prototype
                const valueOf: any;

            }

        }

        namespace string {
            namespace prototype {
                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const anchor: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const big: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const blink: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const bold: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const charAt: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const charCodeAt: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const codePointAt: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const concat: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const endsWith: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const fixed: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const fontcolor: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const fontsize: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const includes: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const indexOf: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const italics: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const lastIndexOf: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const length: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const link: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const localeCompare: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const match: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const normalize: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const padEnd: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const padStart: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const repeat: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const replace: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const search: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const slice: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const small: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const split: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const startsWith: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const strike: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const sub: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const substr: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const substring: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const sup: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const toLocaleLowerCase: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const toLocaleUpperCase: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const toLowerCase: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const toString: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const toUpperCase: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const trim: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const trimLeft: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const trimRight: any;

                // Too-deep object hierarchy from postman_collection.Variable.types.string.prototype
                const valueOf: any;

            }

        }

    }

}

export namespace VariableList {
    namespace isVariableList {
        const prototype: {
        };

    }

    namespace prototype {
        function add(item: any, ...args: any[]): void;

        function all(): any;

        function append(item: any): any;

        function assimilate(source: any, prune: any): void;

        function clear(): void;

        function count(): any;

        function each(iterator: any, context: any): void;

        function eachParent(iterator: any, context: any): void;

        function filter(rule: any, context: any): any;

        function find(rule: any, context: any): any;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(key: any): any;

        function has(item: any, value: any, ...args: any[]): any;

        function idx(index: any): any;

        function indexOf(item: any): any;

        function insert(item: any, before: any): void;

        function insertAfter(item: any, after: any): any;

        function map(iterator: any, context: any): any;

        function meta(...args: any[]): any;

        function one(id: any): any;

        function parent(): any;

        function populate(items: any): void;

        function prepend(item: any): any;

        function remove(predicate: any, context: any, ...args: any[]): any;

        function replace(str: any, overrides: any): any;

        function repopulate(items: any): void;

        function setParent(parent: any): void;

        function substitute(obj: any, overrides: any, mutate: any): any;

        function syncFromObject(obj: any, track: any, prune: any): any;

        function syncToObject(obj: any): any;

        function toJSON(): any;

        function toObject(excludeDisabled: any, caseSensitive: any, multiValue: any, sanitizeKeys: any): any;

        function toString(): any;

        function upsert(item: any): any;

        namespace add {
            const prototype: {
            };

        }

        namespace all {
            const prototype: {
            };

        }

        namespace append {
            const prototype: {
            };

        }

        namespace assimilate {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace each {
            const prototype: {
            };

        }

        namespace eachParent {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace idx {
            const prototype: {
            };

        }

        namespace indexOf {
            const prototype: {
            };

        }

        namespace insert {
            const prototype: {
            };

        }

        namespace insertAfter {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace one {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace populate {
            const prototype: {
            };

        }

        namespace prepend {
            const prototype: {
            };

        }

        namespace remove {
            const prototype: {
            };

        }

        namespace replace {
            const prototype: {
            };

        }

        namespace repopulate {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace substitute {
            const prototype: {
            };

        }

        namespace syncFromObject {
            const prototype: {
            };

        }

        namespace syncToObject {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObject {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace upsert {
            const prototype: {
            };

        }

    }

}

export namespace VariableScope {
    namespace isVariableScope {
        const prototype: {
        };

    }

    namespace prototype {
        function addLayer(list: any): void;

        function clear(): void;

        function describe(content: any, type: any): void;

        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function get(key: any): any;

        function has(variableName: any): any;

        function meta(...args: any[]): any;

        function parent(): any;

        function set(key: any, value: any, type: any): any;

        function setParent(parent: any): void;

        function syncVariablesFrom(obj: any, track: any): any;

        function syncVariablesTo(obj: any): any;

        function toJSON(): any;

        function toObject(excludeDisabled: any, caseSensitive: any): any;

        function toObjectResolved(scope: any, overrides: any, options: any): any;

        function unset(key: any): void;

        function variables(): any;

        namespace addLayer {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace describe {
            const prototype: {
            };

        }

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace set {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace syncVariablesFrom {
            const prototype: {
            };

        }

        namespace syncVariablesTo {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toObject {
            const prototype: {
            };

        }

        namespace toObjectResolved {
            const prototype: {
            };

        }

        namespace unset {
            const prototype: {
            };

        }

        namespace variables {
            const prototype: {
            };

        }

    }

}

export namespace Version {
    namespace prototype {
        function findInParents(property: any, customizer: any): any;

        function findParentContaining(property: any, customizer: any): any;

        function forEachParent(options: any, iterator: any): void;

        function meta(...args: any[]): any;

        function parent(): any;

        function set(value: any): void;

        function setParent(parent: any): void;

        function toJSON(): any;

        function toString(): any;

        namespace findInParents {
            const prototype: {
            };

        }

        namespace findParentContaining {
            const prototype: {
            };

        }

        namespace forEachParent {
            const prototype: {
            };

        }

        namespace meta {
            const prototype: {
            };

        }

        namespace parent {
            const prototype: {
            };

        }

        namespace set {
            const prototype: {
            };

        }

        namespace setParent {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

    }

}

