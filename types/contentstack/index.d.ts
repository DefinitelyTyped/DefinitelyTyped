// Type definitions for contentstack 3.8
// Project: https://github.com/contentstack/contentstack-javascript
// Definitions by: Dominic Wroblewski <https://github.com/domness>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

export function Stack(api_key: string, access_token: string, environment_name: string): Stack;
export function Stack(config: Config): Stack;

export interface Config {
    api_key: string;
    access_token: string;
    environment: string;
}

export class Stack {
    constructor(config: Config);
    constructor(api_key: string, access_token: string, environment_name: string);

    ContentType(uid: string): ContentType;
    Entry(uid: string): Entry;
    Assets(uid: string): Assets;
    Query(): Query;
    fetch(): ContentType;

    setPort(port: number): Stack;
    setProtocol(protocol: string): Stack;
    setHost(host: string): Stack;
    setCachePolicy(policy: number): Stack;
    setCacheProvider(provider: object): Stack;
    clearByQuery(): Stack;
    clearByContentType(): Stack;
    clearAll(): Stack;
    getCacheProvider(): Stack;
    getLastActivites(): Stack;
    getContentTypes(param: string): Stack;
    sync(params: object): Promise<any>;
    imageTransform(url: string, params: any): string;
}

export class ContentType {
    constructor();

    Query(): Query;
    Entry(uid: string): Entry;
    Assets(uid: string): Assets;
}

export class Assets {
    constructor();

    toJSON(): Assets;
    addParam(key: string, value: any): Assets;
    fetch(): Promise<any>;
}

export class Entry {
    constructor();

    setCacheProvider(provider: object): Entry;
    setCachePolicy(policy: number): Entry;
    includeReference(val: string[]): Entry;
    includeReference(...val: string[]): Entry;
    language(language_code: string): Entry;
    addQuery(key: string, value: string): Entry;
    includeSchema(): Entry;
    includeReferenceContentTypeUID(): Entry;
    includeContentType(): Entry;
    includeOwner(): Entry;
    toJSON(): Entry;
    addParam(key: string, value: any): Entry;
    fetch(): Promise<any>;
}

export class Query extends Entry {
    constructor();

    setCacheProvider(provider: object): Query;
    setCachePolicy(policy: number): Query;
    language(language_code: string): Query;
    addQuery(key: string, value: string): Query;
    includeReference(val: string[]): Query;
    includeReference(...val: string[]): Query;
    includeReferenceContentTypeUID(): Query;
    includeSchema(): Query;
    includeContentType(): Query;
    includeOwner(): Query;
    toJSON(): Query;
    addParam(key: string, value: any): Query;
    fetch(): Promise<any>;

    equalTo(key: string, value: any): Query;
    where(key: string, value: any): Query;
    count(): Query;
    query(query: any): Query;
    referenceIn(key: string, query: Query): Query;
    referenceNotIn(key: string, query: Query): Query;
    tags(value: any[]): Query;
    includeCount(): Query;
    getQuery(): Query;
    regex(key: string, value: any, options: string): Query;
    search(value: string): Query;
    find(): Promise<any>;
    findOne(): Promise<any>;
    greaterThan(key: string, value: any): Query;
    greaterThanOrEqualTo(key: string, value: any): Query;
    lessThan(key: string, value: any): Query;
    lessThanOrEqualTo(key: string, value: any): Query;
    notEqualTo(key: string, value: any): Query;
    containedIn(key: string, value: any): Query;
}
