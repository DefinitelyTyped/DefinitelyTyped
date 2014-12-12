/// <reference path="./amqp-rpc.d.ts" />
import amqp_rpc = require('amqp-rpc');
var rpc = amqp_rpc.factory();

interface Name {
  name?: string;
}

rpc.on<number>('inc', function (param, cb) {
  var prevVal = param;
  var nextVal = param + 2;
  cb(++param, prevVal, nextVal);
});

rpc.on<Name>('say.*', function (param, cb, inf) {
  var arr = inf.cmd.split('.');
  var name = (param && param.name) ? param.name : 'world';
  cb(arr[1] + ' ' + name + '!');
});

rpc.on('withoutCB', function (param, cb, inf) {
  if (cb) {
    cb('please run function without cb parameter')
  }
  else {
    console.log('this is function withoutCB');
  }
});

rpc.call<number>('inc', 5, function (param1, param2, param3) {
  console.log(param1, param2, param3);
});

rpc.call<Name>('say.Hello', { name: 'John' }, function (msg) {
  console.log('results of say.Hello:', msg);  //output: Hello John!
});

rpc.call<any>('withoutCB', {}, function (msg) {
  console.log('withoutCB results:', msg);  //output: please run function without cb parameter
});

rpc.call<any>('withoutCB', {}); //output message on server side console