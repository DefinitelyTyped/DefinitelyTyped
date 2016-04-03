/// <reference path="sequelize.d.ts" />

import Sequelize = require('sequelize');

var opts: Sequelize.Options;
var defOpts: Sequelize.DefineOptions = {
  indexes: [{
    fields: [""],
    type: "",
    method: ""
  }]
};
var attrOpts: Sequelize.AttributeOptions;
var defIndexOpts: Sequelize.DefineIndexOptions;
var indexOpts: Sequelize.IndexOptions;
var dropOpts: Sequelize.DropOptions;
var transOpts: Sequelize.TransactionOptions;
var syncOpts: Sequelize.SyncOptions;
var assocOpts: Sequelize.AssociationOptions;
var schemaOpts: Sequelize.SchemaOptions;
var findOpts: Sequelize.FindOptions
var findCrOpts: Sequelize.FindOrCreateOptions;
var queryOpts: Sequelize.QueryOptions;
var buildOpts: Sequelize.BuildOptions;
var copyOpts: Sequelize.CopyOptions;
var bulkCrOpts: Sequelize.BulkCreateOptions;
var destroyOpts: Sequelize.DestroyOptions;
var destroyInstOpts: Sequelize.DestroyInstanceOptions;
var updateOpts: Sequelize.UpdateOptions;
var saveOpts: Sequelize.SaveOptions;
var valOpts: Sequelize.ValidateOptions;
var incrOpts: Sequelize.IncrementOptions;

var promiseMe: Sequelize.Promise;
var emitMe: Sequelize.EventEmitter;

var sequelize = new Sequelize("", "");
sequelize = new Sequelize("", opts);
sequelize = new Sequelize("", "", "");
sequelize = new Sequelize("", "", opts);
sequelize = new Sequelize("", "", "", opts);

interface modelPojo {
  name: string;
}

interface modelInst extends Sequelize.Instance<modelInst, modelPojo>, modelPojo {
    
};

var myModelInst: modelInst;
var myModelPojo: modelPojo;

sequelize.define<modelInst, modelPojo>("MyTable", attrOpts, defOpts);
var model: Sequelize.Model<modelInst, modelPojo> = sequelize.model<modelInst, modelPojo>("MyTable");
model = sequelize.import<modelInst, modelPojo>("");
emitMe = sequelize.authenticate();
sequelize.cast({}, "");
sequelize.col("myCol");
sequelize.models.MyTable;
emitMe = sequelize.drop(dropOpts);
emitMe = sequelize.createSchema("schema");
emitMe = sequelize.dropAllSchemas();
emitMe = sequelize.dropSchema("dbo");
emitMe = sequelize.fn("upper", sequelize.col("username"));
sequelize.literal("");
sequelize.literal(1234);
sequelize.and("", 1234);
sequelize.or("", 123);
sequelize.where("", "");
sequelize.where("", sequelize.and("", ""));
promiseMe= sequelize.transaction(transOpts);
promiseMe = sequelize.transaction(transOpts, function (t:Sequelize.Transaction): boolean { return true; });
emitMe = sequelize.query<modelInst, modelPojo>("", model).complete(function (err, result) { });
emitMe = sequelize.query("");
var dialect: string = sequelize.getDialect();
emitMe = sequelize.showAllSchemas();
emitMe = sequelize.sync(syncOpts);

model.addHook("", "", function () { });
model.addHook("", function () { });
model.beforeValidate("", function () { });
model.afterValidate("", function () { });
model.beforeCreate("", function () { });
model.afterCreate("", function () { });
model.beforeDestroy("", function () { });
model.afterDestroy("", function () { });
model.beforeUpdate("", function () { });
model.afterUpdate("", function () { });
model.beforeBulkCreate("", function () { });
model.afterBulkCreate("", function () { });
model.beforeBulkDestroy("", function () { });
model.afterBulkDestroy("", function () { });
model.beforeBulkUpdate("", function () { });
model.afterBulkUpdate("", function () { });


model.hasOne<modelInst, modelPojo>(model);
model.hasOne<modelInst, modelPojo>(model, assocOpts);
model.belongsTo<modelInst, modelPojo>(model);
model.belongsTo<modelInst, modelPojo>(model, assocOpts);
model.hasMany<modelInst, modelPojo>(model);
model.hasMany<modelInst, modelPojo>(model, assocOpts);
model.belongsToMany<modelInst, modelPojo>(model);
model.belongsToMany<modelInst, modelPojo>(model, assocOpts);

