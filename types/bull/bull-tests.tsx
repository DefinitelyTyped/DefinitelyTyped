/**
 * Created by Bruno Grieder
 */

import Redis = require("ioredis");
import Queue = require("bull");

const videoQueue = new Queue('video transcoding', 'redis://127.0.0.1:6379');
const audioQueue = new Queue('audio transcoding', {
    redis: {port: 6379, host: '127.0.0.1'}, // Specify Redis connection using object
    settings: {},
});
const imageQueue: Queue.Queue<{ image: string }> = new Queue('image transcoding');
const rateLimitedQueue = new Queue('api calls', { limiter: { max: 1, duration: 500, groupKey: "apiKey", bounceBack: true }});

videoQueue.getWorkers();
videoQueue.setWorkerName();
videoQueue.base64Name();
videoQueue.clientName();
videoQueue.parseClientList('');

videoQueue.process((job, done) => {
    // job.data contains the custom data passed when the job was created
    // job.jobId contains id of this job.

    // job.opts contains the options that were passed to the job
    job.opts;

    job.queue;
    job.queue.client;

    // transcode video asynchronously and report progress
    job.progress(42);

    // get current job progress
    const progress = job.progress();

    job.log('loglog');
    job.isCompleted();
    job.isFailed();
    job.isDelayed();
    job.isActive();
    job.isWaiting();
    job.isPaused();
    job.isStuck();

    // call done when finished
    done();

    // or give a error if error
    done(new Error('error transcoding'));

    // or pass it a result
    done(null, { framerate: 29.5 /* etc... */ });

    // If the job throws an unhandled exception it is also handled correctly
    throw new Error('some unexpected error');
}).catch(error => {
    // Catch the general error, like redis connection
    console.log(error);
});

audioQueue.process((job, done) => {
    // transcode audio asynchronously and report progress
    job.progress(42);

    // get current job progress
    const progress = job.progress();

    // call done when finished
    done();

    // or give a error if error
    done(new Error('error transcoding'));

    // or pass it a result
    done(null, { samplerate: 48000 /* etc... */ });

    // If the job throws an unhandled exception it is also handled correctly
    throw new Error('some unexpected error');
});

imageQueue.process((job, done) => {
    // transcode image asynchronously and report progress
    job.progress(42);

    // update job data
    job.update({ image: 'image2.jpg'});
    job.update({ url: 'image2.jpg'}); // $ExpectError

    // call done when finished
    done();

    // or give a error if error
    done(new Error('error transcoding'));

    // or pass it a result
    done(null, { width: 1280, height: 720 /* etc... */ });

    // If the job throws an unhandled exception it is also handled correctly
    throw new Error('some unexpected error');
});

videoQueue.add({video: 'http://example.com/video1.mov'});
audioQueue.add({audio: 'http://example.com/audio1.mp3'});
imageQueue.add({image: 'http://example.com/image1.tiff'});
videoQueue.addBulk([
    { name: 'frame1', data: { video: 'http://example.com/video1.mov'}, opts: { attempts: 6 }},
    {  data: { audio: 'http://example.com/video1.mov'}},
]);

//////////////////////////////////////////////////////////////////////////////////
//
// Test Redis Cluster connexion
//
//////////////////////////////////////////////////////////////////////////////////

const clusterQueue = new Queue('queue on redis cluster', {
    prefix: 'cluster-test',
    createClient: (clusterUri: Redis.ClusterNode) => {
        return new Redis.Cluster([{port: 6379, host: '127.0.0.1'}]);
    }
});

//////////////////////////////////////////////////////////////////////////////////
//
// Re-using Redis Connections
//
//////////////////////////////////////////////////////////////////////////////////

const client = new Redis();
const subscriber = new Redis();

