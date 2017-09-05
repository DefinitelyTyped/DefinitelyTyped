

import MochaDef = require('mocha');

class CustomSpecReporter extends MochaDef.reporters.Spec {
    constructor(runner: Mocha.IRunner) {
        super(runner);

        runner.on('test', (test: Mocha.ITest) => {
            console.log(test.parent.title + '/' + test.title);
        });
    }
}

class MyReporter extends MochaDef.reporters.Base {
    passes: number = 0;
    failures: number = 0;

    constructor(runner: Mocha.IRunner) {
        super(runner);

        runner.on('pass', (test: Mocha.ITest) => {
            this.passes++;
            console.log('pass: %s', test.fullTitle());
        });

        runner.on('fail', (test: Mocha.ITest, err: Error) => {
            this.failures++;
            console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
        });

        runner.on('end', () => {
            console.log('end: %d/%d', this.passes, this.passes + this.failures);
            process.exit(this.failures);
        });
    }
}
