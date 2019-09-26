
// From https://hapijs.com/api/16.1.1#requestgenerateresponsesource-options

import * as Hapi from '../../';

// Added in addition to code from docs
function promiseMethod() {
    return Promise.resolve(true);
}

const handler: Hapi.ServerExtRequestHandler = function (request, reply) {

    const result = promiseMethod().then((thing: boolean) => {

        if (!thing) {
            return request.generateResponse().code(214);
        }
        return thing;
    });
    return reply(result);
};
