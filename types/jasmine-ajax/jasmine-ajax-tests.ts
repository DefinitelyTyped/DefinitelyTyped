/**
 * Tests adapted from: https://github.com/jasmine/jasmine-ajax
 * By Louis Grignon
 */

/// <reference types="jasmine" />

declare function getJasmineRequireObj();

describe('StubTracker', () => {
    beforeEach(() => {
        const Constructor = getJasmineRequireObj().AjaxStubTracker();
        this.tracker = new Constructor();
    });

    it('finds nothing if no stubs are added', () => {
        expect(this.tracker.findStub()).toBeUndefined();
    });

    it('finds an added stub', () => {
        const stub = { matches: () => true };
        this.tracker.addStub(stub);

        expect(this.tracker.findStub()).toBe(stub);
    });

    it('skips an added stub that does not match', () => {
        const stub = { matches: () => false };
        this.tracker.addStub(stub);

        expect(this.tracker.findStub()).toBeUndefined();
    });

    it('passes url, data, and method to the stub', () => {
        const stub = { matches: jasmine.createSpy('matches') };
        this.tracker.addStub(stub);

        this.tracker.findStub('url', 'data', 'method');

        expect(stub.matches).toHaveBeenCalledWith('url', 'data', 'method');
    });

    it('can clear out all stubs', () => {
        const stub = { matches: jasmine.createSpy('matches') };
        this.tracker.addStub(stub);

        this.tracker.findStub();

        expect(stub.matches).toHaveBeenCalled();

        this.tracker.reset();
        stub.matches.calls.reset();

        this.tracker.findStub();

        expect(stub.matches).not.toHaveBeenCalled();
    });

    it('uses the most recently added stub that matches', () => {
        const stub1 = { matches: () => true };
        const stub2 = { matches: () => false };
        const stub3 = { matches: () => false };

        this.tracker.addStub(stub1);
        this.tracker.addStub(stub2);
        this.tracker.addStub(stub3);

        expect(this.tracker.findStub()).toBe(stub2);
    });
});

