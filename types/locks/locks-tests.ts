import locks = require("locks");

// Mutex
const mutex: locks.Mutex = new locks.Mutex();
mutex.lock(() => {});
mutex.timedLock(1000, () => {});
if (mutex.tryLock()) { console.log('Should not happen'); }
mutex.unlock();
const createMutex: locks.Mutex = locks.createMutex();

// Semaphore
const semaphore: locks.Semaphore = new locks.Semaphore(1);
semaphore.wait(() => {});
semaphore.wait(() => {});
semaphore.signal();
const createSemaphore: locks.Semaphore = locks.createSemaphore(1);

// Read Write Lock
const readWriteLock: locks.ReadWriteLock = new locks.ReadWriteLock();
readWriteLock.readLock(() => {});
if (readWriteLock.tryReadLock()) { console.log('Should not happen'); }
readWriteLock.unlock();
readWriteLock.writeLock(() => {});
if (readWriteLock.tryWriteLock()) { console.log('Should not happen'); }
readWriteLock.unlock();
const createReadWriteLock: locks.ReadWriteLock = locks.createReadWriteLock();

// Conditional Variable
const condVariable: locks.CondVariable = new locks.CondVariable('ho');
if (condVariable.get() !== 'ho') { console.log('Should not happen'); }
condVariable.wait('hi', () => {});
condVariable.set('hi');
if (condVariable.get() !== 'hi') { console.log('Should not happen'); }
const createCondVariable: locks.CondVariable = locks.createCondVariable('ho');
