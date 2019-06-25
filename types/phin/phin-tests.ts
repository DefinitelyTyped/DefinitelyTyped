import phin = require('phin');

export function typeTests() {
    function testParseNoneStreamFalse(o: { url: string, parse?: 'none', stream?: false } | string) {
        phin(o); // $ExpectType Promise<BufferResponse>
    }

    function testParseJsonStreamFalse(o: { url: string, parse: 'json', stream?: false }) {
        phin(o); // $ExpectType Promise<JsonResponse>
    }

    function testStreamTrue(o: { url: string, parse?: 'json' | 'none', stream: true }) {
        phin(o); // $ExpectType Promise<StreamResponse>
    }

    function testCallbackParseNoneStreamFalse(o: { url: string, parse?: 'none', stream?: false } | string) {
        phin.unpromisified(o, (_err, r) => {
            r; // $ExpectType BufferResponse
        });
    }

    function testCallbackParseJsonStreamFalse(o: { url: string, parse: 'json', stream?: false }) {
        phin.unpromisified(o, (_err, r) => {
            r; // $ExpectType JsonResponse
        });
    }

    function testCallbackStreamTrue(o: { url: string, parse?: 'json' | 'none', stream: true }) {
        phin.unpromisified(o, (_err, r) => {
            r; // $ExpectType StreamResponse
        });
    }

    function testCallbackAny(o: { url: string, parse?: 'json' | 'none', stream?: boolean }) {
        phin.unpromisified(o, (_err, r) => {
            r; // $ExpectType AnyResponse
        });
    }

    function testDefaultsParseNoneStreamFalse(d: { parse?: 'none', stream?: false }) {
        const p = phin.defaults(d);
        return {
            testSame(o: phin.Options & { parse?: 'none', stream?: false } | string) {
                p(o); // $ExpectType Promise<BufferResponse>
            },

            testJson(o: phin.Options & { parse: 'json', stream?: false }) {
                p(o); // $ExpectType Promise<JsonResponse>
            },

            testStream(o: phin.Options & { stream: true }) {
                p(o); // $ExpectType Promise<StreamResponse>
            },

            testOthers(o: phin.Options) {
                p(o); // $ExpectType Promise<AnyResponse>
            }
        };
    }

    function testDefaultsParseJsonStreamFalse(d: { parse: 'json', stream?: false }) {
        const p = phin.defaults(d);
        return {
            testSame(o: phin.Options & { parse: 'none', stream?: false }) {
                p(o); // $ExpectType Promise<BufferResponse>
            },

            testJson(o: phin.Options & { parse?: 'json', stream?: false } | string) {
                p(o); // $ExpectType Promise<JsonResponse>
            },

            testStream(o: phin.Options & { stream: true }) {
                p(o); // $ExpectType Promise<StreamResponse>
            },

            testOthers(o: phin.Options) {
                p(o); // $ExpectType Promise<AnyResponse>
            }
        };
    }

    function testDefaultsParseJsonStreamTrue(d: { parse: 'json', stream: true }) {
        const p = phin.defaults(d);
        return {
            testSame(o: phin.Options & { parse: 'none', stream: false }) {
                p(o); // $ExpectType Promise<BufferResponse>
            },

            testJson(o: phin.Options & { parse?: 'json', stream: false }) {
                p(o); // $ExpectType Promise<JsonResponse>
            },

            testStream(o: phin.Options & { stream?: true } | string) {
                p(o); // $ExpectType Promise<StreamResponse>
            },

            testOthers(o: phin.Options) {
                p(o); // $ExpectType Promise<AnyResponse>
            }
        };
    }

    function testDefaultsParseNoneStreamTrue(d: { parse?: 'none', stream: true }) {
        const p = phin.defaults(d);
        return {
            testSame(o: phin.Options & { parse?: 'none', stream: false }) {
                p(o); // $ExpectType Promise<BufferResponse>
            },

            testJson(o: phin.Options & { parse: 'json', stream: false }) {
                p(o); // $ExpectType Promise<JsonResponse>
            },

            testStream(o: phin.Options & { stream?: true } | string) {
                p(o); // $ExpectType Promise<StreamResponse>
            },

            testOthers(o: phin.Options) {
                p(o); // $ExpectType Promise<AnyResponse>
            }
        };
    }

    function testDefaultsAny(d: { parse?: 'none' | 'json', stream?: boolean }) {
        const p = phin.defaults(d);
        return {
            testSame(o: phin.Options & { parse: 'none', stream: false }) {
                p(o); // $ExpectType Promise<BufferResponse>
            },

            testJson(o: phin.Options & { parse: 'json', stream: false }) {
                p(o); // $ExpectType Promise<JsonResponse>
            },

            testStream(o: phin.Options & { stream: true }) {
                p(o); // $ExpectType Promise<StreamResponse>
            },

            testOthers(o: phin.Options | string) {
                p(o); // $ExpectType Promise<AnyResponse>
            }
        };
    }
}

async function functionalTests() {
    await phin('http://example.com').then(r => {
        if (!Buffer.isBuffer(r.body)) { throw new Error('Not a buffer?'); }
    });

    await phin('http://placekitten.com/50/50').then(r => {
        if (r.headers['content-type'] !== 'image/jpeg') {
            throw new Error('expected a jpeg');
        }
    });

    await phin({ url: 'https://jsonplaceholder.typicode.com/todos/1', parse: 'json' }).then(r => {
        if (typeof r.body === 'string') {
            throw new Error('Did not parse json');
        }

        if (typeof r.body.userId !== 'number') {
            throw new Error('Did not get userId');
        }
    });

    await phin({ url: 'https://jsonplaceholder.typicode.com/todos/1', stream: true }).then(r => {
        r.on('end', () => {});
    });
}

functionalTests();