describe('FakeRequest', () => {
    beforeEach(() => {
        this.requestTracker = { track: jasmine.createSpy('trackRequest') };
        this.stubTracker = { findStub() { } };
        const parserInstance = this.parserInstance = jasmine.createSpy('parse');
        this.paramParser = { findParser: () => ({ parse: parserInstance }) };
        const eventBus = this.fakeEventBus = {
            addEventListener: jasmine.createSpy('addEventListener'),
            trigger: jasmine.createSpy('trigger'),
            removeEventListener: jasmine.createSpy('removeEventListener')
        };
        this.eventBusFactory = () => {
            return eventBus;
        };
        this.fakeGlobal = {
            XMLHttpRequest: () => {
                this.extraAttribute = 'my cool attribute';
            },
            DOMParser: window['DOMParser'],
            ActiveXObject: window['ActiveXObject']
        };
        this.FakeRequest = getJasmineRequireObj().AjaxFakeRequest(this.eventBusFactory)(this.fakeGlobal, this.requestTracker, this.stubTracker, this.paramParser);
    });

    it('extends from the global XMLHttpRequest', () => {
        const request = new this.FakeRequest();

        expect(request.extraAttribute).toEqual('my cool attribute');
    });

    it('skips XMLHttpRequest attributes that IE does not want copied', () => {
        // use real window here so it will correctly go red on IE if it breaks
        const FakeRequest = getJasmineRequireObj().AjaxFakeRequest(this.eventBusFactory)(window, this.requestTracker, this.stubTracker, this.paramParser);
        const request = new FakeRequest();

        expect(request.responseBody).toBeUndefined();
        expect(request.responseXML).toBeUndefined();
        expect(request.statusText).toBeUndefined();
    });

    it('tracks the request', () => {
        const request = new this.FakeRequest();

        expect(this.requestTracker.track).toHaveBeenCalledWith(request);
    });

    it('has default request headers and override mime type', () => {
        const request = new this.FakeRequest();

        expect(request.requestHeaders).toEqual({});
        expect(request.overriddenMimeType).toBeNull();
    });

    it('saves request information when opened', () => {
        const request = new this.FakeRequest();
        request.open('METHOD', 'URL', 'ignore_async', 'USERNAME', 'PASSWORD');

        expect(request.method).toEqual('METHOD');
        expect(request.url).toEqual('URL');
        expect(request.username).toEqual('USERNAME');
        expect(request.password).toEqual('PASSWORD');
    });

    it('saves an override mime type', () => {
        const request = new this.FakeRequest();

        request.overrideMimeType('application/text; charset: utf-8');

        expect(request.overriddenMimeType).toBe('application/text; charset: utf-8');
    });

    it('saves request headers', () => {
        const request = new this.FakeRequest();

        request.setRequestHeader('X-Header-1', 'value1');
        request.setRequestHeader('X-Header-2', 'value2');

        expect(request.requestHeaders).toEqual({
            'X-Header-1': 'value1',
            'X-Header-2': 'value2'
        });
    });

    it('combines request headers with the same header name', () => {
        const request = new this.FakeRequest();

        request.setRequestHeader('X-Header', 'value1');
        request.setRequestHeader('X-Header', 'value2');

        expect(request.requestHeaders['X-Header']).toEqual('value1, value2');
    });

    it('finds the content-type request header', () => {
        const request = new this.FakeRequest();

        request.setRequestHeader('ContEnt-tYPe', 'application/text+xml');

        expect(request.contentType()).toEqual('application/text+xml');
    });

    describe('managing readyState', () => {
        beforeEach(() => {
            this.request = new this.FakeRequest();
        });

        it('has an initial ready state of 0 (uninitialized)', () => {
            expect(this.request.readyState).toBe(0);
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalled();
        });

        it('has a ready state of 1 (open) when opened', () => {
            this.request.open();

            expect(this.request.readyState).toBe(1);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });

        it('has a ready state of 0 (uninitialized) when aborted', () => {
            this.request.open();
            this.fakeEventBus.trigger.calls.reset();

            this.request.abort();

            expect(this.request.readyState).toBe(0);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });

        it('has a ready state of 1 (sent) when sent', () => {
            this.request.open();
            this.fakeEventBus.trigger.calls.reset();

            this.request.send();

            expect(this.request.readyState).toBe(1);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('readystatechange');
        });

        it('has a ready state of 4 (loaded) when timed out', () => {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();

            jasmine.clock().install();
            this.request.responseTimeout();
            jasmine.clock().uninstall();

            expect(this.request.readyState).toBe(4);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange', 'timeout');
        });

        it('has a ready state of 4 (loaded) when network erroring', () => {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();

            this.request.responseError();

            expect(this.request.readyState).toBe(4);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });

        it('has a ready state of 4 (loaded) when responding', () => {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();

            this.request.respondWith({});

            expect(this.request.readyState).toBe(4);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });

        it('has a ready state of 2, then 4 (loaded) when responding', () => {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();

            const request = this.request;
            const events = [];
            const headers = [
                { name: 'X-Header', value: 'foo' }
            ];

            this.fakeEventBus.trigger.and.callFake(event => {
                if (event === 'readystatechange') {
                    events.push({
                        readyState: request.readyState,
                        status: request.status,
                        statusText: request.statusText,
                        responseHeaders: request.responseHeaders
                    });
                }
            });

            this.request.respondWith({
                status: 200,
                statusText: 'OK',
                responseHeaders: headers
            });

            expect(this.request.readyState).toBe(4);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
            expect(events.length).toBe(2);
            expect(events).toEqual([
                { readyState: 2, status: 200, statusText: 'OK', responseHeaders: headers },
                { readyState: 4, status: 200, statusText: 'OK', responseHeaders: headers }
            ]);
        });

        it('throws an error when timing out a request that has completed', () => {
            this.request.open();
            this.request.send();
            this.request.respondWith({});
            const request = this.request;

            expect(() => {
                request.responseTimeout();
            }).toThrowError('FakeXMLHttpRequest already completed');
        });

        it('throws an error when responding to a request that has completed', () => {
            this.request.open();
            this.request.send();
            this.request.respondWith({});
            const request = this.request;

            expect(() => {
                request.respondWith({});
            }).toThrowError('FakeXMLHttpRequest already completed');
        });

        it('throws an error when erroring a request that has completed', () => {
            this.request.open();
            this.request.send();
            this.request.respondWith({});
            const request = this.request;

            expect(() => {
                request.responseError({});
            }).toThrowError('FakeXMLHttpRequest already completed');
        });
    });

    it('registers on-style callback with the event bus', () => {
        this.request = new this.FakeRequest();

        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('readystatechange', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('loadstart', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('progress', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('abort', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('error', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('load', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('timeout', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('loadend', jasmine.any(Function));

        this.request.onreadystatechange = jasmine.createSpy('readystatechange');
        this.request.onloadstart = jasmine.createSpy('loadstart');
        this.request.onprogress = jasmine.createSpy('progress');
        this.request.onabort = jasmine.createSpy('abort');
        this.request.onerror = jasmine.createSpy('error');
        this.request.onload = jasmine.createSpy('load');
        this.request.ontimeout = jasmine.createSpy('timeout');
        this.request.onloadend = jasmine.createSpy('loadend');

        const args = this.fakeEventBus.addEventListener.calls.allArgs();
        for (const [eventName, busCallback] of args) {
            busCallback();
            expect(this.request['on' + eventName]).toHaveBeenCalled();
        }
    });

    it('delegates addEventListener to the eventBus', () => {
        this.request = new this.FakeRequest();

        this.request.addEventListener('foo', 'bar');

        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('foo', 'bar');
    });

    it('delegates removeEventListener to the eventBus', () => {
        this.request = new this.FakeRequest();

        this.request.removeEventListener('foo', 'bar');

        expect(this.fakeEventBus.removeEventListener).toHaveBeenCalledWith('foo', 'bar');
    });

    describe('triggering progress events', () => {
        beforeEach(() => {
            this.request = new this.FakeRequest();
        });

        it('should not trigger any events to start', () => {
            this.request.open();

            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });

        it('should trigger loadstart when sent', () => {
            this.request.open();

            this.fakeEventBus.trigger.calls.reset();

            this.request.send();

            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('readystatechange');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadend');
        });

        it('should trigger abort, progress, loadend when aborted', () => {
            this.request.open();
            this.request.send();

            this.fakeEventBus.trigger.calls.reset();

            this.request.abort();

            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadend');
        });

        it('should trigger error, progress, loadend when network error', () => {
            this.request.open();
            this.request.send();

            this.fakeEventBus.trigger.calls.reset();

            this.request.responseError();

            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadend');
        });

        it('should trigger timeout, progress, loadend when timing out', () => {
            this.request.open();
            this.request.send();

            this.fakeEventBus.trigger.calls.reset();

            jasmine.clock().install();
            this.request.responseTimeout();
            jasmine.clock().uninstall();

            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange', 'timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadend');
        });

        it('should trigger load, progress, loadend when responding', () => {
            this.request.open();
            this.request.send();

            this.fakeEventBus.trigger.calls.reset();

            this.request.respondWith({ status: 200 });

            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadend');
        });
    });

    it('ticks the jasmine clock on timeout', () => {
        const clock = { tick: jasmine.createSpy('tick') };
        spyOn(jasmine, 'clock').and.returnValue(clock as any);

        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.responseTimeout();

        expect(clock.tick).toHaveBeenCalledWith(30000);
    });

    it('has an initial status of null', () => {
        const request = new this.FakeRequest();

        expect(request.status).toBeNull();
    });

    it('has an aborted status', () => {
        const request = new this.FakeRequest();

        request.abort();

        expect(request.status).toBe(0);
        expect(request.statusText).toBe('abort');
    });

    it('has a status from the response', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200 });

        expect(request.status).toBe(200);
        expect(request.statusText).toBe('');
    });

    it('has a statusText from the response', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200, statusText: 'OK' });

        expect(request.status).toBe(200);
        expect(request.statusText).toBe('OK');
    });

    it('saves off any data sent to the server', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send('foo=bar&baz=quux');

        expect(request.params).toBe('foo=bar&baz=quux');
    });

    it('parses data sent to the server', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send('foo=bar&baz=quux');

        this.parserInstance.and.returnValue({data: 'parsed'});

        expect(request.data()).toEqual({data: 'parsed'});
    });

    it('skips parsing if no data was sent', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        expect(request.data()).toEqual({});
        expect(this.parserInstance).not.toHaveBeenCalled();
    });

    it('saves responseText', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200, responseText: 'foobar' });

        expect(request.responseText).toBe('foobar');
    });

    it('defaults responseText if none is given', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200 });

        expect(request.responseText).toBe('');
    });

    it('retrieves individual response headers', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({
            status: 200,
            responseHeaders: {
                'X-Header': 'foo'
            }
        });

        expect(request.getResponseHeader('X-Header')).toBe('foo');
    });

    it('retrieves individual response headers case-insensitively', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({
            status: 200,
            responseHeaders: {
                'X-Header': 'foo'
            }
        });

        expect(request.getResponseHeader('x-header')).toBe('foo');
    });

    it('retrieves a combined response header', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({
            status: 200,
            responseHeaders: [
                { name: 'X-Header', value: 'foo' },
                { name: 'X-Header', value: 'bar' }
            ]
        });

        expect(request.getResponseHeader('x-header')).toBe('foo, bar');
    });

    it("doesn't pollute the response headers of other XHRs", () => {
        const request1 = new this.FakeRequest();
        request1.open();
        request1.send();

        const request2 = new this.FakeRequest();
        request2.open();
        request2.send();

        request1.respondWith({ status: 200, responseHeaders: { 'X-Foo': 'bar' } });
        request2.respondWith({ status: 200, responseHeaders: { 'X-Baz': 'quux' } });

        expect(request1.getAllResponseHeaders()).toBe("X-Foo: bar\r\n");
        expect(request2.getAllResponseHeaders()).toBe("X-Baz: quux\r\n");
    });

    it('retrieves all response headers', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({
            status: 200,
            responseHeaders: [
                { name: 'X-Header-1', value: 'foo' },
                { name: 'X-Header-2', value: 'bar' },
                { name: 'X-Header-1', value: 'baz' }
            ]
        });

        expect(request.getAllResponseHeaders()).toBe("X-Header-1: foo\r\nX-Header-2: bar\r\nX-Header-1: baz\r\n");
    });

    it('sets the content-type header to the specified contentType when no other headers are supplied', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200, contentType: 'text/plain' });

        expect(request.getResponseHeader('content-type')).toBe('text/plain');
        expect(request.getAllResponseHeaders()).toBe("Content-Type: text/plain\r\n");
    });

    it('sets a default content-type header if no contentType and headers are supplied', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200 });

        expect(request.getResponseHeader('content-type')).toBe('application/json');
        expect(request.getAllResponseHeaders()).toBe("Content-Type: application/json\r\n");
    });

    it('has no responseXML by default', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200 });

        expect(request.responseXML).toBeNull();
    });

    it('parses a text/xml document into responseXML', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200, contentType: 'text/xml', responseText: '<dom><stuff/></dom>' });

        if (typeof window['Document'] !== 'undefined') {
            expect(request.responseXML instanceof window['Document']).toBe(true);
            expect(request.response instanceof window['Document']).toBe(true);
        } else {
            // IE 8
            expect(request.responseXML instanceof window['ActiveXObject']).toBe(true);
            expect(request.response instanceof window['ActiveXObject']).toBe(true);
        }
    });

    it('parses an application/xml document into responseXML', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200, contentType: 'application/xml', responseText: '<dom><stuff/></dom>' });

        if (typeof window['Document'] !== 'undefined') {
            expect(request.responseXML instanceof window['Document']).toBe(true);
            expect(request.response instanceof window['Document']).toBe(true);
        } else {
            // IE 8
            expect(request.responseXML instanceof window['ActiveXObject']).toBe(true);
            expect(request.response instanceof window['ActiveXObject']).toBe(true);
        }
    });

    it('parses a custom blah+xml document into responseXML', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200, contentType: 'application/text+xml', responseText: '<dom><stuff/></dom>' });

        if (typeof window['Document'] !== 'undefined') {
            expect(request.responseXML instanceof window['Document']).toBe(true);
            expect(request.response instanceof window['Document']).toBe(true);
        } else {
            // IE 8
            expect(request.responseXML instanceof window['ActiveXObject']).toBe(true);
            expect(request.response instanceof window['ActiveXObject']).toBe(true);
        }
    });

    it('defaults the response attribute to the responseText', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200, responseText: 'foo' });

        expect(request.response).toEqual('foo');
    });

    it('has a text response when the responseType is blank', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200, responseText: 'foo', responseType: '' });

        expect(request.response).toEqual('foo');
    });

    it('has a text response when the responseType is text', () => {
        const request = new this.FakeRequest();
        request.open();
        request.send();

        request.respondWith({ status: 200, responseText: 'foo', responseType: 'text' });

        expect(request.response).toEqual('foo');
    });
});

