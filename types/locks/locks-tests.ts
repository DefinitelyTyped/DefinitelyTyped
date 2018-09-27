import locks = require("locks");

// Mutex
const mutex: locks.Mutex = new locks.Mutex();
mutex.lock(() => {});
if (mutex.tryLock()) { console.log('Should not happen'); }
mutex.unlock();

// Semaphore
const semaphore: locks.Semaphore = new locks.Semaphore(1);
semaphore.wait(() => {});
semaphore.wait(() => {});
semaphore.signal();

// Read Write Lock
const readWriteLock: locks.ReadWriteLock = new locks.ReadWriteLock();
readWriteLock.readLock(() => {});
if (readWriteLock.tryReadLock()) { console.log('Should not happen'); }
readWriteLock.unlock();
readWriteLock.writeLock(() => {});
if (readWriteLock.tryWriteLock()) { console.log('Should not happen'); }
readWriteLock.unlock();

// Conditional Variable
const condVariable: locks.CondVariable = new locks.CondVariable('ho');
if (condVariable.get() !== 'ho') { console.log('Should not happen'); }
condVariable.wait('hi', () => {});
condVariable.set('hi');
if (condVariable.get() !== 'hi') { console.log('Should not happen'); }
