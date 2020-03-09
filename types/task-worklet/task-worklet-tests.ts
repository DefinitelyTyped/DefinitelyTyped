import TaskQueue = require('task-worklet');

interface Fetcher {
  name: 'fetch';
  (input: RequestInfo, init?: RequestInit): Promise<Response>;
}

const unsafe = new TaskQueue();                                       // $ExpectType TaskQueue
const withEmptyOptions = new TaskQueue({});                           // $ExpectType TaskQueue
const withValidOptions = new TaskQueue({ size: 2 });                  // $ExpectType TaskQueue

const queue = new TaskQueue();                                        // $ExpectType TaskQueue
queue.addModule('/fetcher-worklet.js');                               // $ExpectType Promise<void>
const task = queue.postTask('fetch', 'https://example.com');          // $ExpectType Task

async () => {
  await task.result.then(result => {
    result;                                                           // $ExpectType any
  });
  const id = task.id;                                                 // $ExpectType number
  const state = task.state;                                           // $ExpectType State
};

new TaskQueue({ size: 1, excessProperty: true });                     // $ExpectError
queue.postTask<Fetcher>('incorrect-task-name');                       // $ExpectError
