import intersperse = require('intersperse');

const a: Array<string | number> = intersperse(['a', 'b', 'c'], 1);

const b: string[] = intersperse(['a', 'b', 'c'], 'd');
