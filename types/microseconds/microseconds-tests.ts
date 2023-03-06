import * as μs from 'microseconds';

const now = μs.now();
const parsed = μs.parse(now);

parsed.toString();

μs.parse(now).toString();

const before = μs.now();
const time = μs.since(before);
