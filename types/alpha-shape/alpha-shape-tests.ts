/**
 * Typescript definition tests for alpha-shape module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import alphaShape = require('alpha-shape');

const sites: number[][] = [];

for (let i = 0; i < 10; ++i) {
    sites.push([Math.random(), Math.random()]);
}

const cells = alphaShape(0, sites);
