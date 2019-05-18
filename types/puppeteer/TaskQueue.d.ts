export interface TaskQueue {
    postTask(task: () => void): Promise<any>;
}
