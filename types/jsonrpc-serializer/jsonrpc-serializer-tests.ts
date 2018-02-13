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