describe("Jasmine Mock Ajax (for toplevel)", () => {
    // TODO: these are all `any`!
    let request, anotherRequest, response; // tslint:disable-line one-variable-per-declaration
    let success, error, complete; // tslint:disable-line one-variable-per-declaration
    let client, onreadystatechange; // tslint:disable-line one-variable-per-declaration
    const sharedContext: any = {};
    let fakeGlobal, mockAjax; // tslint:disable-line one-variable-per-declaration

    beforeEach(() => {
        const fakeXMLHttpRequest = jasmine.createSpy('realFakeXMLHttpRequest');
        fakeGlobal = {
            XMLHttpRequest: fakeXMLHttpRequest,
            DOMParser: window['DOMParser'],
            ActiveXObject: window['ActiveXObject']
        };
        mockAjax = new MockAjax(fakeGlobal);
        mockAjax.install();

        success = jasmine.createSpy("onSuccess");
        error = jasmine.createSpy("onFailure");
        complete = jasmine.createSpy("onComplete");

        onreadystatechange = function() {
            if (this.readyState === (this.DONE || 4)) { // IE 8 doesn't support DONE
                if (this.status === 200) {
                    success(this.responseText, this.textStatus, this);
                } else {
                    error(this, this.textStatus, '');
                }

                complete(this, this.textStatus);
            }
        };
    });

    describe("when making a request", () => {
        beforeEach(() => {
            client = new fakeGlobal.XMLHttpRequest();
            client.onreadystatechange = onreadystatechange;
            client.open("GET", "example.com/someApi");
            client.send();
            request = mockAjax.requests.mostRecent();
        });

        it("should store URL and transport", () => {
            expect(request.url).toEqual("example.com/someApi");
        });

        it("should queue the request", () => {
            expect(mockAjax.requests.count()).toEqual(1);
        });

        it("should allow access to the queued request", () => {
            expect(mockAjax.requests.first()).toEqual(request);
        });

        it("should allow access to the queued request via index", () => {
            expect(mockAjax.requests.at(0)).toEqual(request);
        });

        describe("and then another request", () => {
            beforeEach(() => {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.send();

                anotherRequest = mockAjax.requests.mostRecent();
            });

            it("should queue the next request", () => {
                expect(mockAjax.requests.count()).toEqual(2);
            });

            it("should allow access to the other queued request", () => {
                expect(mockAjax.requests.first()).toEqual(request);
                expect(mockAjax.requests.mostRecent()).toEqual(anotherRequest);
            });
        });

        describe("mockAjax.requests.mostRecent()", () => {
            describe("when there is one request queued", () => {
                it("should return the request", () => {
                    expect(mockAjax.requests.mostRecent()).toEqual(request);
                });
            });

            describe("when there is more than one request", () => {
                beforeEach(() => {
                    client = new fakeGlobal.XMLHttpRequest();
                    client.onreadystatechange = onreadystatechange;
                    client.open("GET", "example.com/someApi");
                    client.send();
                    anotherRequest = mockAjax.requests.mostRecent();
                });

                it("should return the most recent request", () => {
                    expect(mockAjax.requests.mostRecent()).toEqual(anotherRequest);
                });
            });

            describe("when there are no requests", () => {
                beforeEach(() => {
                    mockAjax.requests.reset();
                });

                it("should return null", () => {
                    expect(mockAjax.requests.mostRecent()).toBeUndefined();
                });
            });
        });

        describe("clearAjaxRequests()", () => {
            beforeEach(() => {
                mockAjax.requests.reset();
            });

            it("should remove all requests", () => {
                expect(mockAjax.requests.count()).toEqual(0);
                expect(mockAjax.requests.mostRecent()).toBeUndefined();
            });
        });
    });

    describe("when simulating a response with request.response", () => {
        describe("and the response is Success", () => {
            beforeEach(() => {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "text/plain");
                client.send();

                request = mockAjax.requests.mostRecent();
                response = { status: 200, statusText: "OK", contentType: "text/html", responseText: "OK!", responseType: "json" };
                request.respondWith(response);

                sharedContext.responseCallback = success;
                sharedContext.status = response.status;
                sharedContext.statusText = response.statusText;
                sharedContext.contentType = response.contentType;
                sharedContext.responseText = response.responseText;
                sharedContext.responseType = response.responseType;
            });

            it("should call the success handler", () => {
                expect(success).toHaveBeenCalled();
            });

            it("should not call the failure handler", () => {
                expect(error).not.toHaveBeenCalled();
            });

            it("should call the complete handler", () => {
                expect(complete).toHaveBeenCalled();
            });

            sharedAjaxResponseBehaviorForZepto_Success(sharedContext);
        });

        describe("and the response is Success, but with JSON", () => {
            beforeEach(() => {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "application/json");
                client.send();

                request = mockAjax.requests.mostRecent();
                const responseObject = { status: 200, statusText: "OK", contentType: "application/json", responseText: '{"foo":"bar"}', responseType: "json" };

                request.respondWith(responseObject);

                sharedContext.responseCallback = success;
                sharedContext.status = responseObject.status;
                sharedContext.statusText = responseObject.statusText;
                sharedContext.contentType = responseObject.contentType;
                sharedContext.responseText = responseObject.responseText;
                sharedContext.responseType = responseObject.responseType;

                response = success.calls.mostRecent().args[2];
            });

            it("should call the success handler", () => {
                expect(success).toHaveBeenCalled();
            });

            it("should not call the failure handler", () => {
                expect(error).not.toHaveBeenCalled();
            });

            it("should call the complete handler", () => {
                expect(complete).toHaveBeenCalled();
            });

            it("should return a JavaScript object for XHR2 response", () => {
                const responseText = sharedContext.responseText;
                expect(success.calls.mostRecent().args[0]).toEqual(responseText);

                expect(response.responseText).toEqual(responseText);
                expect(response.response).toEqual({ foo: "bar" });
            });

            sharedAjaxResponseBehaviorForZepto_Success(sharedContext);
        });

        describe("and the response is Success, and response is overriden", () => {
            beforeEach(() => {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "application/json");
                client.send();

                request = mockAjax.requests.mostRecent();
                const responseObject = { status: 200, statusText: "OK", contentType: "application/json", responseText: '{"foo":"bar"}', responseType: 'json' };

                request.respondWith(responseObject);

                sharedContext.responseCallback = success;
                sharedContext.status = responseObject.status;
                sharedContext.statusText = responseObject.statusText;
                sharedContext.contentType = responseObject.contentType;
                sharedContext.responseText = responseObject.responseText;
                sharedContext.responseType = responseObject.responseType;

                response = success.calls.mostRecent().args[2];
            });

            it("should return the provided override for the XHR2 response", () => {
                const responseText = sharedContext.responseText;

                expect(response.responseText).toEqual(responseText);
                expect(response.response).toEqual({ foo: "bar" });
            });

            sharedAjaxResponseBehaviorForZepto_Success(sharedContext);
        });

        describe("response with unique header names using an object", () => {
            beforeEach(() => {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com");
                client.send();

                request = mockAjax.requests.mostRecent();
                const responseObject = {
                    status: 200, statusText: "OK", responseText: '["foo"]', responseHeaders: {
                        'X-Header1': 'header 1 value',
                        'X-Header2': 'header 2 value',
                        'X-Header3': 'header 3 value'
                    }
                };
                request.respondWith(responseObject);
                response = success.calls.mostRecent().args[2];
            });

            it("getResponseHeader should return the each value", () => {
                expect(response.getResponseHeader('X-Header1')).toBe('header 1 value');
                expect(response.getResponseHeader('X-Header2')).toBe('header 2 value');
                expect(response.getResponseHeader('X-Header3')).toBe('header 3 value');
            });

            it("getAllResponseHeaders should return all values", () => {
                expect(response.getAllResponseHeaders()).toBe([
                    "X-Header1: header 1 value",
                    "X-Header2: header 2 value",
                    "X-Header3: header 3 value"
                ].join("\r\n") + "\r\n");
            });
        });

        describe("response with multiple headers of the same name using an array of objects", () => {
            beforeEach(() => {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com");
                client.send();

                request = mockAjax.requests.mostRecent();
                const responseObject = {
                    status: 200, statusText: "OK", responseText: '["foo"]', responseHeaders: [
                        { name: 'X-Header', value: 'header value 1' },
                        { name: 'X-Header', value: 'header value 2' }
                    ]
                };
                request.respondWith(responseObject);
                response = success.calls.mostRecent().args[2];
            });

            it("getResponseHeader should return all values comma separated", () => {
                expect(response.getResponseHeader('X-Header')).toBe('header value 1, header value 2');
            });

            it("getAllResponseHeaders should return all values", () => {
                expect(response.getAllResponseHeaders()).toBe([
                    "X-Header: header value 1",
                    "X-Header: header value 2"
                ].join("\r\n") + "\r\n");
            });
        });

        describe("the content type defaults to application/json", () => {
            beforeEach(() => {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "application/json");
                client.send();

                request = mockAjax.requests.mostRecent();
                response = { status: 200, statusText: "OK", responseText: '{"foo": "valid JSON, dammit."}', responseType: 'json' };
                request.respondWith(response);

                sharedContext.responseCallback = success;
                sharedContext.status = response.status;
                sharedContext.statusText = response.statusText;
                sharedContext.contentType = "application/json";
                sharedContext.responseType = response.responseType;
                sharedContext.responseText = response.responseText;
            });

            it("should call the success handler", () => {
                expect(success).toHaveBeenCalled();
            });

            it("should not call the failure handler", () => {
                expect(error).not.toHaveBeenCalled();
            });

            it("should call the complete handler", () => {
                expect(complete).toHaveBeenCalled();
            });

            sharedAjaxResponseBehaviorForZepto_Success(sharedContext);
        });

        describe("and the status/response code is 0", () => {
            beforeEach(() => {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "text/plain");
                client.send();

                request = mockAjax.requests.mostRecent();
                response = { status: 0, statusText: "ABORT", responseText: '{"foo": "whoops!"}', responseType: "json"};
                request.respondWith(response);

                sharedContext.responseCallback = error;
                sharedContext.status = 0;
                sharedContext.statusText = response.statusText;
                sharedContext.contentType = 'application/json';
                sharedContext.responseText = response.responseText;
                sharedContext.responseType = response.responseType;
            });

            it("should call the success handler", () => {
                expect(success).not.toHaveBeenCalled();
            });

            it("should not call the failure handler", () => {
                expect(error).toHaveBeenCalled();
            });

            it("should call the complete handler", () => {
                expect(complete).toHaveBeenCalled();
            });

            sharedAjaxResponseBehaviorForZepto_Failure(sharedContext);
        });
    });

    describe("and the response is error", () => {
        beforeEach(() => {
            client = new fakeGlobal.XMLHttpRequest();
            client.onreadystatechange = onreadystatechange;
            client.open("GET", "example.com/someApi");
            client.setRequestHeader("Content-Type", "text/plain");
            client.send();

            request = mockAjax.requests.mostRecent();
            response = { status: 500, statusText: "SERVER ERROR", contentType: "text/html", responseText: "(._){", responseType: "json"};
            request.respondWith(response);

            sharedContext.responseCallback = error;
            sharedContext.status = response.status;
            sharedContext.statusText = response.statusText;
            sharedContext.contentType = response.contentType;
            sharedContext.responseText = response.responseText;
            sharedContext.responseType = response.responseType;
        });

        it("should not call the success handler", () => {
            expect(success).not.toHaveBeenCalled();
        });

        it("should call the failure handler", () => {
            expect(error).toHaveBeenCalled();
        });

        it("should call the complete handler", () => {
            expect(complete).toHaveBeenCalled();
        });

        sharedAjaxResponseBehaviorForZepto_Failure(sharedContext);
    });

    describe('when simulating a response with request.responseTimeout', () => {
        beforeEach(() => {
            jasmine.clock().install();

            client = new fakeGlobal.XMLHttpRequest();
            client.onreadystatechange = onreadystatechange;
            client.open("GET", "example.com/someApi");
            client.setRequestHeader("Content-Type", "text/plain");
            client.send();

            request = mockAjax.requests.mostRecent();
            response = { contentType: "text/html", response: "(._){response", responseText: "(._){", responseType: "text",  status: 200, statusText: 'OK' };
            request.responseTimeout(response);

            sharedContext.responseCallback = error;
            sharedContext.status = response.status;
            sharedContext.statusText = response.statusText;
            sharedContext.contentType = response.contentType;
            sharedContext.responseText = response.responseText;
            sharedContext.responseType = response.responseType;
        });

        afterEach(() => {
            jasmine.clock().uninstall();
        });

        it("should not call the success handler", () => {
            expect(success).not.toHaveBeenCalled();
        });

        it("should call the failure handler", () => {
            expect(error).toHaveBeenCalled();
        });

        it("should call the complete handler", () => {
            expect(complete).toHaveBeenCalled();
        });
    });
});

