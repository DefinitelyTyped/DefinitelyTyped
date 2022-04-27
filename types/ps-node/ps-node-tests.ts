import * as ps from 'ps-node';

ps.lookup({ command: 'myProg' }, (err, list) => {
    if (err) throw err;
    list.filter(p => ~p.arguments.indexOf('--my-arg')).forEach(({ pid }) => ps.kill(pid));
});

// these are from the README

// A simple pid lookup
ps.lookup({ pid: 12345 }, (err, resultList) => {
    if (err) {
        throw err;
    }

    const process = resultList[0];

    if (process) {
        console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments);
    } else {
        console.log('No such process found!');
    }
});

// A simple pid lookup
ps.lookup(
    {
        command: 'node',
        arguments: '--debug',
    },
    (err, resultList) => {
        if (err) {
            throw err;
        }

        resultList.forEach(process => {
            if (process) {
                console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments);
            }
        });
    },
);

// A simple pid lookup
ps.kill('12345', err => {
    if (err) {
        throw err;
    } else {
        console.log('Process %s has been killed!');
    }
});

// Pass signal SIGKILL for killing the process without allowing it to clean up
ps.kill('12345', 'SIGKILL', err => {
    if (err) {
        throw err;
    } else {
        console.log('Process %s has been killed without a clean-up!');
    }
});

ps.kill(
    '12345',
    {
        signal: 'SIGKILL',
        timeout: 10, // will set up a ten seconds timeout if the killing is not successful
    },
    () => {},
);

// A simple pid lookup
ps.lookup(
    {
        command: 'node',
        psargs: 'ux',
    },
    (err, resultList) => {
        if (err) {
            throw err;
        }

        resultList.forEach(process => {
            if (process) {
                console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments);
            }
        });
    },
);

// A simple pid lookup
ps.lookup(
    {
        command: 'mongod',
        psargs: '-l',
        ppid: 82292,
    },
    (err, resultList) => {
        if (err) {
            throw err;
        }

        resultList.forEach(process => {
            if (process) {
                console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments);
            }
        });
    },
);
