import * as mongodb from "mongodb";
import * as mongoose from "mongoose";

import { MyModel } from "./definitions";

// dummy variables
var cb = function () {};

/*
 * Most of these tests are taken directly from the examples
 * in the Mongoose API documentation.
 *
 * http://mongoosejs.com/docs/guide.html
 * http://mongoosejs.com/docs/api.html
 */

/*
 * section index.js
 * http://mongoosejs.com/docs/api.html#index-js
 */
var connectUri = "mongodb://user:pass@localhost:port/database";
const connection1: Promise<mongoose.Mongoose> = mongoose.connect(connectUri);
const connection2: Promise<mongoose.Mongoose> = mongoose.connect(connectUri, {
    user: "larry",
    pass: "housan",
    config: {
        autoIndex: true,
    },
    mongos: true,
    bufferCommands: false,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
    heartbeatFrequencyMS: 2000,
    useCreateIndex: true,
    autoIndex: true,
    autoCreate: true,
});
const connection3 = mongoose.connect(connectUri, function (error) {
    error.stack;
});

/**
 * Test taken from MongoDB CSFLE guide
 * https://docs.mongodb.com/drivers/use-cases/client-side-field-level-encryption-guide
 */

const connection4: Promise<mongoose.Mongoose> = mongoose.connect(connectUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoEncryption: {
        keyVaultNamespace: "encryption.__keyVault",
        kmsProviders: {},
        schemaMap: {},
        extraOptions: {},
    },
});

var mongooseConnection: mongoose.Connection = mongoose.createConnection();
mongooseConnection.dropDatabase().then(() => {});
mongooseConnection.dropCollection("foo").then(() => {});
mongoose.createConnection(connectUri).then(
    conn => {
        return conn.collections;
    },
    () => {
        var connections: mongoose.Connection[] = mongoose.connections;
    },
);
mongoose.createConnection(connectUri).openUri("");
mongoose
    .createConnection(connectUri, {
        db: {
            native_parser: true,
        },
    })
    .openUri("");
const dcWithCallback: void = mongoose.disconnect(cb);
const dcPromise: Promise<void> = mongoose.disconnect();
mongoose.get("test");
mongoose
    .model(
        "Actor",
        new mongoose.Schema(
            {
                name: String,
            },
            {
                autoCreate: true,
                autoIndex: true,
            },
        ),
        "collectionName",
        true,
    )
    .find({});
mongoose.model("Actor").find({});
mongoose.modelNames()[0].toLowerCase();
mongoose.deleteModel("Actor");
mongoose.models.Actor.findOne({}).exec();
new new mongoose.Mongoose(9, 8, 7).Mongoose(1, 2, 3).connect("");
mongoose.plugin(cb, {}).connect("");
mongoose.set("test", "value");
mongoose.set("debug", function (collectionName: any, methodName: any, arg1: any, arg2: any) {});
mongoose.STATES.hasOwnProperty("");
mongoose.STATES.disconnected === 0;
mongoose.STATES.connected === 1;

mongoose.connection.on("error", cb);
new mongoose.mongo.MongoError("error").stack;
mongoose.SchemaTypes.String;
mongoose.SchemaTypes.ObjectId;
mongoose.SchemaTypes.Decimal128;
mongoose.SchemaTypes.Map;
mongoose.Types.ObjectId;
mongoose.Types.Decimal128;
mongoose.version.toLowerCase();

const sslConnections: { [key: string]: mongoose.Connection } = {
    basic: mongoose.createConnection(connectUri, { ssl: true }),
    customCA: mongoose.createConnection(connectUri, {
        ssl: true,
        sslCA: [new Buffer("ca string")],
        sslCRL: [new Buffer("crl buffer")],
        sslCert: "ssl cert",
        sslKey: new Buffer("ssl private key"),
        sslPass: "ssl password",
        servername: "localhost",
        checkServerIdentity: true,
        ciphers: "ciphers",
        ecdhCurve: "ecdhCurve",
    }),
};

/*
 * section collection.js
 * http://mongoosejs.com/docs/api.html#collection-js
 *
 * section drivers/node-mongodb-native/collection.js
 * http://mongoosejs.com/docs/api.html#drivers-node-mongodb-native-collection-js
 */
var coll1 = <mongoose.Collection>{};
coll1.$format(999).toLowerCase();
coll1.$print("name", "i", [1, 2, 3]);
coll1.getIndexes();
/* inherited properties */
coll1.collectionName;
coll1.conn;
coll1.name;
coll1.ensureIndex();
coll1.find({});
coll1.insert({}, {});

var coll2 = new mongoose.Collection("", new mongoose.Connection(mongoose));
coll2.$format(999).toLowerCase();
/* inherited properties */
coll2.initializeOrderedBulkOp;
coll2.indexExists;

/*
 * section connection.js
 * http://mongoosejs.com/docs/api.html#connection-js
 *
 * section section drivers/node-mongodb-native/connection.js
 * http://mongoosejs.com/docs/api.html#drivers-node-mongodb-native-connection-js
 */
var conn1: mongoose.Connection = mongoose.createConnection("mongodb://user:pass@localhost:port/database");
conn1 = new mongoose.Connection(mongoose);
conn1
    .close()
    .then(function () {})
    .catch(function (err) {});
conn1
    .close(true)
    .then(function () {})
    .catch(function (err) {});
conn1.close(function (err) {});
conn1.close(true, function (err) {});
conn1.collection("name").$format(999);
conn1.model("myModel", new mongoose.Schema({}), "myCol").find();
conn1.deleteModel("myModel");
conn1.models.myModel.findOne().exec();
interface IStatics {
    staticMethod1: (a: number) => string;
}
conn1.modelNames()[0].toLowerCase();
conn1.config.hasOwnProperty("");
conn1.db.bufferMaxEntries;
conn1.collections["coll"].$format(999);
conn1.readyState.toFixed();
conn1.name.toLowerCase();
conn1.host.toLowerCase();
conn1.port.toFixed();
conn1.useDb("myDb").useDb("");
conn1.useDb("myDb").useDb("", {});
conn1.useDb("myDb").useDb("", { useCache: false });
conn1.useDb("myDb").useDb("", { useCache: true });
mongoose.Connection.STATES.hasOwnProperty("");
mongoose.Connection.STATES.disconnected === 0;
mongoose.Connection.STATES.connected === 1;

/* inherited properties */
conn1.on("data", cb);
conn1.addListener("close", cb);

// The connection returned by useDb is *not* thenable.
// From https://github.com/DefinitelyTyped/DefinitelyTyped/pull/26057#issuecomment-396150819
const getDB = async (tenant: string) => {
    return conn1.useDb(tenant);
};

/*
 * section error.js
 * http://mongoosejs.com/docs/api.html#error-js
 */
