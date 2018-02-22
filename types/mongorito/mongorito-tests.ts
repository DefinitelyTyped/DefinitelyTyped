/**
 * - Compilation type-check: using TS compiler "strict" options, and DefinitelyTyped linter (based on comments)
 * - Dynamic type-check: using `expect(...).toBeInstanceOf(...)` on a simple workflow (require Mongodb instance)
 */

import {
    Collection,
    Db,
    DBRef as MongodbDBRef,
    Long as MongodbLong,
    MaxKey as MongodbMaxKey,
    MinKey as MongodbMinKey,
    MongoClientOptions,
    ObjectId as MongodbObjectId,
    Timestamp as MongodbTimestamp
} from 'mongodb';
import {
    Action,
    ActionTypes,
    CreatedAction,
    Database,
    DBRef,
    Long,
    MaxKey,
    MinKey,
    Model,
    ModelClass,
    ObjectId,
    Plugin,
    PluginNext,
    PluginStore,
    Query,
    ReducerModifier,
    ReducerState,
    RefreshedAction,
    RemovedAction,
    State,
    Timestamp,
    UpdatedAction
} from 'mongorito';

const URL = `192.168.99.100:27017`;

// "jest" dependency
declare function describe(description: string, callback: Function): void;
declare function it(description: string, callback: Function | Promise<Function>): void;
declare function expect(obj: any): any;

function expectToBeAModelClass(obj: ModelClass) {
    expect(obj).toBeInstanceOf(Function);
    expect(obj).toHaveProperty('constructor');
    expect(obj).toHaveProperty('database'); // static field set by "Database.register()" call
}

function expectToBeAPluginStore(obj: PluginStore) {
    expect(obj.dispatch).toBeInstanceOf(Function);

    expect(obj.getState).toBeInstanceOf(Function);
    let storeState: State = obj.getState();
    expectToBeAState(storeState);

    expectToBeAModelClass(obj.modelClass);

    expect(obj.model).toBeInstanceOf(Model);
}

function expectToBeAState(obj: State) {
    expect(obj).toHaveProperty('unset');
    expect(Array.isArray(obj.unset)).toBe(true);
    expect(obj).toHaveProperty('fields');
    expect(obj.fields).toBeInstanceOf(Object);
}

function expectToBeAQuery(obj: Query) {
    expectToBeAModelClass(obj.Model);
    expect(Array.isArray(obj.query)).toBe(true);
}

function expectToBeAAction(obj: Action) {
    expect(obj).toBeInstanceOf(Object);
    expect(typeof obj.type).toBe("string");
}

function expectToBeACreatedAction(obj: CreatedAction | UpdatedAction) {
    expect(obj).toBeInstanceOf(Object);
    expect(obj.type).toEqual(ActionTypes.CREATED);
    expect((obj as any).id).toBeInstanceOf(ObjectId);
}

function expectToBeAUpdatedAction(obj: CreatedAction | UpdatedAction) {
    expect(obj).toBeInstanceOf(Object);
    expect(obj.type).toEqual(ActionTypes.UPDATED);
    expect((obj as any).fields).toBeInstanceOf(Object);
}

function expectToBeARefreshedAction(obj: RefreshedAction) {
    expect(obj).toBeInstanceOf(Object);
    expect(obj.type).toEqual(ActionTypes.REFRESHED);
    expect(obj.fields).toBeInstanceOf(Object);
}

function expectToBeARemovedAction(obj: RemovedAction) {
    expect(obj).toBeInstanceOf(Object);
    expect(obj.type).toEqual(ActionTypes.REMOVED);
}

function expectToBeACollection(obj: Collection) {
    // expect(obj).toBeInstanceOf(Object);
    expect(typeof obj.collectionName).toBe("string");
    expect(typeof obj.namespace).toBe("string");
    // expect(obj).toHaveProperty("writeConcern");
    // expect(obj).toHaveProperty("readConcern");
    // expect(obj).toHaveProperty("hint");
}