function sharedAjaxResponseBehaviorForZepto_Success(context) {
    describe("the success response", () => {
        let xhr;
        beforeEach(() => {
            xhr = context.responseCallback.calls.mostRecent().args[2];
        });

        it("should have the expected status code", () => {
            expect(xhr.status).toEqual(context.status);
        });

        it("should have the expected content type", () => {
            expect(xhr.getResponseHeader('Content-Type')).toEqual(context.contentType);
        });

        it("should have the expected xhr2 response", () => {
            const expected = context.response || context.responseType === 'json' ? JSON.parse(context.responseText) : context.responseText;
            expect(xhr.response).toEqual(expected);
        });

        it("should have the expected response text", () => {
            expect(xhr.responseText).toEqual(context.responseText);
        });

        it("should have the expected status text", () => {
            expect(xhr.statusText).toEqual(context.statusText);
        });
    });
}

function sharedAjaxResponseBehaviorForZepto_Failure(context) {
    describe("the failure response", () => {
        let xhr;
        beforeEach(() => {
            xhr = context.responseCallback.calls.mostRecent().args[0];
        });

        it("should have the expected status code", () => {
            expect(xhr.status).toEqual(context.status);
        });

        it("should have the expected content type", () => {
            expect(xhr.getResponseHeader('Content-Type')).toEqual(context.contentType);
        });

        it("should have the expected xhr2 response", () => {
            const expected = context.response || xhr.responseType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
            expect(xhr.response).toEqual(expected);
        });

        it("should have the expected response text", () => {
            expect(xhr.responseText).toEqual(context.responseText);
        });

        it("should have the expected status text", () => {
            expect(xhr.statusText).toEqual(context.statusText);
        });
    });
}

