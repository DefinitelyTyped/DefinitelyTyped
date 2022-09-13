import Queue = require('better-queue');

interface TestTask {
    taskId: string;
    taskPayload: any;
}

interface TestResult {
    some: string;
}

new Queue((task) => {
    const test = task.anything;
    console.log(task);
});

new Queue((task: TestTask[]) => {
    const test = task[0].taskId;
    console.log(task);
});

new Queue<TestTask>((task: TestTask, cb) => {
    const id = task.taskId;
    cb(null, 'result');
    cb();
}, {});

new Queue<TestTask, TestResult>({
    process(task: TestTask, cb) {
        const id = task.taskId;
        cb(null, { some: 'prop' });
    },
    filter(task, cb) {
        const id = task.taskId;
        cb(null, task);
    },
    merge(oldTask, newTask, cb) {
        const oldId = oldTask.taskId;
        const newId = newTask.taskId;
        cb(null, newTask);
    },
    priority(task, cb) {
        const id = task.taskId;
        cb(null, 10);
    },
    precondition(cb) {
        cb(null, true);
    },
    afterProcessDelay: 1000,
    autoResume: true,
    batchDelay: 123,
    batchDelayTimeout: 123,
    batchSize: 123,
    cancelIfRunning: true,
    concurrent: 123,
    failTaskOnProcessException: true,
    filo: true,
    id: 'taskId',
    maxRetries: 1,
    maxTimeout: 1,
    retryDelay: 1,
    storeMaxRetries: 1,
    storeRetryTimeout: 1,
    preconditionRetryTimeout: 1,
    store: 'test'
});

new Queue<TestTask, TestResult>({
    process(task: TestTask[], cb) {
        const firstId = task[0].taskId;
        cb(null, { some: 'prop' });
    }
});

new Queue<TestTask, TestResult>(() => { }, {
    id(task, cb) {
        const id = task.taskId;
        cb(null, 'taskId');
    }
});

new Queue<TestTask, TestResult>(() => { }, {
    store: {
        type: 'test'
    }
});

const q = new Queue<TestTask, TestResult>(() => {});

const testTask = {taskId: '', taskPayload: ''};

q.push(testTask);
q.push(testTask, (error, result) => {});

q.cancel('id', () => {});

class TestStore implements Queue.Store<TestTask> {
    connect(cb: (error: any, length: number) => void) {
        cb(null, 1);
    }

    getTask(taskId: any, cb: (error: any, task: TestTask) => void) {
        cb(null, { taskId: '', taskPayload: '' });
    }

    deleteTask(taskId: any, cb: () => void) {
        cb();
    }

    putTask(taskId: any, task: TestTask, priority: number, cb: (error: any) => void) {
        cb(null);
    }

    takeFirstN(n: number, cb: (error: any, lockId: string) => void) {
        cb(null, '');
    }

    takeLastN(n: number, cb: (error: any, lockId: string) => void) {
        cb(null, '');
    }

    getLock(lockId: string, cb: (error: any, tasks: { [taskId: string]: TestTask }) => void) {
        cb(null, {
            id: { taskId: 'id', taskPayload: 'payload' }
        });
    }

    releaseLock(lockId: string, cb: (error: any) => void) {
        cb(null);
    }
}
