import { ConnectionOptions, Worker, Queue, Job, JobsHash, Scheduler } from 'node-resque';

class AddJob implements Job<number> {
    plugins: string[] = ['JobLock'];

    pluginOptions = {
        JobLock: {}
    };

    perform(...args: number[]): Promise<number> {
        const answer = args[0] + args[1];
        return new Promise((resolve) => { setTimeout(resolve, 1000); })
            .then(() => answer);
    }
}

class SubtractJob implements Job<number> {
    perform(...args: number[]): Promise<number> {
        const answer = args[0] - args[1];
        return Promise.resolve(answer);
    }
}

const connection: ConnectionOptions = { host: 'localhost', port: 6379 };
const queues = ['math', 'otherQueue'];
const jobs: JobsHash = {
    add: new AddJob(),
    subtract: new SubtractJob()
};

const worker = new Worker({ connection, queues }, jobs);
const queue = new Queue({ connection }, jobs);
const scheduler = new Scheduler({ connection });

// register for worker events
worker.on('start', () => { console.log('worker started'); });
worker.on('end', () => { console.log('worker ended'); });
worker.on('cleaning_worker', (worker) => { console.log(`cleaning old worker ${worker}`); });
worker.on('poll', (queue) => { console.log(`worker polling ${queue}`); });
worker.on('ping', (time) => { console.log(`worker check in @ ${time}`); });
worker.on('job', (queue, job) => { console.log(`working job ${queue} ${JSON.stringify(job)}`); });
worker.on('reEnqueue', (queue, job, plugin) => { console.log(`reEnqueue job (${plugin}) ${queue} ${JSON.stringify(job)}`); });
worker.on('success', (queue, job, result) => { console.log(`job success ${queue} ${JSON.stringify(job)} >> ${result}`); });
worker.on('failure', (queue, job, failure) => { console.log(`job failure ${queue} ${JSON.stringify(job)} >> ${failure}`); });
worker.on('error', (error, queue, job) => { console.log(`error ${queue} ${JSON.stringify(job)} >> ${error}`); });
worker.on('pause', () => { console.log('worker paused'); });

// register for scheduler events
scheduler.on('start', () => { console.log('scheduler started'); });
scheduler.on('end', () => { console.log('scheduler ended'); });
scheduler.on('poll', () => { console.log('scheduler polling'); });
scheduler.on('master', () => { console.log('scheduler became master'); });
scheduler.on('cleanStuckWorker', (workerName, errorPayload, delta) => { console.log(`failing ${workerName} (stuck for ${delta}s) and failing job ${errorPayload}`); });
scheduler.on('error', (error) => { console.log(`scheduler error >> ${error}`); });
scheduler.on('workingTimestamp', (timestamp) => { console.log(`scheduler working timestamp ${timestamp}`); });
scheduler.on('transferredJob', (timestamp, job) => { console.log(`scheduler enquing job ${timestamp} >> ${JSON.stringify(job)}`); });

// register for queue events
queue.on('error', (error) => { console.log(error); });

// start worker
worker.connect().then(() => worker.start());

// start scheduler
scheduler.connect().then(() => scheduler.start());

queue.connect().then(() => {
    queue.enqueue('math', 'add', [1, 2]);
    queue.enqueue('math', 'add', [1, 2]);
    queue.enqueue('math', 'add', [2, 3]);
    queue.enqueueIn(3000, 'math', 'subtract', [2, 1]);
});
