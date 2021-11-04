import * as windowsMutex from "windows-mutex";

const name = 'mutex-name';

windowsMutex.isActive(name);
const mutex = new windowsMutex.Mutex(name);
mutex.isActive();
mutex.release();
