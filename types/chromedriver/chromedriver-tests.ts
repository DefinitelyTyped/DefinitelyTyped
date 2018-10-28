import * as chromeDriver from 'chromedriver';
import { ChildProcess } from 'child_process';

const chromeDriverPath: string = chromeDriver.path;
const chromeDriverVersion: string = chromeDriver.version;

chromeDriver.start();
chromeDriver.stop();

const driverProcess: ChildProcess = chromeDriver.start(['a', 'b', 'c']);
const chromeDriverDefaultInstance: ChildProcess | undefined = chromeDriver.defaultInstance;