promiseMe = model.sync();
promiseMe = model.drop(dropOpts);
model.schema("", schemaOpts);
model.getTableName();
model = model.scope({});
model = model.scope("");
model = model.scope([]);
model = model.scope(null);

model.find().then(function () { }, function () { });
model.find().then(function () { });
model.find().then(null, function () { });
model.find().then(function (result: modelInst) { });
model.find().then<modelInst>(function (result: modelInst): Sequelize.PromiseT<modelInst> { return model.find(1) });
model.find().then<modelInst, any>(function (result: modelInst): Sequelize.PromiseT<modelInst> { return model.find(1) }, function (): Sequelize.PromiseT<any> { return model.find(1) });

model.find().catch(function () { });
model.find().catch(function (result: modelInst) { });
model.find().catch(function (result: modelInst): Sequelize.Promise { return model.find(1) });

model.find().spread(function () { }, function () { });
model.find().spread(function () { });
model.find().spread(null, function () { });
model.find().spread(function (result: modelInst) { });
model.find().spread(function (result1: modelInst, result2: any) { });
model.find().spread(null, function (result1: any, result2: boolean) { });
model.find().spread(function (result: modelInst): Sequelize.Promise { return model.find(1) });
model.find().spread<modelInst>(function (result: modelInst): Sequelize.PromiseT<modelInst> { return model.find(1) });
model.find().spread<modelInst>(function (result: modelInst) { }, function (): Sequelize.PromiseT<modelInst> { return model.find(1) });
model.find().spread<modelInst, any>(function (result: modelInst): Sequelize.PromiseT<modelInst> { return model.find(1) }, function (): Sequelize.PromiseT<any> { return model.find(1) });

promiseMe = model.findAll(findOpts, queryOpts);
promiseMe = model.findAll(findOpts);
promiseMe = model.findAll();
promiseMe = model.find(findOpts, queryOpts);
promiseMe = model.find(findOpts);
promiseMe = model.find(1, queryOpts);
promiseMe = model.find(1);
promiseMe = model.find();
promiseMe = model.aggregate<number>("", "", findOpts);
promiseMe = model.count();
promiseMe = model.count(findOpts);
promiseMe = model.findAndCountAll(findOpts, queryOpts);
promiseMe = model.findAndCountAll(findOpts);
promiseMe = model.findAndCountAll();
promiseMe = model.max<number>("", findOpts);
promiseMe = model.max<number>("");
promiseMe = model.min<number>("", findOpts);
promiseMe = model.min<number>("");
promiseMe = model.sum("", findOpts);
promiseMe = model.sum("");
myModelInst = model.build(myModelPojo, buildOpts);
myModelInst = model.build(myModelPojo);
promiseMe = model.create(myModelPojo, copyOpts);
promiseMe = model.create(myModelPojo);
promiseMe = model.findOrInitialize({}, myModelPojo, queryOpts);
promiseMe = model.findOrInitialize({}, myModelPojo);
promiseMe = model.findOrInitialize({});
promiseMe = model.findOrCreate({}, myModelPojo, findCrOpts);
promiseMe = model.findOrCreate({}, myModelPojo);
promiseMe = model.findOrCreate({});
promiseMe = model.bulkCreate([myModelPojo], bulkCrOpts);
promiseMe = model.bulkCreate([myModelPojo]);
promiseMe = model.destroy({}, destroyOpts);
promiseMe = model.destroy({});
promiseMe = model.destroy();
promiseMe = model.update(myModelPojo, {}, updateOpts);
promiseMe = model.update(myModelPojo, {});
promiseMe = model.describe();
model.dataset;
//var isDefined: boolean = sequelize.isDefined("");

model.find().spread(function (arg1: string, arg2: number) {
  return model.find();
});

var isBool: boolean;
var strArr: Array<string>;

