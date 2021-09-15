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
} from './tests';

const stopMessage = `
Don\'t worry about this error.
This is a workaround to stop the tests once they are finished.
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
    // TODO: better workaround
    () => {
        throw Error(stopMessage);
    });
