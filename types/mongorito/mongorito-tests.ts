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
declare function describe(description: string, callback: () => void): void;

declare function it(description: string, callback: (() => void) | (() => Promise<void>)): void;

declare function expect(obj: any): any;

function expectToBeAModelClass(obj: ModelClass) {
    expect(obj).toBeInstanceOf(Function);
    expect(obj).toHaveProperty('constructor');
    expect(obj).toHaveProperty('database'); // static field set by "Database.register()" call
}

function expectToBeAPluginStore(obj: PluginStore) {
    expect(obj.dispatch).toBeInstanceOf(Function);

    expect(obj.getState).toBeInstanceOf(Function);
    const storeState: State = obj.getState();
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
        const plugin: Plugin = (modelClass: ModelClass) => {
            expectToBeAModelClass(modelClass);
            return (store: PluginStore) => {
                expectToBeAPluginStore(store);
                return (next: PluginNext) => {
                    expect(next).toBeInstanceOf(Function);
                    return (action: Action) => {
                        expectToBeAAction(action);
                        // next(action);
                    };
                };
            };
        };

        const database = new Database(URL);
        await database.connect();

        class PluggedModel extends Model {
        }

        database.register(PluggedModel);
        PluggedModel.use(plugin);
        const obj: Model = new PluggedModel({attr: 42});
        await obj.save();
    });

    it('Database', async () => {
        // ----- constructor -----

        new Database(URL);
        const options: MongoClientOptions = {};
        const database = new Database(URL, options);

        new Database(URL);

        new Database(['other', URL]);

        new Database(['other', URL], options);

        // ----- connect -----

        const connectResultPromise: Promise<Db> = database.connect();
        expect(connectResultPromise).toBeInstanceOf(Promise);
        const connectResult: Db = await connectResultPromise;
        expect(connectResult).toBeInstanceOf(Db);

        // ----- connection -----

        const connectionResultPromise: Promise<Db> = database.connection();
        expect(connectionResultPromise).toBeInstanceOf(Promise);
        const connectionResult: Db = await connectionResultPromise;
        expect(connectionResult).toBeInstanceOf(Db);

        // ----- disconnect -----

        const disconnectResultPromise: Promise<void> = database.disconnect();
        expect(disconnectResultPromise).toBeInstanceOf(Promise);
        // expect(await disconnectResultPromise).toBeUndefined();
        await disconnectResultPromise; // $ExpectType void

        // ----- register -----
        class RegisteredModel extends Model {
            constructor(fields?: object) {
                super(fields);
            }
        }

        class RegisteredModelA extends Model {
            constructor(fields?: object) {
                super(fields);
            }
        }

        class RegisteredModelB extends Model {
            constructor(fields?: object) {
                super(fields);
            }
        }

        // expect(database.register(RegisteredModel)).toBeUndefined();
        database.register(RegisteredModel); // $ExpectType void
        // expect(database.register([RegisteredModelA, RegisteredModelB])).toBeUndefined();
        database.register([RegisteredModelA, RegisteredModelB]); // $ExpectType void

        // ----- use -----

        // expect(database.use(plugin1)).toBeUndefined();
        database.use(plugin1); // $ExpectType void
        // expect(database.use([plugin2, plugin3])).toBeUndefined();
        database.use([plugin2, plugin3]); // $ExpectType void
    });

    describe('Model', () => {
        it('base static', async () => {
            const database = new Database(URL);
            await database.connect();

            class Sample extends Model {
                constructor(fields?: object) {
                    super(fields);
                }
            }

            database.register(Sample);

            const fieldOrSpec = 'any';

            // ----- getConnection -----

            const getConnectionResultPromise: Promise<Db> = Sample.getConnection();
            expect(getConnectionResultPromise).toBeInstanceOf(Promise);
            const getConnectionResult: Db = await getConnectionResultPromise;
            expect(getConnectionResult).toBeInstanceOf(Db);

            // ----- getCollection -----

            const getCollectionResultPromise: Promise<Collection<any>> = Sample.getCollection();
            expect(getCollectionResultPromise).toBeInstanceOf(Promise);
            const getCollectionResult: Collection<any> = await getCollectionResultPromise;
            expectToBeACollection(getCollectionResult);

            // ----- use -----

            // expect(Sample.use(plugin1)).toBeUndefined();
            // expect(Sample.use([plugin2, plugin3])).toBeUndefined();

            // ----- modifyReducer -----

            const reducer: ReducerModifier = (reducerState: ReducerState) => {
                expect(reducerState.unset).toBeInstanceOf(Function);
                expect(reducerState.fields).toBeInstanceOf(Function);
                return reducerState;
            };
            // expect(Sample.modifyReducer(reducer)).toBeUndefined();
            Sample.modifyReducer(reducer); // $ExpectType void

            // ----- query -----
            await new Sample({attr: 'first'}).save();
            await new Sample({attr: 'second'}).save();

            const method = 'find';
            const query: Array<[string, any]> = [
                ['where', {attr: {$exists: true}}],
                ['limit', 5]
            ];
            const queryResultPromise: Promise<object[]> = Sample.query(method, query);
            expect(queryResultPromise).toBeInstanceOf(Promise);
            const queryResult: object[] = await queryResultPromise;
            expect(Array.isArray(queryResult)).toBe(true);
            expect(queryResult.length).toBeGreaterThan(0);
            queryResult.forEach(x => expect(x).toBeInstanceOf(Object));

            // ----- listIndexes -----

            const listIndexesResultPromise: Promise<any[]> = Sample.listIndexes();
            expect(listIndexesResultPromise).toBeInstanceOf(Promise);
            const listIndexesResult: any[] = await listIndexesResultPromise;
            expect(Array.isArray(listIndexesResult)).toBe(true);
            listIndexesResult.forEach(x => expect(x).not.toBeUndefined());

            // ----- createIndex -----

            const createIndexResultPromise: Promise<string> = Sample.createIndex(fieldOrSpec);
            expect(createIndexResultPromise).toBeInstanceOf(Promise);
            const createIndexResult: string = await createIndexResultPromise;
            expect(typeof createIndexResult).toBe('string');

            // ----- dropIndex -----

            const dropIndexResultPromise: Promise<object> = Sample.dropIndex(createIndexResult);
            expect(dropIndexResultPromise).toBeInstanceOf(Promise);
            const dropIndexResult: object = await dropIndexResultPromise;
            expect(dropIndexResult).not.toBeUndefined();

            // ----- embeds -----
            class EmbeddedModel extends Model {
            }

            const key = 'any';
            const model: ModelClass = EmbeddedModel;
            // expect(Sample.embeds(key, model)).toBeUndefined();
            Sample.embeds(key, model); // $ExpectType void
        });

        it('base', async () => {
            const database = new Database(URL);
            await database.connect();

            class Sample extends Model {
                constructor(fields?: object) {
                    super(fields);
                }
            }

            database.register(Sample);

            // ----- constructor -----

            const fields: object = {views: 5, comments: 2};
            const model = new Sample(fields);

            new Sample();

            // ----- collection -----

            const collectionResult: string = model.collection();
            expect(typeof collectionResult).toBe('string');

            // ----- getConnection -----

            const getConnectionResultPromise: Promise<Db> = model.getConnection();
            expect(getConnectionResultPromise).toBeInstanceOf(Promise);
            const getConnectionResult: Db = await getConnectionResultPromise;
            expect(getConnectionResult).toBeInstanceOf(Db);

            // ----- getCollection -----

            const getCollectionResultPromise: Promise<Collection<any>> = model.getCollection();
            expect(getCollectionResultPromise).toBeInstanceOf(Promise);
            const getCollectionResult: Collection<any> = await getCollectionResultPromise;
            expectToBeACollection(getCollectionResult);

            // ----- set -----
            const key = 'attr';
            const key2 = 'attr2';
            const key3 = 'attr3';

            // expect(model.set(key, 'val')).toBeUndefined();
            model.set(key, 'val'); // $ExpectType void
            // expect(model.set({key2: 'val1', key3: 'val2'})).toBeUndefined();
            model.set({key2: 'val1', key3: 'val2'}); // $ExpectType void

            // ----- get -----

            const getResult1: any = model.get(key);
            expect(getResult1).not.toBeUndefined();

            const getResult2: any = model.get();
            expect(getResult2).not.toBeUndefined();

            // ----- unset -----

            // expect(model.unset(key)).toBeUndefined();
            model.unset(key); // $ExpectType void

            const keys: string[] = [key2, key3];
            // expect(model.unset(keys)).toBeUndefined();
            model.unset(keys); // $ExpectType void

            // ----- toJSON -----

            const toJSONResult: object = model.toJSON();
            expect(toJSONResult).toBeInstanceOf(Object);

            // ----- isSaved -----

            const isSavedResult: boolean = model.isSaved();
            expect(typeof isSavedResult).toBe('boolean');

            // ----- save -----

            const save1ResultPromise: Promise<CreatedAction | UpdatedAction> = model.save();
            expect(save1ResultPromise).toBeInstanceOf(Promise);
            const save1Result: CreatedAction | UpdatedAction = await save1ResultPromise;
            expectToBeACreatedAction(save1Result);

            const save2ResultPromise: Promise<CreatedAction | UpdatedAction> = model.save();
            expect(save2ResultPromise).toBeInstanceOf(Promise);
            const save2Result: CreatedAction | UpdatedAction = await save2ResultPromise;
            expectToBeAUpdatedAction(save2Result);

            // ----- increment -----

            const incrementResultPromise1: Promise<any> = model.increment('views');
            expect(incrementResultPromise1).toBeInstanceOf(Promise);
            const incrementResult1: any = await incrementResultPromise1;
            expectToBeARefreshedAction(incrementResult1);

            const incrementResultPromise2: Promise<any> = model.increment('views', 2);
            expect(incrementResultPromise2).toBeInstanceOf(Promise);
            const incrementResult2: any = await incrementResultPromise2;
            expectToBeARefreshedAction(incrementResult2);

            const incrementResultPromise3: Promise<any> = model.increment({views: 10, comments: 3});
            expect(incrementResultPromise3).toBeInstanceOf(Promise);
            const incrementResult3: any = await incrementResultPromise3;
            expectToBeARefreshedAction(incrementResult3);

            // ----- refresh -----

            const refreshResultPromise: Promise<RefreshedAction> = model.refresh();
            expect(refreshResultPromise).toBeInstanceOf(Promise);
            const refreshResult: RefreshedAction = await refreshResultPromise;
            expectToBeARefreshedAction(refreshResult);

            // ----- remove -----

            const removeResultPromise: Promise<RemovedAction> = model.remove();
            expect(removeResultPromise).toBeInstanceOf(Promise);
            const removeResult: RemovedAction = await removeResultPromise;
            expectToBeARemovedAction(removeResult);
        });

        it('Query', async () => {
            const database = new Database(URL);
            await database.connect();

            class Sample extends Model {
                constructor(fields?: object) {
                    super(fields);
                }
            }

            database.register(Sample);

            const cas = new Sample();
            await cas.save();
            const ID = cas.get('_id');

            const query: object = {_id: ID};

            // ----- find -----

            const findResultPromise1: Promise<Sample[]> = Sample.find();
            expect(findResultPromise1).toBeInstanceOf(Promise);
            const findResult1: Sample[] = await findResultPromise1;
            expect(Array.isArray(findResult1)).toBe(true);
            expect(findResult1[0]).toBeInstanceOf(Sample);

            const findResultPromise2: Promise<Sample[]> = Sample.find(query);
            expect(findResultPromise2).toBeInstanceOf(Promise);
            const findResult2: Sample[] = await findResultPromise2;
            expect(Array.isArray(findResult2)).toBe(true);
            expect(findResult2[0]).toBeInstanceOf(Sample);

            // ----- findOne -----

            const findOneResultPromise1: Promise<Sample | null> = Sample.findOne();
            expect(findOneResultPromise1).toBeInstanceOf(Promise);
            const findOneResult1: Sample | null = await findOneResultPromise1;
            expect(findOneResult1).toBeInstanceOf(Sample);

            const findOneResultPromise2: Promise<Sample | null> = Sample.findOne(query);
            expect(findOneResultPromise2).toBeInstanceOf(Promise);
            const findOneResult2: Sample | null = await findOneResultPromise2;
            expect(findOneResult2).toBeInstanceOf(Sample);

            // ----- findById -----

            const findByIdResultPromise: Promise<Sample | null> = Sample.findById(ID);
            expect(findByIdResultPromise).toBeInstanceOf(Promise);
            const findByIdResult: Sample | null = await findByIdResultPromise;
            expect(findByIdResult).toBeInstanceOf(Sample);

            await Sample.findById(ID.toString());

            // ----- count -----

            const countResultPromise: Promise<number> = Sample.count();
            expect(countResultPromise).toBeInstanceOf(Promise);
            const countResult: number = await countResultPromise;
            expect(typeof countResult).toBe('number');

            await Sample.count(query);

            // ----- sort -----

            const sortResult1: Query = Sample.sort('field-test');
            expectToBeAQuery(sortResult1);

            const sortResult2: Query = Sample.sort({field: 1, test: -1});
            expectToBeAQuery(sortResult2);

            // ----- include -----

            const includeResult1: Query = Sample.include('field-test');
            expectToBeAQuery(includeResult1);

            const includeResult2: Query = Sample.include({field: 1, test: -1});
            expectToBeAQuery(includeResult2);

            // ----- exclude -----

            const excludeResult1: Query = Sample.exclude('field-test');
            expectToBeAQuery(excludeResult1);

            const excludeResult2: Query = Sample.exclude({field: 1, test: -1});
            expectToBeAQuery(excludeResult2);

            // ----- remove -----

            const removeResultPromise: Promise<object> = Sample.remove();
            expect(removeResultPromise).toBeInstanceOf(Promise);
            const removeResult: object = await removeResultPromise;
            expect(removeResult).toBeInstanceOf(Object);

            await Sample.remove(query);
        });
    });

    it('Timestamp', async () => {
        const obj: Timestamp = new Timestamp(1, 9);
        expect(obj).toBeInstanceOf(Timestamp);
        expect(obj).toBeInstanceOf(MongodbTimestamp);
    });

    it('ObjectId', async () => {
        const obj: ObjectId = new ObjectId();
        expect(obj).toBeInstanceOf(ObjectId);
        expect(obj).toBeInstanceOf(MongodbObjectId);
    });

    it('MinKey', async () => {
        const obj: MinKey = new MinKey();
        expect(obj).toBeInstanceOf(MinKey);
        expect(obj).toBeInstanceOf(MongodbMinKey);
    });

    it('MaxKey', async () => {
        const obj: MaxKey = new MaxKey();
        expect(obj).toBeInstanceOf(MaxKey);
        expect(obj).toBeInstanceOf(MongodbMaxKey);
    });

    it('DBRef', async () => {
        const obj: DBRef = new DBRef('namespace', new ObjectId());
        expect(obj).toBeInstanceOf(DBRef);
        expect(obj).toBeInstanceOf(MongodbDBRef);
    });

    it('Long', async () => {
        const obj: Long = new Long(1, 9);
        expect(obj).toBeInstanceOf(Long);
        expect(obj).toBeInstanceOf(MongodbLong);
    });
});