isBool = myModelInst.isNewRecord;
model = myModelInst.Model;
sequelize = myModelInst.sequelize;
isBool = myModelInst.isDeleted;
myModelPojo = myModelInst.values;
isBool = myModelInst.isDirty;
myModelPojo = myModelInst.primaryKeyValues;
myModelInst.getDataValue("");
myModelInst.setDataValue("", "");
myModelInst.setDataValue("", 123);
myModelInst.get("");
myModelInst.set("", "");
myModelInst.set("", 123);
isBool = myModelInst.changed("");
strArr = myModelInst.changed();
myModelInst.previous("");
promiseMe = myModelInst.save(["", ""], saveOpts);
promiseMe = myModelInst.save(["", ""]);
promiseMe = myModelInst.reload();
promiseMe = myModelInst.reload(findOpts);
promiseMe = myModelInst.validate(valOpts);
promiseMe = myModelInst.validate();
promiseMe = myModelInst.updateAttributes(myModelPojo, saveOpts);
promiseMe = myModelInst.destroy(destroyInstOpts);
promiseMe = myModelInst.destroy();
promiseMe = myModelInst.increment({}, incrOpts);
promiseMe = myModelInst.increment({});
promiseMe = myModelInst.decrement({}, incrOpts);
isBool = myModelInst.equal(myModelInst);
isBool = myModelInst.equalsOneOf([myModelInst]);
myModelPojo = myModelInst.toJSON();


// data types test
var types:any = Sequelize.STRING;
types = Sequelize.STRING(12);
types = Sequelize.STRING(12, true);
types = Sequelize.STRING.BINARY;
types = Sequelize.STRING(12).BINARY;
types = Sequelize.STRING.BINARY(12);
types = Sequelize.STRING({length:12, binary:true});
types = Sequelize.STRING({length:12}).BINARY;

types = Sequelize.CHAR;
types = Sequelize.CHAR(12);
types = Sequelize.CHAR(12, true);
types = Sequelize.CHAR.BINARY;
types = Sequelize.CHAR(12).BINARY;
types = Sequelize.CHAR.BINARY(12);
types = Sequelize.CHAR({length:12, binary:true});
types = Sequelize.CHAR({length:12}).BINARY;

types = Sequelize.TEXT;
types = Sequelize.TEXT('tiny');
types = Sequelize.TEXT({length:'tiny'});

types = Sequelize.NUMBER;
var numberOptions = {length:12, zerofill:true, decimals:1, precision:1, scale:1, unsigned:true};
types = Sequelize.NUMBER(numberOptions);

types = Sequelize.INTEGER;
types = Sequelize.INTEGER.ZEROFILL;
types = Sequelize.INTEGER.UNSIGNED;
types = Sequelize.INTEGER.ZEROFILL.UNSIGNED;
types = Sequelize.INTEGER.UNSIGNED.ZEROFILL;
types = Sequelize.INTEGER(12);
types = Sequelize.INTEGER(12).ZEROFILL;
types = Sequelize.INTEGER(12).UNSIGNED;
types = Sequelize.INTEGER(12).ZEROFILL.UNSIGNED;
types = Sequelize.INTEGER(12).UNSIGNED.ZEROFILL;
types = Sequelize.INTEGER(numberOptions);
types = Sequelize.INTEGER(numberOptions).ZEROFILL;
types = Sequelize.INTEGER(numberOptions).UNSIGNED;
types = Sequelize.INTEGER(numberOptions).ZEROFILL.UNSIGNED;
types = Sequelize.INTEGER(numberOptions).UNSIGNED.ZEROFILL;

types = Sequelize.BIGINT;
types = Sequelize.BIGINT.ZEROFILL;
types = Sequelize.BIGINT.UNSIGNED;
types = Sequelize.BIGINT.ZEROFILL.UNSIGNED;
types = Sequelize.BIGINT.UNSIGNED.ZEROFILL;
types = Sequelize.BIGINT(12);
types = Sequelize.BIGINT(12).ZEROFILL;
types = Sequelize.BIGINT(12).UNSIGNED;
types = Sequelize.BIGINT(12).ZEROFILL.UNSIGNED;
types = Sequelize.BIGINT(12).UNSIGNED.ZEROFILL;
types = Sequelize.BIGINT(numberOptions);
types = Sequelize.BIGINT(numberOptions).ZEROFILL;
types = Sequelize.BIGINT(numberOptions).UNSIGNED;
types = Sequelize.BIGINT(numberOptions).ZEROFILL.UNSIGNED;
types = Sequelize.BIGINT(numberOptions).UNSIGNED.ZEROFILL;

