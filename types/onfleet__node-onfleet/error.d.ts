declare namespace APIError {
  class HttpError extends Error {
    constructor(message: string, status: string, cause: string, request: string);
  }
  class PermissionError extends Error {
    constructor(message: string, status: string, cause: string, request: string);
  }
  class RateLimitError extends Error {
    constructor(message: string, status: string, cause: string, request: string);
  } class ServiceError extends Error {
    constructor(message: string, status: string, cause: string, request: string);
  }
  class ValidationError extends Error {
    constructor(message: string);
  }

  interface HttpErrorResponseBody {
    code: string;
    message: {
      error: number;
      message: string;
      cause: string;
      request: string;
    };
  }
}

export = APIError;
