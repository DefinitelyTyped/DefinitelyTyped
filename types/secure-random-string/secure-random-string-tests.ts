import srs from 'secure-random-string';

function testReturn() {
    // $ExpectType string
    const result1 = srs();

    // $ExpectType string
    const result2 = srs({
        alphanumeric: false,
        length: 64,
    });
}

function testCallback() {
    // $ExpectType void
    srs((error, result) => {
        // $ExpectType string | undefined
        const _result = result;
    });

    // $ExpectType void
    srs({
        length: 32,
        alphanumeric: true,
    }, (error, result) => {
        // $ExpectType string | undefined
        const _result = result;
    });

    // $ExpectError
    srs((error, result) => {
        const _result = result;
    }, {
        length: 32,
        alphanumeric: true,
    });
}
