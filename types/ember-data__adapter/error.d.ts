import DS from 'ember-data';

export default DS.AdapterError;

export import InvalidError = DS.InvalidError;
export import UnauthorizedError = DS.UnauthorizedError;
export import ForbiddenError = DS.ForbiddenError;
export import NotFoundError = DS.NotFoundError;
export import ConflictError = DS.ConflictError;
export import ServerError = DS.ServerError;
export import TimeoutError = DS.TimeoutError;
export import AbortError = DS.AbortError;

export const errorsHashToArray: typeof DS.errorsHashToArray;
export const errorsArrayToHash: typeof DS.errorsArrayToHash;
