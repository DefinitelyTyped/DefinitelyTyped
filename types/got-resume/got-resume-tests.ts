import * as fs from 'fs';
import gotResume = require('got-resume');
import * as zlib from 'zlib';

/* Default `stream` function tests. */

const emptyTransferOptions: gotResume.TransferOptions = {};
const transferOptions: gotResume.TransferOptions = {
    attempts: 0,
    attemptsTotal: 0,
    backoff(attempt, transfer) {
        return attempt + transfer.attempt;
    },
    got: { method: 'POST' },
    length: 10,
    log: console.log,
    needLength: true,
    offset: 5,
    pre(transfer) {
        transfer.gotOptions.headers!['user-agent'] = 'Stealth 2.0';
        return Promise.resolve();
    },
    transform: zlib.createGzip(),
};

gotResume('http://google.com/')
    .on('end', () => console.log('Finished!'))
    .on('error', err => console.log('Failed!', err))
    .pipe(fs.createWriteStream('foo.html'));

const stream2 = gotResume({ url: 'http://google.com/' });
const stream3 = gotResume('http://google.com/', transferOptions);

/* `toFile` tests. */

const toFileOptions: gotResume.ToFileOptions = {
    ...transferOptions,
    onProgress(progress) {
        console.log(progress.total);
    },
    onResponse(response) {
        console.log(response);
    },
    Promise,
};

gotResume
    .toFile('google.html', 'http://google.com/')
    .then(() => console.log('Finished!'))
    .catch(err => console.log('Failed!'));

const promise1 = gotResume.toFile('google.html');
const promise2 = gotResume.toFile('google.html', 'http://google.com/');
const promise3 = gotResume.toFile('google.html', toFileOptions);
const promise4 = gotResume.toFile('google.html', transferOptions);
const promise5 = gotResume.toFile('google.html', 'http://google.com/', toFileOptions);

/* `Transfer` tests. */

const transfer = new gotResume.Transfer(transferOptions);
transfer.cancel();
transfer.failed(Error('test'), true);
transfer.fatal();
transfer.get();
transfer.start();

/* Error tests. */

const error1 = new gotResume.Error();
const error2 = new gotResume.Error('test');
const cancelError1 = new gotResume.CancelError();
const cancelError2 = new gotResume.CancelError('test');
const optionsError1 = new gotResume.OptionsError();
const optionsError2 = new gotResume.OptionsError('test');
const preError1 = new gotResume.PreError();
const preError2 = new gotResume.PreError('test');
const transferError1 = new gotResume.TransferError();
const transferError2 = new gotResume.TransferError('test');
