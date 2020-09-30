/**
 * Typescript definition tests for d3/d3-random module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Random from 'd3-random';
import * as seedrandom from 'seedrandom';

// ------------------------------------------------------------
// Preparatory Steps
// ------------------------------------------------------------

let randomNumberGenerator: () => number;

// ------------------------------------------------------------
// randomUniform
// ------------------------------------------------------------

let prngUniform: d3Random.RandomUniform;

prngUniform = d3Random.randomUniform;
prngUniform = d3Random.randomUniform.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngUniform();
randomNumberGenerator = prngUniform(0.2);
randomNumberGenerator = prngUniform(0.2, 5);

// ------------------------------------------------------------
// randomInt
// ------------------------------------------------------------

let prngInt: d3Random.RandomInt;

prngInt = d3Random.randomInt;
prngInt = d3Random.randomInt.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngInt(6);
randomNumberGenerator = prngInt(1, 5);

// ------------------------------------------------------------
// randomNormal
// ------------------------------------------------------------

let prngNormal: d3Random.RandomNormal;

prngNormal = d3Random.randomNormal;
prngNormal = d3Random.randomNormal.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngNormal();
randomNumberGenerator = prngNormal(3);
randomNumberGenerator = prngNormal(3, 4);

// ------------------------------------------------------------
// randomLogNormal
// ------------------------------------------------------------

let prngLogNormal: d3Random.RandomLogNormal;

prngLogNormal = d3Random.randomLogNormal;
prngLogNormal = d3Random.randomLogNormal.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngLogNormal();
randomNumberGenerator = prngLogNormal(3);
randomNumberGenerator = prngLogNormal(3, 4);

// ------------------------------------------------------------
// randomBates
// ------------------------------------------------------------

let prngBates: d3Random.RandomBates;

prngBates = d3Random.randomBates;
prngBates = d3Random.randomBates.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngBates(3);

// ------------------------------------------------------------
// randomIrwinHall
// ------------------------------------------------------------

let prngIrwinHall: d3Random.RandomIrwinHall;

prngIrwinHall = d3Random.randomIrwinHall;
prngIrwinHall = d3Random.randomIrwinHall.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngIrwinHall(3);

// ------------------------------------------------------------
// randomExponential
// ------------------------------------------------------------

let prngExponential: d3Random.RandomExponential;

prngExponential = d3Random.randomExponential;
prngExponential = d3Random.randomExponential.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngExponential(1 / 40);

// ------------------------------------------------------------
// randomPareto
// ------------------------------------------------------------

let prngPareto: d3Random.RandomPareto;

prngPareto = d3Random.randomPareto;
prngPareto = d3Random.randomPareto.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngPareto(5);

// ------------------------------------------------------------
// randomBernoulli
// ------------------------------------------------------------

let prngBernoulli: d3Random.RandomBernoulli;

prngBernoulli = d3Random.randomBernoulli;
prngBernoulli = d3Random.randomBernoulli.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngBernoulli(0.5);

// ------------------------------------------------------------
// randomGeometric
// ------------------------------------------------------------

let prngGeometric: d3Random.RandomGeometric;

prngGeometric = d3Random.randomGeometric;
prngGeometric = d3Random.randomGeometric.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngGeometric(0.5);

// ------------------------------------------------------------
// randomBinomial
// ------------------------------------------------------------

let prngBinomial: d3Random.RandomBinomial;

prngBinomial = d3Random.randomBinomial;
prngBinomial = d3Random.randomBinomial.source(seedrandom("Schroedinger's flea."));

randomNumberGenerator = prngBinomial(0.5);