describe('ParamParser', () => {
    beforeEach(() => {
        const Constructor = getJasmineRequireObj().AjaxParamParser();
        expect(Constructor).toEqual(jasmine.any(Function));
        this.parser = new Constructor();
    });

    it('has a default parser', () => {
        const parser = this.parser.findParser({ contentType: () => { } });
        const parsed = parser.parse('3+stooges=shemp&3+stooges=larry%20%26%20moe%20%26%20curly&some%3Dthing=else+entirely');

        expect(parsed).toEqual({
            '3 stooges': ['shemp', 'larry & moe & curly'],
            'some=thing': ['else entirely']
        });
    });

    it('should detect and parse json', () => {
        const data = {
            foo: 'bar',
            baz: ['q', 'u', 'u', 'x'],
            nested: {
                object: {
                    containing: 'stuff'
                }
            }
        };
        const parser = this.parser.findParser({ contentType: () => 'application/json' });
        const parsed = parser.parse(JSON.stringify(data));

        expect(parsed).toEqual(data);
    });

    it('should parse json with further qualifiers on content-type', () => {
        const data = {
            foo: 'bar',
            baz: ['q', 'u', 'u', 'x'],
            nested: {
                object: {
                    containing: 'stuff'
                }
            }
        };
        const parser = this.parser.findParser({ contentType: () => 'application/json; charset=utf-8' });
        const parsed = parser.parse(JSON.stringify(data));

        expect(parsed).toEqual(data);
    });

    it('should have custom parsers take precedence', () => {
        const custom = {
            test: jasmine.createSpy('test').and.returnValue(true),
            parse: jasmine.createSpy('parse').and.returnValue('parsedFormat')
        };

        this.parser.add(custom);

        const parser = this.parser.findParser({ contentType: () => { } });
        const parsed = parser.parse('custom_format');

        expect(parsed).toEqual('parsedFormat');
        expect(custom.test).toHaveBeenCalled();
        expect(custom.parse).toHaveBeenCalledWith('custom_format');
    });

    it('should skip custom parsers that do not match', () => {
        const custom = {
            test: jasmine.createSpy('test').and.returnValue(false),
            parse: jasmine.createSpy('parse').and.returnValue('parsedFormat')
        };

        this.parser.add(custom);

        const parser = this.parser.findParser({ contentType: () => { } });
        const parsed = parser.parse('custom_format');

        expect(parsed).toEqual({ custom_format: ['undefined'] });
        expect(custom.test).toHaveBeenCalled();
        expect(custom.parse).not.toHaveBeenCalled();
    });

    it('removes custom parsers when reset', () => {
        const custom = {
            test: jasmine.createSpy('test').and.returnValue(true),
            parse: jasmine.createSpy('parse').and.returnValue('parsedFormat')
        };

        this.parser.add(custom);

        let parser = this.parser.findParser({ contentType: () => { } });
        let parsed = parser.parse('custom_format');

        expect(parsed).toEqual('parsedFormat');

        custom.test['calls'].reset();
        custom.parse['calls'].reset();

        this.parser.reset();

        parser = this.parser.findParser({ contentType: () => { } });
        parsed = parser.parse('custom_format');

        expect(parsed).toEqual({ custom_format: ['undefined'] });
        expect(custom.test).not.toHaveBeenCalled();
        expect(custom.parse).not.toHaveBeenCalled();
    });
});

