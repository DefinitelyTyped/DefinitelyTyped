/// <reference types="node" />

import tress = require("tress");

function someAsyncFunction(job: any, callback: (err: any, data?: any) => void): void {
	const p = Promise.resolve(job)
		.then((value) => callback(null, value))
		.catch(callback);
}

function createWorker() {
	// Create a queue object with worker and concurrency 2
	const q = tress((job, done) => {
		someAsyncFunction(job, (err, data) => {
			if (err) {
				done(err);
			} else {
				done(null, data);
			}
		});
	}, 2);
}

function createWorkerAndUseCallbacks() {
	// Create a queue object with worker and concurrency 2
	const q = tress((job, done) => {
		someAsyncFunction(job, (err, data) => {
			if (err) {
				done(err);
			} else {
				done(null, data);
			}
		});
	}, 2);

	q.drain = () => { console.log("drain"); };
	q.empty = () => { console.log("empty"); };
	q.error = (err, job, args) => { console.log(`Error: ${err}, on job ${job} with args: ${args}`); };
	q.retry = function (args) { console.log(`Retry job ${this} with args: ${args}`); };
	q.saturated = () => { console.log("saturated"); };
	q.success = function (args) { console.log(`Success on job ${this} with args: ${args}`); };
	q.unsaturated = () => { console.log("unsaturated"); };
}

function createWorkerAndUseMethods() {
	// Create a queue object with worker and concurrency 2
	const q = tress((job, done) => {
		someAsyncFunction(job, (err, data) => {
			if (err) {
				done(err);
			} else {
				done(null, data);
			}
		});
	}, 2);

	// true if there are items waiting or being processed
	const isRunnig: boolean = !q.idle();

	// Empty remaining jobs
	q.kill();

	// Number of items waiting to be processed
	const waitingAmount: number = q.length();

	// Load new arrays from data object to arrays of waiting, failed, and finished jobs
	q.load({
		failed: [{ name: "John Doe" }],
		finished: [{ name: "John Doe" }],
		waiting: [{ name: "John Doe" }]
	});
	// Pause the processing of jobs
	q.pause();
	// Add a new job to the queue
	q.push({ name: "John Doe" });
	// Add a new job to the queue, with callback
	q.push({ name: "John Doe" }, function (args) { console.log(`Push callback for job ${this} with args: ${args}`); });
	// Add a few jobs to the queue
	q.push([{ name: "John Doe" }, { name: "John Doe" }, { name: "John Doe" }]);
	// Add a few jobs to the queue, with callback
	q.push([{ name: "John Doe" }, { name: "John Doe" }, { name: "John Doe" }],
		function (args) { console.log(`Push callback for job ${this} with args: ${args}`); });
	q.resume();

	// Number of items currently being processed
	const runningAmount: number = q.running();

	// Run a callback with object, that contains arrays of waiting, failed, and finished jobs
	q.save((queues) => console.log(`Failed: ${queues.failed}, finished: ${queues.finished}, waiting: ${queues.waiting}`));

	// The the array of items currently being processed
	const workers = q.workersList();
	// Whether status is "waiting"
	const isWaiting: boolean = q.status(workers[0]) === "waiting";

	// Add a new job to the front of the queue
	q.unshift({ name: "John Doe" });
	// Add a new job to the front of the queue, with callback
	q.unshift({ name: "John Doe" }, function (args) { console.log(`Unshift callback for job ${this} with args: ${args}`); });
	// Add a few jobs to the front of the queue
	q.unshift([{ name: "John Doe" }, { name: "John Doe" }, { name: "John Doe" }]);
	// Add a few jobs to the front of the queue, with callback
	q.unshift([{ name: "John Doe" }, { name: "John Doe" }, { name: "John Doe" }],
		function (args) { console.log(`Unshift callback for job ${this} with args: ${args}`); });
}

function createWorkerAndUseProperties() {
	// Create a queue object with worker and concurrency 2
	const q = tress((job, done) => {
		someAsyncFunction(job, (err, data) => {
			if (err) {
				done(err);
			} else {
				done(null, data);
			}
		});
	}, 2);

	// Array of jobs currently being processed (readonly)
	const active = q.active;

	// A minimum threshold buffer in order to say that the queue is unsaturated
	const buffer: number = q.buffer;
	q.buffer = 100;

	// This property for alter the concurrency/delay on-the-fly
	const concurrency: number = q.concurrency;
	q.concurrency = 100;

	// Array of failed jobs (the done callback was called from worker with error in first argument) (readonly)
	const failed = q.failed;

	// Array of correctly finished jobs (the done callback was called from worker with null or undefined (or any other false equivalent) in first argument) (readonly)
	const finished = q.finished;

	// A boolean for determining whether the queue is in a paused state. (readonly)
	const paused: boolean = q.paused;

	// false untill any items have been pushed and processed by the queue. Then becomes true and never changes in queue lifecycle (readonly)
	const started: boolean = q.started;

	// Array of queued jobs (readonly)
	const waiting = q.waiting;
}
