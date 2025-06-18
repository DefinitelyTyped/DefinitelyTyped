export = TaskProgressStatus;
declare function TaskProgressStatus(): void;
declare class TaskProgressStatus {
    taskName: string;
    index: number;
    startTime: Date;
    totalWork: number;
    completedWork: number;
    indeterminate: boolean;
}
