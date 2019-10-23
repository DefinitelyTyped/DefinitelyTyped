import rpl = require('run-parallel');

const tasks: Array<rpl.Task<string>> = [
    (callback) => () => callback(null, 'string'),
    (callback) => () => callback(new Error('boom')),

    // $ExpectError
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
// $ExpectError
justTaskCallback(null, 1);

rpl(tasks, (err, results) => {
    // $ExpectType Error
    err;

    // $ExpectType string[]
    results;
});

// $ExpectType string[]
const results = rpl(tasks);

const tasksObj: rpl.TaskObj<string> = {
    one: (callback) => () => callback(null, 'string'),
    two: (callback) => () => callback(new Error('boom')),

    // $ExpectError
    three: (callback) => () => callback(1)
};

rpl(tasksObj, (err, results) => {
    // $ExpectType Error
    err;

    // $ExpectType Record<string, string>
    results;
});

// $ExpectType Record<string, string>
const resultsObj = rpl(tasksObj);
