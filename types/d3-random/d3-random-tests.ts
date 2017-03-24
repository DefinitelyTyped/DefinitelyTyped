/**
 * Typescript definition tests for d3/d3-random module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Random from 'd3-random';


// ------------------------------------------------------------
// Preparatory Steps
// ------------------------------------------------------------

let randomNumberGenerator: () => number;

// ------------------------------------------------------------
// randomUniform
// ------------------------------------------------------------

randomNumberGenerator = d3Random.randomUniform();
randomNumberGenerator = d3Random.randomUniform(0.2);
randomNumberGenerator = d3Random.randomUniform(0.2, 5);

// ------------------------------------------------------------
// randomNormal
// ------------------------------------------------------------

randomNumberGenerator = d3Random.randomNormal();
randomNumberGenerator = d3Random.randomNormal(3);
randomNumberGenerator = d3Random.randomNormal(3, 4);

// ------------------------------------------------------------
// randomLogNormal
// ------------------------------------------------------------

randomNumberGenerator = d3Random.randomLogNormal();
randomNumberGenerator = d3Random.randomLogNormal(3);
randomNumberGenerator = d3Random.randomLogNormal(3, 4);

// ------------------------------------------------------------
// randomBates
// ------------------------------------------------------------

randomNumberGenerator = d3Random.randomBates(3);

// ------------------------------------------------------------
// randomIrwinHall
// ------------------------------------------------------------

randomNumberGenerator = d3Random.randomIrwinHall(3);

// ------------------------------------------------------------
// randomExponential
// ------------------------------------------------------------

randomNumberGenerator = d3Random.randomExponential(1 / 40);
