import { PassThrough } from 'stream';
import Ora = require('ora');

const spinner = Ora('Loading unicorns').start();

const spinnerNothing = Ora().start();

const spinnerNew = new Ora({
    text: 'Loading unicorns',
    spinner: 'squish'
});

const spinnerNew2 = new Ora({
    stream: new PassThrough(),
    text: 'foo',
    color: 'cyan',
    enabled: true
});

spinner.start();
spinner.start('Test text');

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 1000);

setTimeout(() => {
    spinner.succeed();
}, 2000);

spinner.succeed();
spinner.succeed('fooed');
spinner.fail();
spinner.fail('failed to foo');
spinner.warn();
spinner.info();
spinner.stopAndPersist();
spinner.stopAndPersist('@');
spinner.stopAndPersist({text: 'all done'});
spinner.stopAndPersist({symbol: '@', text: 'all done'});

const resolves = Promise.resolve(1);
spinner.promise(resolves, {
    stream: new PassThrough(),
    text: 'foo',
    color: 'blue',
    enabled: true
});
