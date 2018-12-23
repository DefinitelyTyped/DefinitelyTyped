import { PassThrough } from 'stream';
import ora = require('ora');

const spinner = ora('Loading unicorns');
ora({ text: 'Loading unicorns' });
ora({ spinner: 'squish' });
ora({ spinner: { frames: ['-', '+', '-'] } });
ora({ spinner: { interval: 80, frames: ['-', '+', '-'] } });
ora({ color: 'cyan' });
ora({ color: 'foo' }); // $ExpectError
ora({ hideCursor: true });
ora({ interval: 80 });
ora({ stream: new PassThrough() });
ora({ isEnabled: true });

spinner.color = 'yellow';
spinner.text = 'Loading rainbows';
spinner.isSpinning; // $ExpectType boolean
spinner.isSpinning = true; // $ExpectError

spinner.start();
spinner.start('Test text');
spinner.stop();
spinner.succeed();
spinner.succeed('fooed');
spinner.fail();
spinner.fail('failed to foo');
spinner.warn();
spinner.warn('warn foo');
spinner.info();
spinner.info('info foo');
spinner.stopAndPersist();
spinner.stopAndPersist({ text: 'all done' });
spinner.stopAndPersist({ symbol: '@', text: 'all done' });
spinner.clear();
spinner.render();
spinner.frame();

const resolves = Promise.resolve(1);
ora.promise(resolves, 'foo');
ora.promise(resolves, {
    stream: new PassThrough(),
    text: 'foo',
    color: 'blue',
    isEnabled: true,
});
