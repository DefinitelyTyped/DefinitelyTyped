import taskGraphRunner, { Opts, Results } from 'task-graph-runner';

const graph = new Map([
    ["task-a", ["task-d"]],
    ["task-b", ["task-d", "task-a"]],
    ["task-c", ["task-d"]],
    ["task-d", []],
]);

async function task(name: string) {
    const result = await Promise.resolve(name);
    return result;
}

let results = taskGraphRunner({ graph, task });

results = taskGraphRunner({ graph, task, force: true });
