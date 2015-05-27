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