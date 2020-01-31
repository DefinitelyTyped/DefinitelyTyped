import DS from 'ember-data';

export const AdapterError: typeof DS.AdapterError;
export type AdapterError = DS.AdapterError;

export const InvalidError: typeof DS.InvalidError;
export type InvalidError = DS.InvalidError;

export const UnauthorizedError: typeof DS.UnauthorizedError;
export type UnauthorizedError = DS.UnauthorizedError;

export const ForbiddenError: typeof DS.ForbiddenError;
export type ForbiddenError = DS.ForbiddenError;

export const NotFoundError: typeof DS.NotFoundError;
export type NotFoundError = DS.NotFoundError;

export const ConflictError: typeof DS.ConflictError;
export type ConflictError = DS.ConflictError;

export const ServerError: typeof DS.ServerError;
export type ServerError = DS.ServerError;

export const TimeoutError: typeof DS.TimeoutError;
export type TimeoutError = DS.TimeoutError;

export const AbortError: typeof DS.AbortError;
export type AbortError = DS.AbortError;

export const errorsHashToArray: typeof DS.errorsHashToArray;
export const errorsArrayToHash: typeof DS.errorsArrayToHash;
