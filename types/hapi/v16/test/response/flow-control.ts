
// From https://hapijs.com/api/16.1.1#flow-control

import * as Hapi from '../../';

const handler = function (request: Hapi.Request, reply: Hapi.ReplyWithContinue) {

    const response = reply('success').hold();

    setTimeout(() => {

        response.send();
    }, 1000);
};
