import safeFlat = require('safe-flat');

const testObject = {
    0: true,
    lol: null,
    phew: 0,
    yeah: ['ok', undefined, 'yep', {
        something: 'something',
    }],
    zzz: {
        ok: {
            watch: 'nay-nay',
        },
    },
};

const testFlattenedObject = {
    0: true,
    lol: null,
    phew: 0,
    'yeah.0': 'ok',
    'yeah.2': 'yep',
    'yeah.3.something': 'something',
    'zzz.ok.watch': 'nay-nay',
};

safeFlat.flatten(testObject); // $ExpectType Record<string, unknown>
safeFlat.unflatten(testFlattenedObject); // $ExpectType Record<string | number, unknown>
