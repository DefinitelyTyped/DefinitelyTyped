import * as sailsMongo from "sails-mongo";

// Adapter returned as-is by a consumer
function getAdapter(): any {
    return sailsMongo;
}
const typedAdapter: sailsMongo.Adapter = getAdapter();

// Adapter metadata
sailsMongo.identity; // $ExpectType "sails-mongo"
sailsMongo.adapterApiVersion; // $ExpectType 1
sailsMongo.defaults.schema; // $ExpectType false

// Bundled MongoDB driver
const id = new sailsMongo.mongodb.ObjectId();
id.toHexString(); // $ExpectType string
sailsMongo.mongodb.ObjectId.isValid("5f1d7a3b2c4e6f8a9b0c1d2e"); // $ExpectType boolean

// Datastore configuration
const datastores: Record<string, sailsMongo.DatastoreConfig> = {
    default: {
        adapter: "sails-mongo",
        url: "mongodb://localhost:27017/my-app",
    },
    replica: {
        adapter: sailsMongo,
        host: "db.example.com",
        port: 27017,
        user: "admin",
        password: "secret",
        database: "my-app",
        replicaSet: "rs0",
        authSource: "admin",
        tls: true,
        maxPoolSize: 20,
        serverSelectionTimeoutMS: 5000,
    },
};

const badConfig: sailsMongo.DatastoreConfig = {
    url: "mongodb://localhost/my-app",
    // @ts-expect-error - options outside the adapter whitelist are rejected
    maxIdleTimeMS: 1000,
};

// Low-level usage through a registered datastore's manager
const manager: sailsMongo.Manager = sailsMongo.datastores["default"].manager;
manager.collection("users").find({ age: { $gte: 18 } }).toArray(); // $ExpectType Promise<WithId<Document>[]>
manager.client.close(); // $ExpectType Promise<void>
manager.databaseName; // $ExpectType string

const driver = sailsMongo.datastores["default"].driver;
driver.mongodb === sailsMongo.mongodb;
driver.getConnection({ manager }).execSync().connection; // $ExpectType Manager
driver.createManager({ connectionString: "mongodb://localhost/my-app", meta: { tls: true } }).switch({
    error(err) {
        err; // $ExpectType Error
    },
    failed(report) {},
    success(report) {
        report.manager; // $ExpectType Manager
    },
});
driver.destroyManager({ manager }).exec((err, report) => {});

// Query meta keys
const meta: sailsMongo.QueryMeta = {
    fetch: true,
    makeLikeModifierCaseInsensitive: true,
    modelsNotUsingObjectIds: ["legacyuser"],
};

// Lifecycle methods
sailsMongo.registerDatastore(
    { identity: "default", adapter: "sails-mongo", url: "mongodb://localhost/my-app" },
    {
        user: {
            identity: "user",
            tableName: "user",
            primaryKey: "id",
            definition: {
                id: { columnName: "_id", type: "string", required: true },
                email: { columnName: "email", type: "string", autoMigrations: { unique: true } },
            },
        },
    },
    (err) => {
        err; // $ExpectType Error | undefined
    },
);
sailsMongo.teardown("default", (err) => {});

// DQL / DML methods
sailsMongo.find(
    "default",
    { method: "find", using: "user", criteria: { where: { email: "a@b.c" }, limit: 10, sort: [{ email: "ASC" }] } },
    (err, records) => {
        records; // $ExpectType PhysicalRecord[] | undefined
    },
);
sailsMongo.create(
    "default",
    { method: "create", using: "user", newRecord: { email: "a@b.c" }, meta },
    (err, record) => {
        record; // $ExpectType PhysicalRecord | undefined
    },
);
sailsMongo.count("default", { method: "count", using: "user", criteria: { where: {} } }, (err, total) => {
    total; // $ExpectType number | undefined
});
sailsMongo.sum(
    "default",
    { method: "sum", using: "order", criteria: { where: {} }, numericAttrName: "amount" },
    (err, sum) => {},
);
// @ts-expect-error - `newRecord` is required by `create`
sailsMongo.create("default", { method: "create", using: "user" }, () => {});

// Migratable methods
sailsMongo.define("default", "user", { email: { unique: true } }, (err) => {});
sailsMongo.drop("default", "user", undefined, (err) => {});
