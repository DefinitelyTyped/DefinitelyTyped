// Type definitions for Mongoose 3.8.5
// Project: http://mongoosejs.com/
// Definitions by: horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../node/node.d.ts" />

declare module "mongoose" {
  function connect(uri: string, options?: ConnectionOption, callback?: (err: any) => void): Mongoose;
  function createConnection(): Connection;
  function createConnection(uri: string, options?: ConnectionOption): Connection;
  function createConnection(host: string, database_name: string, port?: number, options?: ConnectionOption): Connection;
  function disconnect(callback?: (err?: any) => void): Mongoose;

  function model<T extends Document>(name: string, schema: Schema, collection?: string, skipInit?: boolean): Model<T>;
  function modelNames(): string[];
  function plugin(plugin: (schema: Schema, options?: Object) => void, options?: Object): Mongoose;

  function get(key: string): any;
  function set(key: string, value: any): void;

  var mongo: any;
  var mquery: any;
  var version: string;
  var connection: Connection;

  export class Mongoose {
    connect(uri: string, options?: ConnectionOption, callback?: (err: any) => void): Mongoose;
    createConnection(): Connection;
    createConnection(uri: string, options?: Object): Connection;
    createConnection(host: string, database_name: string, port?: number, options?: ConnectionOption): Connection;
    disconnect(callback?: (err?: any) => void): Mongoose;
    get(key: string): any;
    model<T extends Document>(name: string, schema: Schema, collection?: string, skipInit?: boolean): Model<T>;
    modelNames(): string[];
    plugin(plugin: (schema: Schema, options?: Object) => void, options?: Object): Mongoose;
    set(key: string, value: any): void;

    mongo: any;
    mquery: any;
    version: string;
    connection: Connection;
  }

  export interface Connection extends NodeJS.EventEmitter {
    constructor(base: Mongoose): Connection;

    close(callback?: (err: any) => void): Connection;
    collection(name: string, options?: Object): Collection;
    model<T extends Document>(name: string, schema: Schema, collection?: string): Model<T>;
    modelNames(): string[];
    open(host: string, database?: string, port?: number, options?: ConnectionOption, callback?: (err: any) => void): Connection;
    openSet(uris: string, database?: string, options?: ConnectionSetOption, callback?: (err: any) => void): Connection;

    db: any;
    collections: {[index: string]: Collection};
    readyState: number;
  }
  export interface ConnectionOption {
    db?: any;
    server?: any;
    replset?: any;
    user?: string;
    pass?: string;
    auth?: any;
  }
  export interface ConnectionSetOption extends ConnectionOption {
    mongos?: boolean;
  }

  export interface Collection {
  }


  export class SchemaType { }
  export class VirtualType {
    get(fn: Function): VirtualType;
    set(fn: Function): VirtualType;
  }
  export module Types {
    export class ObjectId {}
  }

  export class Schema {
    static Types: {
      String: String;
      ObjectId: Types.ObjectId;
      OId: Types.ObjectId;
      Mixed: any;
    };
    constructor(schema?: Object, options?: Object);

    add(obj: Object, prefix?: string): void;
    eachPath(fn: (path: string, type: any) => void): Schema;
    get(key: string): any;
    index(fields: Object, options?: Object): Schema;
    indexes(): void;
    method(name: string, fn: Function): Schema;
    method(method: Object): Schema;
    path(path: string): any;
    path(path: string, constructor: any): Schema;
    pathType(path: string): string;
    plugin(plugin: (schema: Schema, options?: Object) => void, options?: Object): Schema;
    post(method: string, fn: Function): Schema;
    pre(method: string, callback: Function): Schema;
    requiredPaths(): string[];
    set(key: string, value: any): void;
    static(name: string, fn: Function): Schema;
    virtual(name: string, options?: Object): VirtualType;
    virtualpath(name: string): VirtualType;
  }
  export interface SchemaOption {
    autoIndex?: boolean;
    bufferCommands?: boolean;
    capped?: boolean;
    collection?: string;
    id?: boolean;
    _id?: boolean;
    minimize?: boolean;
    read?: string;
    safe?: boolean;
    shardKey?: boolean;
    strict?: boolean;
    toJSON?: Object;
    toObject?: Object;
    versionKey?: boolean;
  }

