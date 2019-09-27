import { RE2 } from 're2';

const re = new RE2('\\w+');
re.test('abc');

const Regex = RE2;
const re2 = new Regex('\\s+');
re2.compile();
