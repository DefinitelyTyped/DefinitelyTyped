import * as mm from 'egg-mock';

const app = mm.app();
app.ready();
app.mockService('foo', 'bar', ['123']);
const ctx = app.mockContext();
