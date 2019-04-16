import * as ScopedClient from "scoped-http-client";
import { IncomingMessage } from "http";

// Basic client
let client = ScopedClient.create('https://api.github.com')
    .header('accept', 'application/json')
    .path('user/show/technoweenie')
    .get()((err, resp, body) => {
        body; // $ExpectType string
    });

// Setting the url through multiple steps
client = ScopedClient.create()
    .protocol('https')
    .host('api.github.com')
    .port(443)
    .path('user/show/technoweenie')
    .query('key', 'value')
    .encoding('utf-8')
    .header('X-Test-Header', 'value')
    .get()(handler);

// Scoping
client.path('https://api.github.com');
client.scope('users/technoweenie', (cli) => {
    cli.get()((err, resp, body) => {
        body; // $ExpectType string
    });
});

function handler(err: Error, resp: IncomingMessage, body: string) {}

// Other HTTP methods
client.query({ login: 'technoweenie', token: '...' })
    .scope('users/technoweenie', (cli) => {
        cli.post('data')(handler);
        cli.put('data')(handler);
        cli.head()(handler);
        cli.delete()(handler);
        cli.del()(handler);
        cli.patch()(handler);
    });

// Streaming post body
client.post((err, req) => {
    req.write("...");
    req.write("...");
})(handler);

// HTTP Basic Authentication
client
    .auth('technoweenie', '...')
    .get((err, req) => {});

// Setting a timeout
client = ScopedClient.create('http://10.255.255.1:9999');
client.timeout(100);

// Fetching client information
client.join('suffix'); // $ExpectType string
client.fullPath('path'); // $ExpectType string