var mongooseError: mongoose.Error = new mongoose.Error("error");
mongooseError.name;
/* inherited properties */
mongooseError.message;
mongooseError.stack;
/* static properties */
mongoose.Error.messages.hasOwnProperty("");
mongoose.Error.Messages.hasOwnProperty("");

/*
 * section error/cast.js
 * https://mongoosejs.com/docs/api.html#mongooseerror_MongooseError.CastError
 */
var castError: mongoose.Error.CastError = new mongoose.Error.CastError("", "", "");
castError.name;
castError.stringValue;
castError.kind;
castError.path;
castError.value;
castError.setModel("foo");
/* inherited properties */
castError.message;
castError.stack;

/*
 * section error/validator.js
 * https://mongoosejs.com/docs/api.html#mongooseerror_MongooseError.ValidatorError
 */
var validatorError: mongoose.Error.ValidatorError = new mongoose.Error.ValidatorError({ message: "bar" });
validatorError.name;
validatorError.properties;
validatorError.kind;
validatorError.path;
validatorError.value;
validatorError.toString().toLowerCase();
validatorError.formatMessage("foo", {});
validatorError.formatMessage("foo", (bar: any) => {
    return bar;
});
/* inherited properties */
validatorError.message;
validatorError.stack;

/*
 * section error/validation.js
 * https://mongoosejs.com/docs/api.html#mongooseerror_MongooseError.ValidationError
 */
var doc = <mongoose.Document>{};
(() => {
    // Scope to avoid type mixing
    var validationError: mongoose.Error.ValidationError | undefined = new mongoose.Error.ValidationError(doc);
    validationError.name;
    validationError.toString().toLowerCase();
    validationError.inspect();
    validationError.toJSON().hasOwnProperty("");
    validationError.addError("foo", validatorError);
    /* inherited properties */
    validationError.message;
    validationError.stack;
})();

/*
 * section error/parallelSave.js
 * https://mongoosejs.com/docs/api.html#mongooseerror_MongooseError.ParallelSaveError
 */
var parallelSaveError: mongoose.Error.ParallelSaveError = new mongoose.Error.ParallelSaveError(doc);
parallelSaveError.name;
/* inherited properties */
parallelSaveError.message;
parallelSaveError.stack;

/*
 * section error/overwriteModel.js
 * https://mongoosejs.com/docs/api.html#mongooseerror_MongooseError.OverwriteModelError
 */
var overwriteModelError: mongoose.Error.OverwriteModelError = new mongoose.Error.OverwriteModelError("foo");
overwriteModelError.name;
/* inherited properties */
overwriteModelError.message;
overwriteModelError.stack;

/*
 * section error/missingSchema.js
 * https://mongoosejs.com/docs/api.html#mongooseerror_MongooseError.MissingSchemaError
 */
var missingSchemaError: mongoose.Error.MissingSchemaError = new mongoose.Error.MissingSchemaError("foo");
missingSchemaError.name;
/* inherited properties */
missingSchemaError.message;
missingSchemaError.stack;

/*
 * section error/divergentArray.js
 * https://mongoosejs.com/docs/api.html#mongooseerror_MongooseError.MissingSchemaError
 */
var divergentArrayError: mongoose.Error.DivergentArrayError = new mongoose.Error.DivergentArrayError(["foo", "bar"]);
missingSchemaError.name;
/* inherited properties */
missingSchemaError.message;
missingSchemaError.stack;

const pluralize = mongoose.pluralize();
const plural: string = pluralize("foo");

/*
 * section querycursor.js
 * http://mongoosejs.com/docs/api.html#querycursor-js
 */
var querycursor = <mongoose.QueryCursor<any>>{};
querycursor
    .close(function (error, result) {
        result.execPopulate();
    })
    .catch(cb);
querycursor
    .eachAsync(
        function (doc) {
            doc.execPopulate();
        },
        function (err) {},
    )
    .catch(cb);
querycursor.next(cb).catch(cb);
/* inherited properties */
querycursor.pause();
querycursor.pipe(process.stdout);
/* practical example */
var QCModel = mongoose.model("QC", new mongoose.Schema({ name: String }));
QCModel.find({})
    .cursor({})
    .on("data", function (doc: any) {
        doc.depopulate("name");
    })
    .on("error", function (error: any) {
        throw error;
    })
    .close()
    .then(cb)
    .catch(cb);
querycursor
    .map(function (doc) {
        doc.foo = "bar";
        return doc;
    })
    .on("data", function (doc: any) {
        console.log(doc.foo);
    });
querycursor
    .map(function (doc) {
        doc.foo = "bar";
        return doc;
    })
    .next(function (error, doc) {
        console.log(doc.foo);
    });

QCModel.watch().once("change", (change: any) => {
    console.log(change);
});

QCModel.watch([{ $match: { author: "dave" } }], {
    maxAwaitTimeMS: 10,
}).once("change", (change: any) => {
    console.log(change);
});

/*
 * section virtualtype.js
 * http://mongoosejs.com/docs/api.html#virtualtype-js
 */
var virtualtype: mongoose.VirtualType = new mongoose.VirtualType({}, "hello");
virtualtype.applyGetters({}, {});
virtualtype.applySetters({}, {});
virtualtype.get(cb).get(cb);
virtualtype.set(cb).set(cb);

/*
 * section schema.js
 * http://mongoosejs.com/docs/api.html#schema-js
 */
var schema: mongoose.Schema = new mongoose.Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: { type: Date, default: Date.now },
    age: { type: Number, min: 18, max: 65 },
    mixed: mongoose.Schema.Types.Mixed,
    _someId: mongoose.Schema.Types.ObjectId,
    someDecimal: mongoose.Schema.Types.Decimal128,
    array: [],
    ofString: [String],
    ofNumber: [Number],
    ofDates: [Date],
    ofBuffer: [Buffer],
    ofBoolean: [Boolean],
    ofMixed: [mongoose.Schema.Types.Mixed],
    ofObjectId: [mongoose.Schema.Types.ObjectId],
    map: {
        type: Map,
        of: String,
    },
    nested: {
        stuff: { type: String, lowercase: true, trim: true },
    },
});
schema.add(
    {
        mixedArray: {
            type: [mongoose.Schema.Types.Mixed],
            required: true,
        },
    },
    "prefix",
);
schema
    .eachPath(function (path, type) {
        path.toLowerCase();
        type.sparse(true);
    })
    .eachPath(cb);
schema.get("path");
schema
    .index({
        name: 1,
        binary: -1,
    })
    .index({}, {});
schema.indexes().slice();
schema.method("name", cb).method({
    m1: cb,
    m2: cb,
});
schema.path("a", mongoose.Schema.Types.Buffer).path("a");
schema.pathType("m1").toLowerCase();
schema
    .plugin(function (schema: mongoose.Schema, opts?: any) {
        schema.get("path");
        if (opts) {
            opts.hasOwnProperty("");
        }
    })
    .plugin(cb, { opts: true });

