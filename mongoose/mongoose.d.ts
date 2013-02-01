interface MongooseInstance {
    new(): MongooseInstance;
    set(key: string, value: string) : MongooseInstance;
    get(key: string) : string;
    createConnection(uri?: string, options?: any) : MongooseInstance;
    connect(...args: any[]) : MongooseInstance;
    disconnect(fn?: Function) : MongooseInstance;
    model(name: string, schema?: Schema, collection?: string, skipInit?: bool): Model;
    plugin(fn: Function, opts?: any): MongooseInstance;
    exports: MongooseInstance;
    Collection: Collection;
    Connection: Connection;
    version() : string;
}

interface QueryOptions {
    tailable?: any;
    sort?: any;
    limit?: any;
    skip?: any;
    maxscan?: any;
    batchSize?: any;
    comment?: any;
    snapshot?: any;
    hint?: any;
    slaveOk?: any;
    lean?: any;
    safe?: any;
}

interface Query {
    new(criteria: Object, options?: Object): Query;
    setOptions(options: QueryOptions): Query;
    exec(operation?: String, callback?: Function): Promise;
    exec(operation?: Function, callback?: Function): Promise;
    find(criteria?: Object, callback?: Function): Query;
    cast(model: Model, obj?: Object): Object;
    $where(js: string): Query;
    $where(js: Function): Query;
    where(path?: string, val?: Object): Query;
    equals(val: Object): Query;
    or(array: Array): Query;
    nor(array: Array): Query;
    and(array: Array): Query;
    gt(path: string, val: number): Query;
    gte(path: string, val: number): Query;
    lt(path: string, val: number): Query;
    lte(path: string, val: number): Query;
    ne(path: string, val: number): Query;
    in(path: string, val: number): Query;
    nin(path: string, val: number): Query;
    all(path: string, val: number): Query;
    size(path: string, val: number): Query;
    regex(path: string, val: number): Query;
    maxDistance(path: string, val: number): Query;
    near(path: string, val: number): Query;
    nearSphere(path: string, val: Object): Query;
    mod(path: string, val: number): Query;
    exists(path: string, val: number): Query;
    elemMatch(path: any, val: any): Query;
    box(path: string, val: Object): Query;
    center(path: string, val: Object, opts?: Object): Query;
    centerSphere(path: string, val: Object): Query;
    polygon(path: string, val: Array): Query;
    polygon(path: string, val: Object): Query;
    select(arg: Object): Query;
    select(arg: string): Query;
    slice(path: string, val: number): Query;
    sort(arg: Object): Query;
    sort(arg: String): Query;
    limit(val: number): Query;
    skip(val: number): Query;
    maxscan(val: number): Query;
    batchSize(val: number): Query;
    comment(val: number): Query;
    snapShot(): Query;
    hint(val: Object): Query;
    slaveOk(v: bool): Query;
    read(pref: string, tags?: Array): Query;
    lean(v: bool): Query;
    tailable(v: bool): Query;
    findOne(callback: Function): Query;
    count(callback: Function): Query;
    distinct( field: string, callback: Function): Query;
    update(doc: Object, callback: Function): Query;
    remove(callback: Function): Query;
    findOneAndUpdate(query?: Object, doc?: Object, options?: findAndUpdateOptions, callback?: Function): Query;
    findOneAndRemove(conditions?: Object, options?: findAndModifyOptions, callback?: Function): Query;
    populate(path: string, fields?: Object, model?: Model, conditions?: Object, options?: Object): Query;
    populate(path: string, fields?: string, model?: Model, conditions?: Object, options?: Object): Query;
    stream(): QueryStream;
    within: Query;  
}


interface QueryStream {
    new(query: Query): QueryStream;
    pause();
    resume();
    destroy(err: any);
    pipe();
    paused: bool;
    readable: bool;
}


interface findAndModifyOptions {
    sort?: bool;
    select?: bool;
}

interface findAndUpdateOptions extends findAndModifyOptions {
    new?: bool;
    upsert?: bool;
}

interface updateOptions {
    safe?: bool;
    upsert?: bool;
    multi?: bool;
}

