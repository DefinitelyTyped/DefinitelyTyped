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

videoQueue.process((job, done) => {
    // job.data contains the custom data passed when the job was created
    // job.jobId contains id of this job.

    // transcode video asynchronously and report progress
    job.progress(42);

    // call done when finished
    done();

    // or give a error if error
    done(new Error('error transcoding'));

    // or pass it a result
    done(null, { framerate: 29.5 /* etc... */ });

    // If the job throws an unhandled exception it is also handled correctly
    throw new Error('some unexpected error');
});

audioQueue.process((job, done) => {
    // transcode audio asynchronously and report progress
    job.progress(42);

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

pdfQueue.process((job) => {
    // Processors can also return promises instead of using the done callback
    return Promise.resolve();
});

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
.on('cleaned', (jobs: Queue.Job[], status: Queue.JobStatus) => undefined)
.on('drained', () => undefined)
.on('removed', (job: Queue.Job) => undefined);

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

// test all constructor options:

new Queue('profile');
new Queue('profile', 'url');
new Queue('profile', { prefix: 'test' });
new Queue('profile', 'url', { prefix: 'test' });
