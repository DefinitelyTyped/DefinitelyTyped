/**
 * Typescript definition tests for alpha-shape module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import alphaShape = require('alpha-shape');

const sites = [[1, 2], [3, 5], [1, 7], [4, 9], [2, 3], [2, 7], [4, 4], [3, 2], [6, 2]];

const cells = alphaShape(0, sites);
