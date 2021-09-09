import byteSize from 'byte-size';

const toStringFn = () => {
    return 'test';
};

byteSize(256, {
    locale: 'en-gb',
    precision: 1,
    toStringFn,
    units: 'iec_octet',
});

byteSize(12, {
    locale: 'en-gb',
    precision: 2.5,
    toStringFn,
    units: 'iec',
    customUnits: {
        test: 'sth',
    },
});
