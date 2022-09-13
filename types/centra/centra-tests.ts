import centra = require('centra');
import { URL } from 'url';

function typeTests() {
    // Test chaining
    centra('http://google.com')
        .query('param', 'value')
        .path('mail')
        .body({ a: 1, b: 2 })
        .header({ a: 'b' })
        .header('a', 'b')
        .timeout(123)
        .stream()
        .compress()
        .option('host', '123')
        .option('port', 123)
        .send().then(resp => {
            resp.json().then((s: string) => s);
            resp.text().then((s: string) => s);
            resp.statusCode;
            resp.coreRes;
            resp.headers['asdf'];
            resp.body.buffer.byteLength;
        });

    centra(new URL('google.com'))
        .query('page', '2');
}

async function functionalTests() {
    await centra('http://example.com').send().then(async r => {
        if (r.statusCode !== 200) {
            throw new Error('Bad status code');
        }
        r.text().then(t => t);
    });

    await centra(new URL('https://jsonplaceholder.typicode.com/todos'))
        .query('userId', 1)
        .timeout(1000)
        .compress()
        .send()
        .then(r => {
            r.json().then((todos: any[]) => {
                if (!todos.every(t => t.userId === 1)) {
                    throw new Error('Query params did not work');
                }
            });
        });
}

functionalTests();
