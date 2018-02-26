// Added test in addition to docs, for request.query

import * as Hapi from '../../';

interface GetThingQuery {
    name: string;
}

const handler: Hapi.RouteHandler = function (request, reply) {

    const query = request.query as GetThingQuery;

    return reply(`You asked for ${query.name}`);
};
