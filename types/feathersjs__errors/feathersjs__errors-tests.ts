import {
    BadGateway,
    BadRequest, Conflict, FeathersError, Forbidden, GeneralError, LengthRequired, MethodNotAllowed, NotAcceptable,
    NotAuthenticated, NotFound, NotImplemented, PaymentError, Timeout, TooManyRequests, Unavailable, Unprocessable
} from '@feathersjs/errors';

import * as errHandler from '@feathersjs/errors/handler';
import * as notFound from '@feathersjs/errors/not-found';

const e0: FeathersError = new BadRequest('test');
const e1: FeathersError = new NotAuthenticated('test');
const e2: FeathersError = new PaymentError('test');
const e3: FeathersError = new Forbidden('test');
const e4: FeathersError = new NotFound('test');
const e5: FeathersError = new MethodNotAllowed('test');
const e6: FeathersError = new NotAcceptable('test');
const e7: FeathersError = new Timeout('test');
const e8: FeathersError = new Conflict('test');
const e9: FeathersError = new LengthRequired('test');
const e10: FeathersError = new Unprocessable('test');
const e11: FeathersError = new TooManyRequests('test');
const e12: FeathersError = new GeneralError('test');
const e13: FeathersError = new NotImplemented('test');
const e14: FeathersError = new BadGateway('test');
const e15: FeathersError = new Unavailable('test');
