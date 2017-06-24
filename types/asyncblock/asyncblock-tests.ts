
/// <reference types="node" />

import asyncblock = require('asyncblock');
import fs = require('fs');


// Sleeping in series
asyncblock((flow: asyncblock.IFlow) => {
    console.time('time');

    setTimeout(flow.add(), 1000);
    flow.wait(); //Wait for the first setTimeout to finish

    setTimeout(flow.add(), 2000);
    flow.wait(); //Wait for the second setTimeout to finish

    console.timeEnd('time'); //3 seconds
});

// Trapping results
asyncblock((flow) => {
    var path1 = '', path2 = '';
    //Start two parallel file reads
    fs.readFile(path1, 'utf8', flow.set('contents1'));
    fs.readFile(path2, 'utf8', flow.set('contents2'));

    //Print the concatenation of the results when both reads are finished
    console.log(flow.get<string>('contents1') + flow.get<string>('contents2'));

    var paths: string[] = [];
    //Wait for a large number of tasks
    for(var i = 0; i < 100; i++){
        //Add each task in parallel with i as the key
        fs.readFile(paths[i], 'utf8', flow.add(i));
    }

    //Wait for all the tasks to finish. Results is an object of the form {key1: value1, key2: value2, ...}
    var results = flow.wait();

    var path = '';
    //One-liner syntax for waiting on a single task
    var contents = flow.sync( fs.readFile(path, 'utf8', flow.callback()) );

    //See overview & API docs for more extensive description of techniques
});

// Error handling
var asyncTask = (callback: (err: any) => void) => {
    asyncblock((flow) => {
        flow.errorCallback = callback; //Setting the errorCallback is the easiest way to perform error handling. If erroCallback isn't set, and an error occurs, it will be thrown instead of returned to the callback

        var path = '';
        fs.readFile(path, 'utf8', flow.add()); //If readFile encountered an error, it would automatically get passed to the callback
        var contents = flow.wait();

        console.log(contents); //If an error occured above, this code won't run
    });
};

// Returning results
var asyncTask2 = (callback: (err: any, res: string) => void) => {
    asyncblock((flow) => {
        var path = '';
        var contents = flow.sync( fs.readFile(path, 'utf8', flow.callback()) ); //If readFile encountered an error, it would automatically get passed to the callback

        return contents; //Return the value you want to be passed to the callback
    }, callback); //The callback can be specified as the 2nd arg to asyncblock. It will be called with the value returned from the asyncblock as the 2nd arg.
                  //If an error occurs, the callback will be called with the error as the first argument.
};


// Sample
asyncblock.nostack((flow) => {
    fs.readFile('path1', 'utf8', flow.add('first'));
    fs.readFile('path2', 'utf8', flow.add('second'));

    //Wait until done reading the first and second files, then write them to another file
    fs.writeFile('path3', flow.wait<string>('first') + flow.wait<string>('second'), flow.add());
    flow.wait(); //Wait on all outstanding tasks

    fs.readFile('path3', 'utf8', flow.add('data'));

    console.log(flow.wait('data')); //Print the 3rd file's data
    console.log('all done');
});


// Formatting results
(function() {

var asyncTask = function(callback: (err: any, res1: number, res2: number, res3: number) => void) {
    process.nextTick(function() {
        callback(null, 1, 2, 3);
    });
}

asyncblock(function(flow) {
    asyncTask(flow.add());

    var result = flow.wait();
    console.log(result); // Prints 1
});

asyncblock(function(flow) {
    asyncTask(flow.add(['first', 'second', 'third']));

    var result = flow.wait();
    console.log(result); // Prints { first: 1, second: 2, third: 3 }

    asyncTask(flow.add('key1', ['first', 'second', 'third']));
    asyncTask(flow.add('key2', ['a', 'b', 'c']));
    var result = flow.wait();
    console.log(result); // Prints { key1: { first: 1, second: 2, third: 3 }, key2: { a: 1, b: 2, c: 3} }
});

})();


// Parallel task rate limiting
(function() {

asyncblock(function(flow) {
   flow.queue(function(callback: Function) {
       setTimeout(callback, 1000);
   });

   flow.wait(); //This will wait for about a second
});

asyncblock(function(flow) {
   flow.maxParallel = 2;

   process.nextTick(function(){
       flow.queue(function(callback: Function) {
           setTimeout(callback, 1000);
       });

       flow.queue(function(callback: Function) {
           setTimeout(callback, 2000);
       });

       flow.queue(function(callback: Function) {
           setTimeout(callback, 3000);
       });

       flow.doneAdding();
   });

   flow.forceWait();
});

asyncblock(function(flow) {
    setTimeout(flow.callback(), 1000);

    flow.queue(function(callback: Function) {
        setTimeout(callback, 1000);
    });
    flow.queue((callback: (err: any, res: string) => void) => {
      callback(null, '');
    });

    flow.wait();
});

})();


// Task timeouts
(function() {

asyncblock(function(flow){
    setTimeout(flow.add({timeout: 1000, timeoutIsError: false}), 2000);
    flow.wait(); //The fiber will yield here for 1 second, then continue

    //Code here will run
});

asyncblock(function(flow){
    flow.timeoutIsError = false;

    setTimeout(flow.add({timeout: 1000}), 2000);
    flow.wait(); //The fiber will yield here for 1 second, then continue

    //Code here will run
});

})();

