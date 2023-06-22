import TaskQueue = require('task-worklet');

interface Fetcher {
  name: 'fetch';
  (input: RequestInfo, init?: RequestInit): Promise<Response>;
}

const unsafe = new TaskQueue();                                       // $ExpectType TaskQueue<any>
const withEmptyOptions = new TaskQueue({});                           // $ExpectType TaskQueue<any>
const withValidOptions = new TaskQueue({ size: 2 });                  // $ExpectType TaskQueue<any>

const queue = new TaskQueue<Fetcher>();                               // $ExpectType TaskQueue<Fetcher>
queue.addModule('/fetcher-worklet.js');                               // $ExpectType Promise<void>
const task = queue.postTask<Fetcher>('fetch', 'https://example.com'); // $ExpectType Task<Promise<Response>>

async () => {
  await task.result.then(result => {
    result;                                                           // $ExpectType Response
  });
  const id = task.id;                                                 // $ExpectType number
  const state = task.state;                                           // $ExpectType State
};

// @ts-expect-error
new TaskQueue({ size: 1, excessProperty: true });
// @ts-expect-error
queue.postTask<Fetcher>('incorrect-task-name');
