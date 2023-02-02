import execution from 'k6/execution';

execution.instance.iterationsInterrupted; // $ExpectType number
execution.instance.iterationsCompleted; // $ExpectType number
execution.instance.vusActive; // $ExpectType number
execution.instance.vusInitialized; // $ExpectType number
execution.instance.currentTestRunDuration; // $ExpectType number

execution.scenario.name; // $ExpectType string
execution.scenario.executor; // $ExpectType string
execution.scenario.startTime; // $ExpectType number
execution.scenario.progress; // $ExpectType number
execution.scenario.iterationInInstance; // $ExpectType number
execution.scenario.iterationInTest; // $ExpectType number

execution.vu.iterationInInstance; // $ExpectType number
execution.vu.iterationInScenario; // $ExpectType number
execution.vu.idInInstance; // $ExpectType number
execution.vu.idInTest; // $ExpectType number
execution.vu.tags['mytag'] = 'value1';
execution.vu.tags['mytag2'] = 2;
execution.vu.tags['mytag3'] = true;
// @ts-expect-error
execution.vu.tags['mytag4'] = [1, 2, 3];

execution.test.abort(); // $ExpectType void
execution.test.abort('this is the reason'); // $ExpectType void
// @ts-expect-error
execution.test.abort(2);
execution.test.options; // $ExpectType Options
execution.test.options.vus;
// @ts-expect-error
execution.test.options.giraffe;
