/// <reference path="../requirejs/require.d.ts" />
/// <reference path="orchestrator.d.ts" />

'use strict';

import Orchestrator from 'orchestrator';

var orchestrator = new Orchestrator();


// API:

//
// orchestrator.add(name[, deps][, function]);
//

orchestrator.add('thing1', function() {
    // do stuff
});
orchestrator.add('thing2', function() {
    // do stuff
});
orchestrator.add('mytask', ['array', 'of', 'task', 'names'], function() {
    // Do stuff
});
orchestrator.add('thing2', function(callback){
    var err: any = null;
    // do stuff
    callback(err);
});


var Q = require('q');

orchestrator.add('thing3', function(){
    var deferred = Q.defer();

    // do async stuff
    setTimeout(function () {
        deferred.resolve();
    }, 1);

    return deferred.promise;
});


//TODO: map-stream currently not on DefinitelyTyped
//var map = require('map-stream');
//
//orchestrator.add('thing4', function(){
//    var stream = map(function (args, cb) {
//        cb(null, args);
//    });
//    // do stream stuff
//    return stream;
//});

//
// orchestrator.hasTask(name);
//

orchestrator.hasTask('thing1');

//
// orchestrator.start(tasks...[, cb]);
//

orchestrator.start('thing1', 'thing2', 'thing3', 'thing4', function (err) {
    // all done
});
orchestrator.start(['thing1','thing2'], ['thing3','thing4']);


//
// orchestrator.stop()
//

orchestrator.stop();

//
// orchestrator.on(event, cb);
//

orchestrator.on('task_start', function (e) {
    var message: string = e.message;
    var task: string = e.task;
    var err: any = e.err;
});
orchestrator.on('task_stop', function (e) {
    var message: string = e.message;
    var task: string = e.task;
    var duration: number = e.duration;
});

//
// orchestrator.onAll(cb);
//

orchestrator.onAll(function (e) {
    var message: string = e.message;
    var task: string = e.task;
    var err: any = e.err;
    var src: string = e.src;
});


