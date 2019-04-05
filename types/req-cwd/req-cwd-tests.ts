import * as reqCwd from 'req-cwd';

const r1: string = reqCwd('./foo');
const r2: number = reqCwd('./foo');
const r3: {foo: string} = reqCwd('./foo');

const s1: string | null = reqCwd.silent('./foo');
const s2: number | null = reqCwd.silent('./foo');
const s3: {foo: string} | null = reqCwd.silent('./foo');