interface Model {
    new(doc: any): Model;
    save(fn?: Function);
    increment(): Model;
    remove(fn?: Function): Model;
    model(name: string) : Model;
    $where(argument: string): Query;
    $where(argument: Function): Query;
    ensureIndexes(cb?: Function): void;
    remove(conditions: Object, callback?: Function): Query;
    find(conditions: Object, fields?: Object, options?: Object, callback?: Function): Query;
    findById(id: any, fields?: Object, options?: Object, callback?: Function): Query;
    findOne(conditions: Object, fields?: Object, options?: Object, callback?: Function): Query;
    count(conditions: Object, callback?: Function): Query;
    distinct(field: string, conditions?: Object, callback?: Function): Query;
    where(path: string, val?: Object): Query;
    findOneAndUpdate(conditions?: Object, update?: Object, options?: findAndUpdateOptions, callback?: Function): Query;
    findByIdAndUpdate(id: any, update?: Object, options?: findAndUpdateOptions, callback?: Function): Query; 
    findOneAndRemove(conditions: Object, options?: findAndModifyOptions, callback?: Function): Query;
    findByIdAndRemove(id: any, options?: findAndModifyOptions, callback?: Function): Query;
    create(doc: Array, callback: Function);
    create(...args: any[]);
    update(conditions: Object, update: Object, options?: updateOptions, callback?: Function): Query;
    mapReduce(o: Object, callback: Function);
    aggregate(array: Array, options?: Object, callback?: Function);
    base: MongooseInstance;
    schema: Schema;
    modelName: string;
    collection: Collection;
    db: any;
}

interface DocumentToObjectSettings {
    getters ?: bool;
    virtuals ?: bool;
    minimize ?: bool;
    transform ?: Function ;
}

interface Document {
   new(): Document;
   update(doc: Object, options: Object, callback: Function);
   set(path: any, val: any, type?: any, options?: Object): Document;
   get(path: string, type: any): any;
   markModified(path: string): void;
   modifiedPaths(): Array;
   isModified(path?: string): bool;
   isDirectModified(path: string): bool;
   isInit(path: string) :bool;
   isSelected(path: string): bool;
   validate(db: Function): Document;
   invalidate(path: string, err: any): void;
   toObject(options?: DocumentToObjectSettings): any;
   toJSON(options) : any;
   inspect(options?: any);
   toString();
   equals(doc: Document): bool;
   errors: Object;
   id: string;
   isNew: bool;
   schema: Schema;
}

interface Schema {
    Types: {
        String: any;
        Number: any;
        Boolean: any;
        Bool: any;
        Array: any;
        Buffer: any;
        Date: any;
        ObjectId: any;
        Oid: any;
        Mixed: any;
    };
}

interface Promise {
    new(back: Function): Promise;
    on(event: string, callback: Function): Promise;
    complete();
    error(): Promise;
    addCallback(fn: Function): Promise;
    addErrback(fn: Function): Promise;
    addBack(fn: Function): Promise;
    resolve(err?: any, val?: Object);
}

interface SchemaType {

}

interface Collection {

}

interface Connection {
    new(base: MongooseInstance) : Connection; 
    open(connection_string: string, database?: string, port?: number, options?: Object, callback?: Function): Connection;
    openSet(urlis: string, database?: string, options?: Object, callback?: Function): Connection; 
    close(callback?:Function): Connection;
    collection(name: string, options?: Object): Collection;
    model(name: string, schema?: Schema, collection?: Collection): Model;
    setProfiling(level: any, ms?: number, callback?: Function): void;
    db: any;
    collections: any;
    readyState: number;
}


interface CheerioStatic {
//    (...selectors: any[]): Cheerio;
//    (): Cheerio;
}

declare module "mongoose" {
    export function Mongoose(): MongooseInstance;
    export function set(key: string, value: string) : MongooseInstance;
    export function get(key: string) : string;
    export function createConnection(uri?: string, options?: any): MongooseInstance;
    export function connect(...args: any[]): MongooseInstance;
    export function disconnect(fn?: Function): MongooseInstance;
    export function model(name: string, schema?: Schema, collection?: string, skipInit?: bool): Model;
    export function plugin(fn: Function, opts?: any): MongooseInstance;
    export var exports : MongooseInstance;
    export var Collection : Collection;
    export var Connection : Connection;
    export function version() : string;
    export var Schema : Schema;
    export var SchemaType: SchemaType;
}
