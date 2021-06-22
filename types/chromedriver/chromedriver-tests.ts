import * as chromeDriver from 'chromedriver';
import { ChildProcess } from 'child_process';

const chromeDriverPath: string = chromeDriver.path;
const chromeDriverVersion: string = chromeDriver.version;

chromeDriver.start();
chromeDriver.stop();

const driverProcess: ChildProcess = chromeDriver.start(['a', 'b', 'c']);
const chromeDriverDefaultInstance: ChildProcess | undefined = chromeDriver.defaultInstance;

const promise = chromeDriver.start(['a', 'b', 'c'], true);

promise
    .then(() => {
        console.log('started chrome driver');
        chromeDriver.stop();
    })
    .catch(() => {
        console.log('could not start the chrome driver');
    });

chromeDriver.start(['a', 'b', 'c'], false);
chromeDriver.stop();

const promiseWithNoArgs = chromeDriver.start([], true);

const promiseWithNullArgs = chromeDriver.start(null, true);

const promiseWithUndefinedArgs = chromeDriver.start(undefined, true);
