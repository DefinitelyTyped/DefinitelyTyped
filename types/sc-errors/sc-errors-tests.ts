import * as scErrors from 'sc-errors';

// Create the various errors.

new scErrors.AuthTokenExpiredError('error', new Date());
new scErrors.AuthTokenInvalidError('error');
new scErrors.AuthTokenNotBeforeError('error', new Date());
new scErrors.AuthTokenError('error');
new scErrors.SilentMiddlewareBlockedError('error', 'authenticate');
new scErrors.InvalidActionError('error');
new scErrors.InvalidArgumentsError('error');
new scErrors.InvalidOptionsError('error');
new scErrors.InvalidMessageError('error');
new scErrors.SocketProtocolError('error', 1001);
new scErrors.ServerProtocolError('error');
new scErrors.HTTPServerError('error');
new scErrors.ResourceLimitError('error');
new scErrors.TimeoutError('error');
new scErrors.BadConnectionError('error', 'connectAbort');
new scErrors.BrokerError('error');
new scErrors.ProcessExitError('error');
new scErrors.UnknownError('error');

// Check some of the error and ignore statusses

// $ExpectType string
scErrors.socketProtocolErrorStatuses[1001];

// $ExpectType string
scErrors.socketProtocolErrorStatuses[4000];

// $ExpectType string
scErrors.socketProtocolIgnoreStatuses[1000];

// Dehydrate and hydrate an error

const err = new Error();

let dehydratedError = scErrors.dehydrateError(err);
scErrors.hydrateError(dehydratedError);

dehydratedError = scErrors.dehydrateError(err, true);
scErrors.hydrateError(dehydratedError);

// decycle

const foo = {
    bar: 5,
};
const baz = {
    a: 1,
    b: 'test',
    c: foo,
    d: {
        d1: foo,
    },
};

scErrors.decycle(baz);