const pdfQueue = new Queue('pdf transcoding', {
    createClient: (type: string, options: Redis.RedisOptions) => {
        switch (type) {
            case 'client':
                return client;
            case 'subscriber':
                return subscriber;
            default:
                return new Redis(options);
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////
//
// Using Promises
//
//////////////////////////////////////////////////////////////////////////////////

pdfQueue.process((job: Queue.Job) => {
    // Processors can also return promises instead of using the done callback
    return Promise.resolve();
});

async function pfdPromise(job: Queue.Job) {
    return Promise.resolve();
}

pdfQueue.process(1, pfdPromise);

videoQueue.add({ video: 'http://example.com/video1.mov' }, { jobId: 1 })
.then((video1Job) => {
    // When job has successfully be placed in the queue the job is returned
    // then wait for completion
    return video1Job.finished();
})
.then(() => {
    // completed successfully
})
.catch((err) => {
    // error
});

pdfQueue.whenCurrentJobsFinished()
.then(() => {
    // Jobs finished
});

//////////////////////////////////////////////////////////////////////////////////
//
// Typed Event Handlers
//
//////////////////////////////////////////////////////////////////////////////////

pdfQueue
.on('error', (err: Error) => undefined)
.on('active', (job: Queue.Job, jobPromise: Queue.JobPromise) => jobPromise.cancel())
.on('waiting', (jobId: Queue.JobId) => undefined)
.on('active', (job: Queue.Job) => undefined)
.on('stalled', (job: Queue.Job) => undefined)
.on('progress', (job: Queue.Job) => undefined)
.on('completed', (job: Queue.Job) => undefined)
.on('failed', (job: Queue.Job) => undefined)
.on('paused', () => undefined)
.on('resumed', () => undefined)
.on('cleaned', (jobs: Queue.Job[], status: Queue.JobStatusClean) => undefined)
.on('drained', () => undefined)
.on('removed', (job: Queue.Job) => undefined);

pdfQueue.setMaxListeners(42);

// test different process methods

const profileQueue = new Queue('profile');
// Max concurrency for requestProfile is 100
profileQueue.process('requestProfile', 100, () => {});
profileQueue.process(100, () => {});

// other tests
const myQueue = new Queue('myQueue', {
    settings: {
        drainDelay: 5
    },
    defaultJobOptions: {
        stackTraceLimit: 1,
    }
});

myQueue.on('active', (job: Queue.Job) => {
    job.moveToCompleted();
    job.moveToCompleted('done');
    job.moveToCompleted('done', true);
    job.moveToCompleted('done', true).then(val => {
        if (val) {
            const nextJobData: any = val[0];
            const nextJobId: Queue.JobId = val[1];
        }
    });
    job.moveToCompleted('done', true, false);

    job.moveToFailed({ message: "Call to external service failed!" }, true);
    job.moveToFailed(new Error('test error'), true);
    job.moveToFailed(new Error('test error'), true).then(val => {
        if (val) {
            const nextJobData: any = val[0];
            const nextJobId: Queue.JobId = val[1];
        }
    });

    job.discard();
});

// Pause and resume
myQueue.pause().then(() => {
    console.log('queue paused');
});
myQueue.isPaused().then(() => {
    console.log('queue is paused');
});
myQueue.pause(true).then(() => {
    console.log('queue paused locally');
});
myQueue.pause(true, true).then(() => {
    console.log('queue paused locally, not waiting for active jobs to finish');
});
myQueue.isPaused(true).then(() => {
    console.log('queue is paused locally');
});
myQueue.resume().then(() => {
    console.log('queue resumed');
});
myQueue.isPaused().then(() => {
    console.log('queue is not paused');
});
myQueue.resume(true).then(() => {
    console.log('queue resumed locally');
});
myQueue.isPaused(true).then(() => {
    console.log('queue is not paused locally');
});
// Remove jobs
myQueue.removeJobs('?oo*').then(() => {
    console.log('done removing jobs');
});
// Obliterate queue
myQueue.obliterate().then(() => {
    console.log('queue obliterated');
});
myQueue.obliterate({force: true}).then(() => {
    console.log('queue obliterated');
});

// Close queues

myQueue.close();

const doNotWaitForJobs = true;
myQueue.close(doNotWaitForJobs);

// Get Redis clients
const clients = myQueue.clients;

// test all constructor options:

new Queue('profile');
new Queue('profile', 'url');
new Queue('profile', { prefix: 'test' });
new Queue('profile', 'url', { prefix: 'test' });

// Use low-level API
const multi = myQueue.multi();
multi.del(myQueue.toKey('repeat'));
multi.exec();
