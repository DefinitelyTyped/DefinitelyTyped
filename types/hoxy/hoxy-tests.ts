import { createServer } from 'hoxy';

const a = createServer(); // $ExpectType Proxy

a.listen(1); // $ExpectType Proxy
a.listen(1, () => {}); // $ExpectType Proxy

a.listen(2, '0.0.0.0'); // $ExpectType Proxy
a.listen(2, '0.0.0.0', () => {}); // $ExpectType Proxy

a.listen(2, '0.0.0.0', 22); // $ExpectType Proxy
a.listen(3, '0.0.0.0', () => {}); // $ExpectType Proxy

a.log('error'); // $ExpectType Proxy
a.log('error', process.stderr); // $ExpectType Proxy
a.log('info', log => {
    log; // $ExpectType Log
});

a.close(); // $ExpectType void

a.intercept('request', (request, response, cycle) => {
    request; // $ExpectType Request
    request.protocol; // $ExpectType string
    request.hostname; // $ExpectType string
    request.port; // $ExpectType number

    response; // $ExpectType Response
    response.statusCode; // $ExpectType number

    cycle; // $ExpectType Cycle
});

a.close(); // $ExpectType void
