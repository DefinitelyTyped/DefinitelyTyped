// Type definitions for aurelia-task-queue v0.4.0
// Project: https://github.com/aurelia/
// Definitions by: Mike Graham <https://github.com/cmichaelgraham>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module 'aurelia-task-queue/index' {
	export class TaskQueue {
	    microTaskQueue: any;
	    microTaskQueueCapacity: any;
	    taskQueue: any;
	    requestFlushMicroTaskQueue: any;
	    requestFlushTaskQueue: any;
	    constructor();
	    queueMicroTask(task: any): void;
	    queueTask(task: any): void;
	    flushTaskQueue(): void;
	    flushMicroTaskQueue(): void;
	    onError(error: any, task: any): void;
	}

}
declare module 'aurelia-task-queue' {
	export * from 'aurelia-task-queue/index';
}
