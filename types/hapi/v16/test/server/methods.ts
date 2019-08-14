
// From https://hapijs.com/api/16.1.1#servermethods

import * as Hapi from '../../';
const server = new Hapi.Server();

const add = function (a: number, b: number, next: (err: Error | null, result: number) => void) {

    return next(null, a + b);
};

server.method('add', add);

server.methods.add(1, 2, (err: Error | null, result: number) => {

    // result === 3
});
