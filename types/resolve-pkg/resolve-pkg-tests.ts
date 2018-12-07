import * as rpkg from 'resolve-pkg';

const test1 = rpkg('hello');
const test2 = rpkg('hello', {});
const test3 = rpkg('hello', { cwd: true });
