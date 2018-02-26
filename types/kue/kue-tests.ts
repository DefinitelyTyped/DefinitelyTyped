import kue = require('kue');

// create our job queue

var jobs = kue.createQueue();

// do quick test with testmode enabled

// testMode enabled where the jobs are not processed
jobs.testMode.enter();
jobs.testMode.clear();
jobs.testMode.exit();

// testMode enabled where the jobs are processed
jobs.testMode.enter(true);
jobs.testMode.clear();
jobs.testMode.exit();

// start redis with $ redis-server

// create some jobs at random,
// usually you would create these
// in your http processes upon
// user input etc.

function create() {
  var name = [ 'tobi', 'loki', 'jane', 'manny' ][ Math.random() * 4 | 0 ];
  var job  = jobs.create( 'video conversion', {
    title: 'converting ' + name + '\'s to avi', user: 1, frames: 200
  });

  job.on('complete', function() {
    console.log(" Job complete");
  }).on('failed', function() {
    console.log(" Job failed");
  }).on('progress', function(progress: number) {
    process.stdout.write('\r  job #' + job.id + ' ' + progress + '% complete');
  });

  job.save();

  kue.Job.get(job.id, function (err: any, _job: kue.Job) {
    console.log('get job', _job);
  });
  kue.Job.get(job.id, 'video conversion', function (err: any, _job: kue.Job) {
    console.log('get job', _job);
  });

  setTimeout( create, Math.random() * 2000 | 0 );
}

create();

// process video conversion jobs, 1 at a time.

var processCb = function(job: kue.Job, done: kue.DoneCallback) {
  var frames: number = job.data.frames;

  function next(i: number) {
    // pretend we are doing some work
    convertFrame(i, function(err: Error, result: any) {
      if (err) return done(err);
      // report progress, i/frames complete
      job.progress(i, frames);
      if (i >= frames) done(null, result);
      else next(i + Math.random() * 10);
    } );
  }

  next(0);
}

jobs.process('video conversion', 1, processCb);
jobs.process('video conversion', processCb);

function convertFrame(i: number, fn: Function) {
  setTimeout(() => fn(null, Math.random()), Math.random() * 50);
}

// one minute

var minute = 60000;

var email = jobs.create('email', {
  title: 'Account renewal required', to: 'tj@learnboost.com', template: 'renewal-email'
}).delay(minute)
  .priority('high')
  .save();

console.log('email job priority: ', email.priority());

email.on('promotion', function() {
  console.log('renewal job promoted');
} );

email.on('complete', function() {
  console.log('renewal job completed' );
} );

jobs.create('email', {
  title: 'Account expired', to: 'tj@learnboost.com', template: 'expired-email'
} ).delay( minute * 10 )
  .priority('high')
  .save();

jobs.promote();

jobs.process('email', 10, function(job: kue.Job, done: Function) {
  setTimeout(function() {
    done();
  }, Math.random() * 5000);
});

// start the UI
kue.app.listen(3000);
console.log('UI started on port 3000');
