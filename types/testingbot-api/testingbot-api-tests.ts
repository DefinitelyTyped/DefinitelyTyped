import * as TestingBot from 'testingbot-api';

const sessionId = '123';

const tb = new TestingBot({
    api_key: 'api-key',
    api_secret: 'api-secret'
});

function noop() { }

tb.updateUserInfo({
    email: 'new-email'
}, noop);

tb.getBrowsers(noop, 'webdriver');

tb.updateTest({
    'test[name]': 'test',
    build: '01'
}, sessionId);
