import * as portscanner from 'portscanner';
declare function assert(cond: boolean): void;

const checkPortCallback = (error: Error | null, status: portscanner.Status) => {
    assert(error === null);
    error && assert(error.message === '');
    assert(status === 'open');
    assert(status === 'closed');
};

const assertStatus = (status: portscanner.Status) => {
    assert(status === 'open');
    assert(status === 'closed');
};

portscanner.checkPortStatus(3000).then(assertStatus);

portscanner.checkPortStatus(3000, '127.0.0.1').then(assertStatus);
portscanner.checkPortStatus(3000, { host: '127.0.0.1' }).then(assertStatus);
portscanner.checkPortStatus(3000, { timeout: 400 }).then(assertStatus);
portscanner.checkPortStatus(3000, checkPortCallback);

portscanner.checkPortStatus(3000, { host: '127.0.0.1' }, checkPortCallback);
portscanner.checkPortStatus(3000, { timeout: 400 }, checkPortCallback);
portscanner.checkPortStatus(3000, '127.0.0.1', checkPortCallback);

portscanner.checkPortStatus(3000, '127.0.0.1', { timeout: 400 }).then(assertStatus);
portscanner.checkPortStatus(3000, '127.0.0.1', { timeout: 400 }, checkPortCallback);

const findPortCallback = (error: Error | null, port: number) => {
    assert(error === null);
    error && assert(error.message === '');
    assert(port === 3005);
};

const assertPort = (port: number) => {
    assert(port === 3005);
};

// one argument
portscanner.findAPortNotInUse([3000, 3005, 3006]).then(assertPort);
portscanner.findAPortNotInUse(3000).then(assertPort);

// two arguments
portscanner.findAPortNotInUse([3000, 3005, 3006], findPortCallback);
portscanner.findAPortNotInUse([3000, 3005, 3006], '127.0.0.1').then(assertPort);

portscanner.findAPortNotInUse(3000, findPortCallback);
portscanner.findAPortNotInUse(3000, '127.0.0.1').then(assertPort);
portscanner.findAPortNotInUse(3000, 3010).then(assertPort);

// three arguments
portscanner.findAPortNotInUse(3000, 3010, '127.0.0.1').then(assertPort);
portscanner.findAPortNotInUse(3000, 3010, findPortCallback);

// four argumentss
portscanner.findAPortNotInUse(3000, 3010, '127.0.0.1', findPortCallback);

// one argument
portscanner.findAPortInUse([3000, 3005, 3006]).then(assertPort);
portscanner.findAPortInUse(3000).then(assertPort);

// two arguments
portscanner.findAPortInUse([3000, 3005, 3006], findPortCallback);
portscanner.findAPortInUse([3000, 3005, 3006], '127.0.0.1').then(assertPort);

portscanner.findAPortInUse(3000, findPortCallback);
portscanner.findAPortInUse(3000, '127.0.0.1').then(assertPort);
portscanner.findAPortInUse(3000, 3010).then(assertPort);

// three arguments
portscanner.findAPortInUse(3000, 3010, '127.0.0.1').then(assertPort);
portscanner.findAPortInUse(3000, 3010, findPortCallback);

// four argumentss
portscanner.findAPortInUse(3000, 3010, '127.0.0.1', findPortCallback);
