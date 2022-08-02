import { Strategy } from 'passport-totp';

// $ExpectType Strategy
const strategy = new Strategy((_user: any, done: (...args: any[]) => void) => {
    done(null, '', 30);
});

// Handle options param
// $ExpectType Strategy
let strategyWithOptions = new Strategy({ codeField: '', window: 1 }, (_user: any, done: (...args: any[]) => void) => {
    done(null, '', 30);
});
// When the param is incorrect
// @ts-expect-error
strategyWithOptions = new Strategy({ lol: 'kek' }, (_user: any) => {});
