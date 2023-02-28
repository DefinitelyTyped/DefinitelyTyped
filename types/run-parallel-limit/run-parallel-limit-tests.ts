import rpl = require('run-parallel-limit');

const tasks: Array<rpl.Task<string>> = [
    (callback) => () => callback(null, 'string'),
    (callback) => () => callback(new Error('boom')),

    // @ts-expect-error
    (callback) => () => callback(null, 1)
];

const justTaskCallback: rpl.TaskCallback<string> = (err, result) => {
    // $ExpectType Error | null
    err;

    // $ExpectType string | undefined
    result;
};

justTaskCallback(null, 'string');
justTaskCallback(new Error('boom'));
// @ts-expect-error
justTaskCallback(null, 1);

rpl(tasks, 5, (err, results) => {
    // $ExpectType Error
    err;

    // $ExpectType string[]
    results;
});

// $ExpectType string[]
const results = rpl(tasks, 5);

const tasksObj: rpl.TaskObj<string> = {
    one: (callback) => () => callback(null, 'string'),
    two: (callback) => () => callback(new Error('boom')),

    // @ts-expect-error
    three: (callback) => () => callback(1)
};

rpl(tasksObj, 5, (err, results) => {
    // $ExpectType Error
    err;

    // $ExpectType Record<string, string>
    results;
});

// $ExpectType Record<string, string>
const resultsObj = rpl(tasksObj, 5);