types = Sequelize.FLOAT;
types = Sequelize.FLOAT.ZEROFILL;
types = Sequelize.FLOAT.UNSIGNED;
types = Sequelize.FLOAT.ZEROFILL.UNSIGNED;
types = Sequelize.FLOAT.UNSIGNED.ZEROFILL;
types = Sequelize.FLOAT(12);
types = Sequelize.FLOAT(12).ZEROFILL;
types = Sequelize.FLOAT(12).UNSIGNED;
types = Sequelize.FLOAT(12).ZEROFILL.UNSIGNED;
types = Sequelize.FLOAT(12).UNSIGNED.ZEROFILL;
types = Sequelize.FLOAT(12,12);
types = Sequelize.FLOAT(12,12).ZEROFILL;
types = Sequelize.FLOAT(12,12).UNSIGNED;
types = Sequelize.FLOAT(12,12).ZEROFILL.UNSIGNED;
types = Sequelize.FLOAT(12,12).UNSIGNED.ZEROFILL;
types = Sequelize.FLOAT(numberOptions);
types = Sequelize.FLOAT(numberOptions).ZEROFILL;
types = Sequelize.FLOAT(numberOptions).UNSIGNED;
types = Sequelize.FLOAT(numberOptions).ZEROFILL.UNSIGNED;
types = Sequelize.FLOAT(numberOptions).UNSIGNED.ZEROFILL;

types = Sequelize.DOUBLE;
types = Sequelize.DOUBLE.ZEROFILL;
types = Sequelize.DOUBLE.UNSIGNED;
types = Sequelize.DOUBLE.ZEROFILL.UNSIGNED;
types = Sequelize.DOUBLE.UNSIGNED.ZEROFILL;
types = Sequelize.DOUBLE(12);
types = Sequelize.DOUBLE(12).ZEROFILL;
types = Sequelize.DOUBLE(12).UNSIGNED;
types = Sequelize.DOUBLE(12).ZEROFILL.UNSIGNED;
types = Sequelize.DOUBLE(12).UNSIGNED.ZEROFILL;
types = Sequelize.DOUBLE(12,12);
types = Sequelize.DOUBLE(12,12).ZEROFILL;
types = Sequelize.DOUBLE(12,12).UNSIGNED;
types = Sequelize.DOUBLE(12,12).ZEROFILL.UNSIGNED;
types = Sequelize.DOUBLE(12,12).UNSIGNED.ZEROFILL;
types = Sequelize.DOUBLE(numberOptions);
types = Sequelize.DOUBLE(numberOptions).ZEROFILL;
types = Sequelize.DOUBLE(numberOptions).UNSIGNED;
types = Sequelize.DOUBLE(numberOptions).ZEROFILL.UNSIGNED;
types = Sequelize.DOUBLE(numberOptions).UNSIGNED.ZEROFILL;

types = Sequelize.TIME;
types = Sequelize.DATE;
types = Sequelize.DATEONLY;
types = Sequelize.BOOLEAN;
types = Sequelize.NOW;

types = Sequelize.BLOB;
types = Sequelize.BLOB('tiny');
types = Sequelize.BLOB({length:'tiny'});

types = Sequelize.DECIMAL;
types = Sequelize.DECIMAL.ZEROFILL;
types = Sequelize.DECIMAL.UNSIGNED;
types = Sequelize.DECIMAL.ZEROFILL.UNSIGNED;
types = Sequelize.DECIMAL.UNSIGNED.ZEROFILL;
types = Sequelize.DECIMAL(12,12);
types = Sequelize.DECIMAL(12,12).ZEROFILL;
types = Sequelize.DECIMAL(12,12).UNSIGNED;
types = Sequelize.DECIMAL(12,12).ZEROFILL.UNSIGNED;
types = Sequelize.DECIMAL(12,12).UNSIGNED.ZEROFILL;
types = Sequelize.DECIMAL(numberOptions);
types = Sequelize.DECIMAL(numberOptions).ZEROFILL;
types = Sequelize.DECIMAL(numberOptions).UNSIGNED;
types = Sequelize.DECIMAL(numberOptions).ZEROFILL.UNSIGNED;
types = Sequelize.DECIMAL(numberOptions).UNSIGNED.ZEROFILL;

types = Sequelize.NUMERIC;
types = Sequelize.NUMERIC.ZEROFILL;
types = Sequelize.NUMERIC.UNSIGNED;
types = Sequelize.NUMERIC.ZEROFILL.UNSIGNED;
types = Sequelize.NUMERIC.UNSIGNED.ZEROFILL;
types = Sequelize.NUMERIC(12,12);
types = Sequelize.NUMERIC(12,12).ZEROFILL;
types = Sequelize.NUMERIC(12,12).UNSIGNED;
types = Sequelize.NUMERIC(12,12).ZEROFILL.UNSIGNED;
types = Sequelize.NUMERIC(12,12).UNSIGNED.ZEROFILL;
types = Sequelize.NUMERIC(numberOptions);
types = Sequelize.NUMERIC(numberOptions).ZEROFILL;
types = Sequelize.NUMERIC(numberOptions).UNSIGNED;
types = Sequelize.NUMERIC(numberOptions).ZEROFILL.UNSIGNED;
types = Sequelize.NUMERIC(numberOptions).UNSIGNED.ZEROFILL;

