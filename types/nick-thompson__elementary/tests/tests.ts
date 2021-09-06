import { onCoreLoad, testCore } from './core';
import { testNative } from './native';
import { testBasics } from './basics';
import { testDelays } from './delays';
import { testFilters } from './filters';
import { testMath } from './math';
import { testNoise } from './noise';
import { testOscillators } from './oscillators';
import { testSamples } from './samples';
import { testSignals } from './signals';

onCoreLoad(
    testCore,
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
