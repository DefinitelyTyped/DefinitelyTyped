import { FakeResponse } from 'fake-response';
import { Config, Injectors } from 'fake-response/model';

const db = {
    'hello,world': 'Hello World',
};

const config: Config = {
    port: 3000,
    rootPath: './', // root path of the db to get the absolute path of the relative assets
    middleware: {
        func: ({ next }) => {
            next();
        },
        excludeRoutes: [],
        override: false, // if true common middleware runs first before the specific middleware
    },
    delay: {
        time: 0, // must give in milliseconds
        excludeRoutes: [],
        override: false, // if true overrides the specific delay with the common delay
    },
    env: '',
    proxy: {
        hello: 'helloWorld',
    },
    excludeRoutes: [],
};

const globals = {
    value: false, // store the default value here
};

const Injectors: Injectors[] = [
    {
        middleware: ({ res }) => res.send('This is an injected response  with 300ms delay'),
        delay: 300,
        routes: ['/injector'],
    },
];

new FakeResponse(db, config, globals).launchServer();
