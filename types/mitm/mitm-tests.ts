import Mitm = require('mitm');

const mitm = Mitm();
mitm.disable();

mitm.on('connect', (bypassableSocket, opts): void => {
    bypassableSocket.bypass();
});

mitm.on('connection', (socket, opts): void => {
});

mitm.on('request', (request, response): void => {
});
