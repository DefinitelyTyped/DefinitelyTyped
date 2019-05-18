export interface TaskQueue {
    postTask(task: Function): Promise<any>;
}
