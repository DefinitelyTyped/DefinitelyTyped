import * as detect from 'detect-port';

const port = 8000;
const hostname = 'localhost';

/**
 * callback usage
 */
detect(port, (err: Error, _port: number) => {});

function* yieldSyntax() {
    const _port: number = yield detect(port);
}

/**
 * use as a promise
 */
detect(port)
    .then((_port: number) => {})
    .catch(err => {});

/**
 * port config usage
 */
detect({ port, hostname, callback: (err: Error, _port: number) => {} });

detect({ port, hostname })
    .then((_port: number) => {})
    .catch(err => {});
