import * as fs from "fs";

import {
  isArray,
  isObject,
  isPlainObject,
  isStamp,
  isString,
  isComposable,
  isDescriptor,
} from "@stamp/is";

isArray('hi'); // $ExpectType boolean
isComposable({}); // $ExpectType boolean
isDescriptor({}); // $ExpectType boolean
isObject({}); // $ExpectType boolean
isPlainObject(3); // $ExpectType boolean
isStamp([]); // $ExpectType boolean
isString(123); // $ExpectType boolean
