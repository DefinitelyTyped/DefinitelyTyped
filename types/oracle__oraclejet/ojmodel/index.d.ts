export class Collection {
    changes: number[];
    comparator: null | string | ((param0: Model, param1?: Model) => number);
    customPagingOptions: ((response: object) => Collection.CustomPagingOptionsReturn | null) | null;
    customURL: ((param0: string, param1: Collection, param2: object) => string | object | null) | null;
    fetchSize: number;
    hasMore: boolean;
    lastFetchCount: number;
    lastFetchSize: number;
    length: number;
    model: object;
    modelLimit: number;
    models: Model[];
    offset: number;
    omitLanguageHeader: boolean;
    parse: ((param0: object) => object);
    sortDirection: number;
    totalResults: number;
    url: null | string | (() => string);
    constructor(models?: Model[], options?: object);
    static extend(properties?: {
        parse?: (data: any) => any;
        model?: Model;
        url?: string;
        initialize?: (models: Model[], options: object) => void;
        comparator?: null | string | ((model1: Model, model2?: Model) => number);
        fetchSize?: number;
        modelLimit?: number;
        [propName: string]: any;
    }, classProperties?: object): any;
    abort(): Promise<null>;
    add(m: Model | object | object[] | Model[], options?: {
        silent?: boolean;
        at?: number;
        merge?: boolean;
        sort?: boolean;
        force?: boolean;
        deferred?: boolean;
        [propName: string]: any;
    }): Promise<Model[]> | Model[];
    any(iterator: ((param0: object) => void), context?: object): boolean;
    at(index: number, options?: {
        fetchSize?: number;
        deferred?: boolean;
        [propName: string]: any;
    }): Model | Promise<Model> | null;
    clone(): Collection;
    contains(model: object, options?: object): boolean | Promise<boolean>;
    create(attributes?: object, options?: {
        silent?: boolean;
        at?: number;
        merge?: boolean;
        sort?: boolean;
        force?: boolean;
        deferred?: boolean;
        [propName: string]: any;
    }): Model | boolean | Promise<Model>;
    difference(...var_args: Model[][]): Model[];
    each(iterator: ((param0: Model) => void), context?: object): undefined;
    fetch(options?: {
        success?: (collection: Collection, response: any, options: object) => void;
        error?: (collection: Collection, xhr: any, options: object) => void;
        add?: boolean;
        set?: boolean;
        startIndex?: number;
        startID?: any;
        since?: any;
        until?: any;
        fetchSize?: number;
        [propName: string]: any;
    }): object;
    filter(iterator: ((param0: Model) => void), context?: object): Model[];
    findWhere(attrs: object | object[], options?: {
        deferred?: boolean;
        [propName: string]: any;
    }): Model | Promise<Model>;
    first(n?: number, options?: object): Model[] | null | Promise<any>;
    get(id: object | string, options?: object): Model | null | Promise<Model>;
    getByCid(clientId: string): Model | null;
    groupBy(iterator: string | ((param0: Model) => object), context?: object): object;
    include(model: object, options?: object): boolean | Promise<boolean>;
    indexBy(iterator: string | ((param0: Model) => void), context?: object): object;
    indexOf(model: object, options?: object): number | Promise<number>;
    initial(n?: number): Model[];
    isEmpty(): boolean;
    isRangeLocal(start: number, count: number): boolean;
    last(n?: number, options?: object): Promise<Model> | Model[] | null;
    lastIndexOf(model: Model, fromIndex?: number): number;
    listenTo(otherObj: object, eventType: string, callback: (eventType: string, data: object) => void): undefined;
    listenToOnce(otherObj: object, eventType: string, callback: (eventType: string, data: object) => void): undefined;
    map(iterator: ((param0: Model) => object), context?: object): object[];
    max(iterator: ((param0: Model) => object), context?: object): object;
    min(iterator: ((param0: object) => void), context?: object): object;
    modelId(attrs: object): null | string;
    next(n: number, options?: {
        success?: (collection: Collection, response: any, options: object) => void;
        error?: (collection: Collection, xhr: any, options: object) => void;
        [propName: string]: any;
    }): object | null;
    off(eventType?: string | object, callback?: (eventType: string, data: object) => void, context?: object): undefined;
    on(eventType: string | object, callback: (eventType: string, data: object) => void, context?: object): undefined;
    once(eventType: string, callback: (eventType: string, data: object) => void, context?: object): undefined;
    pluck(attr: string): object[];
    pop(options?: {
        silent?: boolean;
        deferred?: boolean;
        [propName: string]: any;
    }): Model | Promise<Model>;
    previous(n: number, options?: {
        success?: (collection: Collection, response: any, options: object) => void;
        error?: (collection: Collection, xhr: any, options: object) => void;
        [propName: string]: any;
    }): object;
    push(m: Model | object, options?: {
        silent?: boolean;
        at?: number;
        merge?: boolean;
        sort?: boolean;
        force?: boolean;
        deferred?: boolean;
        [propName: string]: any;
    }): Promise<Model[]> | undefined;
    refresh(options?: {
        silent?: boolean;
        startIndex?: number;
        [propName: string]: any;
    }): Promise<Collection.SetRangeLocalPromise | undefined>;
    remove(m: Model | Model[], options?: object): Model[] | object;
    reset(data?: object, options?: {
        silent?: boolean;
        [propName: string]: any;
    }): Model | Model[];
    rest(n?: number, options?: object): object[] | Promise<any>;
    set(models: object, options?: {
        add?: boolean;
        remove?: boolean;
        merge?: boolean;
        silent?: boolean;
        deferred?: boolean;
        [propName: string]: any;
    }): Promise<any> | null;
    setFetchSize(n: number): undefined;
    setModelLimit(n: number): undefined;
    setRangeLocal(start: number, count: number): Promise<Collection.SetRangeLocalPromise>;
    shift(options?: object): Model | Promise<Model> | null;
    size(): number;
    slice(start: number, end?: number, options?: object): Promise<Model[]> | Model[];
    sort(options?: {
        silent?: boolean;
        startIndex?: number;
        [propName: string]: any;
    }): Promise<Collection.SetRangeLocalPromise> | null;
    sortBy(iterator: string | ((param0: Model) => object), context?: object): Model[];
    sortedIndex(comparator: string | ((param0: Model, param1?: Model) => object)): number;
    stopListening(otherObj?: object, eventType?: string, callback?: (eventType: string, data: object) => void): undefined;
    sync(method: string, collection: Collection, options?: {
        success?: (json?: any[]) => void;
        error?: (xhr: any, status: any, error: any) => void;
        [propName: string]: any;
    }): object;
    toJSON(): object[];
    trigger(eventType: string): undefined;
    unshift(m: object, options?: {
        silent?: boolean;
        at?: number;
        merge?: boolean;
        sort?: boolean;
        force?: boolean;
        deferred?: boolean;
        [propName: string]: any;
    }): Promise<Model[]> | Model[];
    whenReady(): Promise<any>;
    where(attrs: object | object[], options?: object): Promise<Model[]> | Model[];
    whereToCollection(attrs: object | object[], options?: object): Collection | Promise<Collection>;
    without(...var_args: Model[]): Model[];
}
export namespace Collection {
    // tslint:disable-next-line interface-over-type-literal
    type CustomPagingOptionsReturn = {
        totalResults?: number;
        limit?: number;
        count?: number;
        offset?: number;
        hasMore?: boolean;
    };
    // tslint:disable-next-line interface-over-type-literal
    type SetRangeLocalPromise = {
        start: number;
        count: number;
        models: Model[];
    };
}
export class Model {
    attributes: object;
    customURL: ((param0: string, param1: Model, param2: object) => string | object | null) | null;
    defaults: object;
    id: string | null;
    idAttribute: string | null;
    omitLanguageHeader: boolean;
    parse: ((param0: object) => object);
    parseSave: ((param0: object) => object);
    urlRoot: string | null;
    validate: ((param0: object, param1: object) => string | object | null) | null;
    validationError: string | object | null;
    constructor(attributes?: object, options?: object);
    static extend(properties?: {
        parse?: (data: any) => any;
        parseSave?: (data: any) => any;
        urlRoot?: string;
        initialize?: (models: Model[], options: object) => void;
        validate?: null | object | string | ((attributes: object, options?: Model) => number);
        [propName: string]: any;
    }, classProperties?: object): any;
    changedAttributes(attributes?: object): object | boolean;
    clear(options?: object): Model | boolean;
    clone(): Model;
    destroy(options?: {
        success?: (model: Model, response: any, options: object) => void;
        error?: (model: Model, xhr: any, options: object) => void;
        wait?: boolean;
        [propName: string]: any;
    }): boolean;
    fetch(options?: {
        success?: (model: Model, response: any, options: object) => void;
        error?: (model: Model, xhr: any, options: object) => void;
        [propName: string]: any;
    }): object;
    get(property: string): object;
    has(property: string): boolean;
    hasChanged(attribute?: string): boolean;
    invert(): object;
    isNew(): boolean;
    isValid(): boolean;
    keys(): object[];
    listenTo(otherObj: object, eventType: string, callback: (eventType: string, data: object) => void): undefined;
    listenToOnce(otherObj: object, eventType: string, callback: (eventType: string, data: object) => void): undefined;
    matches(attrs: object): ((param0: Model) => boolean);
    off(eventType?: string | object, callback?: (eventType: string, data: object) => void, context?: object): undefined;
    omit(keys: object[] | object): object;
    on(eventType: string | object, callback: (eventType: string, data: object) => void, context?: object): undefined;
    once(eventType: string, callback: (eventType: string, data: object) => void, context?: object): undefined;
    pairs(): object;
    pick(keys: object[] | object): object;
    previous(attr: string): object;
    previousAttributes(): object;
    save(attributes?: object, options?: {
        success?: (model: Model, response: any, options: object) => void;
        error?: (model: Model, xhr: any, options: object) => void;
        contentType?: string;
        valdiate?: boolean;
        wait?: boolean;
        patch?: boolean;
        attrs?: object;
        [propName: string]: any;
    }): object | boolean;
    set(property: string | object, value?: object, options?: object): Model | boolean;
    stopListening(otherObj?: object, eventType?: string, callback?: (eventType: string, data: object) => void): undefined;
    sync(method: string, model: Model, options?: object): object;
    toJSON(): object;
    trigger(eventType: string): undefined;
    unset(property: string, options?: object): boolean;
    url(): string | null;
    values(): object[];
}
export class OAuth {
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
// tslint:disable-next-line no-unnecessary-class
export class URLError {
    constructor();
}
