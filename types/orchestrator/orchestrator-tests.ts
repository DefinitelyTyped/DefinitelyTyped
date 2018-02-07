'use strict';

import stream = require("stream");
import Q = require('q');
import Orchestrator = require('orchestrator');

const orchestrator = new Orchestrator();

// API:

//
// orchestrator.add(name[, deps][, function]);
//

orchestrator.add('thing1', function() {
    // do stuff
}).add('thing2', function() {
    // do stuff
});
orchestrator.add('mytask', ['array', 'of', 'task', 'names'], function() {
    // Do stuff
});
orchestrator.add('thing2', function(callback){
    const err: any = null;
    // do stuff
    callback(err);
});

orchestrator.add('thing3', function(){
    const deferred = Q.defer<void>();

    // do async stuff
    setTimeout(function() {
        deferred.resolve();
    }, 1);

    return deferred.promise;
});

orchestrator.add('thing4', function(){
    const stm = new stream.Stream();
    // do stream stuff
    return stm;
});

//
// orchestrator.task(name[, deps][, function]);
//

orchestrator.task('task1');

orchestrator.task('task2', function(cb) {
    cb(null);
});

orchestrator.task('task3', ['task1', 'task2'], function() {
    // do stuff
});

//
// orchestrator.hasTask(name);
//

const hasThing1: boolean = orchestrator.hasTask('thing1');

//
// orchestrator.start(tasks...[, cb]);
//

orchestrator.start('thing1', 'thing2', 'thing3', 'thing4', function(err: any) {
    // all done
}).start(['thing1', 'thing2'], ['thing3', 'thing4'], "thing5", function(err) {
    const res: any = err;
});

//
// orchestrator.stop()
//

orchestrator.stop();

//
// orchestrator.reset()
//

orchestrator.reset();

//
// orchestrator.on(event, cb);
//

orchestrator.on('task_start', function(e) {
    const message: string = e.message;
    const task: string = e.task;
    const err: any = e.err;
});
orchestrator.on('task_stop', function(e) {
    const message: string = e.message;
    const task: string = e.task;
    const duration: number = e.duration;
});

//
// orchestrator.onAll(cb);
//

orchestrator.onAll(function(e) {
    const message: string = e.message;
    const task: string = e.task;
    const err: any = e.err;
    const src: string = e.src;
});