describe('RequestStub', () => {
    beforeEach(() => {
        this.RequestStub = getJasmineRequireObj().AjaxRequestStub();

        jasmine.addMatchers({
            toMatchRequest() {
                return {
                    compare(actual): jasmine.CustomMatcherResult {
                        return {
                            message: '',
                            pass: actual.matches.apply(actual, Array.prototype.slice.call(arguments, 1))
                        };
                    }
                };
            }
        });
    });

    it('matches just by exact url', () => {
        const stub = new this.RequestStub('www.example.com/foo');

        expect(stub)['toMatchRequest']('www.example.com/foo');
    });

    it('does not match if the url differs', () => {
        const stub = new this.RequestStub('www.example.com/foo');

        expect(stub).not['toMatchRequest']('www.example.com/bar');
    });

    it('matches unordered query params', () => {
        const stub = new this.RequestStub('www.example.com?foo=bar&baz=quux');

        expect(stub)['toMatchRequest']('www.example.com?baz=quux&foo=bar');
    });

    it('requires all specified query params to be there', () => {
        const stub = new this.RequestStub('www.example.com?foo=bar&baz=quux');

        expect(stub).not['toMatchRequest']('www.example.com?foo=bar');
    });

    it('can match the url with a RegExp', () => {
        const stub = new this.RequestStub(/ba[rz]/);

        expect(stub)['toMatchRequest']('bar');
        expect(stub)['toMatchRequest']('baz');
        expect(stub).not['toMatchRequest']('foo');
    });

    it('requires the method to match if supplied', () => {
        const stub = new this.RequestStub('www.example.com/foo', null, 'POST');

        expect(stub).not['toMatchRequest']('www.example.com/foo');
        expect(stub).not['toMatchRequest']('www.example.com/foo', null, 'GET');
        expect(stub)['toMatchRequest']('www.example.com/foo', null, 'POST');
    });

    it('requires the data submitted to match if supplied', () => {
        const stub = new this.RequestStub('/foo', 'foo=bar&baz=quux');

        expect(stub)['toMatchRequest']('/foo', 'baz=quux&foo=bar');
        expect(stub).not['toMatchRequest']('/foo', 'foo=bar');
    });

    it('has methods', () => {
        jasmine.Ajax.stubRequest('/foo').andReturn({
            status: 200,
            statusText: 'OK',
            contentType: 'application/json',
            responseText: '{"success": true}',
            responseURL: 'http://example.com/foo',
            responseJSON: { success: true },
            responseHeaders: { 'X-Example': 'a value' },
        });
        jasmine.Ajax.stubRequest('/bar').andReturn({});
        jasmine.Ajax.stubRequest('/baz').andError({
            status: 400,
            statusText: 'Invalid',
        });
        jasmine.Ajax.stubRequest('/foobar').andError({});
        jasmine.Ajax.stubRequest('/foobaz').andTimeout();
        jasmine.Ajax.stubRequest('/barbaz').andCallFunction((xhr) => {
            xhr.url === '/barbaz';
            xhr.method === 'POST';
            xhr.params;
            xhr.username === 'jane_coder';
            xhr.password === '12345';
            xhr.requestHeaders.Accept === 'application/json';
            xhr.data(); // $ExpectType string | object
            xhr.respondWith({
                status: 200,
                contentType: 'application/json',
                responseText: '{"success": true}',
                responseHeaders: { 'X-Example': 'a value' },
            });
            xhr.responseTimeout();
            xhr.responseError({
                status: 400,
                statusText: 'Invalid',
            });
        });
    });
});

