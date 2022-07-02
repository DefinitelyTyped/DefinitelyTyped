import styleNames from 'stylenames';

// @ts-expect-error
styleNames();

// @ts-expect-error
styleNames({ foo: 'block' });

// @ts-expect-error
styleNames({ background: 1 });

// @ts-expect-error
styleNames({ backgroundColor: { blue: 1 } });

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
