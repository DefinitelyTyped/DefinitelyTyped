import * as uuid from 'node-uuid';
import * as jrs from 'jsonrpc-serializer';

// request tests
jrs.request('id', 'method');
jrs.request('id', 'method', 'params');
jrs.request('id', 'method', ['param1', 'param2', 'param3']);
jrs.request('id', 'method', { params: 'params' });

// request object tests
jrs.requestObject('id', 'method');
jrs.requestObject('id', 'method', 'params');
jrs.requestObject('id', 'method', ['param1', 'param2', 'param3']);
jrs.requestObject('id', 'method', { params: 'params' });

// notification tests
jrs.notification('method');
jrs.notification('method', 'params');
jrs.notification('method', ['param1', 'param2']);
jrs.notification('method', { param: 'param' });

// object notification tests
jrs.notificationObject('method');
jrs.notificationObject('method', 'params');
jrs.notificationObject('method', ['param1', 'param2']);
jrs.notificationObject('method', { param: 'param' });

// success tests
jrs.success('id', 'result');
jrs.successObject('id', 'result');

// error tests;
jrs.error('id', new jrs.err.JsonRpcError('penta error'));
jrs.error('id', new jrs.err.InvalidParamsError());
jrs.error('id', new jrs.err.ParseError());
jrs.error('id', new jrs.err.InvalidRequestError());
jrs.error('id', new jrs.err.MethodNotFoundError());
jrs.error('id', new jrs.err.InvalidParamsError());

// deserialize tests
const request = {
    jsonrpc : '2.0',
    id      : 'id',
    method  : 'method',
    params  : 'params'
};

jrs.deserialize(JSON.stringify(request));
jrs.deserializeObject(request);

// ---

const request2 = jrs.request('request-id', 'request-method');

// ---> "{\"jsonrpc\":\"2.0\",\"id\":\"request-id\",\"method:\":\"request-method\"}"

const ok1 = "{\"jsonrpc\":\"2.0\",\"id\":\"request-id\",\"result\":\"success!!\"}";

const response1 = jrs.deserialize(ok1);

// ---

const payload2 = jrs.request(
    uuid.v4(),   // generates a V4 UUID string
    'saveUser',  // the method to call
    {
        name  : 'Ruben Tan',
        email : 'foo@bar.com',
        race  : 'unicorn'
    }
);

// ---

const payload3 = jrs.notification(
    'newMessage',  // the method to call
    {
        subject : 'Test message',
        message : 'This is a test message'
    }
);

// ---

const err1 = new jrs.err.JsonRpcError('This is an error');
const str1 = err1.serialize();