types = Sequelize.UUID;
types = Sequelize.UUIDV1;
types = Sequelize.UUIDV4;
types = Sequelize.HSTORE;
types = Sequelize.JSON;
types = Sequelize.JSONB;
types = Sequelize.VIRTUAL;

types = Sequelize.ARRAY(Sequelize.INTEGER(12));
types = Sequelize.ARRAY({type: Sequelize.BLOB});
var obj = {};
var isbool:boolean = types.is(obj, obj);

types = Sequelize.NONE;
types = Sequelize.ENUM("one", "two", 'three');

types = Sequelize.RANGE(Sequelize.INTEGER(12));
types = Sequelize.RANGE({subtype: Sequelize.BLOB});

types = Sequelize.REAL;
types = Sequelize.REAL.ZEROFILL;
types = Sequelize.REAL.UNSIGNED;
types = Sequelize.REAL.ZEROFILL.UNSIGNED;
types = Sequelize.REAL.UNSIGNED.ZEROFILL;
types = Sequelize.REAL(12,12);
types = Sequelize.REAL(12,12).ZEROFILL;
types = Sequelize.REAL(12,12).UNSIGNED;
types = Sequelize.REAL(12,12).ZEROFILL.UNSIGNED;
types = Sequelize.REAL(12,12).UNSIGNED.ZEROFILL;
types = Sequelize.REAL(numberOptions);
types = Sequelize.REAL(numberOptions).ZEROFILL;
types = Sequelize.REAL(numberOptions).UNSIGNED;
types = Sequelize.REAL(numberOptions).ZEROFILL.UNSIGNED;
types = Sequelize.REAL(numberOptions).UNSIGNED.ZEROFILL;

types = Sequelize.DOUBLE;
types = Sequelize.DOUBLE.ZEROFILL;
types = Sequelize.DOUBLE.UNSIGNED;
types = Sequelize.DOUBLE.ZEROFILL.UNSIGNED;
types = Sequelize.DOUBLE.UNSIGNED.ZEROFILL;
types = Sequelize.DOUBLE(12,12);
types = Sequelize.DOUBLE(12,12).ZEROFILL;
types = Sequelize.DOUBLE(12,12).UNSIGNED;
types = Sequelize.DOUBLE(12,12).ZEROFILL.UNSIGNED;
types = Sequelize.DOUBLE(12,12).UNSIGNED.ZEROFILL;
types = Sequelize.DOUBLE(numberOptions);
types = Sequelize.DOUBLE(numberOptions).ZEROFILL;
types = Sequelize.DOUBLE(numberOptions).UNSIGNED;
types = Sequelize.DOUBLE(numberOptions).ZEROFILL.UNSIGNED;
types = Sequelize.DOUBLE(numberOptions).UNSIGNED.ZEROFILL;

types = Sequelize["DOUBLE PRECISION"];
types = Sequelize["DOUBLE PRECISION"].ZEROFILL;
types = Sequelize["DOUBLE PRECISION"].UNSIGNED;
types = Sequelize["DOUBLE PRECISION"].ZEROFILL.UNSIGNED;
types = Sequelize["DOUBLE PRECISION"].UNSIGNED.ZEROFILL;
types = Sequelize["DOUBLE PRECISION"](12,12);
types = Sequelize["DOUBLE PRECISION"](12,12).ZEROFILL;
types = Sequelize["DOUBLE PRECISION"](12,12).UNSIGNED;
types = Sequelize["DOUBLE PRECISION"](12,12).ZEROFILL.UNSIGNED;
types = Sequelize["DOUBLE PRECISION"](12,12).UNSIGNED.ZEROFILL;
types = Sequelize["DOUBLE PRECISION"](numberOptions);
types = Sequelize["DOUBLE PRECISION"](numberOptions).ZEROFILL;
types = Sequelize["DOUBLE PRECISION"](numberOptions).UNSIGNED;
types = Sequelize["DOUBLE PRECISION"](numberOptions).ZEROFILL.UNSIGNED;
types = Sequelize["DOUBLE PRECISION"](numberOptions).UNSIGNED.ZEROFILL;