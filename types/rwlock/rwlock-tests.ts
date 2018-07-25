// Original test file https://github.com/71104/rwlock/blob/master/test/all.js
import ReadWriteLock = require('rwlock');

const lock = new ReadWriteLock();
lock.readLock((release) => {
  release();
});