describe('RequestTracker', () => {
    beforeEach(() => {
        const Constructor = getJasmineRequireObj().AjaxRequestTracker();
        this.tracker = new Constructor();
    });

    it('tracks the number of times ajax requests are made', () => {
        expect(this.tracker.count()).toBe(0);

        this.tracker.track();

        expect(this.tracker.count()).toBe(1);
    });

    it('simplifies access to the last (most recent) request', () => {
        this.tracker.track();
        this.tracker.track('request');

        expect(this.tracker.mostRecent()).toEqual('request');
    });

    it('returns a useful falsy value when there is no last (most recent) request', () => {
        expect(this.tracker.mostRecent()).toBeFalsy();
    });

    it('simplifies access to the first (oldest) request', () => {
        this.tracker.track('request');
        this.tracker.track();

        expect(this.tracker.first()).toEqual('request');
    });

    it('returns a useful falsy value when there is no first (oldest) request', () => {
        expect(this.tracker.first()).toBeFalsy();
    });

    it('allows the requests list to be reset', () => {
        this.tracker.track();
        this.tracker.track();

        expect(this.tracker.count()).toBe(2);

        this.tracker.reset();

        expect(this.tracker.count()).toBe(0);
    });

    it('allows retrieval of an arbitrary request by index', () => {
        this.tracker.track('1');
        this.tracker.track('2');
        this.tracker.track('3');

        expect(this.tracker.at(1)).toEqual('2');
    });

    it('allows retrieval of all requests that are for a given url', () => {
        this.tracker.track({ url: 'foo' });
        this.tracker.track({ url: 'bar' });

        expect(this.tracker.filter('bar')).toEqual([{ url: 'bar' }]);
    });

    it('allows retrieval of all requests that match a given RegExp', () => {
        this.tracker.track({ url: 'foo' });
        this.tracker.track({ url: 'bar' });
        this.tracker.track({ url: 'baz' });

        expect(this.tracker.filter(/ba[rz]/)).toEqual([{ url: 'bar' }, { url: 'baz' }]);
    });

    it('allows retrieval of all requests that match based on a function', () => {
        this.tracker.track({ url: 'foo' });
        this.tracker.track({ url: 'bar' });
        this.tracker.track({ url: 'baz' });

        const func = request => request.url === 'bar';

        expect(this.tracker.filter(func)).toEqual([{ url: 'bar' }]);
    });

    it('filters to nothing if no requests have been tracked', () => {
        expect(this.tracker.filter('foo')).toEqual([]);
    });
});

describe('EventBus', () => {
    beforeEach(() => {
        this.bus = getJasmineRequireObj().AjaxEventBus()();
    });

    it('calls an event listener', () => {
        const callback = jasmine.createSpy('callback');

        this.bus.addEventListener('foo', callback);
        this.bus.trigger('foo');

        expect(callback).toHaveBeenCalled();
    });

    it('calls an event listener with additional arguments', () => {
        const callback = jasmine.createSpy('callback');

        this.bus.addEventListener('foo', callback);
        this.bus.trigger('foo', 'bar');

        expect(callback).toHaveBeenCalledWith('bar');
    });

    it('only triggers callbacks for the specified event', () => {
        const fooCallback = jasmine.createSpy('foo');
        const barCallback = jasmine.createSpy('bar');

        this.bus.addEventListener('foo', fooCallback);
        this.bus.addEventListener('bar', barCallback);

        this.bus.trigger('foo');

        expect(fooCallback).toHaveBeenCalled();
        expect(barCallback).not.toHaveBeenCalled();
    });

    it('calls all the callbacks for the specified event', () => {
        const callback1 = jasmine.createSpy('callback');
        const callback2 = jasmine.createSpy('otherCallback');

        this.bus.addEventListener('foo', callback1);
        this.bus.addEventListener('foo', callback2);

        this.bus.trigger('foo');

        expect(callback1).toHaveBeenCalled();
        expect(callback2).toHaveBeenCalled();
    });

    it('works if there are no callbacks for the event', () => {
        const bus = this.bus;
        expect(() => {
            bus.trigger('notActuallyThere');
        }).not.toThrow();
    });

    it('does not call listeners that have been removed', () => {
        const callback = jasmine.createSpy('callback');

        this.bus.addEventListener('foo', callback);
        this.bus.removeEventListener('foo', callback);
        this.bus.trigger('foo');

        expect(callback).not.toHaveBeenCalled();
    });

    it('only removes the specified callback', () => {
        const callback1 = jasmine.createSpy('callback');
        const callback2 = jasmine.createSpy('otherCallback');

        this.bus.addEventListener('foo', callback1);
        this.bus.addEventListener('foo', callback2);
        this.bus.removeEventListener('foo', callback2);

        this.bus.trigger('foo');

        expect(callback1).toHaveBeenCalled();
        expect(callback2).not.toHaveBeenCalled();
    });
});

