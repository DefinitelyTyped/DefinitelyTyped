import * as detect from "detect-port";

const port: number = 8000;

/**
 * callback usage
 */
detect(port, (err: Error, _port: number) => {
});

function* yieldSyntax() {
    const _port: number = yield detect(port);
}

/**
 * use as a promise
 */
detect(port)
    .then((_port: number) => {
    })
    .catch(err => {
    });
