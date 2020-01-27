import * as BeanstalkdWorker from 'beanstalkd-worker';

const host = '127.0.0.1';
const port = 11300;
const tube = 'TestTube';

const worker = new BeanstalkdWorker(host, port);

// Spawning Jobs

worker.spawn(tube, {
    // job payload/values
}, {
    delay: 0,
    priority: 1000,
    timeout: 10 * 60 * 1000 // ms
}).then(job => {
    console.log(job.id);
});

// Handling Jobs

worker.handle(tube, async function(payload) {
    // Complete job
    // return Promise.resolve();

    // Job error
    // return Promise.reject();

    // Spawn a job
    this.spawn('newTube', {});

    // Refresh timeout
    this.touch();

    // Spawn child job and wait for completion before completing this job
    await this.child('anotherTube', { /* payload */ });

    // Await another job
    await this.wait('anotherTube', 'jobId');

    // Puts current job back in queue with delay, does not affect retries counter
    return this.delay(5000); // ms, default: original timeout
}, {
    tries: 3, // Total amount of tries including the first one
    backoff: {
        initial: 60 * 1000, // ms
        exponential: 1.5 // multiple backoff by N each try
    }
});

worker.start(); // Enable handlers and start processing jobs, make sure handlers are setup before calling start