describe("Webmock style mocking", () => {
    let successSpy, response, fakeGlobal, mockAjax; // tslint:disable-line one-variable-per-declaration

    const sendRequest = function(fakeGlobal, url?, method?) {
        url = url || "http://example.com/someApi";
        method = method || 'GET';
        const xhr = new fakeGlobal.XMLHttpRequest();
        xhr.onreadystatechange = args => {
            if (this.readyState === (this.DONE || 4)) { // IE 8 doesn't support DONE
                response = this;
                successSpy();
            }
        };

        xhr.open(method, url);
        xhr.send();
    };

    beforeEach(() => {
        successSpy = jasmine.createSpy('success');
        fakeGlobal = { XMLHttpRequest: jasmine.createSpy('realXMLHttpRequest') };
        mockAjax = new MockAjax(fakeGlobal);
        mockAjax.install();

        mockAjax.stubRequest("http://example.com/someApi").andReturn({ responseText: "hi!" });
    });

    it("allows a url to be setup as a stub", () => {
        sendRequest(fakeGlobal);
        expect(successSpy).toHaveBeenCalled();
    });

    it("should allow you to clear all the ajax stubs", () => {
        mockAjax.stubs.reset();
        sendRequest(fakeGlobal);
        expect(successSpy).not.toHaveBeenCalled();
    });

    it("should set the contentType", () => {
        sendRequest(fakeGlobal);
        expect(response.getResponseHeader('Content-Type')).toEqual('application/json');
    });

    it("should set the responseText", () => {
        sendRequest(fakeGlobal);
        expect(response.responseText).toEqual('hi!');
    });

    it("should default the status to 200", () => {
        sendRequest(fakeGlobal);
        expect(response.status).toEqual(200);
    });

    it("should set the responseHeaders", () => {
        mockAjax.stubRequest("http://example.com/someApi").andReturn({
            responseText: "hi!",
            responseHeaders: [{ name: "X-Custom", value: "header value" }]
        });
        sendRequest(fakeGlobal);
        expect(response.getResponseHeader('X-Custom')).toEqual('header value');
    });

    describe("with another stub for the same url", () => {
        beforeEach(() => {
            mockAjax.stubRequest("http://example.com/someApi").andReturn({ responseText: "no", status: 403 });
            sendRequest(fakeGlobal);
        });

        it("should set the status", () => {
            expect(response.status).toEqual(403);
        });

        it("should allow the latest stub to win", () => {
            expect(response.responseText).toEqual('no');
        });
    });
});

describe("withMock", () => {
    const sendRequest = fakeGlobal => {
        const xhr = new fakeGlobal.XMLHttpRequest();

        xhr.open("GET", "http://example.com/someApi");
        xhr.send();
    };

    it("installs the mock for passed in function, and uninstalls when complete", () => {
        const xmlHttpRequest = jasmine.createSpyObj('XMLHttpRequest', ['open', 'send']);
        const xmlHttpRequestCtor = spyOn(window as any, 'XMLHttpRequest').and.returnValue(xmlHttpRequest);
        const fakeGlobal = { XMLHttpRequest: xmlHttpRequestCtor };
        const mockAjax = new MockAjax(fakeGlobal);

        mockAjax.withMock(() => {
            sendRequest(fakeGlobal);
            expect(xmlHttpRequest.open).not.toHaveBeenCalled();
        });

        sendRequest(fakeGlobal);
        expect(xmlHttpRequest.open).toHaveBeenCalled();
    });

    it("properly uninstalls when the passed in function throws", () => {
        const xmlHttpRequest = jasmine.createSpyObj('XMLHttpRequest', ['open', 'send']);
        const xmlHttpRequestCtor = spyOn(window as any, 'XMLHttpRequest').and.returnValue(xmlHttpRequest);
        const fakeGlobal = { XMLHttpRequest: xmlHttpRequestCtor };
        const mockAjax = new MockAjax(fakeGlobal);

        expect(() => {
            mockAjax.withMock(() => {
                throw "error"; // tslint:disable-line:no-string-throw
            });
        }).toThrow("error");

        sendRequest(fakeGlobal);
        expect(xmlHttpRequest.open).toHaveBeenCalled();
    });
});

describe("mockAjax", () => {
    it("throws an error if installed multiple times", () => {
        const fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest');
        const fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest };
        const mockAjax = new MockAjax(fakeGlobal);

        function doubleInstall() {
            mockAjax.install();
            mockAjax.install();
        }

        expect(doubleInstall).toThrow();
    });

    it("does not throw an error if uninstalled between installs", () => {
        const fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest');
        const fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest };
        const mockAjax = new MockAjax(fakeGlobal);

        function sequentialInstalls() {
            mockAjax.install();
            mockAjax.uninstall();
            mockAjax.install();
        }

        expect(sequentialInstalls).not.toThrow();
    });

    it("does not replace XMLHttpRequest until it is installed", () => {
        const fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest');
        const fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest };
        const mockAjax = new MockAjax(fakeGlobal);

        fakeGlobal.XMLHttpRequest('foo');
        expect(fakeXmlHttpRequest).toHaveBeenCalledWith('foo');
        fakeXmlHttpRequest.calls.reset();

        mockAjax.install();
        fakeGlobal.XMLHttpRequest('foo');
        expect(fakeXmlHttpRequest).not.toHaveBeenCalled();
    });

    it("replaces the global XMLHttpRequest on uninstall", () => {
        const fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest');
        const fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest };
        const mockAjax = new MockAjax(fakeGlobal);

        mockAjax.install();
        mockAjax.uninstall();

        fakeGlobal.XMLHttpRequest('foo');
        expect(fakeXmlHttpRequest).toHaveBeenCalledWith('foo');
    });

    it("clears requests and stubs upon uninstall", () => {
        const fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest');
        const fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest };
        const mockAjax = new MockAjax(fakeGlobal);

        mockAjax.install();

        // mockAjax.requests.track(<any> { url: '/testurl' });
        mockAjax.stubRequest('/bobcat');

        expect(mockAjax.requests.count()).toEqual(1);
        expect(mockAjax.stubs.findStub('/bobcat')).toBeDefined();

        mockAjax.uninstall();

        expect(mockAjax.requests.count()).toEqual(0);
        expect(mockAjax.stubs.findStub('/bobcat')).not.toBeDefined();
    });

    it("allows the httpRequest to be retrieved", () => {
        const fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest');
        const fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest };
        const mockAjax = new MockAjax(fakeGlobal);

        mockAjax.install();
        const request = new (fakeGlobal.XMLHttpRequest as any)();

        expect(mockAjax.requests.count()).toBe(1);
        expect(mockAjax.requests.mostRecent()).toBe(request);
    });

    it("allows the httpRequests to be cleared", () => {
        const fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest');
        const fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest };
        const mockAjax = new MockAjax(fakeGlobal);

        mockAjax.install();
        const request = new (fakeGlobal.XMLHttpRequest as any)();

        expect(mockAjax.requests.mostRecent()).toBe(request);
        mockAjax.requests.reset();
        expect(mockAjax.requests.count()).toBe(0);
    });
});
