// from https://github.com/mzabriskie/moxios/blob/master/test.js
import { equal, notEqual, deepEqual } from 'power-assert'; // compatible with 'assert';
import axios from 'axios';
import * as moxios from 'moxios';

declare const sinon: any;
declare const describe: any;
declare function it(testName: string, test: (done: () => void) => void|Promise<any>): void;
declare const beforeEach: any;
declare const afterEach: any;

const USER_FRED = {
    id: 12345,
    firstName: 'Fred',
    lastName: 'Flintstone'
};

describe('moxios', () => {
    it('should install', () => {
        const defaultAdapter = axios.defaults.adapter;
        moxios.install();
        notEqual(axios.defaults.adapter, defaultAdapter);
        moxios.uninstall();
    });

    it('should uninstall', () => {
        const defaultAdapter = axios.defaults.adapter;
        moxios.install();
        moxios.uninstall();
        equal(axios.defaults.adapter, defaultAdapter);
    });

    describe('requests', () => {
        let onFulfilled: any;
        let onRejected: any;

        beforeEach(() => {
            moxios.install();
            onFulfilled = sinon.spy();
            onRejected = sinon.spy();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('should intercept requests', (done) => {
            axios.get('/users/12345');

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                equal(moxios.requests.count(), 1);
                done();
            });
        });

        it('should mock responses', (done) => {
            axios.get('/users/12345').then(onFulfilled);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: USER_FRED
                }).then(() => {
                    const response = onFulfilled.getCall(0).args[0];
                    equal(onFulfilled.called, true);
                    equal(response.status, 200);
                    deepEqual(response.data, USER_FRED);
                    done();
                });
            });
        });

        it('should mock responses Error', (done) => {
            axios.get('/users/12346').then(onFulfilled, onRejected);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 404
                }).then(() => {
                    equal(onFulfilled.called, false);
                    equal(onRejected.called, true);
                    done();
                });
            });
        });

        it('should mock one time', (done) => {
            moxios.uninstall();

            moxios.withMock(() => {
                axios.get('/users/12345').then(onFulfilled);

                moxios.wait(() => {
                    const request = moxios.requests.mostRecent();
                    request.respondWith({
                        status: 200,
                        response: USER_FRED
                    }).then(() => {
                        equal(onFulfilled.called, true);
                        done();
                    });
                });
            });
        });

        it('should timeout requests one time', (done) => {
            moxios.uninstall();

            moxios.withMock(() => {
                axios.get('/users/12345');

                moxios.wait(() => {
                    const request = moxios.requests.mostRecent();
                    request.respondWithTimeout().catch((err: any) => {
                        equal(err.code, 'ECONNABORTED');
                        done();
                    });
                });
            });
        });

        it('should stub requests', (done) => {
            moxios.stubRequest('/users/12345', {
                status: 200,
                response: USER_FRED
            });

            axios.get('/users/12345').then(onFulfilled);

            moxios.wait(() => {
                const response = onFulfilled.getCall(0).args[0];
                deepEqual(response.data, USER_FRED);
                done();
            });
        });

        it('should stub timeout', (done) => {
            moxios.stubTimeout('/users/12345');

            axios.get('/users/12345').catch(onRejected);

            moxios.wait(() => {
                const err = onRejected.getCall(0).args[0];
                deepEqual(err.code, 'ECONNABORTED');
                done();
            });
        });

        it('should stub requests RegExp', (done) => {
            moxios.stubRequest(/\/users\/\d*/, {
                status: 200,
                response: USER_FRED
            });

            axios.get('/users/12345').then(onFulfilled);

            moxios.wait(() => {
                const response = onFulfilled.getCall(0).args[0];
                deepEqual(response.data, USER_FRED);
                done();
            });
        });

        describe('stubs', () => {
            it('should track multiple stub requests', () => {
                moxios.stubOnce('PUT', '/users/12345', {
                    status: 204
                });

                moxios.stubOnce('GET', '/users/12346', {
                    status: 200,
                    response: USER_FRED
                });

                equal(moxios.stubs.count(), 2);
            });

            it('should find single stub by method', () => {
                moxios.stubOnce('PUT', '/users/12345', {
                    status: 204
                });

                moxios.stubOnce('GET', '/users/12346', {
                    status: 200,
                    response: USER_FRED
                });

                const request = moxios.stubs.get('PUT', '/users/12345');

                notEqual(request, undefined);
            });

            it('should remove a single stub by method', () => {
                moxios.stubOnce('PUT', '/users/12346', {
                    status: 204
                });

                moxios.stubOnce('GET', '/users/12346', {
                    status: 200,
                    response: USER_FRED
                });

                moxios.stubOnce('PUT', '/users/12345', {
                    status: 204
                });

                moxios.stubOnce('GET', '/users/12345', {
                    status: 200,
                    response: USER_FRED
                });

                moxios.stubs.remove('PUT', '/users/12345');
                equal(moxios.stubs.count(), 3);
            });

            it('should not find stub with invalid method', () => {
                moxios.stubOnce('PUT', '/users/12345', {
                    status: 204
                });

                moxios.stubOnce('GET', '/users/12346', {
                    status: 200,
                    response: USER_FRED
                });

                const request = moxios.stubs.get('GET', '/users/12345');

                equal(request, undefined);
            });

            it('should not find request on invalid method', () => {
                moxios.stubOnce('PUT', '/users/12345', {
                    status: 204
                });

                moxios.stubOnce('GET', '/users/12346', {
                    status: 200,
                    response: USER_FRED
                });

                axios.put('/users/12346', USER_FRED);
                const request = moxios.requests.get('TEST');

                equal(request, undefined);
            });

            it('should find request after multiple stubs using same URI', (done) => {
                moxios.stubOnce('POST', '/users/12345', {
                    status: 204
                });

                moxios.stubOnce('PUT', '/users/12345', {
                    status: 204
                });

                moxios.stubOnce('GET', '/users/12345', {
                    status: 200,
                    response: USER_FRED
                });

                axios.put('/users/12345', USER_FRED).then(onFulfilled);

                moxios.wait(() => {
                    const response = onFulfilled.getCall(0).args[0];
                    equal(response.status, 204);
                    const request = moxios.requests.get('PUT', '/users/12345');
                    notEqual(request, undefined);
                    done();
                });
            });

            it('Should stub and find multiple requests by method', (done) => {
                moxios.stubOnce('PUT', '/users/12345', {
                    status: 204
                });

                moxios.stubOnce('GET', '/users/12346', {
                    status: 200,
                    response: USER_FRED
                });

                axios.put('/users/12345', USER_FRED).then(onFulfilled);
                axios.get('/users/12346', {}).then(onFulfilled);

                moxios.wait(() => {
                    equal(onFulfilled.calledTwice, true);

                    const response1 = onFulfilled.getCall(0).args[0];
                    const response2 = onFulfilled.getCall(1).args[0];
                    equal(response1.status, 204);
                    equal(response2.status, 200);
                    equal(response2.data.firstName, 'Fred');

                    let request = moxios.requests.get('PUT', '/users/12345');
                    notEqual(request, undefined);

                    request = moxios.requests.get('GET', '/users/12346');
                    notEqual(request, undefined);

                    done();
                });
            });
        });
    });
});
