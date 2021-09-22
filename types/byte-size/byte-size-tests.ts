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

byteSize.defaultOptions({
    units: 'simple',
    precision: 2,
    customUnits: {
      simple: [
        { from: 0, to: 1e3, unit: '' },
        { from: 1e3, to: 1e6, unit: 'k' },
        { from: 1e6, to: 1e9, unit: 'm' },
        { from: 1e9, to: 1e12, unit: 'bn' },
      ]
    },
    toStringFn
});
