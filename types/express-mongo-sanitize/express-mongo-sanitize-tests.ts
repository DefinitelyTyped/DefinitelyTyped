import express = require('express');
import mongoSanitize = require('express-mongo-sanitize');

const app: express.Express = express();

app.use(mongoSanitize());

app.use(mongoSanitize({
    replaceWith: '_'
}));

interface TestPayload {
    foo: string;
}

const testPayload: TestPayload = {
    foo: 'bar'
};

const sanitize1: TestPayload = mongoSanitize.sanitize(testPayload);

const sanitize2: TestPayload = mongoSanitize.sanitize(testPayload, {
    replaceWith: '_'
});

const isCorrect: boolean = mongoSanitize.has(testPayload);
