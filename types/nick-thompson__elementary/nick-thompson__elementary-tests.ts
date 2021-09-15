import {
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
} from './tests/index';
import { flush } from './tests/tester';

const stopMessage = `
Don\'t worry about this error.
This is a workaround to stop the tests once they are finished.

Everything is looking good!
`.trim();

onCoreLoad(
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
    testSignals,
    () => flush(stopMessage));
