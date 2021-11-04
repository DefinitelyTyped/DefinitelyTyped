import writeGood, { Problem } from 'write-good';

const suggestions1 = writeGood('So the cat was stolen.');

suggestions1.forEach(({ index, offset, reason }) => {
    index; // $ExpectType number
    offset; // $ExpectType number
    reason; // $ExpectType string
});

const suggestions2 = writeGood('The fence was jumped over by the dog', {
    passive: false,
    whitelist: ['was jumped'],
});

const customChecks: Problem[] = writeGood('this library is yeet', {
    checks: {
        noSlang: {
            explanation: 'avoid slang or technical jargon',
            fn(text) {
                if (text.includes('yeet')) {
                    return [{ index: 0, offset: 0, reason: "don't use slang" }];
                }
                return [];
            },
        },
    },
});
