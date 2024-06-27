/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */
export default class Utils {
  static normalizeEndpoint(str: string): string {
    return str.replace(/^\/|\/$/g, '');
  }

  static removePreceedingSlash(str: string): string {
    return str.length && str[0] === '/' ? str.slice(1) : str;
  }
}
