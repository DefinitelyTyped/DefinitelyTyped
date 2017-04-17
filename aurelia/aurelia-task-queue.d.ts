declare module 'aurelia-task-queue' {
  export class TaskQueue {
    constructor();
    queueMicroTask(task: any): any;
    queueTask(task: any): any;
    flushTaskQueue(): any;
    flushMicroTaskQueue(): any;
    onError(error: any, task: any): any;
  }
}