/* `.pre` hook tests */

interface PreHookTestDocumentInterface extends mongoose.Document {}
interface PreHookTestQueryInterface<T> extends mongoose.Query<T> {}
interface PreHookTestAggregateInterface<T> extends mongoose.Aggregate<T> {}
interface PreHookTestModelInterface<T extends mongoose.Document> extends mongoose.Model<T> {}

// it is used to ensure that all testing cases return a value of mongoose.Schema type
const preHookTestSchemaArr: mongoose.Schema[] = [];

// testing order:
//   serial with default value and returning void
//   serial with a type argument and returning a promise
//   parallel with default value and returning void
//   parallel with a type argument and returning a promise

// Document
preHookTestSchemaArr.push(
    schema.pre(
        "init",
        function (next) {
            const isDefaultType: mongoose.Document = this;
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre<PreHookTestDocumentInterface>(
        "init",
        function (next) {
            const isSpecificType: PreHookTestDocumentInterface = this;
            return Promise.resolve("");
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre(
        "init",
        true,
        function (next, done) {
            const isDefaultType: mongoose.Document = this;
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre<PreHookTestDocumentInterface>(
        "init",
        true,
        function (next, done) {
            const isSpecificType: PreHookTestDocumentInterface = this;
            return Promise.resolve("");
        },
        err => {},
    ),
);

// Query
preHookTestSchemaArr.push(
    schema.pre(
        "count",
        function (next) {
            const isDefaultType: mongoose.Query<any> = this;
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre<PreHookTestQueryInterface<number>>(
        "count",
        function (next) {
            const isSpecificType: PreHookTestQueryInterface<number> = this;
            return Promise.resolve("");
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre(
        "count",
        true,
        function (next, done) {
            const isDefaultType: mongoose.Query<any> = this;
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre<PreHookTestQueryInterface<number>>(
        "count",
        true,
        function (next, done) {
            const isSpecificType: PreHookTestQueryInterface<number> = this;
            return Promise.resolve("");
        },
        err => {},
    ),
);

// Aggregate
preHookTestSchemaArr.push(
    schema.pre(
        "aggregate",
        function (next) {
            const isDefaultType: mongoose.Aggregate<any> = this;
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre<PreHookTestAggregateInterface<number>>(
        "aggregate",
        function (next) {
            const isSpecificType: PreHookTestAggregateInterface<number> = this;
            return Promise.resolve("");
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre(
        "aggregate",
        true,
        function (next, done) {
            const isDefaultType: mongoose.Aggregate<any> = this;
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre<PreHookTestAggregateInterface<number>>(
        "aggregate",
        true,
        function (next, done) {
            const isSpecificType: PreHookTestAggregateInterface<number> = this;
            return Promise.resolve("");
        },
        err => {},
    ),
);

// Model<Document>
preHookTestSchemaArr.push(
    schema.pre(
        "insertMany",
        function (next, docs) {
            const isDefaultType: mongoose.Model<mongoose.Document> = this;
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre<PreHookTestModelInterface<PreHookTestDocumentInterface>>(
        "insertMany",
        function (next, docs) {
            const isSpecificType: PreHookTestModelInterface<PreHookTestDocumentInterface> = this;
            return Promise.resolve("");
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre(
        "insertMany",
        true,
        function (next, done, docs) {
            const isDefaultType: mongoose.Model<mongoose.Document> = this;
        },
        err => {},
    ),
);
preHookTestSchemaArr.push(
    schema.pre<PreHookTestModelInterface<PreHookTestDocumentInterface>>(
        "insertMany",
        true,
        function (next, done, docs) {
            const isSpecificType: PreHookTestModelInterface<PreHookTestDocumentInterface> = this;
            return Promise.resolve("");
        },
        err => {},
    ),
);

schema
    .post("save", function (error: mongoose.Error, doc: mongoose.Document, next: (err?: mongoose.NativeError) => void) {
        error.stack;
        doc.model;
        next.apply;
    })
    .post("save", function (doc: mongoose.Document, next: (err?: mongoose.NativeError) => void) {
        doc.model;
        next(new Error());
    })
    .post("save", function (doc: mongoose.Document) {
        doc.model;
    });

schema.post("insertMany", function (docs: mongoose.Document[], next: () => void) {
    const isDefaultType: mongoose.Model<mongoose.Document> = this;
    next();
});

schema.post("insertMany", function (error, docs: mongoose.Document[], next) {
    const isDefaultType: mongoose.Model<mongoose.Document> = this;
    next();
});

schema.post("insertMany", async function (docs: mongoose.Document[]): Promise<void> {
    const isDefaultType: mongoose.Model<mongoose.Document> = this;
    return;
});

schema.post("find", function (docs: mongoose.Document[], next: (err?: mongoose.NativeError) => void): void {
    const isDefaultType: mongoose.Query<mongoose.Document> = this;
    return;
});

schema.post(
    "find",
    async function (docs: mongoose.Document[], next: (err?: mongoose.NativeError) => void): Promise<void> {
        const isDefaultType: mongoose.Query<mongoose.Document> = this;
        return;
    },
);

schema.queue("m1", [1, 2, 3]).queue("m2", [[]]);
schema.remove("path");
schema.remove(["path1", "path2", "path3"]);
schema.requiredPaths(true)[0].toLowerCase();
schema.set("id", true).set("id");
schema.static("static", cb).static({
    s1: cb,
    s2: cb,
});
schema.virtual("virt", {}).applyGetters({}, {});
schema.virtualpath("path").applyGetters({}, {});
/* static properties */
mongoose.Schema.indexTypes[0].toLowerCase();
mongoose.Schema.reserved.hasOwnProperty("");
/* inherited properties */
schema.addListener("e", cb);
/* practical examples */
interface Animal {
    findSimilarTypes(cb: any): Promise<Animal>;
}
var animalSchema = new mongoose.Schema<Animal>({
    name: String,
    type: String,
});
animalSchema.methods.findSimilarTypes = function (cb) {
    return this.model("Animal").find({ type: this.type }, cb);
};
var Animal: any = mongoose.model("Animal", animalSchema);
var dog: any = new Animal({ type: "dog" });
dog["findSimilarTypes"](function (err: any, dogs: any) {
    console.log(dogs);
});
new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number,
        text: String,
    },
    meta2: {
        text: mongoose.Schema.Types.Number,
        select: {
            type: String,
        },
    },
});
new mongoose.Schema({ name: { type: String, index: true } });
new mongoose.Schema({ loc: { type: [Number], index: "hashed" } });
new mongoose.Schema({ loc: { type: [Number], index: "2d", sparse: true } });
new mongoose.Schema({ loc: { type: [Number], index: { type: "2dsphere", sparse: true } } });
new mongoose.Schema({ date: { type: Date, index: { unique: true, expires: "1d" } } });
new mongoose.Schema({ born: { type: Date, required: "{PATH} is required!" } });
new mongoose.Schema({
    born: {
        type: Date,
        required: function () {
            return this.age >= 18;
        },
    },
});
new mongoose.Schema({ state: { type: String, enum: ["opening", "open", "closing", "closed"] } });
new mongoose.Schema({
    state: {
        type: String,
        enum: {
            values: ["opening", "open", "closing", "closed"],
            message: "enum validator failed for path `{PATH}` with value `{VALUE}`",
        },
    },
});
new mongoose.Schema({ name: { type: String, match: /^a/ } });
new mongoose.Schema({ name: { type: String, match: [/\.html$/, "That file doesn't end in .html ({VALUE})"] } });
new mongoose.Schema({
    createdAt: { type: Date, expires: 60 * 60 * 24 },
});
new mongoose.Schema({ createdAt: { type: Date, expires: "1.5h" } });
new mongoose.Schema({ d: { type: Date, max: new Date("2014-01-01") } });
new mongoose.Schema({
    d: { type: Date, max: [new Date("2014-01-01"), "The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX})."] },
});
new mongoose.Schema({
    d: {
        type: Date,
        min: [new Date("1970-01-01"), "The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN})."],
    },
});
new mongoose.Schema({
    integerOnly: {
        type: Number,
        get: (v: number) => Math.round(v),
        set: (v: number) => Math.round(v),
        validate: {
            isAsync: false,
            validator: (val: number): boolean => {
                return false;
            },
        },
    },
    asyncValidated: {
        type: Number,
        validate: {
            isAsync: true,
            validator: (val: number, done): void => {
                setImmediate(done, true);
            },
            message: props => `${props.value} is invalid`,
        },
    },
    promiseValidated: {
        type: Number,
        validate: {
            validator: async (val: number) => {
                return val === 2;
            },
            message: "Number is invalid",
        },
    },
});
new mongoose.Schema({
    fnOnly: { type: String, validate: () => true },
    fnStringArray: { type: String, validate: [() => true, "failed"] },
    fnStringObject: { type: String, validate: { validator: () => true, message: "failed" } },
    promiseFnOnly: { type: String, validate: () => Promise.reject(new Error("oops")) },
    promiseFnStringArray: { type: String, validate: [() => Promise.reject(), "oops"] },
    promiseFnStringObject: { type: String, validate: { validator: () => Promise.reject(), message: "oops" } },
});
new mongoose.Schema({
    name: {
        type: String,
        validate: [
            {
                validator: () => {
                    return true;
                },
                msg: "uh oh",
            },
            {
                validator: () => {
                    return true;
                },
                msg: "failed",
            },
        ],
    },
});
animalSchema.statics.findByName = function (name: any, cb: any) {
    return this.find({ name: new RegExp(name, "i") }, cb);
};
Animal["findByName"]("fido", function (err: any, animals: any) {
    console.log(animals);
});
animalSchema.virtual("name.full").get(function () {
    return this.name.first + " " + this.name.last;
});
var childSchema = new mongoose.Schema({ name: String });
var parentSchema = new mongoose.Schema({
    children: [childSchema],
    child: childSchema,
    name: {
        index: true,
        required: true,
    },
});
new mongoose.Schema({
    eggs: {
        type: Number,
        min: [6, "Too few eggs"],
        max: 12,
    },
    bacon: {
        type: Number,
        required: [true, "Why no bacon?"],
    },
    drink: {
        type: String,
        enum: ["Coffee", "Tea"],
    },
});

new mongoose.Schema({})
    .plugin<any>(
        function (schema: mongoose.Schema, options: any) {
            schema.add({ lastMod: Date });
            schema.pre("save", function (next: Function) {
                (this as any).lastMod = new Date();
                next();
            });
            if (options && options["index"]) {
                schema.path("lastMod").index(options["index"]);
            }
        },
        { index: true },
    )
    .plugin<any>(
        function (schema: mongoose.Schema, options: any) {
            schema.add({ lastMod: Date });
            schema.pre("save", function (next: Function) {
                (this as any).lastMod = new Date();
                next();
            });
            if (options && options["index"]) {
                schema.path("lastMod").index(options["index"]);
            }
        },
        { index: true },
    );

new mongoose.Schema({ foo: String }, { strict: "throw", strictQuery: true });

export default function (schema: mongoose.Schema) {
    schema.pre("init", function (this: mongoose.Document, next: (err?: Error) => void): void {
        console.log("success!");
    });
}

// plugins
function MyPlugin(schema: mongoose.Schema, opts?: string) {}
new mongoose.Schema({}).plugin(MyPlugin);

interface PluginOption {
    modelName: string;
    timestamp: string;
}

function logger(modelName: string, timestamp: string) {
    // call special logger with options
}

function AwesomeLoggerPlugin(schema: mongoose.Schema, options: PluginOption) {
    if (options) {
        schema.pre("save", function (next: Function) {
            logger(options.modelName, options.timestamp);
        });
    }
}

new mongoose.Schema({}).plugin<PluginOption>(AwesomeLoggerPlugin, { modelName: "Executive", timestamp: "yyyy/MM/dd" });

mongoose.plugin<PluginOption>(AwesomeLoggerPlugin, { modelName: "Executive", timestamp: "yyyy/MM/dd" });

/*
 * section types/subdocument.js
 * http://mongoosejs.com/docs/api.html#types-subdocument-js
 */
// The constructor is private api, but we'll use it to test
var subdocument: mongoose.Types.Subdocument = new mongoose.Types.Subdocument();
subdocument.ownerDocument().errors;
subdocument.parent().parent();
subdocument.remove({}, function (err) {
    return 6;
});
/* inherited properties */
subdocument.execPopulate();

/*
 * section types/array.js
 * http://mongoosejs.com/docs/api.html#types-array-js
 */
var mongooseArray: mongoose.Types.Array<string> = new mongoose.Types.Array<string>();
mongooseArray.$shift().toLowerCase();
mongooseArray.remove().$shift();
mongooseArray.$pop().toLowerCase();
mongooseArray.addToSet("hi", 9, 9, "4")[0].toLowerCase();
mongooseArray.indexOf({ name: "obj" }).toFixed();
mongooseArray.inspect();
mongooseArray.nonAtomicPush(9, 8, "hi").toFixed();
mongooseArray.pop().toLowerCase();
mongooseArray.pull(5, 4, "hi").$shift();
mongooseArray.push([]).toFixed();
mongooseArray.set(1, "hi").$shift();
mongooseArray.shift().toLowerCase();
mongooseArray
    .sort(function (a, b) {
        return a.length - b.length;
    })
    .unshift();
mongooseArray.splice(4, 1).unshift();
mongooseArray.toObject({ depopulate: true }).unshift();
mongooseArray.unshift(2, 4, "hi").toFixed();
/* inherited properties */
mongooseArray.concat();
mongooseArray.length;
/* practical examples */
interface MySubEntity extends mongoose.Types.Subdocument {
    property1: string;
    property2: string;
}
interface MyEntity extends mongoose.Document {
    sub: mongoose.Types.Array<MySubEntity>;
}
var myEntity = <MyEntity>{};
var subDocArray = myEntity.sub.filter(sd => {
    sd.property1;
    sd.property2.toLowerCase();
    return true;
});

/*
 * section types/documentarray.js
 * http://mongoosejs.com/docs/api.html#types-documentarray-js
 */
// The constructor is private api, but we'll use it to test
var documentArray: mongoose.Types.DocumentArray<mongoose.Document> = new mongoose.Types.DocumentArray();
documentArray.create({}).errors;
documentArray.id(new Buffer("hi"));
documentArray.inspect();
documentArray.toObject({}).length;
/* inherited from mongoose.Types.Array */
documentArray.$shift();
/* inherited from Native Array */
documentArray.concat();
/* practical example */
interface MySubEntity1 extends mongoose.Types.Subdocument {
    property1: string;
    property2: string;
}
interface MyEntity1 extends mongoose.Document {
    sub: mongoose.Types.DocumentArray<MySubEntity>;
}
var newEnt = <MyEntity1>{};
var newSub: MySubEntity1 = newEnt.sub.create({ property1: "example", property2: "example" });

/*
 * section types/buffer.js
 * http://mongoosejs.com/docs/api.html#types-buffer-js
 */
var mongooseBuffer: mongoose.Types.Buffer = new mongoose.Types.Buffer("hello");
mongooseBuffer.copy(mongooseBuffer, 1, 2, 3).toFixed();
mongooseBuffer.copy(new Buffer("hi")).toFixed();
mongooseBuffer.equals(new Buffer("hi")).valueOf();
mongooseBuffer.subtype(123);
mongooseBuffer.toObject().value();
mongooseBuffer.write("world", 3, 2, 1).toFixed();
/* inherited properties */
mongooseBuffer.compare(mongooseBuffer);
/* inherited static properties */
mongoose.Types.Buffer.from([1, 2, 3]);

/*
 * section types/decimal128.js
 * http://mongoosejs.com/docs/api.html#types-decimal128-js
 */
var decimal128: mongoose.Types.Decimal128 = mongoose.Types.Decimal128.fromString("123.45678901234567");
decimal128 = new mongoose.Types.Decimal128(new Buffer("12345"));
/* practical examples */
export interface ILargeValuesSchema extends mongoose.Document {
    sum: mongoose.Schema.Types.Decimal128;
}
export var LargeValuesSchema = new mongoose.Schema({
    sum: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
});

/*
 * section types/objectid.js
 * http://mongoosejs.com/docs/api.html#types-objectid-js
 */
var objectId: mongoose.Types.ObjectId = mongoose.Types.ObjectId.createFromHexString("0x1234");
objectId = new mongoose.Types.ObjectId(12345);
objectId = mongoose.Types.ObjectId(12345);
objectId.getTimestamp();
/* practical examples */
export interface IManagerSchema extends mongoose.Document {
    user: mongoose.Schema.Types.ObjectId;
}
export var ManagerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

/*
 * section types/embedded.js
 * http://mongoosejs.com/docs/api.html#types-embedded-js
 */
var embeddedDocument: mongoose.Types.Embedded = new mongoose.Types.Embedded();
embeddedDocument.inspect().hasOwnProperty("");
embeddedDocument.invalidate("hi", new Error("bleh")).valueOf();
embeddedDocument.ownerDocument().execPopulate();
embeddedDocument.parent().execPopulate();
embeddedDocument.parentArray().$shift();
embeddedDocument.remove().invalidate("hi", new Error("hi"));
embeddedDocument.markModified("path");
/* inherited properties */
embeddedDocument.execPopulate();

/**
 * section types/map.js
 * https://mongoosejs.com/docs/schematypes.html#maps
 */
var map: mongoose.Types.Map<string> = new mongoose.Types.Map<string>();
map.get("key");
map.set("key", "value");
map.delete("key");
map.toObject().delete;
map.toObject({ flattenMaps: true }).key;

/*
 * section schema/array.js
 * http://mongoosejs.com/docs/api.html#schema-array-js
 */
var schemaArray: mongoose.Schema.Types.Array = new mongoose.Schema.Types.Array(
    "key",
    new mongoose.SchemaType("hi"),
    {},
);
schemaArray.checkRequired("hello").valueOf();
/** static properties */
mongoose.Schema.Types.Array.schemaName.toLowerCase();
/** inherited properties */
schemaArray.sparse(true);

/*
 * section schema/string.js
 * http://mongoosejs.com/docs/api.html#schema-string-js
 */
var MongoDocument = <mongoose.Document>{};
var schemastring: mongoose.Schema.Types.String = new mongoose.Schema.Types.String("hello");
schemastring.checkRequired(234, MongoDocument).valueOf();
schemastring.enum(["hi", "a", "b"]).enum("hi").enum({});
schemastring.lowercase().lowercase();
schemastring.match(/re/, "error").match(/re/);
schemastring.maxlength(999, "error").maxlength(999);
schemastring.minlength(999, "error").minlength(999);
schemastring.trim().trim();
schemastring.uppercase().uppercase();
/* static properties */
mongoose.Schema.Types.String.schemaName.toLowerCase();
/* inherited properties */
schemastring.sparse(true);

/*
 * section schema/documentarray.js
 * http://mongoosejs.com/docs/api.html#schema-documentarray-js
 */
var documentarray: mongoose.Schema.Types.DocumentArray = new mongoose.Schema.Types.DocumentArray(
    "key",
    new mongoose.Schema(),
);
/* static properties */
mongoose.Schema.Types.DocumentArray.schemaName.toLowerCase();
/* inherited properties */
documentarray.sparse(true);
/* http://thecodebarbarian.com/mongoose-4.8-embedded-discriminators */
documentarray.discriminator("name", new mongoose.Schema({ foo: String }));
/* https://mongoosejs.com/docs/api.html#documentarraypath_DocumentArrayPath-discriminator */
documentarray.discriminator("name2", new mongoose.Schema({ bar: String }), "circle");

/*
 * section schema/number.js
 * http://mongoosejs.com/docs/api.html#schema-number-js
 */
var schemanumber: mongoose.Schema.Types.Number = new mongoose.Schema.Types.Number("num", {});
schemanumber.checkRequired(999, MongoDocument).valueOf();
schemanumber.max(999, "error").max(999);
schemanumber.min(999, "error").min(999);
/* static properties */
mongoose.Schema.Types.Number.schemaName.toLowerCase();
/* inherited properties */
schemanumber.sparse(true);

/*
 * section schema/date.js
 * http://mongoosejs.com/docs/api.html#schema-date-js
 */
var schemadate: mongoose.Schema.Types.Date = new mongoose.Schema.Types.Date("99");
schemadate.checkRequired([], MongoDocument).valueOf();
schemadate.expires(99).expires("now");
schemadate.max(new Date(), "error").max(new Date(""));
schemadate.min(new Date(), "error").min(new Date(""));
/* static properties */
mongoose.Schema.Types.Date.schemaName.toLowerCase();
/* inherited properties */
schemadate.sparse(true);

/*
 * section schema/buffer.js
 * http://mongoosejs.com/docs/api.html#schema-buffer-js
 */
var schemabuffer: mongoose.Schema.Types.Buffer = new mongoose.Schema.Types.Buffer("99");
schemabuffer.checkRequired(999, MongoDocument).valueOf();
/* static properties */
mongoose.Schema.Types.Buffer.schemaName.toLowerCase();
/* inherited properties */
schemabuffer.sparse(true);

/*
 * section schema/boolean.js
 * http://mongoosejs.com/docs/api.html#schema-boolean-js
 */
var schemaboolean: mongoose.Schema.Types.Boolean = new mongoose.Schema.Types.Boolean("99");
schemaboolean.checkRequired(99).valueOf();
/* static properties */
mongoose.Schema.Types.Boolean.schemaName.toLowerCase();
/* inherited properties */
schemaboolean.sparse(true);

/*
 * section schema/objectid.js
 * http://mongoosejs.com/docs/api.html#schema-objectid-js
 */
var schemaobjectid: mongoose.Schema.Types.ObjectId = new mongoose.Schema.Types.ObjectId("99");
schemaobjectid.auto(true).auto(false);
schemaobjectid.checkRequired(99, MongoDocument).valueOf();
/* static properties */
mongoose.Schema.Types.ObjectId.schemaName.toLowerCase();
/* inherited properties */
schemaobjectid.sparse(true);

/*
 * section schema/mixed.js
 * http://mongoosejs.com/docs/api.html#schema-mixed-js
 */
var schemamixed: mongoose.Schema.Types.Mixed = new mongoose.Schema.Types.Mixed("99");
/* static properties */
mongoose.Schema.Types.Mixed.schemaName.toLowerCase();
/* inherited properties */
schemamixed.sparse(true);

/*
 * section schema/embedded.js
 * http://mongoosejs.com/docs/api.html#schema-embedded-js
 */
var schemaembedded: mongoose.Schema.Types.Embedded = new mongoose.Schema.Types.Embedded(new mongoose.Schema(), "99");
/* inherited properties */
schemaembedded.sparse(true);

/*
 * section aggregate.js
 * http://mongoosejs.com/docs/api.html#aggregate-js
 */
var aggregate: mongoose.Aggregate<Object[]>;
aggregate = mongoose.model("ex").aggregate([{ $match: { age: { $gte: 21 } } }]);
aggregate = new mongoose.Aggregate<Object[]>();
aggregate = new mongoose.Aggregate<Object[]>({ $project: { a: 1, b: 1 } });
aggregate = new mongoose.Aggregate<Object[]>({ $project: { a: 1, b: 1 } }, { $skip: 5 });
aggregate = new mongoose.Aggregate<Object[]>([{ $project: { a: 1, b: 1 } }, { $skip: 5 }]);
aggregate.addCursorFlag("flag", true).addCursorFlag("", false);
aggregate.allowDiskUse(true).allowDiskUse(false, []);
aggregate.append({ $project: { field: 1 } }, { $limit: 2 });
aggregate.append([{ $match: { daw: "Logic Audio X" } }]);
aggregate.collation({ locale: "en_US", strength: 1 });
aggregate.count("countName");
aggregate.facet({ fieldA: [{ a: 1 }], fieldB: [{ b: 1 }] });
aggregate.cursor({ batchSize: 1000 }).exec().each(cb);
aggregate.exec().then(cb).catch(cb);
aggregate.option({ foo: "bar" }).exec();
const aggregateDotPipeline: any[] = aggregate.pipeline();
aggregate.explain(cb).then(cb).catch(cb);
aggregate.group({ _id: "$department" }).group({ _id: "$department" });
aggregate.hint({ _id: 1 });
aggregate.limit(10).limit(10);
var lookupOpt = {
    from: "users",
    localField: "userId",
    foreignField: "_id",
    as: "users",
};
aggregate.lookup(lookupOpt).lookup(lookupOpt);
aggregate.match({
    department: { $in: ["sales", "engineering"] },
});
aggregate.model(new (mongoose.model("xx"))()).model(null);
aggregate.near({
    near: [40.724, -73.997],
    distanceField: "dist.calculated",
    maxDistance: 0.008,
    query: { type: "public" },
    includeLocs: "dist.location",
    uniqueDocs: true,
    num: 5,
});
aggregate.project("a b -_id");
aggregate.project({ a: 1, b: 1, _id: 0 });
aggregate.project({
    newField: "$b.nested",
    plusTen: { $add: ["$val", 10] },
    sub: {
        name: "$a",
    },
});
aggregate.project({ salary_k: { $divide: ["$salary", 1000] } });
aggregate.read("primaryPreferred").read("pp");
aggregate.replaceRoot("user");
aggregate.replaceRoot({ x: { $concat: ["$this", "$that"] } });
aggregate.sample(3).sample(3);
aggregate.skip(10).skip(10);
aggregate.sort({ field: "asc", test: -1 });
aggregate.sort("field -test");
aggregate.then(cb).catch(cb);
aggregate.unwind("tags").unwind("tags");
aggregate.unwind("a", "b", "c").unwind("tag1", "tag2");
aggregate
    .unwind({
        path: "tags",
        includeArrayIndex: "idx",
        preserveNullAndEmptyArrays: true,
    })
    .unwind({
        path: "tags",
        includeArrayIndex: "idx",
        preserveNullAndEmptyArrays: true,
    });
aggregate
    .unwind(
        {
            path: "a",
            includeArrayIndex: "idx",
            preserveNullAndEmptyArrays: true,
        },
        {
            path: "b",
            includeArrayIndex: "idx",
            preserveNullAndEmptyArrays: true,
        },
        {
            path: "c",
            includeArrayIndex: "idx",
            preserveNullAndEmptyArrays: true,
        },
    )
    .unwind(
        {
            path: "tag1",
            includeArrayIndex: "idx",
            preserveNullAndEmptyArrays: true,
        },
        {
            path: "tag2",
            includeArrayIndex: "idx",
            preserveNullAndEmptyArrays: true,
        },
    );

/*
 * section schematype.js
 * http://mongoosejs.com/docs/api.html#schematype-js
 */
new mongoose.SchemaType("hello", 9, "hello");
var STSchema = new mongoose.Schema({
    mixed: mongoose.Schema.Types.Mixed,
});
var schematype = schema.path("mixed");
schematype.default("default");
STSchema.path("born").get(cb).get(cb);
STSchema.path("name").index(true).index({ unique: true, sparse: true });
schematype.required(true, "mess").required(true);
schematype.select(true).select(false);
STSchema.path("name").set(cb).set(cb);
schematype.sparse(true).sparse(true);
schematype.text(true).text(true);
schematype.unique(true).unique(true);
schematype.validate(/re/).validate({}, "error").validate(cb, "try", "tri");

/*
 * section promise.js
 * http://mongoosejs.com/docs/api.html#promise-js
 */
var mongopromise = new mongoose.Promise();
mongopromise = new mongoose.Promise(function (err: any, arg: any) {
    arg.sparse(true);
    err.stack;
});
mongopromise = new mongoose.Promise(function (err: any, arg1: any, arg2: any) {
    arg1.sparse(true);
    arg2.sparse(true);
    err.stack;
});
mongopromise
    .addBack(function (err: any, arg: any) {
        err.stack;
        arg.sparse(true);
    })
    .addBack(function (err: any, arg1: any, arg2: any) {
        err.stack;
        arg1.sparse(true);
        arg2.sparse(true);
    });
mongopromise
    .addCallback(function (arg: any) {
        arg.sparse(true);
    })
    .addCallback(function (arg1: any, arg2: any) {
        arg1.sparse(true);
        arg2.sparse(true);
    });
mongopromise
    .addErrback(function (err: any) {
        err.stack;
    })
    .addErrback(function () {});
mongopromise
    .catch(function (err: any) {
        err.stack;
    })
    .catch(function () {});
mongopromise.end();
mongopromise.error(999).error([]);
mongopromise.on("init", function () {}).on("init", function () {});
mongopromise.reject({}).reject("").reject(new Error("hi"));
mongopromise.resolve(new Error("hi"), {}).resolve();
mongopromise
    .then(
        function (arg: any) {
            arg.sparse(true);
        },
        function (err: any) {
            err.stack;
        },
    )
    .then(function (arg1: any, arg2: any) {
        arg1.sparse(true);
        arg2.sparse(true);
    });
mongopromise.complete(new mongoose.SchemaType("")).complete(new mongoose.SchemaType(""), new mongoose.SchemaType(""));
/* static properties */
mongoose.Promise.ES6(function (complete: Function, error: Function) {
    complete.apply(this);
    error.apply(this);
});

/* inherited properties */
mongopromise.chain(mongopromise);
mongoose.Promise.FAILURE;
/* practical example */
mongoose
    .model("")
    .findOne({})
    .exec()
    .then(function (arg) {
        if (arg) {
            arg.save;
        }
        return 1;
    })
    .then(function (num) {
        num.toFixed;
        return new Promise<string>((resolve, reject) => {
            resolve("string");
        });
    })
    .then(function (str) {
        str.toLowerCase;
        return mongoose.model("").findOne({}).exec();
    })
    .then(function (arg) {
        if (arg) {
            arg.save;
        }
        return 1;
    })
    .catch(function (err) {
        return 1;
    })
    .then(function (arg) {
        arg.toFixed;
        return new Promise<{ a: string; b: number }>((resolve, reject) => {
            resolve({ a: "hi", b: 29 });
        });
    })
    .then(function (arg) {
        arg.a.toLowerCase;
        arg.b.toFixed;
    });

mongoose
    .model("")
    .findOne({})
    .then(function (arg) {
        if (arg) {
            arg.save;
        }
        return 2;
    })
    .then(function (num) {
        num.toFixed;
        return new Promise<string>((resolve, reject) => {
            resolve("str");
        });
    })
    .then(function (str) {
        str.toLowerCase;
    });

mongoose
    .model("")
    .aggregate([])
    .then(function (arg) {
        return 2;
    })
    .then(function (num) {
        num.toFixed;
        return new Promise<string>((resolve, reject) => {
            resolve("str");
        });
    })
    .then(function (str) {
        str.toLowerCase;
    });

/* pluggable promise */
(<any>mongoose).Promise = Promise;
require("mongoose").Promise = Promise;
mongoose.Promise.race;
mongoose.Promise.all;

mongoose.model("").findOne().exec().then(cb);

function testPromise_all() {
    interface IUser extends mongoose.Document {
        name: string;
    }

    const User = mongoose.model<IUser>("User", new mongoose.Schema({ name: String }));

    const dc: mongoose.DocumentQuery<IUser | null, IUser> = User.findOne({});
    const dc2: PromiseLike<IUser | null> = dc;
    Promise.all([dc]);
}

interface IStatics {
    staticMethod2: (a: number) => string;
}
interface MyDocument extends mongoose.Document {
    prop: string;
    method: () => void;
}
interface MyModel extends mongoose.Model<MyDocument> {
    staticProp: string;
    staticMethod: () => void;
}
interface ModelStruct {
    doc: MyDocument;
    model: MyModel;
    method1: (callback: (model: MyModel, doc: MyDocument) => void) => MyModel;
}
var modelStruct1 = <ModelStruct>{};
var myModel1: MyModel;
var myDocument1: MyDocument;
modelStruct1
    .method1(function (myModel1, myDocument1) {
        myModel1.staticProp;
        myModel1.staticMethod();
        myDocument1.prop;
        myDocument1.method();
    })
    .staticProp.toLowerCase();
var mySchema = new mongoose.Schema({});
export var Final: MyModel = <MyModel>mongoose.connection.model<MyDocument>("Final", mySchema);
Final.findOne(function (err: any, doc: MyDocument) {
    doc.save();
    doc.remove();
    doc.model("");
});
export var Final2: MyModel = mongoose.model<MyDocument, MyModel>("Final2", mySchema);
Final2.staticMethod();
Final2.staticProp;
var final2 = new Final2();
final2.prop;
final2.method;
interface ibase extends mongoose.Document {
    username: string;
}
interface extended extends ibase {
    email: string;
}
const base: mongoose.Model<ibase> = mongoose.model<ibase>("testfour");
const extended: mongoose.Model<extended> = base.discriminator<extended>("extendedS", schema);
const x = new extended({
    username: "hi", // required in baseSchema
    email: "beddiw", // required in extededSchema
});
// Setting a different value for `discriminatorKey`
const extended2: mongoose.Model<extended> = base.discriminator<extended>("extendedS", schema, "extended");

new mongoose.Schema(
    {},
    {
        timestamps: {
            createdAt: "foo",
            updatedAt: "bar",
        },
    },
);

new mongoose.Schema(
    {},
    {
        collation: {
            strength: 1,
            locale: "en_US",
        },
    },
);

new mongoose.Schema(
    {},
    {
        toObject: {
            versionKey: false,
        },
        toJSON: {
            depopulate: true,
        },
    },
);

const aggregatePrototypeGraphLookup: mongoose.Aggregate<any> = MyModel.aggregate([]).graphLookup({});
const addFieldsAgg: mongoose.Aggregate<any> = aggregatePrototypeGraphLookup.addFields({});

MyModel.findById("foo").then((doc: mongoose.Document) => {
    const a: boolean = doc.isDirectSelected("bar");
    const b: boolean = doc.$isDeleted();
    doc.$isDeleted(true);
});

MyModel.translateAliases({});

const queryPrototypeError: Error | null = MyModel.findById({}).error();
const queryProrotypeErrorSetUnset: mongoose.Query<any> = MyModel.findById({}).error(null).error(new Error("foo"));

MyModel.createIndexes().then(() => {});
MyModel.createIndexes((err: any): void => {}).then(() => {});

mongoose.connection.createCollection("foo").then(() => {});
mongoose.connection.createCollection("foo", { wtimeout: 5 }).then(() => {});
mongoose.connection
    .createCollection("foo", { wtimeout: 5 }, (err: Error, coll): void => {
        coll.collectionName;
    })
    .then(() => {});

const db = mongoose.connection;
const User = mongoose.model("User", new mongoose.Schema({ name: String }));

db.states.disconnected === 0;
db.states.connected === 1;

let session: mongoose.ClientSession;
mongoose.connection
    .createCollection("users")
    .then(() => db.startSession())
    .then(_session => {
        session = _session;
        session.startTransaction();
        User.findOne({ name: "foo" }).session(session);
        session.commitTransaction();
        return User.create({ name: "foo" });
    });

const Event = db.model("Event", new mongoose.Schema({ createdAt: Date }), "Event");

db.createCollection("users")
    .then(() => db.startSession())
    .then(_session => {
        session = _session;
        return User.create({ name: "foo" });
    })
    .then(() => {
        session.startTransaction();
        return User.findOne({ name: "foo" }).session(session).exec();
    })
    .then(() => {
        session.commitTransaction();
        return User.findOne({ name: "bar" }).exec();
    })
    .catch(() => {
        session.abortTransaction();
    });
db.createCollection("Event")
    .then(() => db.startSession())
    .then(_session => {
        session = _session;
        session.startTransaction();
        return Event.insertMany(
            [
                { createdAt: new Date("2018-06-01") },
                { createdAt: new Date("2018-06-02") },
                { createdAt: new Date("2017-06-01") },
                { createdAt: new Date("2017-05-31") },
            ],
            { session: session },
        );
    })
    .then(() =>
        Event.aggregate([
            {
                $group: {
                    _id: {
                        month: { $month: "$createdAt" },
                        year: { $year: "$createdAt" },
                    },
                    count: { $sum: 1 },
                },
            },
            { $sort: { count: -1, "_id.year": -1, "_id.month": -1 } },
        ])
            .session(session)
            .exec(),
    )
    .then((res: any) => {
        session.commitTransaction();
    });

/** https://mongoosejs.com/docs/transactions.html */

const Customer = db.model("Customer", new mongoose.Schema({ name: String }));

db.createCollection("customers")
    .then(() => db.startSession())
    .then(_session => {
        session = _session;
        // Start a transaction
        session.startTransaction();
        // This `create()` is part of the transaction because of the `session`
        // option.
        return Customer.create([{ name: "Test" }], { session: session });
    })
    // Transactions execute in isolation, so unless you pass a `session`
    // to `findOne()` you won't see the document until the transaction
    // is committed.
    .then((customer: mongoose.Document[]) => Customer.findOne({ name: "Test" }).exec())
    // This `findOne()` will return the doc, because passing the `session`
    // means this `findOne()` will run as part of the transaction.
    .then(() => Customer.findOne({ name: "Test" }).session(session).exec())
    // Once the transaction is committed, the write operation becomes
    // visible outside of the transaction.
    .then(() => session.commitTransaction())
    .then(() => Customer.findOne({ name: "Test" }).exec());

/**
 * https://mongoosejs.com/docs/guide.html#writeConcern
 */
new mongoose.Schema(
    { name: String },
    {
        writeConcern: {
            w: "majority",
            j: true,
            wtimeout: 1000,
        },
    },
);

/**
 * https://mongoosejs.com/docs/guide.html#shardKey
 */
new mongoose.Schema(
    { name: String },
    {
        shardKey: {
            tag: 1,
            name: 1,
        },
    },
);

/* Query helpers: https://mongoosejs.com/docs/guide.html#query-helpers */

interface Animal2 extends mongoose.Document {
    name: string;
    type: string;
    tags: string[];
}
var animal2Schema = new mongoose.Schema({
    name: String,
    type: String,
    tags: { type: [String], index: true }, // field level
});
let animal2QueryHelpers = {
    byName<Q extends mongoose.DocumentQuery<any, Animal2>>(this: Q, name: string) {
        return this.where({ name: new RegExp(name, "i") });
    },
};
animal2Schema.query = animal2QueryHelpers;
var Animal2 = mongoose.model<Animal2, mongoose.Model<Animal2, typeof animal2QueryHelpers>>("Animal", animal2Schema);
Animal2.find()
    .byName("fido")
    .exec(function (err, animals) {
        console.log(animals);
    });
Animal2.findOne()
    .byName("fido")
    .exec(function (err, animal) {
        console.log(animal);
    });
Animal2.find()
    .distinct("_id")
    .byName("fido")
    .exec(function (err, animal) {
        console.log(animal);
    });
Animal2.findOne()
    .where({ type: "dog" })
    .byName("fido")
    .exec(function (err, animal) {
        console.log(animal);
    });

/* Filter query */

interface Foobar extends mongoose.Document {
    _id: number;
    name: string;
    type: string;
    tags: string[];
}
var foobarSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    type: String,
    tags: { type: [String], index: true }, // field level
});
var Foobar = mongoose.model<Foobar, mongoose.Model<Foobar>>("AnimFoobarl", foobarSchema);
Foobar.find({ _id: 123 });

new mongoose.Schema(
    {
        createdAt: Number,
        updatedAt: Number,
        name: String,
    },
    {
        timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    },
);

new mongoose.Schema(
    {
        createdAt: Number,
        updatedAt: Number,
        name: String,
    },
    {
        timestamps: { currentTime: () => new Date() },
    },
);
