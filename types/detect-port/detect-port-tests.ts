import * as detect from "detect-port";

const port = 8000;
const hostname = "localhost";

/**
 * callback usage
 */
detect(undefined, (err: Error, _port: number) => {});
detect(port, (err: Error, _port: number) => {});

function* yieldSyntax() {
    const _port: number = yield detect();
    const _port2: number = yield detect(port);
}

/**
 * use as a promise
 */
detect()
    .then((_port: number) => {})
    .catch(err => {});
detect(port)
    .then((_port: number) => {})
    .catch(err => {});

/**
 * port config usage
 */
detect({ hostname, callback: (err: Error, _port: number) => {} });
detect({ port, hostname, callback: (err: Error, _port: number) => {} });
detect({ hostname })
    .then((_port: number) => {})
    .catch(err => {});
detect({ port, hostname })
    .then((_port: number) => {})
    .catch(err => {});
