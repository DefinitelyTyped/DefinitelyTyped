export class Task {
    readonly tap: string;
    readonly task: (...args: any[]) => void;
    constructor(task: (...args: any[]) => void);
}
export class PromiseTask {
    readonly tap: string;
    readonly task: (...args: any[]) => Promise<void>;
    constructor(task: (...args: any[]) => Promise<void>);
}

export class CallbackTask {
    readonly tap: string;
    readonly task: (...args: any[]) => void;
    constructor(task: (...args: any[]) => void);
}