describe('mongorito', () => {
    const plugin1: Plugin = (modelClass: ModelClass) => (store: PluginStore) => (next: PluginNext) => (action: Action) => {
        // next(action);
    };
    const plugin2: Plugin = (modelClass: ModelClass) => (store: PluginStore) => (next: PluginNext) => (action: Action) => {
        // next(action);
    };
    const plugin3: Plugin = (modelClass: ModelClass) => (store: PluginStore) => (next: PluginNext) => (action: Action) => {
        // next(action);
    };

    it('Plugin', async () => {
        let plugin: Plugin = (modelClass: ModelClass) => {
            expectToBeAModelClass(modelClass);
            return (store: PluginStore) => {
                expectToBeAPluginStore(store);
                return (next: PluginNext) => {
                    expect(next).toBeInstanceOf(Function);
                    return (action: Action) => {
                        expectToBeAAction(action);
                        // next(action);
                    }
                }
            }
        };

        let database = new Database(URL);
        await database.connect();

        class PluggedModel extends Model {
        }

        database.register(PluggedModel);
        PluggedModel.use(plugin);
        let obj: Model = new PluggedModel({attr: 42});
        await obj.save()
    });

    it('Database', async () => {
        // ----- constructor -----

        new Database(URL);
        let options: MongoClientOptions = {};
        let database = new Database(URL, options);

        new Database(URL);

        new Database(['other', URL]);

        new Database(['other', URL], options);

        // ----- connect -----

        let connectResultPromise: Promise<Db> = database.connect();
        expect(connectResultPromise).toBeInstanceOf(Promise);
        let connectResult: Db = await connectResultPromise;
        expect(connectResult).toBeInstanceOf(Db);

        // ----- connection -----

        let connectionResultPromise: Promise<Db> = database.connection();
        expect(connectionResultPromise).toBeInstanceOf(Promise);
        let connectionResult: Db = await connectionResultPromise;
        expect(connectionResult).toBeInstanceOf(Db);

        // ----- disconnect -----

        let disconnectResultPromise: Promise<void> = database.disconnect();
        expect(disconnectResultPromise).toBeInstanceOf(Promise);
        let disconnectResult = await disconnectResultPromise;
        expect(disconnectResult).toBeUndefined();

        // ----- register -----
        class RegisteredModel extends Model {
            constructor(fields?: Object) {
                super(fields);
            }
        }

        class RegisteredModelA extends Model {
            constructor(fields?: Object) {
                super(fields);
            }
        }

        class RegisteredModelB extends Model {
            constructor(fields?: Object) {
                super(fields);
            }
        }

        expect(database.register(RegisteredModel)).toBeUndefined();
        expect(database.register([RegisteredModelA, RegisteredModelB])).toBeUndefined();

        // ----- use -----

        expect(database.use(plugin1)).toBeUndefined();
        expect(database.use([plugin2, plugin3])).toBeUndefined();
    });

    describe('Model', () => {
        it('base static', async () => {
            let database = new Database(URL);
            await database.connect();

            class Sample extends Model {
                constructor(fields?: Object) {
                    super(fields);
                }
            }

            database.register(Sample);

            const fieldOrSpec: string = 'any';

            // ----- getConnection -----

            let getConnectionResultPromise: Promise<Db> = Sample.getConnection();
            expect(getConnectionResultPromise).toBeInstanceOf(Promise);
            let getConnectionResult: Db = await getConnectionResultPromise;
            expect(getConnectionResult).toBeInstanceOf(Db);

            // ----- getCollection -----

            let getCollectionResultPromise: Promise<Collection<any>> = Sample.getCollection();
            expect(getCollectionResultPromise).toBeInstanceOf(Promise);
            let getCollectionResult: Collection<any> = await getCollectionResultPromise;
            expectToBeACollection(getCollectionResult);

            // ----- use -----

            // expect(Sample.use(plugin1)).toBeUndefined();
            // expect(Sample.use([plugin2, plugin3])).toBeUndefined();

            // ----- modifyReducer -----

            let reducer: ReducerModifier = (reducerState: ReducerState) => {
                expect(reducerState.unset).toBeInstanceOf(Function);
                expect(reducerState.fields).toBeInstanceOf(Function);
                return reducerState
            };
            expect(Sample.modifyReducer(reducer)).toBeUndefined();

            // ----- query -----
            await new Sample({'attr': 'first'}).save();
            await new Sample({'attr': 'second'}).save();

            let method: string = 'find';
            let query: [string, any][] = [
                ['where', {'attr': {$exists: true}}],
                ['limit', 5]
            ];
            let queryResultPromise: Promise<Object[]> = Sample.query(method, query);
            expect(queryResultPromise).toBeInstanceOf(Promise);
            let queryResult: Object[] = await queryResultPromise;
            expect(Array.isArray(queryResult)).toBe(true);
            expect(queryResult.length).toBeGreaterThan(0);
            queryResult.forEach(x => expect(x).toBeInstanceOf(Object));

            // ----- listIndexes -----

            let listIndexesResultPromise: Promise<any[]> = Sample.listIndexes();
            expect(listIndexesResultPromise).toBeInstanceOf(Promise);
            let listIndexesResult: any[] = await listIndexesResultPromise;
            expect(Array.isArray(listIndexesResult)).toBe(true);
            listIndexesResult.forEach(x => expect(x).not.toBeUndefined());

            // ----- createIndex -----

            let createIndexResultPromise: Promise<string> = Sample.createIndex(fieldOrSpec);
            expect(createIndexResultPromise).toBeInstanceOf(Promise);
            let createIndexResult: string = await createIndexResultPromise;
            expect(typeof createIndexResult).toBe('string');

            // ----- dropIndex -----

            let dropIndexResultPromise: Promise<object> = Sample.dropIndex(createIndexResult);
            expect(dropIndexResultPromise).toBeInstanceOf(Promise);
            let dropIndexResult: object = await dropIndexResultPromise;
            expect(dropIndexResult).not.toBeUndefined();

            // ----- embeds -----
            class EmbeddedModel extends Model {
            }

            let key: string = 'any';
            let model: ModelClass = EmbeddedModel;
            expect(Sample.embeds(key, model)).toBeUndefined()
        });

        it('base', async () => {
            let database = new Database(URL);
            await database.connect();

            class Sample extends Model {
                constructor(fields?: Object) {
                    super(fields);
                }
            }

            database.register(Sample);

            // ----- constructor -----

            let fields: Object = {views: 5, comments: 2};
            let model = new Sample(fields);

            new Sample();

            // ----- collection -----

            let collectionResult: string = model.collection();
            expect(typeof collectionResult).toBe('string');

            // ----- getConnection -----

            let getConnectionResultPromise: Promise<Db> = model.getConnection();
            expect(getConnectionResultPromise).toBeInstanceOf(Promise);
            let getConnectionResult: Db = await getConnectionResultPromise;
            expect(getConnectionResult).toBeInstanceOf(Db);

            // ----- getCollection -----

            let getCollectionResultPromise: Promise<Collection<any>> = model.getCollection();
            expect(getCollectionResultPromise).toBeInstanceOf(Promise);
            let getCollectionResult: Collection<any> = await getCollectionResultPromise;
            expectToBeACollection(getCollectionResult);

            // ----- set -----
            let key: string = 'attr';
            let key2: string = 'attr2';
            let key3: string = 'attr3';

            expect(model.set(key, 'val')).toBeUndefined();
            expect(model.set({key2: 'val1', key3: 'val2'})).toBeUndefined();

            // ----- get -----

            let getResult1: any = model.get(key);
            expect(getResult1).not.toBeUndefined();

            let getResult2: any = model.get();
            expect(getResult2).not.toBeUndefined();

            // ----- unset -----

            expect(model.unset(key)).toBeUndefined();

            let keys: string[] = [key2, key3];
            expect(model.unset(keys)).toBeUndefined();

            // ----- toJSON -----

            let toJSONResult: object = model.toJSON();
            expect(toJSONResult).toBeInstanceOf(Object);

            // ----- isSaved -----

            let isSavedResult: boolean = model.isSaved();
            expect(typeof isSavedResult).toBe('boolean');

            // ----- save -----

            let save1ResultPromise: Promise<CreatedAction | UpdatedAction> = model.save();
            expect(save1ResultPromise).toBeInstanceOf(Promise);
            let save1Result: CreatedAction | UpdatedAction = await save1ResultPromise;
            expectToBeACreatedAction(save1Result);

            let save2ResultPromise: Promise<CreatedAction | UpdatedAction> = model.save();
            expect(save2ResultPromise).toBeInstanceOf(Promise);
            let save2Result: CreatedAction | UpdatedAction = await save2ResultPromise;
            expectToBeAUpdatedAction(save2Result);

            // ----- increment -----

            let incrementResultPromise1: Promise<any> = model.increment('views');
            expect(incrementResultPromise1).toBeInstanceOf(Promise);
            let incrementResult1: any = await incrementResultPromise1;
            expectToBeARefreshedAction(incrementResult1);

            let incrementResultPromise2: Promise<any> = model.increment('views', 2);
            expect(incrementResultPromise2).toBeInstanceOf(Promise);
            let incrementResult2: any = await incrementResultPromise2;
            expectToBeARefreshedAction(incrementResult2);

            let incrementResultPromise3: Promise<any> = model.increment({views: 10, comments: 3});
            expect(incrementResultPromise3).toBeInstanceOf(Promise);
            let incrementResult3: any = await incrementResultPromise3;
            expectToBeARefreshedAction(incrementResult3);

            // ----- refresh -----

            let refreshResultPromise: Promise<RefreshedAction> = model.refresh();
            expect(refreshResultPromise).toBeInstanceOf(Promise);
            let refreshResult: RefreshedAction = await refreshResultPromise;
            expectToBeARefreshedAction(refreshResult);

            // ----- remove -----

            let removeResultPromise: Promise<RemovedAction> = model.remove();
            expect(removeResultPromise).toBeInstanceOf(Promise);
            let removeResult: RemovedAction = await removeResultPromise;
            expectToBeARemovedAction(removeResult);
        });

        it('Query', async () => {
            let database = new Database(URL);
            await database.connect();

            class Sample extends Model {
                constructor(fields?: Object) {
                    super(fields);
                }
            }

            database.register(Sample);

            let cas = new Sample();
            await cas.save();
            let ID = cas.get('_id');

            let query: object = {_id: ID};

            // ----- find -----

            let findResultPromise1: Promise<Sample[]> = Sample.find();
            expect(findResultPromise1).toBeInstanceOf(Promise);
            let findResult1: Sample[] = await findResultPromise1;
            expect(Array.isArray(findResult1)).toBe(true);
            expect(findResult1[0]).toBeInstanceOf(Sample);

            let findResultPromise2: Promise<Sample[]> = Sample.find(query);
            expect(findResultPromise2).toBeInstanceOf(Promise);
            let findResult2: Sample[] = await findResultPromise2;
            expect(Array.isArray(findResult2)).toBe(true);
            expect(findResult2[0]).toBeInstanceOf(Sample);

            // ----- findOne -----

            let findOneResultPromise1: Promise<Sample | null> = Sample.findOne();
            expect(findOneResultPromise1).toBeInstanceOf(Promise);
            let findOneResult1: Sample | null = await findOneResultPromise1;
            expect(findOneResult1).toBeInstanceOf(Sample);

            let findOneResultPromise2: Promise<Sample | null> = Sample.findOne(query);
            expect(findOneResultPromise2).toBeInstanceOf(Promise);
            let findOneResult2: Sample | null = await findOneResultPromise2;
            expect(findOneResult2).toBeInstanceOf(Sample);

            // ----- findById -----

            let findByIdResultPromise: Promise<Sample | null> = Sample.findById(ID);
            expect(findByIdResultPromise).toBeInstanceOf(Promise);
            let findByIdResult: Sample | null = await findByIdResultPromise;
            expect(findByIdResult).toBeInstanceOf(Sample);

            await Sample.findById(ID.toString());

            // ----- count -----

            let countResultPromise: Promise<number> = Sample.count();
            expect(countResultPromise).toBeInstanceOf(Promise);
            let countResult: number = await countResultPromise;
            expect(typeof countResult).toBe('number');

            await Sample.count(query);

            // ----- sort -----

            let sortResult1: Query = Sample.sort('field-test');
            expectToBeAQuery(sortResult1);

            let sortResult2: Query = Sample.sort({field: 1, test: -1});
            expectToBeAQuery(sortResult2);

            // ----- include -----

            let includeResult1: Query = Sample.include('field-test');
            expectToBeAQuery(includeResult1);

            let includeResult2: Query = Sample.include({field: 1, test: -1});
            expectToBeAQuery(includeResult2);

            // ----- exclude -----

            let excludeResult1: Query = Sample.exclude('field-test');
            expectToBeAQuery(excludeResult1);

            let excludeResult2: Query = Sample.exclude({field: 1, test: -1});
            expectToBeAQuery(excludeResult2);

            // ----- remove -----

            let removeResultPromise: Promise<object> = Sample.remove();
            expect(removeResultPromise).toBeInstanceOf(Promise);
            let removeResult: object = await removeResultPromise;
            expect(removeResult).toBeInstanceOf(Object);

            await Sample.remove(query);
        });
    });

    it('Timestamp', async () => {
        let obj: Timestamp = new Timestamp(1, 9);
        expect(obj).toBeInstanceOf(Timestamp);
        expect(obj).toBeInstanceOf(MongodbTimestamp);
    });

    it('ObjectId', async () => {
        let obj: ObjectId = new ObjectId();
        expect(obj).toBeInstanceOf(ObjectId);
        expect(obj).toBeInstanceOf(MongodbObjectId);
    });

    it('MinKey', async () => {
        let obj: MinKey = new MinKey();
        expect(obj).toBeInstanceOf(MinKey);
        expect(obj).toBeInstanceOf(MongodbMinKey);
    });

    it('MaxKey', async () => {
        let obj: MaxKey = new MaxKey();
        expect(obj).toBeInstanceOf(MaxKey);
        expect(obj).toBeInstanceOf(MongodbMaxKey);
    });

    it('DBRef', async () => {
        let obj: DBRef = new DBRef('namespace', new ObjectId());
        expect(obj).toBeInstanceOf(DBRef);
        expect(obj).toBeInstanceOf(MongodbDBRef);
    });

    it('Long', async () => {
        let obj: Long = new Long(1, 9);
        expect(obj).toBeInstanceOf(Long);
        expect(obj).toBeInstanceOf(MongodbLong);
    });
});
