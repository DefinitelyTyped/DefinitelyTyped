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
let httpError = new restifyErrors.BadRequestError();
httpError = new restifyErrors.UnauthorizedError();
httpError = new restifyErrors.PaymentRequiredError();
httpError = new restifyErrors.ForbiddenError();
httpError = new restifyErrors.NotFoundError();
httpError = new restifyErrors.MethodNotAllowedError();
httpError = new restifyErrors.NotAcceptableError();
httpError = new restifyErrors.ProxyAuthenticationRequiredError();
httpError = new restifyErrors.RequestTimeoutError();
httpError = new restifyErrors.ConflictError();
httpError = new restifyErrors.GoneError();
httpError = new restifyErrors.LengthRequiredError();
httpError = new restifyErrors.PreconditionFailedError();
httpError = new restifyErrors.RequestEntityTooLargeError();
httpError = new restifyErrors.RequesturiTooLargeError();
httpError = new restifyErrors.UnsupportedMediaTypeError();
httpError = new restifyErrors.RangeNotSatisfiableError();
httpError = new restifyErrors.ExpectationFailedError();
httpError = new restifyErrors.ImATeapotError();
httpError = new restifyErrors.UnprocessableEntityError();
httpError = new restifyErrors.LockedError();
httpError = new restifyErrors.FailedDependencyError();
httpError = new restifyErrors.UnorderedCollectionError();
httpError = new restifyErrors.UpgradeRequiredError();
httpError = new restifyErrors.PreconditionRequiredError();
httpError = new restifyErrors.TooManyRequestsError();
httpError = new restifyErrors.RequestHeaderFieldsTooLargeError();
httpError = new restifyErrors.InternalServerError();
httpError = new restifyErrors.NotImplementedError();
httpError = new restifyErrors.BadGatewayError();
httpError = new restifyErrors.ServiceUnavailableError();
httpError = new restifyErrors.GatewayTimeoutError();
httpError = new restifyErrors.HttpVersionNotSupportedError();
httpError = new restifyErrors.VariantAlsoNegotiatesError();
httpError = new restifyErrors.InsufficientStorageError();
httpError = new restifyErrors.BandwidthLimitExceededError();
httpError = new restifyErrors.NotExtendedError();
httpError = new restifyErrors.NetworkAuthenticationRequiredError();

// RestErrors
let restError = new restifyErrors.BadDigestError();
restError = new restifyErrors.BadMethodError();
restError = new restifyErrors.InternalError();
restError = new restifyErrors.InvalidArgumentError();
restError = new restifyErrors.InvalidContentError();
restError = new restifyErrors.InvalidCredentialsError();
restError = new restifyErrors.InvalidHeaderError();
restError = new restifyErrors.InvalidVersionError();
restError = new restifyErrors.MissingParameterError();
restError = new restifyErrors.NotAuthorizedError();
restError = new restifyErrors.RequestExpiredError();
restError = new restifyErrors.RequestThrottledError();
restError = new restifyErrors.ResourceNotFoundError();
restError = new restifyErrors.WrongAcceptError();
