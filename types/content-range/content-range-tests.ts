import { format, parse } from 'content-range';

format({
    first: 10,
    last: 100,
    length: 100,
    limit: 20,
    unit: 'items',
});

format({
    length: null,
    unit: 'bytes',
});

const parts = parse('items 10-29/100');

if (parts) {
    parts.first;
    parts.last;
    parts.length;
    parts.unit;
}
