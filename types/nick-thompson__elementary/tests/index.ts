import { onCoreLoad } from './load';
import { testCore } from './suites/core';
import { testFactories } from './suites/factories';
import { testNative } from './suites/native';
import { testBasics } from './suites/basics';
import { testDelays } from './suites/delays';
import { testFilters } from './suites/filters';
import { testMath } from './suites/math';
import { testNoise } from './suites/noise';
import { testOscillators } from './suites/oscillators';
import { testSamples } from './suites/samples';
import { testSignals } from './suites/signals';

export {
    onCoreLoad,
    testCore,
    testFactories,
    testNative,
    testBasics,
    testDelays,
    testFilters,
    testMath,
    testNoise,
    testOscillators,
    testSamples,
    testSignals
};
