import Boom = require('boom');
import * as Hapi from 'hapi';

// 4xx and data type

const badRequestError = Boom.badRequest('message', {some: 'data'});
badRequestError.data.some;
const badRequestError2: Boom.BoomError = Boom.badImplementation('message');

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
const paymentRequiredError2: Boom.BoomError = Boom.paymentRequired('message');

const forbiddenError = Boom.forbidden('message', {some: 'data'});
forbiddenError.data.some;
const forbiddenError2: Boom.BoomError = Boom.forbidden('message');

const notFoundError = Boom.notFound('message', {some: 'data'});
notFoundError.data.some;
const notFoundError2: Boom.BoomError = Boom.notFound('message');

const methodNotAllowedError = Boom.methodNotAllowed('message', {some: 'data'});
methodNotAllowedError.data.some;
const methodNotAllowedError2: Boom.BoomError = Boom.methodNotAllowed('message');

const notAcceptableError = Boom.notAcceptable('message', {some: 'data'});
notAcceptableError.data.some;
const notAcceptableError2: Boom.BoomError = Boom.notAcceptable('message');

const proxyAuthRequiredError = Boom.proxyAuthRequired('message', {some: 'data'});
proxyAuthRequiredError.data.some;
const proxyAuthRequiredError2: Boom.BoomError = Boom.proxyAuthRequired('message');

const clientTimeoutError = Boom.clientTimeout('message', {some: 'data'});
clientTimeoutError.data.some;
const clientTimeoutError2: Boom.BoomError = Boom.clientTimeout('message');

const conflictError = Boom.conflict('message', {some: 'data'});
conflictError.data.some;

const resourceGoneError = Boom.resourceGone('message', {some: 'data'});
resourceGoneError.data.some;
const resourceGoneError2: Boom.BoomError = Boom.resourceGone('message');

const lengthRequiredError = Boom.lengthRequired('message', {some: 'data'});
lengthRequiredError.data.some;
const lengthRequiredError2: Boom.BoomError = Boom.lengthRequired('message');

const preconditionFailedError = Boom.preconditionFailed('message', {some: 'data'});
preconditionFailedError.data.some;
const preconditionFailedError2: Boom.BoomError = Boom.preconditionFailed('message');

const entityTooLargeError = Boom.entityTooLarge('message', {some: 'data'});
entityTooLargeError.data.some;
const entityTooLargeError2: Boom.BoomError = Boom.lengthRequired('message');

const uriTooLongError = Boom.uriTooLong('message', {some: 'data'});
uriTooLongError.data.some;
const uriTooLongError2: Boom.BoomError = Boom.uriTooLong('message');

const unsupportedMediaTypeError = Boom.unsupportedMediaType('message', {some: 'data'});
unsupportedMediaTypeError.data.some;
const unsupportedMediaTypeError2: Boom.BoomError = Boom.unsupportedMediaType('message');

const rangeNotSatisfiableError = Boom.rangeNotSatisfiable('message', {some: 'data'});
rangeNotSatisfiableError.data.some;
const rangeNotSatisfiableError2: Boom.BoomError = Boom.rangeNotSatisfiable('message');

const expectationFailedError = Boom.expectationFailed('message', {some: 'data'});
expectationFailedError.data.some;
const expectationFailedError2: Boom.BoomError = Boom.expectationFailed('message');

const teapotError = Boom.teapot('message', {some: 'data'});
teapotError.data.some;
const teapotError2: Boom.BoomError = Boom.teapot('message');

const badDataError = Boom.badData('message', {some: 'data'});
badDataError.data.some;
const badDataError2: Boom.BoomError = Boom.badData('message');

const lockedError = Boom.locked('message', {some: 'data'});
lockedError.data.some;
const lockedError2: Boom.BoomError = Boom.locked('message');

const preconditionRequiredError = Boom.preconditionRequired('message', {some: 'data'});
preconditionRequiredError.data.some;
const preconditionRequiredError2: Boom.BoomError = Boom.preconditionRequired('message');

const tooManyRequestsError = Boom.tooManyRequests('message', {some: 'data'});
tooManyRequestsError.data.some;
const tooManyRequestsError2: Boom.BoomError = Boom.tooManyRequests('message');

const illegalError = Boom.illegal('message', {some: 'data'});
illegalError.data.some;
const illegalError2: Boom.BoomError = Boom.illegal('message');

// 5xx and data type

const badImplementationError = Boom.badImplementation('message', {some: 'data'});
badImplementationError.data.some;
const badImplementationError2: Boom.BoomError = Boom.badImplementation('message');

const internalError = Boom.internal('message', {some: 'data'});
internalError.data.some;
const internalError2: Boom.BoomError = Boom.internal('message');

const notImplementedError = Boom.notImplemented('message', {some: 'data'});
notImplementedError.data.some;
const notImplementedError2: Boom.BoomError = Boom.notImplemented('message');

const badGatewayError = Boom.badGateway('message', {some: 'data'});
badGatewayError.data.some;
const badGatewayError2: Boom.BoomError = Boom.badGateway('message');

const serverUnavailableError = Boom.serverUnavailable('message', {some: 'data'});
serverUnavailableError.data.some;
const serverUnavailableError2: Boom.BoomError = Boom.serverUnavailable('message');

const gatewayTimeoutError = Boom.gatewayTimeout('message', {some: 'data'});
gatewayTimeoutError.data.some;
const gatewayTimeoutError2: Boom.BoomError = Boom.gatewayTimeout('message');

// boomify, wrap, and create
const boomifiedError = Boom.boomify(new Error('test'), { statusCode: 400, message: 'some message' })

const wrappedError = Boom.wrap(new Error('test'), 400, 'some message');

const error1 = Boom.create(500, 'Internal server error', { timestamp: Date.now() });
error1.data.timestamp;
const error2: Boom.BoomError = Boom.create(500, 'Internal server error');

// type widen asserting

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

/**
 * Test assignment of custom error data:
 */
const errorWithData = Boom.badImplementation('', { custom1: 'test', customType: 'Custom1', isCustom: true } as CustomData1);
const errorWithNoExplicitDataType: Boom.BoomError = errorWithData; // can assign to error without explicit data type
const errorWithExplicitType: Boom.BoomError<CustomData> = errorWithData; // can assign to union data type
const errorWithConcreteCustomData: Boom.BoomError<CustomData1> = errorWithData; // can assign to concrete data type
// assignment to CustomData2 would not be possible
// const errorWithConcreteCustomData2: Boom.BoomError<CustomData2> = errorWithData;

// Some complex error data types for testing purposes:
interface CustomDataBase {
    isCustom: true;
}

interface CustomData1 extends CustomDataBase {
    customType: 'Custom1';
    custom1: string;
}

interface CustomData2 extends CustomDataBase {
    customType: 'Custom2';
    custom2: string;
}

type CustomData = CustomData1 | CustomData2;
