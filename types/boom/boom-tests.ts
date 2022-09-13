import * as Boom from 'boom';

// 4xx and data type

const badRequestError = Boom.badRequest('message', {some: 'data'});
badRequestError.data.some;
const badRequestError2: Boom = Boom.badImplementation('message');

const unauthorizedError1 = Boom.unauthorized('message', 'scheme', {some: 'attribute'});
unauthorizedError1.output.payload.attributes.some === 'attribute';
unauthorizedError1.output.payload.attributes.error === 'message';
unauthorizedError1.output.headers['WWW-Authenticate'] === 'scheme some="attribute", error="message"';

const unauthorizedError2 = Boom.unauthorized('message', ['scheme']);
unauthorizedError2.output.payload.attributes === undefined;
unauthorizedError2.output.headers[ 'WWW-Authenticate'] === 'scheme';

const unauthorizedError3 = Boom.unauthorized(null, 'scheme', 'attribute');
unauthorizedError3.output.payload.attributes === 'attribute';
unauthorizedError3.output.headers['WWW-Authenticate'] === 'scheme attribute';

const unauthorizedError4 = Boom.unauthorized(null, 'scheme', {some: 'attribute'});
unauthorizedError4.output.payload.attributes.some === 'attribute';
unauthorizedError4.output.headers['WWW-Authenticate'] === 'scheme some="attribute"';

const paymentRequiredError = Boom.paymentRequired('message', {some: 'data'});
paymentRequiredError.data.some;
const paymentRequiredError2: Boom = Boom.paymentRequired('message');

const forbiddenError = Boom.forbidden('message', {some: 'data'});
forbiddenError.data.some;
const forbiddenError2: Boom = Boom.forbidden('message');

const notFoundError = Boom.notFound('message', {some: 'data'});
notFoundError.data.some;
const notFoundError2: Boom = Boom.notFound('message');

const methodNotAllowedError = Boom.methodNotAllowed('message', {some: 'data'});
methodNotAllowedError.data.some;
const methodNotAllowedError2: Boom = Boom.methodNotAllowed('message');

const notAcceptableError = Boom.notAcceptable('message', {some: 'data'});
notAcceptableError.data.some;
const notAcceptableError2: Boom = Boom.notAcceptable('message');

const proxyAuthRequiredError = Boom.proxyAuthRequired('message', {some: 'data'});
proxyAuthRequiredError.data.some;
const proxyAuthRequiredError2: Boom = Boom.proxyAuthRequired('message');

const clientTimeoutError = Boom.clientTimeout('message', {some: 'data'});
clientTimeoutError.data.some;
const clientTimeoutError2: Boom = Boom.clientTimeout('message');

const conflictError = Boom.conflict('message', {some: 'data'});
conflictError.data.some;

const resourceGoneError = Boom.resourceGone('message', {some: 'data'});
resourceGoneError.data.some;
const resourceGoneError2: Boom = Boom.resourceGone('message');

const lengthRequiredError = Boom.lengthRequired('message', {some: 'data'});
lengthRequiredError.data.some;
const lengthRequiredError2: Boom = Boom.lengthRequired('message');

const preconditionFailedError = Boom.preconditionFailed('message', {some: 'data'});
preconditionFailedError.data.some;
const preconditionFailedError2: Boom = Boom.preconditionFailed('message');

const entityTooLargeError = Boom.entityTooLarge('message', {some: 'data'});
entityTooLargeError.data.some;
const entityTooLargeError2: Boom = Boom.lengthRequired('message');

const uriTooLongError = Boom.uriTooLong('message', {some: 'data'});
uriTooLongError.data.some;
const uriTooLongError2: Boom = Boom.uriTooLong('message');

const unsupportedMediaTypeError = Boom.unsupportedMediaType('message', {some: 'data'});
unsupportedMediaTypeError.data.some;
const unsupportedMediaTypeError2: Boom = Boom.unsupportedMediaType('message');

const rangeNotSatisfiableError = Boom.rangeNotSatisfiable('message', {some: 'data'});
rangeNotSatisfiableError.data.some;
const rangeNotSatisfiableError2: Boom = Boom.rangeNotSatisfiable('message');

const expectationFailedError = Boom.expectationFailed('message', {some: 'data'});
expectationFailedError.data.some;
const expectationFailedError2: Boom = Boom.expectationFailed('message');

const teapotError = Boom.teapot('message', {some: 'data'});
teapotError.data.some;
const teapotError2: Boom = Boom.teapot('message');

const badDataError = Boom.badData('message', {some: 'data'});
badDataError.data.some;
const badDataError2: Boom = Boom.badData('message');

const lockedError = Boom.locked('message', {some: 'data'});
lockedError.data.some;
const lockedError2: Boom = Boom.locked('message');

const failedDependencyError = Boom.failedDependency('message', {some: 'data'});
failedDependencyError.data.some;
const failedDependencyError2: Boom = Boom.failedDependency('message');

const preconditionRequiredError = Boom.preconditionRequired('message', {some: 'data'});
preconditionRequiredError.data.some;
const preconditionRequiredError2: Boom = Boom.preconditionRequired('message');

const tooManyRequestsError = Boom.tooManyRequests('message', {some: 'data'});
tooManyRequestsError.data.some;
const tooManyRequestsError2: Boom = Boom.tooManyRequests('message');

const illegalError = Boom.illegal('message', {some: 'data'});
illegalError.data.some;
const illegalError2: Boom = Boom.illegal('message');

// 5xx and data type

const badImplementationError = Boom.badImplementation('message', {some: 'data'});
badImplementationError.data.some;
const badImplementationError2: Boom = Boom.badImplementation('message');

const internalError = Boom.internal('message', {some: 'data'});
internalError.data.some;
const internalError2: Boom = Boom.internal('message');

const notImplementedError = Boom.notImplemented('message', {some: 'data'});
notImplementedError.data.some;
const notImplementedError2: Boom = Boom.notImplemented('message');

const badGatewayError = Boom.badGateway('message', {some: 'data'});
badGatewayError.data.some;
const badGatewayError2: Boom = Boom.badGateway('message');

const serverUnavailableError = Boom.serverUnavailable('message', {some: 'data'});
serverUnavailableError.data.some;
const serverUnavailableError2: Boom = Boom.serverUnavailable('message');

const gatewayTimeoutError = Boom.gatewayTimeout('message', {some: 'data'});
gatewayTimeoutError.data.some;
const gatewayTimeoutError2: Boom = Boom.gatewayTimeout('message');

// boomify
const boomifiedError = Boom.boomify(new Error('test'), { statusCode: 400, message: 'some message' });

// isBoom

const isBoomError = new Boom('test');

Boom.isBoom(isBoomError);

const maybeBoom = <any> new Boom('test');
if (Boom.isBoom(maybeBoom)) {
    // isBoom is a type guard that allows accessing these properties:
    maybeBoom.output.headers;
}

// constructor

const constructorError: Boom = new Boom('test');

constructorError.message;

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
// tslint:disable-next-line:no-object-literal-type-assertion
const errorWithData = Boom.badImplementation('', <CustomData1> { custom1: 'test', customType: 'Custom1', isCustom: true });
const errorWithNoExplicitDataType: Boom = errorWithData; // can assign to error without explicit data type
const errorWithExplicitType: Boom<CustomData> = errorWithData; // can assign to union data type
const errorWithConcreteCustomData: Boom<CustomData1> = errorWithData; // can assign to concrete data type
// assignment to CustomData2 would not be possible
// const errorWithConcreteCustomData2: Boom<CustomData2> = errorWithData;

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