  export interface Model<T extends Document> {
    new(doc: Object): T;

    aggregate(...aggregations: Object[]): Aggregate<T[]>;
    aggregate(aggregation: Object, callback: (err: any, res: T[]) => void): Promise<T[]>;
    aggregate(aggregation1: Object, aggregation2: Object, callback: (err: any, res: T[]) => void): Promise<T[]>;
    aggregate(aggregation1: Object, aggregation2: Object, aggregation3: Object, callback: (err: any, res: T[]) => void): Promise<T[]>;
    count(conditions: Object, callback?: (err: any, count: number) => void): Query<number>;

    create(doc: Object, fn?: (err: any, res: T) => void): Promise<T[]>;
    create(doc1: Object, doc2: Object, fn?: (err: any, res1: T, res2: T) => void): Promise<T[]>;
    create(doc1: Object, doc2: Object, doc3: Object, fn?: (err: any, res1: T, res2: T, res3: T) => void): Promise<T[]>;
    discriminator<U extends Document>(name: string, schema: Schema): Model<U>;
    distinct(field: string, callback?: (err: any, res: T[]) => void): Query<T[]>;
    distinct(field: string, conditions: Object, callback?: (err: any, res: T[]) => void): Query<T[]>;
    ensureIndexes(callback: (err: any) => void): Promise<T>;

