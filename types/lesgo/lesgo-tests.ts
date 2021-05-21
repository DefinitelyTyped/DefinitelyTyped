import httpMiddleware from "Middlewares/httpMiddleware";
import normalizeHttpRequestMiddleware from "Middlewares/normalizeHttpRequestMiddleware";
import successHttpResponseMiddleware from "Middlewares/successHttpResponseMiddleware";
import errorHttpResponseMiddleware from "Middlewares/errorHttpResponseMiddleware";
import verifyJwtMiddleware from "Middlewares/verifyJwtMiddleware";
import normalizeSQSMessageMiddleware from "Middlewares/normalizeSQSMessageMiddleware";

import LesgoException from "Exceptions/LesgoException";

/* Middlewares */
httpMiddleware({ debugMode: true }); // $ExpectType HttpMiddleware
normalizeHttpRequestMiddleware(); // $ExpectType NormalizeHttpMiddleware
successHttpResponseMiddleware(); // $ExpectType SuccessHttpMiddleware
errorHttpResponseMiddleware({ debugMode: true }); // $ExpectType ErrorHttpMiddleware
verifyJwtMiddleware(); // $ExpectType VerifyJwtMiddleware
normalizeSQSMessageMiddleware(); // $ExpectType NormalizeSQSMiddleware

/* Exceptions */
const lesgoException = new LesgoException("Error");
lesgoException.name; // $ExpectType string
lesgoException.message; // $ExpectType string
lesgoException.statusCode; // $ExpectType number
lesgoException.code; // $ExpectType string
lesgoException.extra; // $ExpectType any

/* Services */
