import HttpError = require('standard-http-error');

HttpError.CONTINUE; // $ExpectType 100
HttpError.SWITCHING_PROTOCOLS; // $ExpectType 101
HttpError.PROCESSING; // $ExpectType 102
HttpError.OK; // $ExpectType 200
HttpError.CREATED; // $ExpectType 201
HttpError.ACCEPTED; // $ExpectType 202
HttpError.NON_AUTHORITATIVE_INFORMATION; // $ExpectType 203
HttpError.NO_CONTENT; // $ExpectType 204
HttpError.RESET_CONTENT; // $ExpectType 205
HttpError.PARTIAL_CONTENT; // $ExpectType 206
HttpError.MULTI_STATUS; // $ExpectType 207
HttpError.ALREADY_REPORTED; // $ExpectType 208
HttpError.IM_USED; // $ExpectType 226
HttpError.MULTIPLE_CHOICES; // $ExpectType 300
HttpError.MOVED_PERMANENTLY; // $ExpectType 301
HttpError.FOUND; // $ExpectType 302
HttpError.SEE_OTHER; // $ExpectType 303
HttpError.NOT_MODIFIED; // $ExpectType 304
HttpError.USE_PROXY; // $ExpectType 305
HttpError.TEMPORARY_REDIRECT; // $ExpectType 307
HttpError.PERMANENT_REDIRECT; // $ExpectType 308
HttpError.BAD_REQUEST; // $ExpectType 400
HttpError.UNAUTHORIZED; // $ExpectType 401
HttpError.PAYMENT_REQUIRED; // $ExpectType 402
HttpError.FORBIDDEN; // $ExpectType 403
HttpError.NOT_FOUND; // $ExpectType 404
HttpError.METHOD_NOT_ALLOWED; // $ExpectType 405
HttpError.NOT_ACCEPTABLE; // $ExpectType 406
HttpError.PROXY_AUTHENTICATION_REQUIRED; // $ExpectType 407
HttpError.REQUEST_TIMEOUT; // $ExpectType 408
HttpError.CONFLICT; // $ExpectType 409
HttpError.GONE; // $ExpectType 410
HttpError.LENGTH_REQUIRED; // $ExpectType 411
HttpError.PRECONDITION_FAILED; // $ExpectType 412
HttpError.PAYLOAD_TOO_LARGE; // $ExpectType 413
HttpError.URI_TOO_LONG; // $ExpectType 414
HttpError.UNSUPPORTED_MEDIA_TYPE; // $ExpectType 415
HttpError.RANGE_NOT_SATISFIABLE; // $ExpectType 416
HttpError.EXPECTATION_FAILED; // $ExpectType 417
HttpError.IM_A_TEAPOT; // $ExpectType 418
HttpError.MISDIRECTED_REQUEST; // $ExpectType 421
HttpError.UNPROCESSABLE_ENTITY; // $ExpectType 422
HttpError.LOCKED; // $ExpectType 423
HttpError.FAILED_DEPENDENCY; // $ExpectType 424
HttpError.UNORDERED_COLLECTION; // $ExpectType 425
HttpError.UPGRADE_REQUIRED; // $ExpectType 426
HttpError.PRECONDITION_REQUIRED; // $ExpectType 428
HttpError.TOO_MANY_REQUESTS; // $ExpectType 429
HttpError.REQUEST_HEADER_FIELDS_TOO_LARGE; // $ExpectType 431
HttpError.INTERNAL_SERVER_ERROR; // $ExpectType 500
HttpError.NOT_IMPLEMENTED; // $ExpectType 501
HttpError.BAD_GATEWAY; // $ExpectType 502
HttpError.SERVICE_UNAVAILABLE; // $ExpectType 503
HttpError.GATEWAY_TIMEOUT; // $ExpectType 504
HttpError.HTTP_VERSION_NOT_SUPPORTED; // $ExpectType 505
HttpError.VARIANT_ALSO_NEGOTIATES; // $ExpectType 506
HttpError.INSUFFICIENT_STORAGE; // $ExpectType 507
HttpError.LOOP_DETECTED; // $ExpectType 508
HttpError.BANDWIDTH_LIMIT_EXCEEDED; // $ExpectType 509
HttpError.NOT_EXTENDED; // $ExpectType 510
HttpError.NETWORK_AUTHENTICATION_REQUIRED; // $ExpectType 511

let error = new HttpError(200); // $ExpectType HttpError

error.code; // $ExpectType number
error.message; // $ExpectType string
error.name; // $ExpectType string
error.stack; // $ExpectType string | undefined

error = new HttpError(200, 'test'); // $ExpectType HttpError
error = new HttpError('OK', 'test'); // $ExpectType HttpError
error = new HttpError(200, 'test', { foo: 'bar' }); // $ExpectType HttpError

error.foo; // $ExpectType any

error = new HttpError(200, { message: 'test', foo: 'bar' }); // $ExpectType HttpError
