import wNumb from 'wnumb';

const options: wNumb.Options = {
    mark: '.',
    thousand: ',',
    prefix: '$ ',
    suffix: ' p.p.'
};

const moneyFormat: wNumb.Instance = wNumb(options);

moneyFormat.to(301980.62);

moneyFormat.from('$ 301,980.62 p.p.');

let Format = wNumb({
    prefix: '$ ',
    decimals: 3,
    thousand: ','
});

Format = wNumb({
    thousand: '.',
    encoder: a => a * 1E7,
    decoder: a => a / 1E7,
});

Format = wNumb({
    prefix: '$',
    suffix: ',-',
    thousand: ','
});

Format = wNumb({
    prefix: '$',
    negativeBefore: '[NEGATIVE] '
});
