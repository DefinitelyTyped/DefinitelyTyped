/* tslint:disable void-return */

import bugsnag = require('bugsnag'); // import * as bugsnag from 'bugsnag'; fails with ts2540 error at lines 60 and 61

import * as connect from 'connect';
import * as express from 'express';
import * as Koa from 'koa';
import * as restify from 'restify';

const connectApp = connect();
const expressApp = express();
const koaApp = new Koa();
const restifyApp = restify.createServer();

const error = new Error('Non-fatal');

const configurationOptions: bugsnag.ConfigurationOptions = {
    logger: console,
    logLevel: 'error',
    releaseStage: 'production',
    appVersion: '1.0.0',
    autoNotify: true,
    useSSL: true,
    filters: ['password'],
    notifyReleaseStages: ['production'],
    notifyHost: 'notify.bugsnag.com',
    notifyPort: 443,
    notifyPath: '/',
    metaData: {
        user: {
            username: 'bob-hoskins',
            name: 'Bob Hoskins',
            email: 'bob@example.com',
        },
    },
    onUncaughtError(err: string | Error) { },
    hostname: 'web1.example.com',
    proxy: 'https://user:password@example.com:8080',
    headers: { "Proxy-Authorization": "Token dXNlcjpwYXNa" },
    projectRoot: '/path/to/root',
    packageJSON: '/path/to/package.json',
    sendCode: true,
};

const notifyOptions: bugsnag.NotifyOptions = {
    errorName: 'BadError',
    userId: 'bob-hoskins',
    user: {
        id: "bob-hoskins",
        name: "Bob Hoskins",
        email: "bob@example.com",
    },
    context: 'thisContext',
    groupingHash: 'someHash',
    severity: 'warning',
    req: {},
    apiKey: 'your-api-key-here',
};

bugsnag.metaData = { app: { version: '0.3' } };
bugsnag.requestData = { user: { id: 5 } };

const register1: bugsnag.Bugsnag = bugsnag.register('your-api-key-here');
const register2: bugsnag.Bugsnag = bugsnag.register('your-api-key-here', configurationOptions);

const configure: void = bugsnag.configure(configurationOptions);

const notify1: void = bugsnag.notify(error);
const notify2: void = bugsnag.notify(error, (err: Error, response: any) => { });
const notify3: void = bugsnag.notify(error, notifyOptions, (err: Error, response: any) => { });

connectApp.use(bugsnag.requestHandler);
connectApp.use(bugsnag.errorHandler);

expressApp.use(bugsnag.requestHandler);
expressApp.use(bugsnag.errorHandler);

koaApp.on('error', bugsnag.koaHandler);

restifyApp.on('uncaughtException', bugsnag.restifyHandler);

const intercept1: void = bugsnag.intercept()(error);
const intercept2: string = bugsnag.intercept((argument: string) => argument)(null);

bugsnag.autoNotify(() => { });
bugsnag.autoNotify(notifyOptions, () => { });

const shouldNotify: boolean = bugsnag.shouldNotify();

const onBeforeNotify: void = bugsnag.onBeforeNotify((notification: any) => { });
