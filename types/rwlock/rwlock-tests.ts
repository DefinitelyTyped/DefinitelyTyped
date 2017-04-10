// Original test file https://github.com/71104/rwlock/blob/master/test/all.js
import * as ReadWriteLock from 'rwlock';

var lock = new ReadWriteLock();
lock.readLock(function (release) {
  release();
});
