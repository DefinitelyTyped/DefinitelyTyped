import promisePoller from 'promise-poller';

function myTask() {
  const promise = Promise.resolve('foo');
  // do some async stuff that returns a promise
  return promise;
}

// $ExpectType Promise<string>
promisePoller({
  taskFn: myTask,
});

// $ExpectType Promise<string>
promisePoller({
  taskFn: myTask,
  interval: 500,
  timeout: 2000,
});

// $ExpectType Promise<string>
promisePoller({
  taskFn: myTask,
  interval: 500,
  retries: 10,
  masterTimeout: 2000,
});

// $ExpectType Promise<string>
promisePoller({
  taskFn: myTask,
  strategy: 'linear-backoff',
});

// $ExpectType Promise<string>
promisePoller({
  taskFn: myTask,
  interval: 500,
  retries: 5,
  progressCallback(retriesRemaining, error) {
    // log the error?
  },
});

// $ExpectType Promise<string>
promisePoller({
  taskFn: myTask,
  interval: 500,
  retries: 5,
  name: 'App Server Poller',
});
