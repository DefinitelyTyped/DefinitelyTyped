import { NightwatchAPI, NightwatchCallbackResult } from 'nightwatch';

export function isNull(v: null) {}

export function isNightwatchAPI(v: NightwatchAPI) {}

export function isType<T>(v: T): T { return v; }

export function isNightwatchCallbackResult<T>(result: NightwatchCallbackResult<T>): T | void {
  if (result.status === 0) {
      return result.value;
  }
}
