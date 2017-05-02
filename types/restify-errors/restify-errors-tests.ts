import * as restifyErrors from "restify-errors";

const prevErr = new Error();

// HttpError
const httpErrorA = new restifyErrors.HttpError("Hello World!");
const httpErrorB = new restifyErrors.HttpError("Hello %s!", "World");
const httpErrorC = new restifyErrors.HttpError({ statusCode: 404 }, "Hello %s!", "World");
const httpErrorD = new restifyErrors.HttpError(prevErr, "Hello World!");
const httpErrorE = new restifyErrors.HttpError(prevErr, "Hello %s!", "World");
const httpErrorF = new restifyErrors.HttpError(prevErr, { statusCode: 404 }, "Hello %s!", "World");

// RestError
const restErrorA = new restifyErrors.RestError("Hello World!");
const restErrorB = new restifyErrors.RestError("Hello %s!", "World");
const restErrorC = new restifyErrors.RestError({ statusCode: 404, restCode: "TEST" }, "Hello %s!", "World");
const restErrorD = new restifyErrors.RestError(prevErr, "Hello World!");
const restErrorE = new restifyErrors.RestError(prevErr, "Hello %s!", "World");
const restErrorF = new restifyErrors.RestError(prevErr, { statusCode: 404, restCode: "TEST" }, "Hello %s!", "World");

// Functions
restifyErrors.makeConstructor("TestError", {});
const customError = restifyErrors.makeErrFromCode(500, "Testing....");
const bunyanSerializer = restifyErrors.bunyanSerializer;

// HttpErrors
let httpError = restifyErrors.HttpErrors.BadRequestError;
httpError = restifyErrors.HttpErrors.UnauthorizedError;
httpError = restifyErrors.HttpErrors.PaymentRequiredError;
httpError = restifyErrors.HttpErrors.ForbiddenError;
httpError = restifyErrors.HttpErrors.NotFoundError;
httpError = restifyErrors.HttpErrors.MethodNotAllowedError;
httpError = restifyErrors.HttpErrors.NotAcceptableError;
httpError = restifyErrors.HttpErrors.ProxyAuthenticationRequiredError;
httpError = restifyErrors.HttpErrors.RequestTimeoutError;
httpError = restifyErrors.HttpErrors.ConflictError;
httpError = restifyErrors.HttpErrors.GoneError;
httpError = restifyErrors.HttpErrors.LengthRequiredError;
httpError = restifyErrors.HttpErrors.PreconditionFailedError;
httpError = restifyErrors.HttpErrors.RequestEntityTooLargeError;
httpError = restifyErrors.HttpErrors.RequesturiTooLargeError;
httpError = restifyErrors.HttpErrors.UnsupportedMediaTypeError;
httpError = restifyErrors.HttpErrors.RangeNotSatisfiableError;
httpError = restifyErrors.HttpErrors.ExpectationFailedError;
httpError = restifyErrors.HttpErrors.ImATeapotError;
httpError = restifyErrors.HttpErrors.UnprocessableEntityError;
httpError = restifyErrors.HttpErrors.LockedError;
httpError = restifyErrors.HttpErrors.FailedDependencyError;
httpError = restifyErrors.HttpErrors.UnorderedCollectionError;
httpError = restifyErrors.HttpErrors.UpgradeRequiredError;
httpError = restifyErrors.HttpErrors.PreconditionRequiredError;
httpError = restifyErrors.HttpErrors.TooManyRequestsError;
httpError = restifyErrors.HttpErrors.RequestHeaderFieldsTooLargeError;
httpError = restifyErrors.HttpErrors.InternalServerError;
httpError = restifyErrors.HttpErrors.NotImplementedError;
httpError = restifyErrors.HttpErrors.BadGatewayError;
httpError = restifyErrors.HttpErrors.ServiceUnavailableError;
httpError = restifyErrors.HttpErrors.GatewayTimeoutError;
httpError = restifyErrors.HttpErrors.HttpVersionNotSupportedError;
httpError = restifyErrors.HttpErrors.VariantAlsoNegotiatesError;
httpError = restifyErrors.HttpErrors.InsufficientStorageError;
httpError = restifyErrors.HttpErrors.BandwidthLimitExceededError;
httpError = restifyErrors.HttpErrors.NotExtendedError;
httpError = restifyErrors.HttpErrors.NetworkAuthenticationRequiredError;

// RestErrors
let restError = restifyErrors.RestErrors.BadDigestError;
restError = restifyErrors.RestErrors.BadMethodError;
restError = restifyErrors.RestErrors.InternalError;
restError = restifyErrors.RestErrors.InvalidArgumentError;
restError = restifyErrors.RestErrors.InvalidContentError;
restError = restifyErrors.RestErrors.InvalidCredentialsError;
restError = restifyErrors.RestErrors.InvalidHeaderError;
restError = restifyErrors.RestErrors.InvalidVersionError;
restError = restifyErrors.RestErrors.MissingParameterError;
restError = restifyErrors.RestErrors.NotAuthorizedError;
restError = restifyErrors.RestErrors.PreconditionFailedError;
restError = restifyErrors.RestErrors.RequestExpiredError;
restError = restifyErrors.RestErrors.RequestThrottledError;
restError = restifyErrors.RestErrors.ResourceNotFoundError;
restError = restifyErrors.RestErrors.WrongAcceptError;
