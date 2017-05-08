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
let httpError = new restifyErrors.HttpErrors.BadRequestError();
httpError = new restifyErrors.HttpErrors.UnauthorizedError();
httpError = new restifyErrors.HttpErrors.PaymentRequiredError();
httpError = new restifyErrors.HttpErrors.ForbiddenError();
httpError = new restifyErrors.HttpErrors.NotFoundError();
httpError = new restifyErrors.HttpErrors.MethodNotAllowedError();
httpError = new restifyErrors.HttpErrors.NotAcceptableError();
httpError = new restifyErrors.HttpErrors.ProxyAuthenticationRequiredError();
httpError = new restifyErrors.HttpErrors.RequestTimeoutError();
httpError = new restifyErrors.HttpErrors.ConflictError();
httpError = new restifyErrors.HttpErrors.GoneError();
httpError = new restifyErrors.HttpErrors.LengthRequiredError();
httpError = new restifyErrors.HttpErrors.PreconditionFailedError();
httpError = new restifyErrors.HttpErrors.RequestEntityTooLargeError();
httpError = new restifyErrors.HttpErrors.RequesturiTooLargeError();
httpError = new restifyErrors.HttpErrors.UnsupportedMediaTypeError();
httpError = new restifyErrors.HttpErrors.RangeNotSatisfiableError();
httpError = new restifyErrors.HttpErrors.ExpectationFailedError();
httpError = new restifyErrors.HttpErrors.ImATeapotError();
httpError = new restifyErrors.HttpErrors.UnprocessableEntityError();
httpError = new restifyErrors.HttpErrors.LockedError();
httpError = new restifyErrors.HttpErrors.FailedDependencyError();
httpError = new restifyErrors.HttpErrors.UnorderedCollectionError();
httpError = new restifyErrors.HttpErrors.UpgradeRequiredError();
httpError = new restifyErrors.HttpErrors.PreconditionRequiredError();
httpError = new restifyErrors.HttpErrors.TooManyRequestsError();
httpError = new restifyErrors.HttpErrors.RequestHeaderFieldsTooLargeError();
httpError = new restifyErrors.HttpErrors.InternalServerError();
httpError = new restifyErrors.HttpErrors.NotImplementedError();
httpError = new restifyErrors.HttpErrors.BadGatewayError();
httpError = new restifyErrors.HttpErrors.ServiceUnavailableError();
httpError = new restifyErrors.HttpErrors.GatewayTimeoutError();
httpError = new restifyErrors.HttpErrors.HttpVersionNotSupportedError();
httpError = new restifyErrors.HttpErrors.VariantAlsoNegotiatesError();
httpError = new restifyErrors.HttpErrors.InsufficientStorageError();
httpError = new restifyErrors.HttpErrors.BandwidthLimitExceededError();
httpError = new restifyErrors.HttpErrors.NotExtendedError();
httpError = new restifyErrors.HttpErrors.NetworkAuthenticationRequiredError();

// RestErrors
let restError = new restifyErrors.RestErrors.BadDigestError();
restError = new restifyErrors.RestErrors.BadMethodError();
restError = new restifyErrors.RestErrors.InternalError();
restError = new restifyErrors.RestErrors.InvalidArgumentError();
restError = new restifyErrors.RestErrors.InvalidContentError();
restError = new restifyErrors.RestErrors.InvalidCredentialsError();
restError = new restifyErrors.RestErrors.InvalidHeaderError();
restError = new restifyErrors.RestErrors.InvalidVersionError();
restError = new restifyErrors.RestErrors.MissingParameterError();
restError = new restifyErrors.RestErrors.NotAuthorizedError();
restError = new restifyErrors.RestErrors.PreconditionFailedError();
restError = new restifyErrors.RestErrors.RequestExpiredError();
restError = new restifyErrors.RestErrors.RequestThrottledError();
restError = new restifyErrors.RestErrors.ResourceNotFoundError();
restError = new restifyErrors.RestErrors.WrongAcceptError();
