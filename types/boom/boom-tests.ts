import Boom = require('boom');

// 4xx and data type

const badRequestError = Boom.badRequest('message', {some: 'data'});
badRequestError.data.some;

const unauthorizedError1 = Boom.unauthorized('message', 'scheme', {some: 'attribute'});
unauthorizedError1.output.payload.attributes === { some: 'attribute', error: 'message' };
unauthorizedError1.output.headers === { 'WWW-Authenticate': 'scheme some="attribute", error="message"' };

const unauthorizedError2 = Boom.unauthorized('message', ['scheme']);
unauthorizedError2.output.payload.attributes === undefined;
unauthorizedError2.output.headers === { 'WWW-Authenticate': 'scheme' };

const unauthorizedError3 = Boom.unauthorized(null, 'scheme', 'attribute');
unauthorizedError3.output.payload.attributes === 'attribute';
unauthorizedError3.output.headers === { 'WWW-Authenticate': 'scheme attribute' };

const unauthorizedError4 = Boom.unauthorized(null, 'scheme', {some: 'attribute'});
unauthorizedError4.output.payload.attributes === { some: 'attribute' };
unauthorizedError4.output.headers === { 'WWW-Authenticate': 'scheme some="attribute"' };

const paymentRequiredError = Boom.paymentRequired('message', {some: 'data'});
paymentRequiredError.data.some;

const forbiddenError = Boom.forbidden('message', {some: 'data'});
forbiddenError.data.some;

const notFoundError = Boom.notFound('message', {some: 'data'});
notFoundError.data.some;

const methodNotAllowedError = Boom.methodNotAllowed('message', {some: 'data'});
methodNotAllowedError.data.some;

const notAcceptableError = Boom.notAcceptable('message', {some: 'data'});
notAcceptableError.data.some;

const proxyAuthRequiredError = Boom.proxyAuthRequired('message', {some: 'data'});
proxyAuthRequiredError.data.some;

const clientTimeoutError = Boom.clientTimeout('message', {some: 'data'});
clientTimeoutError.data.some;

const conflictError = Boom.conflict('message', {some: 'data'});
conflictError.data.some;

const resourceGoneError = Boom.resourceGone('message', {some: 'data'});
resourceGoneError.data.some;

const lengthRequiredError = Boom.lengthRequired('message', {some: 'data'});
lengthRequiredError.data.some;

const preconditionFailedError = Boom.preconditionFailed('message', {some: 'data'});
preconditionFailedError.data.some;

const entityTooLargeError = Boom.entityTooLarge('message', {some: 'data'});
entityTooLargeError.data.some;

const uriTooLongError = Boom.uriTooLong('message', {some: 'data'});
uriTooLongError.data.some;

const unsupportedMediaTypeError = Boom.unsupportedMediaType('message', {some: 'data'});
unsupportedMediaTypeError.data.some;

const rangeNotSatisfiableError = Boom.rangeNotSatisfiable('message', {some: 'data'});
rangeNotSatisfiableError.data.some;

const expectationFailedError = Boom.expectationFailed('message', {some: 'data'});
expectationFailedError.data.some;

const teapotError = Boom.teapot('message', {some: 'data'});
teapotError.data.some;

const badDataError = Boom.badData('message', {some: 'data'});
badDataError.data.some;

const lockedError = Boom.locked('message', {some: 'data'});
lockedError.data.some;

const preconditionRequiredError = Boom.preconditionRequired('message', {some: 'data'});
preconditionRequiredError.data.some;

const tooManyRequestsError = Boom.tooManyRequests('message', {some: 'data'});
tooManyRequestsError.data.some;

const illegalError = Boom.illegal('message', {some: 'data'});
illegalError.data.some;

// 5xx and data type

const badImplementationError = Boom.badImplementation('message', {some: 'data'});
badImplementationError.data.some;

const internalError = Boom.internal('message', {some: 'data'});
internalError.data.some;

const notImplementedError = Boom.notImplemented('message', {some: 'data'});
notImplementedError.data.some;

const badGatewayError = Boom.badGateway('message', {some: 'data'});
badGatewayError.data.some;

const serverUnavailableError = Boom.serverUnavailable('message', {some: 'data'});
serverUnavailableError.data.some;

const gatewayTimeoutError = Boom.gatewayTimeout('message', {some: 'data'});
gatewayTimeoutError.data.some;

// wrap and create

const wrappedError = Boom.wrap(new Error('test'), 400, 'some message');

const error1 = Boom.create(500, 'Internal server error', { timestamp: Date.now() });
error1.data.timestamp;

// type widden asserting

const unauthorizedError = Boom.unauthorized() as Error;

// status code and reformat

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
