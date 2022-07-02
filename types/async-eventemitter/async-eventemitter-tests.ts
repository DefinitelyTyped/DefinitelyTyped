import * as AsyncEventEmitter from 'async-eventemitter';

const ee = new AsyncEventEmitter<{
  sync: (a: string) => void;
  // "sync-multiple": (a: string, b: number) => void,
  async: (data?: { a: string; b: boolean }) => Promise<any>;
  // "illegal-async": (data: string, data2: number) => Promise<any>,
  'premature-resolve': (
    data: number,
    resolve?: (result: any) => void,
  ) => Promise<any>;
  'premature-resolve-empty': (
    data: number,
    resolve?: () => void,
  ) => Promise<any>;
  'is-empty': () => any;
}>();

ee.emit('sync', 'yes');
ee.emit('async', { a: 'a', b: true });
ee.emit('async');
ee.emit('is-empty');
ee.emit('premature-resolve', 1);

(async () => {
  // await new Promise((resolve) => ee.emit("async", undefined, resolve));  // fail
  // await new Promise((resolve) => ee.emit("premature-resolve", undefined, resolve));  // Should fail
  await new Promise(resolve => ee.emit('premature-resolve', 1, resolve));
})();

ee.on('is-empty', () => {});
ee.on('async', async data => {
  `Reach the end of async function and ${data}`;
});
ee.on('premature-resolve', async (data, resolve) => {
  if (resolve) resolve(true);
  'does not reach here';
});
