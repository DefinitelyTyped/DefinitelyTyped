
import Boom = require('boom');

var bo = Boom.wrap(new Error('test'), 400, 'some message');
var a: string = bo.output.headers['some header'];

Boom.create(500, 'Internal server error', { timestamp: Date.now() });

Boom.badRequest('message', {some: 'data'});
Boom.unauthorized('message', <string | string[]> 'scheme', {some: 'data'});
Boom.unauthorized(null, <string | string[]> 'scheme', 'data');
Boom.paymentRequired('message', {some: 'data'});
Boom.forbidden('message', {some: 'data'});
Boom.notFound('message', {some: 'data'});
Boom.methodNotAllowed('message', {some: 'data'});
Boom.notAcceptable('message', {some: 'data'});
Boom.proxyAuthRequired('message', {some: 'data'});
Boom.clientTimeout('message', {some: 'data'});
Boom.conflict('message', {some: 'data'});
Boom.resourceGone('message', {some: 'data'});
Boom.lengthRequired('message', {some: 'data'});
Boom.preconditionFailed('message', {some: 'data'});
Boom.entityTooLarge('message', {some: 'data'});
Boom.uriTooLong('message', {some: 'data'});
Boom.unsupportedMediaType('message', {some: 'data'});
Boom.rangeNotSatisfiable('message', {some: 'data'});
Boom.expectationFailed('message', {some: 'data'});
Boom.teapot('message', {some: 'data'});
Boom.badData('message', {some: 'data'});
Boom.locked('message', {some: 'data'});
Boom.preconditionRequired('message', {some: 'data'});
Boom.tooManyRequests('message', {some: 'data'});
Boom.illegal('message', {some: 'data'});

Boom.badImplementation('message', {some: 'data'});
Boom.notImplemented('message', {some: 'data'});
Boom.badGateway('message', {some: 'data'});
Boom.serverUnavailable('message', {some: 'data'});
Boom.gatewayTimeout('message', {some: 'data'});

Boom.unauthorized() as Error;

const error = Boom.badRequest('Cannot feed after midnight');
error.output.statusCode = 499;    // Assign a custom error code
error.reformat();

/**
 * Add a custom key to the payload
 */

interface CustomPayload extends Boom.Payload {
    custom: string;
}

(error.output.payload as CustomPayload).custom = 'abc_123';
