import styleNames from 'stylenames';

styleNames(); // $ExpectError

styleNames({ foo: 'block' }); // $ExpectError

styleNames({ background: 1 }); // $ExpectError

styleNames({ backgroundColor: { blue: 1 } }); // $ExpectError

styleNames({
    height: '120px',
    width: {
        '200px': false,
    },
});

styleNames({
    height: '120px',
    width: {
        '200px': true,
    },
});
