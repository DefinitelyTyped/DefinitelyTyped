import { Request } from 'express';
import MockExpressRequest from 'mock-express-request';

function doSomethingWithRequest(req: Request): void {
    console.log(req.headers);
}

function testMockExpressRequest() {
    doSomethingWithRequest(MockExpressRequest());

    doSomethingWithRequest(
        MockExpressRequest({
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    );
}
