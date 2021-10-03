import { ZalgoPromise } from 'zalgo-promise';

// $ExpectType ZalgoPromise<void>
new ZalgoPromise<void>(function (resolve) {
    resolve();
});

// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(0)
    .then(result => ZalgoPromise.resolve(result.toString()));
// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(0)
    .then(result => result.toString());
// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(0)
    .then(undefined, error => ZalgoPromise.resolve(`${error}`));
// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(0)
    .then(undefined, error => `${error}`);
// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(0)
    .then(result => ZalgoPromise.resolve(result.toString()), error => ZalgoPromise.resolve(`${error}`));
// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(0)
    .then(result => ZalgoPromise.resolve(result.toString()), error => `${error}`);
// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(0)
    .then(result => result.toString(), error => ZalgoPromise.resolve(`${error}`));
// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(0)
    .then(result => result.toString(), error => `${error}`);

// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(0)
    .catch(error => ZalgoPromise.resolve(`${error}`));
// $ExpectType ZalgoPromise<string>
const p = ZalgoPromise.resolve(0)
    .catch(error => `${error}`);

// $ExpectType ZalgoPromise<boolean>
ZalgoPromise.resolve(ZalgoPromise.resolve(false));
// $ExpectType ZalgoPromise<number>
ZalgoPromise.resolve(ZalgoPromise.resolve(0));
// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve(ZalgoPromise.resolve(''));
// $ExpectType ZalgoPromise<void>
ZalgoPromise.resolve(ZalgoPromise.flush());

// $ExpectType ZalgoPromise<boolean>
ZalgoPromise.resolve(false);
// $ExpectType ZalgoPromise<number>
ZalgoPromise.resolve(0);
// $ExpectType ZalgoPromise<string>
ZalgoPromise.resolve('');
// $ExpectType ZalgoPromise<void>
ZalgoPromise.resolve<void>(undefined);

const promisesTuple: [
    ZalgoPromise<boolean>, boolean,
    ZalgoPromise<number>, number,
    ZalgoPromise<string>, string,
] = [
    ZalgoPromise.resolve(false), false,
    ZalgoPromise.resolve(0), 0,
    ZalgoPromise.resolve(''), '',
];
// $ExpectType ZalgoPromise<[boolean, boolean, number, number, string, string]>
ZalgoPromise.all(promisesTuple);

const promisesObject = {
    booleanPromise: ZalgoPromise.resolve(false),
    boolean: false,
    numberPromise: ZalgoPromise.resolve(0),
    number: 0,
    stringPromise: ZalgoPromise.resolve(''),
    string: '',
};
// $ExpectType ZalgoPromise<{ booleanPromise: boolean, boolean: boolean, numberPromise: number, number: number, stringPromise: string, string: string }>
ZalgoPromise.hash(promisesObject);

// $ExpectType ZalgoPromise<readonly string[]>
ZalgoPromise.map([0, 1], item => ZalgoPromise.resolve(item.toString()));
// $ExpectType ZalgoPromise<readonly string[]>
ZalgoPromise.map([0, 1], item => item.toString());
// $ExpectType ZalgoPromise<readonly boolean[]>
ZalgoPromise.map([0, 1], item => ZalgoPromise.resolve(item > 0));
// $ExpectType ZalgoPromise<readonly boolean[]>
ZalgoPromise.map([0, 1], item => item > 0);

ZalgoPromise.onPossiblyUnhandledException(err => console.log(err))
    .cancel();

// $ExpectType ZalgoPromise<number>
ZalgoPromise.try((...args: [boolean, number, string]) => {
    return args[1];
}, this, [false, 0]);
// $ExpectType ZalgoPromise<string>
ZalgoPromise.try((...args: [boolean, number, string]) => {
    return args[2];
}, this, [false, 0, '']);
