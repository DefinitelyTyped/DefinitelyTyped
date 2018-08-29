declare namespace oj {  
  class Collection {
    changes: Array<number>;
    comparator: null|string|((param0: oj.Model, param1?: oj.Model)=> number);
    customPagingOptions: ((response: object)=> oj.Collection.CustomPagingOptionsReturn|null)|null;
    customURL: ((param0: string, param1: oj.Collection, param2: object)=> string|Object|null)|null;
    fetchSize: number;
    hasMore: boolean;
    lastFetchCount: number;
    lastFetchSize: number;
    length: number;
    model: object;
    modelLimit: number;
    models: Array<oj.Model>;
    offset: number;
    omitLanguageHeader: boolean;
    parse: ((param0: object)=> Object);
    sortDirection: number;
    totalResults: number;
    url: null|string|(()=> string);
    constructor(models?: Array<oj.Model>, options?: object);
    static extend(properties?: {parse?: (data: any)=> any, model?: oj.Model, url?: string, initialize?: (models: Array<oj.Model>, options: Object)=> void, comparator?: null|string|((model1: oj.Model, model2?: oj.Model)=> number), fetchSize?: number, modelLimit?: number, [propName: string]: any}, classProperties?: object): any;
    abort(): Promise<null>;
    add(m: oj.Model|object|Array<object>|Array<oj.Model>, options?: {silent?: boolean, at?: number, merge?: boolean, sort?: boolean, force?: boolean, deferred?: boolean, [propName: string]: any}): Promise<Array<oj.Model>>|Array<oj.Model>;
    any(iterator: ((param0: object)=> void), context?: object): boolean;
    at(index: number, options?: {fetchSize?: number, deferred?: boolean, [propName: string]: any}): oj.Model|Promise<oj.Model>|null;
    clone(): oj.Collection;
    contains(model: object, options?: object): boolean|Promise<boolean>;
    create(attributes?: object, options?: {silent?: boolean, at?: number, merge?: boolean, sort?: boolean, force?: boolean, deferred?: boolean, [propName: string]: any}): oj.Model|boolean|Promise<oj.Model>;
    difference(...var_args: (Array<oj.Model>)[]): Array<oj.Model>;
    each(iterator: ((param0: oj.Model)=> void), context?: object): undefined;
    fetch(options?: {success?: (collection: oj.Collection, response: Object, options: Object)=> void, error?: (collection: oj.Collection, xhr: Object, options: Object)=> void, add?: boolean, set?: boolean, startIndex?: number, startID?: Object, since?: Object, until?: Object, fetchSize?: number, [propName: string]: any}): object;
    filter(iterator: ((param0: oj.Model)=> void), context?: object): Array<oj.Model>;
    findWhere(attrs: object|Array<object>, options?: {deferred?: boolean, [propName: string]: any}): oj.Model|Promise<oj.Model>;
    first(n?: number, options?: object): Array<oj.Model>|null|Promise<any>;
    get(id: object|string, options?: object): oj.Model|null|Promise<oj.Model>;
    getByCid(clientId: string): oj.Model|null;
    groupBy(iterator: string|((param0: oj.Model)=> object), context?: object): object;
    include(model: object, options?: object): boolean|Promise<boolean>;
    indexBy(iterator: string|((param0: oj.Model)=> void), context?: object): object;
    indexOf(model: object, options?: object): number|Promise<number>;
    initial(n?: number): Array<oj.Model>;
    isEmpty(): boolean;
    isRangeLocal(start: number, count: number): boolean;
    last(n?: number, options?: object): Promise<oj.Model>|Array<oj.Model>|null;
    lastIndexOf(model: oj.Model, fromIndex?: number): number;
    listenTo(otherObj: object, eventType: string, callback: Function): undefined;
    listenToOnce(otherObj: object, eventType: string, callback: Function): undefined;
    map(iterator: ((param0: oj.Model)=> object), context?: object): Array<object>;
    max(iterator: ((param0: oj.Model)=> object), context?: object): object;
    min(iterator: ((param0: object)=> void), context?: object): object;
    modelId(attrs: object): null|string;
    next(n: number, options?: {success?: (collection: oj.Collection, response: Object, options: Object)=> void, error?: (collection: oj.Collection, xhr: Object, options: Object)=> void, [propName: string]: any}): object|null;
    off(eventType?: string|object, callback?: Function, context?: object): undefined;
    on(eventType: string|object, callback: Function, context?: object): undefined;
    once(eventType: string, callback: Function, context?: object): undefined;
    pluck(attr: string): Array<object>;
    pop(options?: {silent?: boolean, deferred?: boolean, [propName: string]: any}): oj.Model|Promise<oj.Model>;
    previous(n: number, options?: {success?: (collection: oj.Collection, response: Object, options: Object)=> void, error?: (collection: oj.Collection, xhr: Object, options: Object)=> void, [propName: string]: any}): object;
    push(m: oj.Model|object, options?: {silent?: boolean, at?: number, merge?: boolean, sort?: boolean, force?: boolean, deferred?: boolean, [propName: string]: any}): Promise<Array<oj.Model>>|undefined;
    refresh(options?: {silent?: boolean, startIndex?: number, [propName: string]: any}): Promise<oj.Collection.SetRangeLocalPromise|undefined>;
    remove(m: oj.Model|Array<oj.Model>, options?: object): Array<oj.Model>|object;
    reset(data?: object, options?: {silent?: boolean, [propName: string]: any}): oj.Model|Array<oj.Model>;
    rest(n?: number, options?: object): Array<object>|Promise<any>;
    set(models: object, options?: {add?: boolean, remove?: boolean, merge?: boolean, silent?: boolean, deferred?: boolean, [propName: string]: any}): Promise<any>|null;
    setFetchSize(n: number): undefined;
    setModelLimit(n: number): undefined;
    setRangeLocal(start: number, count: number): Promise<oj.Collection.SetRangeLocalPromise>;
    shift(options?: object): oj.Model|Promise<oj.Model>|null;
    size(): number;
    slice(start: number, end?: number, options?: object): Promise<Array<oj.Model>>|Array<oj.Model>;
    sort(options?: {silent?: boolean, startIndex?: number, [propName: string]: any}): Promise<oj.Collection.SetRangeLocalPromise>|null;
    sortBy(iterator: string|((param0: oj.Model)=> object), context?: object): Array<oj.Model>;
    sortedIndex(comparator: string|((param0: oj.Model, param1?: oj.Model)=> object)): number;
    stopListening(otherObj?: object, eventType?: string, callback?: Function): undefined;
    sync(method: string, collection: oj.Collection, options?: {success?: (json?: Array<Object>)=> void, error?: (xhr: Object, status: Object, error: Object)=> void, [propName: string]: any}): object;
    toJSON(): Array<object>;
    trigger(eventType: string): undefined;
    unshift(m: object, options?: {silent?: boolean, at?: number, merge?: boolean, sort?: boolean, force?: boolean, deferred?: boolean, [propName: string]: any}): Promise<Array<oj.Model>>|Array<oj.Model>;
    whenReady(): Promise<any>;
    where(attrs: object|Array<object>, options?: object): Promise<Array<oj.Model>>|Array<oj.Model>;
    whereToCollection(attrs: object|Array<object>, options?: object): oj.Collection|Promise<oj.Collection>;
    without(...var_args: (oj.Model)[]): Array<oj.Model>;
  }
  namespace Collection {
    type CustomPagingOptionsReturn =
    {
      totalResults?: number, limit?: number, count?: number, offset?: number, hasMore?: boolean
    }
  }
  namespace Collection {
    type SetRangeLocalPromise =
    {
      start: number, count: number, models: Array<oj.Model>
    }
  }

}
declare namespace oj {  
  class Model {
    attributes: object;
    customURL: ((param0: string, param1: oj.Model, param2: object)=> string|Object|null)|null;
    defaults: object;
    id: string|null;
    idAttribute: string|null;
    omitLanguageHeader: boolean;
    parse: ((param0: object)=> Object);
    parseSave: ((param0: object)=> Object);
    urlRoot: string|null;
    validate: ((param0: object, param1: Object)=> string|Object|null)|null;
    validationError: string|object|null;
    constructor(attributes?: object, options?: object);
    static extend(properties?: {parse?: (data: any)=> any, parseSave?: (data: any)=> any, urlRoot?: string, initialize?: (models: Array<oj.Model>, options: Object)=> void, validate?: null|object|string|((attributes: Object, options?: oj.Model)=> number), [propName: string]: any}, classProperties?: object): any;
    changedAttributes(attributes?: object): object|boolean;
    clear(options?: object): oj.Model|boolean;
    clone(): oj.Model;
    destroy(options?: {success?: (model: oj.Model, response: Object, options: Object)=> void, error?: (model: oj.Model, xhr: Object, options: Object)=> void, wait?: boolean, [propName: string]: any}): boolean;
    fetch(options?: {success?: (model: oj.Model, response: Object, options: Object)=> void, error?: (model: oj.Model, xhr: Object, options: Object)=> void, [propName: string]: any}): object;
    get(property: string): object;
    has(property: string): boolean;
    hasChanged(attribute?: string): boolean;
    invert(): object;
    isNew(): boolean;
    isValid(): boolean;
    keys(): Array<object>;
    listenTo(otherObj: object, eventType: string, callback: Function): undefined;
    listenToOnce(otherObj: object, eventType: string, callback: Function): undefined;
    matches(attrs: object): ((param0: oj.Model)=> boolean);
    off(eventType?: string|object, callback?: Function, context?: object): undefined;
    omit(keys: Array<object>|object): object;
    on(eventType: string|object, callback: Function, context?: object): undefined;
    once(eventType: string, callback: Function, context?: object): undefined;
    pairs(): object;
    pick(keys: Array<object>|object): object;
    previous(attr: string): object;
    previousAttributes(): object;
    save(attributes?: object, options?: {success?: (model: oj.Model, response: Object, options: Object)=> void, error?: (model: oj.Model, xhr: Object, options: Object)=> void, contentType?: string, valdiate?: boolean, wait?: boolean, patch?: boolean, attrs?: Object, [propName: string]: any}): object|boolean;
    set(property: string|object, value?: object, options?: object): oj.Model|boolean;
    stopListening(otherObj?: object, eventType?: string, callback?: Function): undefined;
    sync(method: string, model: oj.Model, options?: object): object;
    toJSON(): object;
    trigger(eventType: string): undefined;
    unset(property: string, options?: object): boolean;
    url(): string|null;
    values(): Array<object>;
  }

}
declare namespace oj {  
  class OAuth {
    constructor(attributes: object, header: string);
    cleanAccessTokenRequest(): undefined;
    cleanAccessTokenResponse(): undefined;
    clientCredentialGrant(): undefined;
    getAccessTokenRequest(): object;
    getAccessTokenResponse(): object;
    getHeader(): object;
    isInitialized(): boolean;
    setAccessTokenRequest(data: object): undefined;
    setAccessTokenResponse(data: object): undefined;
  }

}
declare namespace oj {  
  class URLError {
    constructor();
  }

}
