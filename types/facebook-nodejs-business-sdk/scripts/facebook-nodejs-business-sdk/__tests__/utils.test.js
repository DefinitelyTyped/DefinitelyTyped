/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { ServerSideUtils } = require('facebook-nodejs-business-sdk');
const sha256 = require('js-sha256');


describe('ServerSideUtils', () => {
    describe('normalizeAndHash', () => {
        test('normalizes and hashes the input', () => {
            const value = '  Eg  ';
            const expected = sha256('eg');
            const actual = ServerSideUtils.normalizeAndHash(value, 'ln');

            expect(actual).toBe(expected);
        });

        test('does not double hash sha256', () => {
            const value = sha256('11234567890');
            const actual = ServerSideUtils.normalizeAndHash(value, 'ph');

            expect(actual).toBe(value);
        });

        test('does not double hash md5', () => {
            const value = '2a6a84e9e44441afbd75cc19ce28be37';
            const actual = ServerSideUtils.normalizeAndHash(value, 'ln');

            expect(actual).toBe(value);
        });

        test('validates the input', () => {
            const normalizeAndHash = () => {
                ServerSideUtils.normalizeAndHash('1234', 'em');
            }
            expect(normalizeAndHash).toThrow();
        });
    });

    describe('toSHA256', () => {
        test('hashes the value', () => {
            const value = 'test123';
            const expected = sha256(value);

            expect(ServerSideUtils.toSHA256(value)).toBe(expected);
        });
    });
});
