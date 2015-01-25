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

import os = require('os');
interface State {
  type: string;
}

var counter = 0;
rpc.onBroadcast<State>('getWorkerStat', function (params, cb) {
  if (params && params.type == 'fullStat') {
    cb(null, {
      pid: process.pid,
      hostname: os.hostname(),
      uptime: process.uptime(),
      counter: counter++
    });
  }
  else {
    cb(null, { counter: counter++ })
  }
});

var all_stats: any = {};
rpc.callBroadcast<State>(
  'getWorkerStat',
  { type: 'fullStat' },                    //request parameters
  {                                       //call options
    ttl: 1000,                          //wait response time  (1 seconds), after run onComplete
    onResponse: function (err: any, stat: any) {  //callback on each worker response
      all_stats[stat.hostname + ':' + stat.pid] = stat;
    },
    onComplete: function () {   //callback on ttl expired
      console.log('----------------------- WORKER STATISTICS ----------------------------------------');
      for (var worker in all_stats) {
        var s: any = all_stats[worker];
        console.log(worker, '\tuptime=', s.uptime.toFixed(2) + ' seconds', '\tcounter=', s.counter);
      }
    }
  });