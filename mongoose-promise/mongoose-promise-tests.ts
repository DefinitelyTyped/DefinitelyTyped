/// <reference path="mongoose-promise.d.ts" />

var cb = function () {};

var mongopromise: MongoosePromise<number>;
mongopromise.addBack(function (err, arg) {
  err.stack;
  arg.toFixed();
}).addBack(function (err, arg1, arg2) {
  err.stack;
  arg1.toFixed();
  arg2.toFixed();
});
mongopromise.addCallback(function (arg) {
  arg.toFixed();
}).addCallback(function (arg1, arg2) {
  arg1.toFixed();
  arg2.toFixed();
});
mongopromise.addErrback(function (err) {
  err.stack;
}).addErrback(cb);
mongopromise.catch(function (err) {
  err.stack;
}).catch(cb);
mongopromise.end();
mongopromise.error(999).error([]);
mongopromise.on('init', cb).on('init', cb);
mongopromise.reject({}).reject('').reject(new Error('hi'));
mongopromise.resolve(new Error('hi'), {}).resolve();
mongopromise.then(function (arg) {
  arg.toFixed();
  return 9;
}, function (err) {
  err.stack;
  return 9;
}).then(function (arg1, arg2) {
  arg1.toFixed();
  arg2.toFixed();
});
mongopromise.complete();
/* static properties */
MongoosePromise.ES6(function (complete, error) {
  complete.apply(this);
  error.apply(this);
});