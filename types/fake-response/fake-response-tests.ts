import { FakeResponse } from 'fake-response';

const db = {
    'hello,world': 'Hello World',
};

const config = {
    port: 4000,
};

new FakeResponse(db, config).launchServer();
