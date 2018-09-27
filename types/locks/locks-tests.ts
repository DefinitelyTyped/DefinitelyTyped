import * as locks from "locks";


// Mutex
let mutex: locks.Mutex = new locks.Mutex();

mutex.lock(() => {});

if (mutex.tryLock()) {
  console.log('Should not happen');
}

mutex.unlock();


// Semaphore
let semaphore: locks.Semaphore = new locks.Semaphore(1);
semaphore.wait(()=> {
  
});

semaphore.wait(()=> {
  
});

semaphore.signal();


// Read Write Lock
let readWriteLock: locks.ReadWriteLock = new locks.ReadWriteLock();

readWriteLock.readLock(() => {});

if (readWriteLock.tryReadLock()) {
  console.log('Should not happen');
}

readWriteLock.unlock();

readWriteLock.writeLock(() => {});

if (readWriteLock.tryWriteLock()) {
  console.log('Should not happen');
}

readWriteLock.unlock();

// Conditional Variable
let condVariable: locks.CondVariable = new locks.CondVariable('ho');

if(condVariable.get() !== 'ho') {
  console.log('Should not happen');
}

condVariable.wait('hi', () => {});

condVariable.set('hi');

if(condVariable.get() !== 'hi') {
  console.log('Should not happen');
}
  




