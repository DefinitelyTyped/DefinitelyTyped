import browserslist from 'browserslist';
import BrowserslistError from 'browserslist/error';

browserslist(); // $ExpectType string[]
browserslist(''); // $ExpectType string[]
browserslist(['']); // $ExpectType string[]

const opts: browserslist.Options[] = [
    {},
    { path: '' },
    { env: '' },
    { stats: { '': { '': 0 } } },
    { config: '' },
    { ignoreUnknownVersions: false },
    { dangerousExtend: false },
    { mobileToDesktop: true },
];
for (const opt of opts) {
    browserslist('', opt); // $ExpectType string[]
    browserslist([''], opt); // $ExpectType string[]
}

const stats: browserslist.Stats = {};

browserslist.coverage(['']); // $ExpectType number
browserslist.coverage([''], { '': { '': 0 } }); // $ExpectType number

browserslist.coverage(browserslist('> 1%')); // $ExpectType number
browserslist.coverage(browserslist('> 1% in US'), 'US'); // $ExpectType number
browserslist.coverage(browserslist('> 1% in US'), 'my stats'); // $ExpectType number
browserslist.coverage(browserslist('> 1% in my stats', { stats }), stats); // $ExpectType number

browserslist.clearCaches(); // $ExpectType void

new BrowserslistError('error'); // $ExpectType BrowserslistError
