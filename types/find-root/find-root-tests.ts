import findRoot = require('find-root');

const a: string = findRoot('');
const b: string = findRoot('', (dir: string): boolean => true);
