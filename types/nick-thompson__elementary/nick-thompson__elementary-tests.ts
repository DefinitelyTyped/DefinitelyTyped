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
    testSignals,
} from './tests';

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
    () =>
    {
        throw Error('Don\'t worry about this error. \n' +
                    'This is a workaround to stop the tests once ' +
                    'they are finished.');
    });
