export class HttpError extends Error {
  constructor(message: string, status: string, cause: string, request: string);
}

export class PermissionError extends Error {
  constructor(message: string, status: string, cause: string, request: string);
}

export class RateLimitError extends Error {
  constructor(message: string, status: string, cause: string, request: string);
}

export class ServiceError extends Error {
  constructor(message: string, status: string, cause: string, request: string);
}

export class ValidationError extends Error {
  constructor(message: string);
}

export type APIError =
  | HttpError
  | PermissionError
  | RateLimitError
  | RateLimitError
  | ValidationError;

export interface HttpErrorResponseBody {
  code: string;
  message: {
    error: number;
    message: string;
    cause: string;
    request: string;
  };
}
