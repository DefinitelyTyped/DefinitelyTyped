import { checkPortStatus, findAPortNotInUse, findAPortInUse, Status } from 'portscanner';

declare function assert(cond: boolean): void;

const checkPortCallback = (error: Error | null, status: Status) => {
    assert(error === null);
    if (error) assert(error.message === '');
    assert(status === 'open');
    assert(status === 'closed');
};

const assertStatus = (status: Status) => {
    assert(status === 'open');
    assert(status === 'closed');
};

checkPortStatus(3000).then(assertStatus);

checkPortStatus(3000, '127.0.0.1').then(assertStatus);
checkPortStatus(3000, { host: '127.0.0.1' }).then(assertStatus);
checkPortStatus(3000, { timeout: 400 }).then(assertStatus);
checkPortStatus(3000, checkPortCallback);

checkPortStatus(3000, { host: '127.0.0.1' }, checkPortCallback);
checkPortStatus(3000, { timeout: 400 }, checkPortCallback);
checkPortStatus(3000, '127.0.0.1', checkPortCallback);

checkPortStatus(3000, '127.0.0.1', { timeout: 400 }).then(assertStatus);
checkPortStatus(3000, '127.0.0.1', { timeout: 400 }, checkPortCallback);

const findPortCallback = (error: Error | null, port: number) => {
    assert(error === null);
    if (error) assert(error.message === '');
    assert(port === 3005);
};

const assertPort = (port: number) => {
    assert(port === 3005);
};

// one argument
findAPortNotInUse([3000, 3005, 3006]).then(assertPort);
findAPortNotInUse(3000).then(assertPort);

// two arguments
findAPortNotInUse([3000, 3005, 3006], findPortCallback);
findAPortNotInUse([3000, 3005, 3006], '127.0.0.1').then(assertPort);

findAPortNotInUse(3000, findPortCallback);
findAPortNotInUse(3000, '127.0.0.1').then(assertPort);
findAPortNotInUse(3000, 3010).then(assertPort);

// three arguments
findAPortNotInUse(3000, 3010, '127.0.0.1').then(assertPort);
findAPortNotInUse(3000, 3010, findPortCallback);

// four argumentss
findAPortNotInUse(3000, 3010, '127.0.0.1', findPortCallback);

// one argument
findAPortInUse([3000, 3005, 3006]).then(assertPort);
findAPortInUse(3000).then(assertPort);

// two arguments
findAPortInUse([3000, 3005, 3006], findPortCallback);
findAPortInUse([3000, 3005, 3006], '127.0.0.1').then(assertPort);

findAPortInUse(3000, findPortCallback);
findAPortInUse(3000, '127.0.0.1').then(assertPort);
findAPortInUse(3000, 3010).then(assertPort);

// three arguments
findAPortInUse(3000, 3010, '127.0.0.1').then(assertPort);
findAPortInUse(3000, 3010, findPortCallback);

// four argumentss
findAPortInUse(3000, 3010, '127.0.0.1', findPortCallback);
