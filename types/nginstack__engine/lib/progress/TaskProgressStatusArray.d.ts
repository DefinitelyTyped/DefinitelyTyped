export = TaskProgressStatusArray;
declare function TaskProgressStatusArray(): void;
declare class TaskProgressStatusArray {
    length: number;
    item(index: number): TaskProgressStatus;
}
declare namespace TaskProgressStatusArray {
    export { TaskProgressStatus };
}
type TaskProgressStatus = import('./TaskProgressStatus');