    find(cond: Object, callback?: (err: any, res: T[]) => void): Query<T[]>;
    find(cond: Object, fields: Object, callback?: (err: any, res: T[]) => void): Query<T[]>;
    find(cond: Object, fields: Object, options: Object, callback?: (err: any, res: T[]) => void): Query<T[]>;
    findById(id: string, callback?: (err: any, res: T) => void): Query<T>;
    findById(id: string, fields: Object, callback?: (err: any, res: T) => void): Query<T>;
    findById(id: string, fields: Object, options: Object, callback?: (err: any, res: T) => void): Query<T>;
    findByIdAndRemove(id: string, callback?: (err: any, res: T) => void): Query<T>;
    findByIdAndRemove(id: string, options: Object, callback?: (err: any, res: T) => void): Query<T>;
    findByIdAndUpdate(id: string, update: Object, callback?: (err: any, res: T) => void): Query<T>;
    findByIdAndUpdate(id: string, update: Object, options: FindAndUpdateOption, callback?: (err: any, res: T) => void): Query<T>;
    findOne(cond?: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOne(cond: Object, fields: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOne(cond: Object, fields: Object, options: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOneAndRemove(cond: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOneAndRemove(cond: Object, options: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOneAndUpdate(cond: Object, update: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOneAndUpdate(cond: Object, update: Object, options: FindAndUpdateOption, callback?: (err: any, res: T) => void): Query<T>;

    geoNear(point: { type: string; coordinates: number[] }, options: Object, callback?: (err: any, res: T[]) => void): Query<T[]>;
    geoNear(point: number[], options: Object, callback?: (err: any, res: T[]) => void): Query<T[]>;
    geoSearch(cond: Object, options: GeoSearchOption, callback?: (err: any, res: T[]) => void): Query<T[]>;
    increment(): T;
    mapReduce<K, V>(options: MapReduceOption<T, K, V>, callback?: (err: any, res: MapReduceResult<K, V>[]) => void): Promise<MapReduceResult<K, V>[]>;
    mapReduce<K, V>(options: MapReduceOption2<T, K, V>, callback?: (err: any, res: MapReduceResult<K, V>[]) => void): Promise<MapReduceResult<K, V>[]>;
    model<U extends Document>(name: string): Model<U>;

    populate<U>(doc: U, options: Object, callback?: (err: any, res: U) => void): Promise<U>;
    populate<U>(doc: U[], options: Object, callback?: (err: any, res: U[]) => void): Promise<U[]>;
    update(cond: Object, update: Object, callback?: (err: any, affectedRows: number, raw: any) => void): Query<T>;
    update(cond: Object, update: Object, options: Object, callback?: (err: any, affectedRows: number, raw: any) => void): Query<T>;
    remove(cond: Object, callback?: (err: any) => void): Query<{}>;
    save(callback?: (err: any, result: T, numberAffected: number) => void): Query<T>;
    where(path: string, val?: Object): Query<T[]>;

    $where(argument: string): Query<T>;
    $where(argument: Function): Query<T>;

    base: Mongoose;
    collection: Collection;
    db: any;
    discriminators: any;
    modelName: string;
    schema: Schema;
  }
  export interface FindAndUpdateOption {
    new?: boolean;
    upsert?: boolean;
    sort?: Object;
    select?: Object;
  }
  export interface GeoSearchOption {
    near: number[];
    maxDistance: number;
    limit?: number;
    lean?: boolean;
  }
  export interface MapReduceOption<T extends Document, Key, Val> {
    map: () => void;
    reduce: (key: Key, vals: T[]) => Val;
    query?: Object;
    limit?: number;
    keeptemp?: boolean;
    finalize?: (key: Key, val: Val) => Val;
    scope?: Object;
    jsMode?: boolean;
    verbose?: boolean;
    out?: {
      inline?: number;
      replace?: string;
      reduce?: string;
      merge?: string;
    };
  }
  export interface MapReduceOption2<T extends Document, Key, Val> {
    map: string;
    reduce: (key: Key, vals: T[]) => Val;
    query?: Object;
    limit?: number;
    keeptemp?: boolean;
    finalize?: (key: Key, val: Val) => Val;
    scope?: Object;
    jsMode?: boolean;
    verbose?: boolean;
    out?: {
      inline?: number;
      replace?: string;
      reduce?: string;
      merge?: string;
    };
  }
  export interface MapReduceResult<Key, Val> {
    _id: Key;
    value: Val;
  }

  export class Query<T> {
    exec(callback?: (err: any, res: T) => void): Promise<T>;
    exec(operation: string, callback?: (err: any, res: T) => void): Promise<T>;
    exec(operation: Function, callback?: (err: any, res: T) => void): Promise<T>;

    all(val: number): Query<T>;
    all(path: string, val: number): Query<T>;
    and(array: Object[]): Query<T>;
    box(val: Object): Query<T>;
    box(a: number[], b: number[]): Query<T>;
    batchSize(val: number): Query<T>;
    cast<U extends Document>(model: Model<U>, obj: Object): U;
    //center(): Query<T>;
    //centerSphere(path: string, val: Object): Query<T>;
    circle(area: Object): Query<T>;
    circle(path: string, area: Object): Query<T>;
    comment(val: any): Query<T>;
    count(callback?: (err: any, count: number) => void): Query<T>;
    count(criteria: Object, callback?: (err: any, count: number) => void): Query<T>;
    distinct(callback?: (err: any, res: T) => void): Query<T>;
    distinct(field: string, callback?: (err: any, res: T) => void): Query<T>;
    distinct(criteria: Object, field: string, callback?: (err: any, res: T) => void): Query<T>;
    distinct(criteria: Query<T>, field: string, callback?: (err: any, res: T) => void): Query<T>;
    elemMatch(criteria: Object): Query<T>;
    elemMatch(criteria: (elem: Query<T>) => void): Query<T>;
    elemMatch(path: string, criteria: Object): Query<T>;
    elemMatch(path: string, criteria: (elem: Query<T>) => void): Query<T>;
    equals(val: Object): Query<T>;
    exists(val?: boolean): Query<T>;
    exists(path: string, val?: boolean): Query<T>;
    find(callback?: (err: any, res: T) => void): Query<T>;
    find(criteria: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOne(callback?: (err: any, res: T) => void): Query<T>;
    findOne(criteria: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOneAndRemove(callback?: (err: any, res: T) => void): Query<T>;
    findOneAndRemove(cond: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOneAndRemove(cond: Object, options: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOneAndUpdate(callback?: (err: any, res: T) => void): Query<T>;
    findOneAndUpdate(update: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOneAndUpdate(cond: Object, update: Object, callback?: (err: any, res: T) => void): Query<T>;
    findOneAndUpdate(cond: Object, update: Object, options: FindAndUpdateOption, callback?: (err: any, res: T) => void): Query<T>;
    geometry(object: Object): Query<T>;
    gt(val: number): Query<T>;
    gt(path: string, val: number): Query<T>;
    gte(val: number): Query<T>;
    gte(path: string, val: number): Query<T>;
    hint(val: Object): Query<T>;
    in(val: any[]): Query<T>;
    in(path: string, val: any[]): Query<T>;
    intersects(arg?: Object): Query<T>;
    lean(bool?: boolean): Query<T>;
    limit(val: number): Query<T>;
    lt(val: number): Query<T>;
    lt(path: string, val: number): Query<T>;
    lte(val: number): Query<T>;
    lte(path: string, val: number): Query<T>;
    maxDistance(val: number): Query<T>;
    maxDistance(path: string, val: number): Query<T>;
    maxScan(val: number): Query<T>;
    merge(source: Query<T>): Query<T>;
    merge(source: Object): Query<T>;
    mod(val: number[]): Query<T>;
    mod(path: string, val: number[]): Query<T>;
    ne(val: any): Query<T>;
    ne(path: string, val: any): Query<T>;
    near(val: Object): Query<T>;
    near(path: string, val: Object): Query<T>;
    nearSphere(val: Object): Query<T>;
    nearSphere(path: string, val: Object): Query<T>;
    nin(val: any[]): Query<T>;
    nin(path: string, val: any[]): Query<T>;
    nor(array: Object[]): Query<T>;
    or(array: Object[]): Query<T>;
    polygon(...coordinatePairs: number[][]): Query<T>;
    polygon(path: string, ...coordinatePairs: number[][]): Query<T>;
    populate(path: string, select?: string, match?: Object, options?: Object): Query<T>;
    populate(path: string, select: string, model: string, match?: Object, options?: Object): Query<T>;
    populate(opt: PopulateOption): Query<T>;
    read(pref: string, tags?: Object[]): Query<T>;
    regex(val: RegExp): Query<T>;
    regex(path: string, val: RegExp): Query<T>;
    remove(callback?: (err: any, res: T) => void): Query<T>;
    remove(criteria: Object, callback?: (err: any, res: T) => void): Query<T>;
    select(arg: string): Query<T>;
    select(arg: Object): Query<T>;
    setOptions(options: Object): Query<T>;
    size(val: number): Query<T>;
    size(path: string, val: number): Query<T>;
    skip(val: number): Query<T>;
    slaveOk(v?: boolean): Query<T>;
    slice(val: number): Query<T>;
    slice(val: number[]): Query<T>;
    slice(path: string, val: number): Query<T>;
    slice(path: string, val: number[]): Query<T>;
    snapshot(v?: boolean): Query<T>;
    sort(arg: Object): Query<T>;
    sort(arg: string): Query<T>;
    stream(options?: { transform?: Function; }): QueryStream;
    tailable(v?: boolean): Query<T>;
    toConstructor(): Query<T>;
    update(callback?: (err: any, affectedRows: number, doc: T) => void): Query<T>;
    update(doc: Object, callback?: (err: any, affectedRows: number, doc: T) => void): Query<T>;
    update(criteria: Object, doc: Object, callback?: (err: any, affectedRows: number, doc: T) => void): Query<T>;
    update(criteria: Object, doc: Object, options: Object, callback?: (err: any, affectedRows: number, doc: T) => void): Query<T>;
    where(path?: string, val?: any): Query<T>;
    where(path?: Object, val?: any): Query<T>;
    within(val?: Object): Query<T>;
    within(coordinate: number[], ...coordinatePairs: number[][]): Query<T>;

    $where(argument: string): Query<T>;
    $where(argument: Function): Query<T>;

    static use$geoWithin: boolean;
  }

  export interface PopulateOption {
    path: string;
    select?: string;
    model?: string;
    match?: Object;
    options?: Object;
  }

  export interface QueryStream extends NodeJS.EventEmitter {
    destory(err?: any): void;
    pause(): void;
    resume(): void;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    paused: number;
    readable: boolean;
  }

  export interface Document {
    id?: string;
    _id: string;

    equals(doc: Document): boolean;
    get(path: string, type?: new(...args: any[]) => any): any;
    inspect(options?: Object): string;
    invalidate(path: string, errorMsg: string, value: any): void;
    invalidate(path: string, error: Error, value: any): void;
    isDirectModified(path: string): boolean;
    isInit(path: string): boolean;
    isModified(path?: string): boolean;
    isSelected(path: string): boolean;
    markModified(path: string): void;
    modifiedPaths(): string[];
    populate<T>(callback?: (err: any, res: T) => void): Document;
    populate<T>(path?: string, callback?: (err: any, res: T) => void): Document;
    populate<T>(opt: PopulateOption, callback?: (err: any, res: T) => void): Document;
    populated(path: string): any;
    remove<T>(callback?: (err: any) => void): Query<T>;
    save<T>(callback?: (err: any, res: T) => void): void;
    set(path: string, val: any, type?: new(...args: any[]) => any, options?: Object): void;
    set(path: string, val: any, options?: Object): void;
    set(value: Object): void;
    toJSON(options?: Object): Object;
    toObject(options?: Object): Object;
    toString(): string;
    update<T>(doc: Object, options: Object, callback: (err: any, affectedRows: number, raw: any) => void): Query<T>;
    validate(cb: (err: any) => void): void;

    isNew: boolean;
    errors: Object;
    schema: Object;
  }


  export class Aggregate<T> {
    constructor(...options: Object[]);

    append(...options: Object[]): Aggregate<T>;
    group(arg: Object): Aggregate<T>;
    limit(num: number): Aggregate<T>;
    match(arg: Object): Aggregate<T>;
    near(parameters: Object): Aggregate<T>;
    project(arg: string): Aggregate<T>;
    project(arg: Object): Aggregate<T>;
    select(filter: string): Aggregate<T>;
    skip(num: number): Aggregate<T>;
    sort(arg: string): Aggregate<T>;
    sort(arg: Object): Aggregate<T>;
    unwind(fiels: string, ...rest: string[]): Aggregate<T>;

    exec(callback?: (err: any, result: T) => void): Promise<T>;
    read(pref: string, ...tags: Object[]): Aggregate<T>;
  }

  export class Promise<T> {
    constructor(fn?: (err: any, result: T) => void);

    then<U>(onFulFill: (result: T) => void, onReject?: (err: any) => void): Promise<U>;
    end(): void;

    fulfill(result: T): Promise<T>;
    reject(err: any): Promise<T>;
    resolve(err: any, result: T): Promise<T>;

    onFulfill(listener: (result: T) => void): Promise<T>;
    onReject(listener: (err: any) => void): Promise<T>;
    onResolve(listener: (err: any, result: T) => void): Promise<T>;
    on(event: string, listener: Function): Promise<T>;

    // Deprecated methods.
    addBack(listener: (err: any, result: T) => void): Promise<T>;
    addCallback(listener: (result: T) => void): Promise<T>;
    addErrback(listener: (err: any) => void): Promise<T>;
    complete(result: T): Promise<T>;
    error(err: any): Promise<T>;
  }

}

